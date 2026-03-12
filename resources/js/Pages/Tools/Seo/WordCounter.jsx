import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function WordCounter() {
    const [text, setText] = useState('');

    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim()).length;
    const readingTime = Math.ceil(words / 200);

    const topWords = text.trim()
        ? Object.entries(
            text.toLowerCase()
                .replace(/[^\w\s]/g, '')
                .split(/\s+/)
                .filter(w => w.length > 3)
                .reduce((acc, w) => { acc[w] = (acc[w] || 0) + 1; return acc; }, {})
        ).sort((a, b) => b[1] - a[1]).slice(0, 5)
        : [];

    return (
        <ToolPageLayout title="Word Counter" description="Count words, characters, sentences, and reading time instantly." category="SEO Tools" categoryHref="/seo-tools" categoryIcon="🔍" icon="📝" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Paste or type your text here to get instant word count, character count, reading time and more..."
                    rows={10}
                    style={{ width: '100%', padding: '16px', borderRadius: 12, border: '1px solid var(--border)', fontSize: '0.95rem', lineHeight: 1.7, resize: 'vertical', fontFamily: 'inherit', outline: 'none', marginBottom: 24 }}
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 28 }}>
                    {[
                        { label: 'Words', value: words.toLocaleString(), color: 'var(--primary)', icon: '📝' },
                        { label: 'Characters', value: chars.toLocaleString(), color: 'var(--secondary)', icon: '🔤' },
                        { label: 'Chars (no spaces)', value: charsNoSpaces.toLocaleString(), color: 'var(--accent)', icon: '🔡' },
                        { label: 'Sentences', value: sentences.toLocaleString(), color: '#10B981', icon: '📖' },
                        { label: 'Paragraphs', value: paragraphs.toLocaleString(), color: '#F59E0B', icon: '¶' },
                        { label: 'Reading Time', value: `~${readingTime} min`, color: '#EF4444', icon: '⏱️' },
                    ].map(stat => (
                        <div key={stat.label} style={{ background: 'var(--bg-light)', borderRadius: 12, padding: '18px', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                            <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{stat.icon}</div>
                            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: stat.color }}>{stat.value}</div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: 4 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
                {topWords.length > 0 && (
                    <div>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 12 }}>Top Words Used</h3>
                        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                            {topWords.map(([word, count]) => (
                                <div key={word} style={{ background: 'rgba(37,99,235,0.08)', borderRadius: 8, padding: '6px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{word}</span>
                                    <span style={{ fontSize: '0.75rem', background: 'var(--primary)', color: '#fff', borderRadius: '99px', padding: '1px 7px', fontWeight: 700 }}>{count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {text && (
                    <button onClick={() => setText('')} className="btn btn-secondary btn-sm" style={{ marginTop: 20 }}>
                        Clear Text
                    </button>
                )}
            </div>
        </ToolPageLayout>
    );
}

