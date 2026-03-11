import { Link, usePage } from '@inertiajs/react';
import Logo from '../Common/Logo';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'All Tools', href: '/tools' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
    const { url } = usePage();

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                {/* Logo */}
                <Link href="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                    <div className="sidebar-logo-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Logo size={22} />
                    </div>
                    <span className="sidebar-logo-text" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        TOOL<span style={{ color: 'var(--primary)' }}>VIA</span>.io
                    </span>
                </Link>

                {/* Nav Links */}
                <ul className="navbar-nav">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={url === item.href ? 'active' : ''}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="navbar-actions">
                    <Link href="/dashboard" className="btn btn-secondary btn-sm">
                        Dashboard
                    </Link>
                    <Link href="/pricing" className="btn btn-primary btn-sm">
                        ✨ Upgrade Pro
                    </Link>
                </div>
            </div>
        </nav>
    );
}
