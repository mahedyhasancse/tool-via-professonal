import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';
import { useAiGenerate, AiResultCard } from '../../../Components/Ai/AiToolBase';

export default function ResumeBuilder() {
    const { generate, loading, result, error } = useAiGenerate();
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [skills, setSkills] = useState('');

    const handleGenerate = () => {
        if (!name || !role) return;
        const prompt = `Create a professional resume for ${name} applying for ${role}. Work experience: ${experience || 'not provided'}. Education: ${education || 'not provided'}. Skills: ${skills || 'not provided'}. Format with clear sections: Summary, Experience, Education, Skills. Use action verbs and quantify achievements.`;
        generate('resume', prompt);
    };

    const label = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
    const input = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 16 };

    return (
        <ToolPageLayout title="AI Resume Builder" description="Build a professional, ATS-friendly resume with AI in seconds." category="AI Tools" categoryHref="/dashboard/ai-tools" categoryIcon="🤖" icon="📋" badge="pro">
            <div style={{ padding: '36px 40px' }}>
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
                    <AiResultCard result={result} loading={loading} error={error} placeholder="Your professional resume will appear here with sections for Summary, Experience, Education, and Skills." />
                </div>
            </div>
        </ToolPageLayout>
    );
}

