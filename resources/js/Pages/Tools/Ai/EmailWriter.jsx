import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';
import { useAiGenerate, AiResultCard } from '../../../Components/Ai/AiToolBase';

export default function EmailWriter() {
    const { generate, loading, result, error } = useAiGenerate();
    const [tone, setTone] = useState('professional');
    const [recipient, setRecipient] = useState('');
    const [purpose, setPurpose] = useState('');
    const [keyPoints, setKeyPoints] = useState('');

    const handleGenerate = () => {
        if (!purpose) return;
        const prompt = `Write an email to "${recipient || 'the recipient'}" with the following purpose: ${purpose}. Key points to include: ${keyPoints || 'none specified'}. Tone: ${tone}.`;
        generate('email', prompt);
    };

    const label = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
    const input = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 16 };
    const tones = ['professional', 'friendly', 'formal', 'casual', 'persuasive', 'urgent'];

    return (
        <ToolPageLayout title="AI Email Writer" description="Write professional emails in seconds using Inception AI." category="AI Tools" categoryHref="/dashboard/ai-tools" categoryIcon="🤖" icon="✉️" badge="pro">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Email Details</h2>
                        <label style={label}>Tone</label>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                            {tones.map(t => (
                                <button key={t} onClick={() => setTone(t)} style={{ padding: '7px 14px', borderRadius: 8, background: tone === t ? 'var(--accent)' : 'var(--bg-light)', color: tone === t ? '#fff' : 'var(--text-secondary)', border: `1px solid ${tone === t ? 'var(--accent)' : 'var(--border)'}`, fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.2s', textTransform: 'capitalize' }}>{t}</button>
                            ))}
                        </div>
                        <label style={label}>Recipient (optional)</label>
                        <input type="text" value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="e.g. John, HR Department, Client" style={input} />
                        <label style={label}>Email Purpose *</label>
                        <textarea value={purpose} onChange={e => setPurpose(e.target.value)} placeholder="e.g. Request a meeting to discuss project updates and timeline..." rows={3} style={{ ...input, resize: 'vertical', fontFamily: 'inherit' }} />
                        <label style={label}>Key Points to Include</label>
                        <textarea value={keyPoints} onChange={e => setKeyPoints(e.target.value)} placeholder="e.g. - Project deadline\n- Budget concerns\n- Next steps" rows={3} style={{ ...input, resize: 'vertical', fontFamily: 'inherit' }} />
                        <button className="btn btn-accent" style={{ width: '100%', padding: '13px' }} onClick={handleGenerate} disabled={loading || !purpose}>
                            {loading ? '⏳ Writing…' : '✨ Generate Email'}
                        </button>
                    </div>
                    <AiResultCard result={result} loading={loading} error={error} placeholder="Your professional email will appear here. Fill in the details and click Generate Email." />
                </div>
            </div>
        </ToolPageLayout>
    );
}

