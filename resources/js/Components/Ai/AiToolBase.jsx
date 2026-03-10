import { useState } from 'react';

/**
 * Shared hook for all AI tools — calls Laravel /api/ai/generate
 */
export function useAiGenerate() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const generate = async (tool, prompt, context = {}) => {
        setLoading(true); setError(''); setResult('');
        try {
            const res = await fetch('/api/ai/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '' },
                body: JSON.stringify({ tool, prompt, context }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Generation failed');
            setResult(data.content);
        } catch (e) {
            setError(e.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { generate, loading, result, error, setResult };
}

/**
 * Shared result card for AI output
 */
export function AiResultCard({ result, loading, error, placeholder = 'Your AI-generated content will appear here...' }) {
    const copy = () => { if (result) navigator.clipboard.writeText(result); };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {loading ? '⏳ Generating…' : result ? '✅ Generated Content' : '📝 Output'}
                </h3>
                {result && (
                    <button onClick={copy} className="btn btn-secondary btn-sm">
                        📋 Copy
                    </button>
                )}
            </div>
            {error && (
                <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px', marginBottom: 12, fontSize: '0.85rem', color: '#DC2626' }}>
                    ❌ {error}
                </div>
            )}
            <div style={{
                flex: 1,
                background: loading ? 'var(--bg-light)' : result ? '#fff' : 'var(--bg-light)',
                border: `2px ${result ? 'solid' : 'dashed'} ${result ? 'var(--primary)' : 'var(--border)'}`,
                borderRadius: 14, padding: '20px',
                minHeight: 280,
                fontSize: '0.9rem', lineHeight: 1.75,
                color: result ? 'var(--text-primary)' : 'var(--text-muted)',
                whiteSpace: 'pre-wrap',
                overflowY: 'auto',
                position: 'relative',
            }}>
                {loading ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 16 }}>
                        <div style={{ width: 48, height: 48, borderRadius: '50%', border: '4px solid var(--border)', borderTopColor: 'var(--primary)', animation: 'spin 0.8s linear infinite' }} />
                        <p style={{ color: 'var(--text-muted)' }}>AI is generating your content…</p>
                        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    </div>
                ) : result || placeholder}
            </div>
            {result && (
                <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
                    <button onClick={copy} className="btn btn-primary btn-sm">📋 Copy to Clipboard</button>
                </div>
            )}
        </div>
    );
}
