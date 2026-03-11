import { Link } from '@inertiajs/react';
import { TOOLS, CATEGORIES } from '../../data/tools';

// Show 8 featured tools (2 per category)
const featured = [
    ...TOOLS.filter(t => t.category === 'calculators').slice(0, 2),
    ...TOOLS.filter(t => t.category === 'business').slice(0, 2),
    ...TOOLS.filter(t => t.category === 'ai').slice(0, 2),
    ...TOOLS.filter(t => t.category === 'pdf').slice(0, 1),
    ...TOOLS.filter(t => t.category === 'seo').slice(0, 1),
];

export default function PopularTools() {
    return (
        <div>
            {/* Section header */}
            <div className="dash-section-header">
                <span className="dash-section-title">🔥 Popular Tools</span>
                <Link href="/tools" className="view-all-link">View all →</Link>
            </div>

            {/* Tools grid */}
            <div className="popular-tools-grid-dash" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
                gap: 12 
            }}>
                {featured.map(tool => (
                    <Link key={tool.id} href={tool.href} style={{
                        display: 'flex', alignItems: 'center', gap: 13,
                        background: '#fff', borderRadius: 14,
                        border: '1px solid #F0F2F8',
                        padding: '14px 16px',
                        textDecoration: 'none', color: 'inherit',
                        transition: 'all 0.22s ease',
                        boxShadow: '0 1px 4px rgba(37,99,235,0.05)',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#F0F2F8'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(37,99,235,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <tool.Icon size={44} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {tool.name}
                            </div>
                            <div style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: 2 }}>{tool.subLabel}</div>
                        </div>
                        <span style={{
                            flexShrink: 0, fontSize: '0.62rem', fontWeight: 700, padding: '2px 8px', borderRadius: 99,
                            background: tool.badge === 'pro' ? 'linear-gradient(135deg,#7C3AED,#2563EB)' : 'linear-gradient(135deg,#10B981,#059669)',
                            color: '#fff',
                        }}>
                            {tool.badge === 'pro' ? '⭐ Pro' : '✓ Free'}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Category quick-links */}
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
                {CATEGORIES.map(cat => (
                    <Link key={cat.key} href={cat.dashHref} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '8px 16px', borderRadius: 10,
                        background: 'var(--bg-light)', border: '1px solid var(--border-light)',
                        fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)',
                        textDecoration: 'none', transition: 'all 0.2s',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.08)'; e.currentTarget.style.color = '#2563EB'; e.currentTarget.style.borderColor = '#2563EB'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                    >
                        {cat.icon} {cat.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
