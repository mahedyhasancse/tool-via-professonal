import { Link } from '@inertiajs/react';
import DashboardLayout from '../../Layouts/DashboardLayout';
import { TOOLS, CATEGORIES, toolsByCategory } from '../../data/tools';

/**
 * Shared tool card used everywhere icons are shown
 */
export function ToolCard({ tool, size = 'md' }) {
    const pad = size === 'sm' ? '14px 16px' : '18px 20px';
    const iSize = size === 'sm' ? 44 : 52;

    return (
        <Link href={tool.href} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            background: '#fff', borderRadius: 14,
            border: '1px solid #F0F2F8',
            padding: pad,
            textDecoration: 'none', color: 'inherit',
            transition: 'all 0.22s ease',
            boxShadow: '0 1px 4px rgba(37,99,235,0.06)',
        }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.13)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#F0F2F8'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(37,99,235,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
            <div style={{ flexShrink: 0 }}>
                <tool.Icon size={iSize} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: size === 'sm' ? '0.82rem' : '0.88rem', color: '#111827', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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

/**
 * Full dashboard category page — wraps DashboardLayout, renders all tools
 * for a given category key with a hero strip and tool grid.
 */
export default function DashboardCategoryPage({ categoryKey }) {
    const cat = CATEGORIES.find(c => c.key === categoryKey);
    const tools = toolsByCategory(categoryKey);

    return (
        <DashboardLayout>
            {/* Category Hero */}
            <div style={{
                background: 'linear-gradient(135deg, #0a1628 0%, #0d2060 55%, #1a0845 100%)',
                borderRadius: 20, padding: '32px 40px', marginBottom: 28,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 15% 50%, rgba(37,99,235,0.3) 0%, transparent 55%), radial-gradient(circle at 85% 30%, rgba(124,58,237,0.2) 0%, transparent 50%)', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>{cat?.icon}</div>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: 8 }}>{cat?.label}</h1>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}>
                        {tools.length} tools available — click any to open
                    </p>
                </div>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 8 }}>
                    {CATEGORIES.filter(c => c.key !== categoryKey).slice(0, 4).map(c => (
                        <Link key={c.key} href={c.dashHref} style={{
                            display: 'flex', alignItems: 'center', gap: 6,
                            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: 10, padding: '7px 14px',
                            color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', fontWeight: 600,
                            textDecoration: 'none', transition: 'all 0.2s',
                        }}>
                            {c.icon} {c.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tools Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
                {tools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
        </DashboardLayout>
    );
}
