import { Link, usePage } from '@inertiajs/react';
import Logo from '../Common/Logo';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'All Tools', href: '/tools' },
    { label: 'AI Tools', href: '/ai-tools' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
    const { url } = usePage();

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                {/* Logo */}
                <Link href="/" className="navbar-logo">
                    <Logo size={30} />
                    TOOL<span>VIA</span>.io
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
