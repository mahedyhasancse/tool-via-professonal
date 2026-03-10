import { Link } from '@inertiajs/react';
import Logo from '../Common/Logo';

const footerLinks = {
    Tools: [
        { label: 'All Tools', href: '/tools' },
        { label: 'AI Tools', href: '/ai-tools' },
        { label: 'Calculators', href: '/calculators' },
        { label: 'PDF Tools', href: '/tools' },
        { label: 'SEO Tools', href: '/tools' },
    ],
    Company: [
        { label: 'About Us', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Careers', href: '/' },
        { label: 'Contact', href: '/' },
    ],
    Legal: [
        { label: 'Privacy Policy', href: '/' },
        { label: 'Terms of Service', href: '/' },
        { label: 'Cookie Policy', href: '/' },
        { label: 'GDPR', href: '/' },
    ],
};

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <Logo size={30} />
                            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
                                TOOL<span style={{ color: '#06B6D4' }}>VIA</span>.io
                            </span>
                        </Link>
                        <p className="footer-brand-desc">
                            Your all-in-one platform for AI-powered tools, business calculators,
                            invoice generators, and productivity boosters. Free forever.
                        </p>
                        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                            {['🐦', '💼', '📘', '📸'].map((icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    style={{
                                        width: 36, height: 36, borderRadius: 8,
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1rem', transition: 'all 0.2s',
                                    }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="footer-heading">{title}</h4>
                            <ul className="footer-links">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer-bottom">
                    <span>© 2025 Toolvia.io — All rights reserved.</span>
                    <div style={{ display: 'flex', gap: 20 }}>
                        <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>Privacy</Link>
                        <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>Terms</Link>
                        <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
