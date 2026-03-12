import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function MetaTagGenerator() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState('');
    const [author, setAuthor] = useState('');
    const [ogImage, setOgImage] = useState('');
    const [generated, setGenerated] = useState('');

    const generate = () => {
        const tags = [
            `<meta charset="UTF-8">`,
            `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
            title && `<title>${title}</title>`,
            description && `<meta name="description" content="${description}">`,
            keywords && `<meta name="keywords" content="${keywords}">`,
            author && `<meta name="author" content="${author}">`,
            `<meta name="robots" content="index, follow">`,
            ``,
            `<!-- Open Graph -->`,
            title && `<meta property="og:title" content="${title}">`,
            description && `<meta property="og:description" content="${description}">`,
            ogImage && `<meta property="og:image" content="${ogImage}">`,
            `<meta property="og:type" content="website">`,
            ``,
            `<!-- Twitter Card -->`,
            `<meta name="twitter:card" content="summary_large_image">`,
            title && `<meta name="twitter:title" content="${title}">`,
            description && `<meta name="twitter:description" content="${description}">`,
            ogImage && `<meta name="twitter:image" content="${ogImage}">`,
        ].filter(Boolean).join('\n');
        setGenerated(tags);
    };

    const copy = () => generated && navigator.clipboard.writeText(generated);

    const field = (label, value, setter, placeholder, type = 'text') => (
        <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>{label}</label>
            {type === 'textarea'
                ? <textarea value={value} onChange={e => setter(e.target.value)} placeholder={placeholder} rows={3} style={{ width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
                : <input type="text" value={value} onChange={e => setter(e.target.value)} placeholder={placeholder} style={{ width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-primary)', background: '#fff', outline: 'none' }} />
            }
            {label.includes('Title') && value && (
                <div style={{ fontSize: '0.75rem', marginTop: 4, color: value.length > 60 ? '#EF4444' : '#10B981' }}>
                    {value.length}/60 characters {value.length > 60 ? '— too long' : '— good'}
                </div>
            )}
            {label.includes('Description') && value && (
                <div style={{ fontSize: '0.75rem', marginTop: 4, color: value.length > 160 ? '#EF4444' : '#10B981' }}>
                    {value.length}/160 characters {value.length > 160 ? '— too long' : '— good'}
                </div>
            )}
        </div>
    );

    return (
        <ToolPageLayout title="Meta Tag Generator" description="Generate SEO-optimized meta tags and Open Graph tags instantly." category="SEO Tools" categoryHref="/seo-tools" categoryIcon="🔍" icon="🏷️" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>Page Details</h2>
                        {field('Page Title', title, setTitle, 'e.g. Best AI Tools for Business | Toolvia.io')}
                        {field('Meta Description', description, setDescription, 'Describe your page in 150-160 characters...', 'textarea')}
                        {field('Keywords', keywords, setKeywords, 'e.g. AI tools, business calculator, invoice generator')}
                        {field('Author', author, setAuthor, 'e.g. Toolvia Team')}
                        {field('OG Image URL', ogImage, setOgImage, 'https://example.com/og-image.jpg')}
                        <button className="btn btn-primary w-full" onClick={generate} style={{ marginTop: 8 }}>Generate Meta Tags</button>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                            <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Generated Tags</h2>
                            {generated && <button onClick={copy} className="btn btn-secondary btn-sm">📋 Copy</button>}
                        </div>
                        {generated ? (
                            <pre style={{ background: '#0F172A', color: '#E2E8F0', padding: '20px', borderRadius: 12, fontSize: '0.78rem', lineHeight: 1.7, overflowX: 'auto', overflowY: 'auto', maxHeight: 420, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                                <code>{generated}</code>
                            </pre>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)', borderRadius: 16, border: '2px dashed var(--border)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🏷️</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Fill in the details and generate</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

