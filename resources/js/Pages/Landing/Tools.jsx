import GuestLayout from '../../Layouts/GuestLayout';
import { Link } from '@inertiajs/react';
import { TOOLS, CATEGORIES, toolsByCategory } from '../../data/tools';

function ToolCard({ tool }) {
    return (
        <Link href={tool.href} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            background: '#fff', borderRadius: 14,
            border: '1px solid #F0F2F8',
            padding: '16px 18px',
            textDecoration: 'none', color: 'inherit',
            transition: 'all 0.22s ease',
            boxShadow: '0 1px 4px rgba(37,99,235,0.05)',
        }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#F0F2F8'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(37,99,235,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
            <div style={{ flexShrink: 0 }}>
                <tool.Icon size={48} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#111827', lineHeight: 1.3 }}>
                    {tool.name}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: 2 }}>{tool.subLabel}</div>
            </div>
            <span style={{
                flexShrink: 0,
                fontSize: '0.65rem', fontWeight: 700, padding: '3px 10px',
                borderRadius: 99,
                background: tool.badge === 'pro'
                    ? 'linear-gradient(135deg, #7C3AED, #2563EB)'
                    : 'linear-gradient(135deg, #10B981, #059669)',
                color: '#fff',
            }}>
                {tool.badge === 'pro' ? '⭐ Pro' : '✓ Free'}
            </span>
        </Link>
    );
}

export default function Tools() {
    return (
        <GuestLayout title="All Tools - Toolvia.io" description="Browse all 25+ free and pro tools for business, calculators, AI, SEO, and PDF.">
            <div style={{ paddingTop: 68 }}>
                {/* Hero */}
                <div style={{ background: 'linear-gradient(135deg, #0a1628, #0d2060, #1a0845)', padding: '64px 0' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <div className="hero-badge" style={{ display: 'inline-flex', marginBottom: 16 }}>🔧 All Tools</div>
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: 12 }}>
                            Every Tool You Need
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem' }}>
                            25+ free and pro tools — no signup required for most.
                        </p>
                    </div>
                </div>

                {/* Category Filter Tabs */}
                <div style={{ background: '#fff', borderBottom: '1px solid #F0F2F8', position: 'sticky', top: 68, zIndex: 10 }}>
                    <div className="container" style={{ display: 'flex', gap: 4, padding: '12px 24px', overflowX: 'auto' }}>
                        {CATEGORIES.map(cat => (
                            <a key={cat.key} href={`#${cat.key}`} style={{
                                display: 'flex', alignItems: 'center', gap: 6,
                                padding: '8px 16px', borderRadius: 8,
                                background: 'var(--bg-light)', border: '1px solid var(--border-light)',
                                fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)',
                                textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.2s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.08)'; e.currentTarget.style.color = '#2563EB'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                            >
                                {cat.icon} {cat.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Tool Categories */}
                <div className="container" style={{ padding: '48px 24px' }}>
                    {CATEGORIES.map(cat => (
                        <div key={cat.key} id={cat.key} style={{ marginBottom: 56 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--border-light)' }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <span style={{ fontSize: '1.5rem' }}>{cat.icon}</span> {cat.label}
                                </h2>
                                <Link href={cat.dashHref} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>
                                    Open in Dashboard →
                                </Link>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
                                {toolsByCategory(cat.key).map(tool => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
}
