import { Link, usePage } from '@inertiajs/react';
import Logo from '../Common/Logo';

export default function Sidebar({ onClose }) {
    const { url, auth } = usePage().props;
    
    const navSections = [
        {
            label: 'Dashboard',
            items: [
                { icon: '⊟', label: 'Overview', href: '/dashboard' },
            ],
        },
        {
            label: 'Tool Categories',
            items: [
                { icon: '🧮', label: 'Calculators', href: '/calculators' },
                { icon: '💼', label: 'Business Tools', href: '/business-tools' },
                { icon: '🤖', label: 'AI Tools', href: '/ai-tools' },
                { icon: '📄', label: 'PDF Tools', href: '/pdf-tools' },
                { icon: '🔍', label: 'SEO Tools', href: '/seo-tools' },
            ],
        },
        {
            label: 'Account',
            items: [
                { icon: '💎', label: 'Pricing', href: '/pricing' },
                { icon: '⚙️', label: 'Settings', href: '/dashboard' },
                ...(auth?.user?.is_super_admin ? [{ icon: '👥', label: 'User Management', href: '/admin/users' }] : []),
            ],
        },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <div className="sidebar-overlay" onClick={onClose}></div>
            <aside className="sidebar">
                {/* Logo */}
                <div className="sidebar-logo">
                    <div className="sidebar-logo-icon">
                        <Logo size={22} />
                    </div>
                    <span className="sidebar-logo-text">
                        TOOL<span>VIA</span>.io
                    </span>
                    {/* Mobile Close Button */}
                    <button className="sidebar-close-btn" onClick={onClose} aria-label="Close sidebar">
                        ✕
                    </button>
                </div>

            {/* Navigation */}
            <nav className="sidebar-nav">
                {navSections.map((section) => (
                    <div key={section.label}>
                        <div className="sidebar-section-label">{section.label}</div>
                        {section.items.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`sidebar-link${url === item.href ? ' active' : ''}`}
                            >
                                <span style={{ fontSize: '1rem', lineHeight: 1 }}>{item.icon}</span>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>

            {/* Upgrade Box */}
            <div className="sidebar-upgrade">
                <div className="sidebar-upgrade-title">⭐ Upgrade to Pro</div>
                <ul className="sidebar-upgrade-list">
                    <li><span className="dot dot-gold" />Unlimited Tools</li>
                    <li><span className="dot dot-blue" />No Ads</li>
                    <li><span className="dot dot-green" />Priority Support</li>
                </ul>
                <button className="btn-upgrade">Upgrade Now</button>
            </div>
        </aside>
        </>
    );
}
