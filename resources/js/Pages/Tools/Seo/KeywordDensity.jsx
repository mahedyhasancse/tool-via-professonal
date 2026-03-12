import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function KeywordDensity() {
    const [text, setText] = useState('');
    const [minLength, setMinLength] = useState(3);
    const [results, setResults] = useState([]);

    const analyze = () => {
        if (!text.trim()) return;
        const cleaned = text.toLowerCase().replace(/[^\w\s]/g, '');
        const words = cleaned.split(/\s+/).filter(w => w.length >= minLength);
        const total = words.length;
        const freq = words.reduce((acc, w) => { acc[w] = (acc[w] || 0) + 1; return acc; }, {});
        const sorted = Object.entries(freq)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 30)
            .map(([word, count]) => ({ word, count, density: ((count / total) * 100).toFixed(2) }));
        setResults(sorted);
    };

    const getDensityColor = (density) => {
        const d = parseFloat(density);
        if (d > 5) return '#EF4444';
        if (d > 2) return '#F59E0B';
        if (d >= 0.5) return '#10B981';
        return '#94A3B8';
    };

    return (
        <ToolPageLayout title="Keyword Density Checker" description="Analyze keyword frequency and density in any text or page content." category="SEO Tools" categoryHref="/seo-tools" categoryIcon="🔍" icon="🔑" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>Enter Text</h2>
                        <textarea
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder="Paste your article, webpage content, or any text here..."
                            rows={12}
                            style={{ width: '100%', padding: '14px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.88rem', lineHeight: 1.7, resize: 'vertical', fontFamily: 'inherit', outline: 'none', marginBottom: 16 }}
                        />
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>Min word length:</label>
                            <input type="number" value={minLength} onChange={e => setMinLength(parseInt(e.target.value) || 3)} min={1} max={10} style={{ width: 80, padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border)', fontSize: '0.88rem', outline: 'none' }} />
                        </div>
                        <button className="btn btn-primary w-full" onClick={analyze}>Analyze Keyword Density</button>
                        <div style={{ marginTop: 16, padding: '14px 16px', background: 'var(--bg-light)', borderRadius: 10, border: '1px solid var(--border-light)' }}>
                            <div style={{ display: 'flex', gap: 16, fontSize: '0.82rem' }}>
                                {[{ color: '#10B981', label: '0.5-2%: Good' }, { color: '#F59E0B', label: '2-5%: High' }, { color: '#EF4444', label: '>5%: Overused' }].map(s => (
                                    <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: s.color }} />
                                        <span style={{ color: 'var(--text-secondary)' }}>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>Results</h2>
                        {results.length > 0 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 480, overflowY: 'auto', paddingRight: 4 }}>
                                {results.map(({ word, count, density }, i) => (
                                    <div key={word} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: 'var(--bg-light)', borderRadius: 10, border: '1px solid var(--border-light)' }}>
                                        <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                                        <span style={{ flex: 1, fontWeight: 600, fontSize: '0.9rem' }}>{word}</span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{count}×</span>
                                        <div style={{ minWidth: 80 }}>
                                            <div style={{ background: '#E5E7EB', borderRadius: 4, height: 6, overflow: 'hidden' }}>
                                                <div style={{ width: `${Math.min(100, parseFloat(density) * 10)}%`, height: '100%', background: getDensityColor(density), transition: 'width 0.5s' }} />
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: getDensityColor(density), minWidth: 45, textAlign: 'right' }}>{density}%</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)', borderRadius: 16, border: '2px dashed var(--border)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔑</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Paste text and click Analyze</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

