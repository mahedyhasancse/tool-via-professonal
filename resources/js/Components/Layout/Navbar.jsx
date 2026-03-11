import { useState, useEffect } from 'react';
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [url]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <>
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

                    {/* Desktop Nav Links */}
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

                    {/* Desktop Actions */}
                    <div className="navbar-actions">
                        <Link href="/dashboard" className="btn btn-secondary btn-sm">
                            Dashboard
                        </Link>
                        <Link href="/pricing" className="btn btn-primary btn-sm">
                            ✨ Upgrade Pro
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={mobileMenuOpen ? 'open' : ''}></span>
                        <span className={mobileMenuOpen ? 'open' : ''}></span>
                        <span className={mobileMenuOpen ? 'open' : ''}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                    <div className="mobile-menu-header">
                        <Link href="/" className="mobile-menu-logo" onClick={() => setMobileMenuOpen(false)}>
                            <div className="sidebar-logo-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Logo size={22} />
                            </div>
                            <span className="sidebar-logo-text" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                TOOL<span style={{ color: 'var(--primary)' }}>VIA</span>.io
                            </span>
                        </Link>
                        <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>✕</button>
                    </div>
                    <ul className="mobile-menu-nav">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={url === item.href ? 'active' : ''}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-menu-actions">
                        <Link href="/dashboard" className="btn btn-secondary" onClick={() => setMobileMenuOpen(false)}>
                            Dashboard
                        </Link>
                        <Link href="/pricing" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                            ✨ Upgrade Pro
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
