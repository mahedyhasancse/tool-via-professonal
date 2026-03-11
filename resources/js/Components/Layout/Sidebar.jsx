import { Link, usePage } from '@inertiajs/react';
import Logo from '../Common/Logo';

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
            { icon: '🧮', label: 'Calculators', href: '/dashboard/calculators' },
            { icon: '💼', label: 'Business Tools', href: '/dashboard/business-tools' },
            { icon: '🤖', label: 'AI Tools', href: '/dashboard/ai-tools' },
            { icon: '📄', label: 'PDF Tools', href: '/dashboard/pdf-tools' },
            { icon: '🔍', label: 'SEO Tools', href: '/dashboard/seo-tools' },
        ],
    },
    {
        label: 'Account',
        items: [
            { icon: '💎', label: 'Pricing', href: '/pricing' },
            { icon: '⚙️', label: 'Settings', href: '/dashboard' },
        ],
    },
];


export default function Sidebar({ onClose }) {
    const { url } = usePage();

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
