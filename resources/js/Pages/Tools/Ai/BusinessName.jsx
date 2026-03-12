import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';
import { useAiGenerate, AiResultCard } from '../../../Components/Ai/AiToolBase';

export default function BusinessName() {
    const { generate, loading, result, error } = useAiGenerate();
    const [industry, setIndustry] = useState('');
    const [keywords, setKeywords] = useState('');
    const [style, setStyle] = useState('modern');

    const handleGenerate = () => {
        if (!industry) return;
        const prompt = `Generate business names for a ${industry} business. Keywords to incorporate: ${keywords || 'none'}. Style preference: ${style}. Include 10 unique options with brief explanations.`;
        generate('business_name', prompt);
    };

    const label = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
    const input = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 16 };
    const styles = ['modern', 'classic', 'playful', 'professional', 'creative', 'minimal'];

    return (
        <ToolPageLayout title="AI Business Name Generator" description="Generate creative, memorable business names with AI." category="AI Tools" categoryHref="/ai-tools" categoryIcon="🤖" icon="🏢" badge="pro">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Business Details</h2>
                        <label style={label}>Industry / Business Type *</label>
                        <input type="text" value={industry} onChange={e => setIndustry(e.target.value)} placeholder="e.g. Tech startup, Bakery, Consulting firm" style={input} />
                        <label style={label}>Keywords (optional)</label>
                        <input type="text" value={keywords} onChange={e => setKeywords(e.target.value)} placeholder="e.g. fast, digital, fresh, innovation" style={input} />
                        <label style={label}>Name Style</label>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                            {styles.map(s => (
                                <button key={s} onClick={() => setStyle(s)} style={{ padding: '7px 14px', borderRadius: 8, background: style === s ? 'var(--accent)' : 'var(--bg-light)', color: style === s ? '#fff' : 'var(--text-secondary)', border: `1px solid ${style === s ? 'var(--accent)' : 'var(--border)'}`, fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.2s', textTransform: 'capitalize' }}>{s}</button>
                            ))}
                        </div>
                        <button className="btn btn-accent" style={{ width: '100%', padding: '13px' }} onClick={handleGenerate} disabled={loading || !industry}>
                            {loading ? '⏳ Generating…' : '✨ Generate Names'}
                        </button>
                    </div>
                    <AiResultCard result={result} loading={loading} error={error} placeholder="10 creative business names will appear here with explanations and domain availability insights." />
                </div>
            </div>
        </ToolPageLayout>
    );
}

