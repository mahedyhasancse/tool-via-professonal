import { useState, useRef, useEffect } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';
import { useAiGenerate } from '../../../Components/Ai/AiToolBase';
import html2pdf from 'html2pdf.js';

export default function ResumeBuilder() {
    const { generate, loading, result, error } = useAiGenerate();
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [skills, setSkills] = useState('');
    const [editedResume, setEditedResume] = useState('');
    const resumeRef = useRef(null);

    const handleGenerate = () => {
        if (!name || !role) return;
        const prompt = `Create a professional resume for ${name} applying for ${role}. Work experience: ${experience || 'not provided'}. Education: ${education || 'not provided'}. Skills: ${skills || 'not provided'}. Format with clear sections: Summary, Experience, Education, Skills. Use action verbs and quantify achievements.`;
        generate('resume', prompt);
    };

    // Update edited resume when result changes
    useEffect(() => {
        if (result) {
            setEditedResume(result);
        }
    }, [result]);

    const downloadPDF = async () => {
        if (!resumeRef.current || !editedResume) return;
        
        const element = resumeRef.current;
        const contentElement = element.querySelector('div'); // Get the inner content div
        
        if (!contentElement) return;
        
        // Temporarily make element visible for rendering (off-screen but visible to html2canvas)
        const originalStyle = element.style.cssText;
        element.style.position = 'fixed';
        element.style.left = '-2000px';
        element.style.top = '0';
        element.style.width = '800px';
        element.style.zIndex = '-1';
        element.style.visibility = 'visible';
        element.style.opacity = '1';
        element.style.background = '#fff';
        
        // Wait a bit for rendering
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const opt = {
            margin: [10, 10, 10, 10],
            filename: `Resume-${name || 'Resume'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true,
                logging: false,
                windowWidth: 800,
                allowTaint: true,
                backgroundColor: '#ffffff'
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        try {
            await html2pdf().set(opt).from(contentElement).save();
        } finally {
            // Restore original style
            element.style.cssText = originalStyle;
        }
    };

    const label = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
    const input = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 16 };

    return (
        <ToolPageLayout title="AI Resume Builder" description="Build a professional, ATS-friendly resume with AI in seconds." category="AI Tools" categoryHref="/ai-tools" categoryIcon="🤖" icon="📋" badge="pro">
            <div style={{ padding: '36px 40px' }}>
                {/* Hidden printable version for PDF */}
                {editedResume && (
                    <div ref={resumeRef} style={{ position: 'absolute', left: '-9999px', top: 0, width: '800px', visibility: 'hidden' }}>
                        <div style={{ 
                            padding: '40px', 
                            background: '#fff', 
                            fontFamily: 'Inter, sans-serif', 
                            maxWidth: '800px', 
                            margin: '0 auto', 
                            lineHeight: 1.8, 
                            color: '#111827',
                            minHeight: '400px'
                        }}>
                            {editedResume.split('\n').map((line, index) => {
                                // Format section headers (all caps, short lines)
                                if (line.trim().toUpperCase() === line.trim() && line.trim().length > 0 && line.trim().length < 50 && !line.includes('•') && !line.includes('-') && !line.match(/^\d+\./)) {
                                    return (
                                        <div key={index} style={{ 
                                            marginTop: index > 0 ? '28px' : '0',
                                            marginBottom: '16px',
                                            fontSize: '1.15rem',
                                            fontWeight: 700,
                                            color: '#111827',
                                            borderBottom: '2px solid #E5E7EB',
                                            paddingBottom: '10px',
                                            letterSpacing: '0.5px'
                                        }}>
                                            {line.trim()}
                                        </div>
                                    );
                                }
                                // Format regular lines
                                if (line.trim() === '') {
                                    return <div key={index} style={{ height: '8px' }} />;
                                }
                                return (
                                    <div key={index} style={{ 
                                        marginBottom: '6px',
                                        fontSize: '0.95rem',
                                        lineHeight: 1.8,
                                        color: '#111827'
                                    }}>
                                        {line}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Your Information</h2>
                        <label style={label}>Full Name *</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. John Smith" style={input} />
                        <label style={label}>Target Job Role *</label>
                        <input type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="e.g. Product Manager, Full Stack Developer" style={input} />
                        <label style={label}>Work Experience</label>
                        <textarea value={experience} onChange={e => setExperience(e.target.value)} placeholder="e.g. Software Engineer at XYZ (2021-2024): Built REST APIs, increased performance by 40%. Previously at ABC (2018-2021)..." rows={4} style={{ ...input, resize: 'vertical', fontFamily: 'inherit' }} />
                        <label style={label}>Education</label>
                        <input type="text" value={education} onChange={e => setEducation(e.target.value)} placeholder="e.g. BSc Computer Science, MIT, 2018" style={input} />
                        <label style={label}>Skills</label>
                        <input type="text" value={skills} onChange={e => setSkills(e.target.value)} placeholder="e.g. Python, React, SQL, Project Management, Agile" style={input} />
                        <button className="btn btn-accent" style={{ width: '100%', padding: '13px' }} onClick={handleGenerate} disabled={loading || !name || !role}>
                            {loading ? '⏳ Building…' : '✨ Generate Resume'}
                        </button>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                {loading ? '⏳ Generating…' : result ? '✅ Generated Resume (Editable)' : '📝 Resume Output'}
                            </h3>
                            {editedResume && (
                                <button onClick={downloadPDF} className="btn btn-primary btn-sm">
                                    📥 Download PDF
                                </button>
                            )}
                        </div>
                        
                        {loading ? (
                            <div style={{
                                background: 'var(--bg-light)',
                                border: '2px dashed var(--border)',
                                borderRadius: 14,
                                padding: '40px',
                                textAlign: 'center',
                                minHeight: 280
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '4px solid var(--border)', borderTopColor: 'var(--primary)', animation: 'spin 0.8s linear infinite' }} />
                                    <p style={{ color: 'var(--text-muted)' }}>AI is generating your resume…</p>
                                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                                </div>
                            </div>
                        ) : error ? (
                            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px', fontSize: '0.85rem', color: '#DC2626' }}>
                                ❌ {error}
                            </div>
                        ) : editedResume ? (
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: 8, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                    💡 You can edit the resume below before downloading
                                </div>
                                <textarea
                                    value={editedResume}
                                    onChange={(e) => setEditedResume(e.target.value)}
                                    style={{
                                        flex: 1,
                                        background: '#fff',
                                        border: '2px solid var(--primary)',
                                        borderRadius: 14,
                                        padding: '20px',
                                        minHeight: 500,
                                        fontSize: '0.9rem',
                                        lineHeight: 1.75,
                                        color: 'var(--text-primary)',
                                        fontFamily: 'Inter, sans-serif',
                                        resize: 'vertical',
                                        outline: 'none',
                                        whiteSpace: 'pre-wrap'
                                    }}
                                    placeholder="Your professional resume will appear here. You can edit it before downloading as PDF."
                                />
                                <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
                                    <button onClick={() => navigator.clipboard.writeText(editedResume)} className="btn btn-secondary btn-sm">
                                        📋 Copy Text
                                    </button>
                                    <button onClick={downloadPDF} className="btn btn-primary btn-sm">
                                        📥 Download PDF
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div style={{
                                background: 'var(--bg-light)',
                                border: '2px dashed var(--border)',
                                borderRadius: 14,
                                padding: '40px',
                                textAlign: 'center',
                                minHeight: 280,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-muted)'
                            }}>
                                Your professional resume will appear here with sections for Summary, Experience, Education, and Skills.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

