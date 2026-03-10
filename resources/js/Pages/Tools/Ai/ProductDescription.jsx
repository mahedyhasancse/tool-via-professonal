import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';
import { useAiGenerate, AiResultCard } from '../../../Components/Ai/AiToolBase';

export default function ProductDescription() {
    const { generate, loading, result, error } = useAiGenerate();
    const [productName, setProductName] = useState('');
    const [features, setFeatures] = useState('');
    const [audience, setAudience] = useState('');
    const [tone, setTone] = useState('persuasive');

    const handleGenerate = () => {
        if (!productName) return;
        const prompt = `Write a compelling product description for: "${productName}". Key features: ${features || 'not specified'}. Target audience: ${audience || 'general'}. Tone: ${tone}. Include SEO-friendly language, benefits-focused copy, and a call-to-action.`;
        generate('product_description', prompt);
    };

    const label = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
    const input = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 16 };

    return (
        <ToolPageLayout title="AI Product Description Generator" description="Create compelling, SEO-optimized product descriptions with AI." category="AI Tools" categoryHref="/dashboard/ai-tools" categoryIcon="🤖" icon="🛍️" badge="pro">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Product Details</h2>
                        <label style={label}>Product Name *</label>
                        <input type="text" value={productName} onChange={e => setProductName(e.target.value)} placeholder="e.g. Wireless Noise-Cancelling Headphones" style={input} />
                        <label style={label}>Key Features</label>
                        <textarea value={features} onChange={e => setFeatures(e.target.value)} placeholder="e.g. 30-hour battery, Bluetooth 5.0, foldable design, premium sound" rows={3} style={{ ...input, resize: 'vertical', fontFamily: 'inherit' }} />
                        <label style={label}>Target Audience</label>
                        <input type="text" value={audience} onChange={e => setAudience(e.target.value)} placeholder="e.g. Remote workers, Music enthusiasts, Gamers" style={input} />
                        <label style={label}>Writing Tone</label>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                            {['persuasive', 'informative', 'luxury', 'casual', 'technical'].map(t => (
                                <button key={t} onClick={() => setTone(t)} style={{ padding: '7px 14px', borderRadius: 8, background: tone === t ? 'var(--accent)' : 'var(--bg-light)', color: tone === t ? '#fff' : 'var(--text-secondary)', border: `1px solid ${tone === t ? 'var(--accent)' : 'var(--border)'}`, fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.2s', textTransform: 'capitalize' }}>{t}</button>
                            ))}
                        </div>
                        <button className="btn btn-accent" style={{ width: '100%', padding: '13px' }} onClick={handleGenerate} disabled={loading || !productName}>
                            {loading ? '⏳ Writing…' : '✨ Generate Description'}
                        </button>
                    </div>
                    <AiResultCard result={result} loading={loading} error={error} placeholder="Your SEO-optimized product description will appear here." />
                </div>
            </div>
        </ToolPageLayout>
    );
}

