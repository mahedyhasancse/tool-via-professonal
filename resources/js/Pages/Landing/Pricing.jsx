import GuestLayout from '../../Layouts/GuestLayout';
import { Link } from '@inertiajs/react';

const plans = [
    {
        name: 'Free',
        price: '0',
        period: 'forever',
        description: 'Perfect for individuals and small tasks.',
        features: [
            { text: 'Access to 15+ basic tools', yes: true },
            { text: 'VAT, Percentage, Loan Calculators', yes: true },
            { text: 'Word Counter & Meta Tag Generator', yes: true },
            { text: 'PDF Merge & Split', yes: true },
            { text: 'Currency Converter (live rates)', yes: true },
            { text: 'AI Tools', yes: false },
            { text: 'Invoice & Quotation Generator', yes: false },
            { text: 'No ads', yes: false },
            { text: 'Priority support', yes: false },
        ],
        cta: 'Start for Free',
        href: '/tools',
        popular: false,
        style: 'secondary',
    },
    {
        name: 'Pro',
        price: '9.99',
        period: 'per month',
        description: 'For professionals who need the full toolkit.',
        features: [
            { text: 'All 25+ tools unlocked', yes: true },
            { text: 'All AI Tools (Email, Resume, etc.)', yes: true },
            { text: 'Invoice & Quotation Generator', yes: true },
            { text: 'PDF Tools suite', yes: true },
            { text: 'Currency Converter (premium)', yes: true },
            { text: 'No ads', yes: true },
            { text: 'Priority support', yes: true },
            { text: 'New tools first', yes: true },
            { text: 'API access', yes: false },
        ],
        cta: 'Start Pro Trial',
        href: '/dashboard',
        popular: true,
        style: 'primary',
    },
    {
        name: 'Business',
        price: '29.99',
        period: 'per month',
        description: 'For teams and growing businesses.',
        features: [
            { text: 'Everything in Pro', yes: true },
            { text: 'Up to 10 team members', yes: true },
            { text: 'API access (1000 req/day)', yes: true },
            { text: 'Custom branding on invoices', yes: true },
            { text: 'Advanced analytics', yes: true },
            { text: 'Dedicated account manager', yes: true },
            { text: 'SLA guarantee', yes: true },
            { text: 'Custom integrations', yes: true },
            { text: 'Unlimited API access', yes: false },
        ],
        cta: 'Contact Sales',
        href: '/',
        popular: false,
        style: 'accent',
    },
];

export default function Pricing() {
    return (
        <GuestLayout title="Pricing - Toolvia.io" description="Simple, transparent pricing. Start free, upgrade when you need more.">
            <div style={{ paddingTop: 68 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', padding: '80px 24px 60px', background: 'linear-gradient(135deg, #F8FAFF, #F5F3FF)' }}>
                    <div className="section-tag" style={{ display: 'inline-flex', marginBottom: 16 }}>💎 Simple Pricing</div>
                    <h1 className="section-title">Start free. <span className="gradient-text">Upgrade</span> when ready.</h1>
                    <p className="section-subtitle" style={{ maxWidth: 520, margin: '12px auto 0' }}>
                        No hidden fees, no commitments. Cancel anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="container" style={{ paddingBottom: 80 }}>
                    <div className="grid-3 grid" style={{ alignItems: 'start', marginTop: -20 }}>
                        {plans.map((plan) => (
                            <div key={plan.name} className={`pricing-card${plan.popular ? ' popular' : ''}`}>
                                {plan.popular && <div className="pricing-popular-badge">⭐ Most Popular</div>}
                                <div className="pricing-name">{plan.name}</div>
                                <div className="pricing-price">
                                    {plan.price === '0' ? (
                                        <span>Free</span>
                                    ) : (
                                        <><sup>$</sup>{plan.price}</>
                                    )}
                                </div>
                                <div className="pricing-period">{plan.period}</div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 12 }}>{plan.description}</p>
                                <hr className="pricing-divider" />
                                <ul className="pricing-features">
                                    {plan.features.map((f) => (
                                        <li key={f.text} className={f.yes ? 'yes' : 'no'}>
                                            <span className={f.yes ? 'check-icon' : 'x-icon'}>{f.yes ? '✓' : '✕'}</span>
                                            {f.text}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={plan.href} className={`btn btn-${plan.style} w-full`} style={{ textAlign: 'center', justifyContent: 'center' }}>
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div style={{ marginTop: 80, maxWidth: 720, margin: '80px auto 0' }}>
                        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 800, marginBottom: 40 }}>Frequently Asked Questions</h2>
                        {[
                            { q: 'Can I use Toolvia for free forever?', a: 'Yes! Our free tier gives you access to 15+ tools with no time limit. No credit card required.' },
                            { q: 'What AI model powers the AI Tools?', a: 'We use Inception Mercury, a fast and accurate AI model optimized for business content generation.' },
                            { q: 'Are exchange rates real-time?', a: 'Yes, currency rates are updated every hour via ExchangeRate-API covering 80+ currencies worldwide.' },
                            { q: 'Can I cancel my subscription?', a: 'Absolutely. Cancel anytime from your account settings. No questions asked.' },
                            { q: 'Is my data safe?', a: 'We never store your tool inputs. All calculations happen in real-time and data is not persisted.' },
                        ].map((faq, i) => (
                            <div key={i} style={{ borderBottom: '1px solid var(--border)', paddingBottom: 20, marginBottom: 20 }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>Q: {faq.q}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
