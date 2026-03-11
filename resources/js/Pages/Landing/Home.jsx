import GuestLayout from '../../Layouts/GuestLayout';
import HeroSection from '../../Components/Landing/HeroSection';
import ToolsGrid from '../../Components/Landing/ToolsGrid';
import { Link } from '@inertiajs/react';
import {
    VatIcon, InvoiceIcon, CurrencyIcon, AiEmailIcon,
    ProfitIcon, PdfIcon, AiToolIcon, SeoIcon
} from '../../Components/Common/ToolIcons';

const features = [
    {
        icon: '⚡',
        iconBg: 'rgba(37,99,235,0.1)',
        title: 'Lightning Fast',
        desc: 'All tools run instantly in your browser — no loading, no waiting. Get results in seconds.',
    },
    {
        icon: '🆓',
        iconBg: 'rgba(16,185,129,0.1)',
        title: '100% Free',
        desc: 'Core tools are completely free forever. No credit card, no hidden fees.',
    },
    {
        icon: '🤖',
        iconBg: 'rgba(124,58,237,0.1)',
        title: 'AI-Powered',
        desc: 'Generate invoices, write emails, and create content using advanced AI technology.',
    },
    {
        icon: '🔒',
        iconBg: 'rgba(6,182,212,0.1)',
        title: 'Secure & Private',
        desc: 'Your data never leaves your browser. We take privacy seriously.',
    },
    {
        icon: '📊',
        iconBg: 'rgba(245,158,11,0.1)',
        title: '120+ Tools',
        desc: 'From calculators to SEO tools, everything a business needs in one place.',
    },
    {
        icon: '🌐',
        iconBg: 'rgba(239,68,68,0.1)',
        title: 'Multi-Language',
        desc: 'Available in 10+ languages to serve your global business needs.',
    },
];

export default function Home() {
    return (
        <GuestLayout
            title="Toolvia.io - Free AI Tools for Business & Productivity"
            description="Free online calculators, AI generators, PDF tools and business tools in one place."
        >
            {/* Hero */}
            <HeroSection />

            {/* Popular Tools */}
            <section className="section-sm" style={{ background: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
                        <div style={{ flex: 1, minWidth: '280px' }}>
                            <div className="section-tag">🔥 Most Used</div>
                            <h2 className="section-title" style={{ marginTop: 8 }}>Popular Tools</h2>
                            <p className="section-subtitle" style={{ marginTop: 8 }}>Start with our most-loved tools — all free, no account needed.</p>
                        </div>
                        <Link href="/tools" className="btn btn-outline" style={{ flexShrink: 0, marginTop: 'auto' }}>View All Tools →</Link>
                    </div>
                    <ToolsGrid limit={8} />
                </div>
            </section>

            {/* Features */}
            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 56 }}>
                        <div className="section-tag" style={{ display: 'inline-flex' }}>💡 Why Choose Us</div>
                        <h2 className="section-title" style={{ marginTop: 12 }}>
                            Everything you need,<br />
                            <span className="gradient-text">nothing you don't</span>
                        </h2>
                        <p className="section-subtitle" style={{ maxWidth: 560, margin: '12px auto 0' }}>
                            Toolvia combines 120+ professional tools into one beautiful, fast platform.
                        </p>
                    </div>
                    <div className="grid grid-3">
                        {features.map((f) => (
                            <div key={f.title} className="feature-card">
                                <div className="feature-icon" style={{ background: f.iconBg }}>
                                    <span>{f.icon}</span>
                                </div>
                                <h3 className="feature-title">{f.title}</h3>
                                <p className="feature-desc">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section style={{
                background: 'linear-gradient(135deg, #0a1628 0%, #0d2060 50%, #1a0845 100%)',
                padding: '80px 0',
                position: 'relative', overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(circle at 30% 50%, rgba(37,99,235,0.2), transparent 60%), radial-gradient(circle at 70% 50%, rgba(124,58,237,0.15), transparent 60%)',
                    pointerEvents: 'none'
                }} />
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
                        Ready to boost your{' '}
                        <span style={{ color: '#06B6D4' }}>productivity?</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
                        Join 12,000+ businesses already using Toolvia to save time and work smarter.
                    </p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/tools" className="btn btn-primary btn-lg">Start for Free →</Link>
                        <Link href="/pricing" className="btn btn-lg" style={{
                            background: 'rgba(255,255,255,0.1)',
                            color: '#fff', border: '1px solid rgba(255,255,255,0.25)'
                        }}>
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
