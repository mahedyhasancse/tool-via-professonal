import GuestLayout from '../../Layouts/GuestLayout';
import { Link } from '@inertiajs/react';

const calcTools = [
    { icon: '🧾', name: 'VAT Calculator', desc: 'Add or remove VAT from any amount', href: '/tools/vat-calculator' },
    { icon: '%', name: 'Percentage Calculator', desc: '5 ways to calculate percentages', href: '/tools/percentage-calculator' },
    { icon: '📈', name: 'Profit Margin Calc', desc: 'Margins, markup and net profit', href: '/tools/profit-margin-calculator' },
    { icon: '🎂', name: 'Age Calculator', desc: 'Exact age with days to next birthday', href: '/tools/age-calculator' },
    { icon: '💹', name: 'ROI Calculator', desc: 'Return on investment analysis', href: '/tools/roi-calculator' },
    { icon: '🏦', name: 'Loan Calculator', desc: 'Monthly payments and total interest', href: '/tools/loan-calculator' },
    { icon: '🏷️', name: 'Discount Calculator', desc: 'Final price after any discount', href: '/tools/discount-calculator' },
    { icon: '💼', name: 'Salary Calculator', desc: 'Convert salary across all periods', href: '/tools/salary-calculator' },
];

export default function Calculators() {
    return (
        <GuestLayout title="Calculators - Toolvia.io" description="Free online business and finance calculators — VAT, profit margin, loan, ROI, and more.">
            <div style={{ paddingTop: 68 }}>
                <div style={{ background: 'linear-gradient(135deg, #0a1628, #1a0845, #0d2060)', padding: '80px 0' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <div className="hero-badge" style={{ display: 'inline-flex', marginBottom: 16 }}>🧮 8 Free Calculators</div>
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: 14 }}>
                            Business <span style={{ color: '#06B6D4' }}>Calculators</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem' }}>
                            Fast, accurate financial calculators — no signup, no ads, 100% free.
                        </p>
                    </div>
                </div>
                <div className="container" style={{ padding: '56px 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                        {calcTools.map(tool => (
                            <Link key={tool.name} href={tool.href} className="feature-card" style={{ display: 'block', textDecoration: 'none' }}>
                                <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>{tool.icon}</div>
                                <h2 className="feature-title">{tool.name}</h2>
                                <p className="feature-desc">{tool.desc}</p>
                                <div style={{ marginTop: 14, color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem' }}>
                                    Open Calculator →
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
