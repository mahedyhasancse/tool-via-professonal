import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';
import { useAiGenerate, AiResultCard } from '../../../Components/Ai/AiToolBase';

export default function CoverLetter() {
    const { generate, loading, result, error } = useAiGenerate();
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');

    const handleGenerate = () => {
        if (!jobTitle) return;
        const prompt = `Write a professional cover letter for the position of "${jobTitle}" at "${company || 'the company'}". Candidate experience: ${experience || 'not specified'}. Key skills: ${skills || 'not specified'}. Make it compelling, personalized, and 3-4 paragraphs.`;
        generate('cover_letter', prompt);
    };

    const label = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
    const input = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 16 };

    return (
        <ToolPageLayout title="AI Cover Letter Generator" description="Create a tailored, professional cover letter in seconds." category="AI Tools" categoryHref="/dashboard/ai-tools" categoryIcon="🤖" icon="📄" badge="pro">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Job Details</h2>
                        <label style={label}>Job Title *</label>
                        <input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} placeholder="e.g. Senior Software Engineer" style={input} />
                        <label style={label}>Company Name</label>
                        <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="e.g. Google, Apple, Startup XYZ" style={input} />
                        <label style={label}>Your Experience</label>
                        <textarea value={experience} onChange={e => setExperience(e.target.value)} placeholder="e.g. 5 years in software development, built 3 SaaS products, led a team of 8 engineers" rows={3} style={{ ...input, resize: 'vertical', fontFamily: 'inherit' }} />
                        <label style={label}>Key Skills</label>
                        <textarea value={skills} onChange={e => setSkills(e.target.value)} placeholder="e.g. React, Node.js, team leadership, problem solving" rows={2} style={{ ...input, resize: 'vertical', fontFamily: 'inherit' }} />
                        <button className="btn btn-accent" style={{ width: '100%', padding: '13px' }} onClick={handleGenerate} disabled={loading || !jobTitle}>
                            {loading ? '⏳ Writing…' : '✨ Generate Cover Letter'}
                        </button>
                    </div>
                    <AiResultCard result={result} loading={loading} error={error} placeholder="Your personalized cover letter will appear here. It will be tailored to the job and company you specify." />
                </div>
            </div>
        </ToolPageLayout>
    );
}

