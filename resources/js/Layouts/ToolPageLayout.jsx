import DashboardLayout from './DashboardLayout';
import { Link } from '@inertiajs/react';

/**
 * Shared wrapper for every individual tool page.
 * Renders INSIDE the dashboard — DashboardLayout provides sidebar + header.
 * URL pattern: /dashboard/{category}/{tool-slug}
 */
export default function ToolPageLayout({
    title,
    description,
    category,
    categoryHref,
    categoryIcon,
    icon,
    children,
}) {
    return (
        <DashboardLayout>
            {/* Tool Hero Banner */}
            <div style={{
                background: 'linear-gradient(135deg, #0a1628 0%, #0d2060 60%, #1a0845 100%)',
                borderRadius: 20,
                padding: '28px 36px',
                marginBottom: 24,
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* glow */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(circle at 15% 50%, rgba(37,99,235,0.3) 0%, transparent 55%), radial-gradient(circle at 85% 30%, rgba(124,58,237,0.2) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }} />

                {/* Breadcrumb */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                    <Link href="/dashboard" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Dashboard</Link>
                    <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
                    <Link href={categoryHref} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                        {categoryIcon} {category}
                    </Link>
                    <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)' }}>{title}</span>
                </div>

                {/* Title Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '2.2rem', flexShrink: 0 }}>{icon}</div>
                    <div>
                        <h1 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 6 }}>
                            {title}
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', maxWidth: 520 }}>
                            {description}
                        </p>
                    </div>
                    <span style={{
                        marginLeft: 'auto', flexShrink: 0,
                        background: 'linear-gradient(135deg,#10B981,#059669)',
                        color: '#fff', fontSize: '0.72rem', fontWeight: 700,
                        padding: '4px 14px', borderRadius: 99,
                    }}>✓ Free</span>
                </div>
            </div>

            {/* Tool Content Card */}
            <div style={{
                background: '#fff',
                borderRadius: 20,
                boxShadow: '0 4px 24px rgba(37,99,235,0.08)',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
            }}>
                {children}
            </div>
        </DashboardLayout>
    );
}
