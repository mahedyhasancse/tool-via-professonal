import { Link } from '@inertiajs/react';

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-inner">
                {/* Left: Copy */}
                <div>
                    <div className="hero-badge animate-fade-up">
                        ✨ <span>120+ Free Tools Available</span>
                    </div>
                    <h1 className="hero-title animate-fade-up-delay-1">
                        AI Tools for{' '}
                        <br />
                        <span className="highlight">Business &</span>
                        <br />
                        Productivity
                    </h1>
                    <p className="hero-desc animate-fade-up-delay-2">
                        Free online calculators, AI generators, and business<br />
                        tools in one place. No signup required.
                    </p>
                    <div className="hero-actions animate-fade-up-delay-2">
                        <Link href="/tools" className="btn btn-primary btn-lg">
                            Explore Tools →
                        </Link>
                        <Link href="/pricing" className="btn btn-secondary btn-lg">
                            View Pricing
                        </Link>
                    </div>

                    <div className="hero-stats animate-fade-up-delay-3">
                        {[
                            { value: '120+', label: 'Free Tools' },
                            { value: '12K+', label: 'Active Users' },
                            { value: '85K', label: 'Monthly Visits' },
                        ].map((s) => (
                            <div key={s.label}>
                                <div className="hero-stat-num">{s.value}</div>
                                <div className="hero-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Illustration */}
                <div className="hero-img-wrap animate-float">
                    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 480 }}>
                        {/* Glow */}
                        <ellipse cx="240" cy="190" rx="200" ry="140" fill="rgba(37,99,235,0.15)" />

                        {/* Laptop base */}
                        <rect x="60" y="60" width="360" height="230" rx="16" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                        <rect x="60" y="60" width="360" height="32" rx="16" fill="rgba(255,255,255,0.1)" />
                        <circle cx="82" cy="76" r="6" fill="#EF4444" opacity="0.7" />
                        <circle cx="100" cy="76" r="6" fill="#F59E0B" opacity="0.7" />
                        <circle cx="118" cy="76" r="6" fill="#10B981" opacity="0.7" />

                        {/* Bar charts */}
                        <rect x="80" y="180" width="24" height="90" rx="5" fill="url(#hg1)" />
                        <rect x="112" y="150" width="24" height="120" rx="5" fill="url(#hg2)" />
                        <rect x="144" y="120" width="24" height="150" rx="5" fill="url(#hg3)" />
                        <rect x="176" y="140" width="24" height="130" rx="5" fill="url(#hg1)" opacity="0.7" />

                        {/* Line chart */}
                        <path d="M220 200 L250 170 L280 185 L310 145 L340 155 L370 125 L400 110" stroke="url(#hl)" strokeWidth="3" fill="none" strokeLinecap="round" />
                        <path d="M220 200 L250 170 L280 185 L310 145 L340 155 L370 125 L400 110 L400 270 L220 270Z" fill="url(#ha)" opacity="0.15" />

                        {/* AI circle badge */}
                        <circle cx="300" cy="130" r="50" fill="url(#hc1)" />
                        <circle cx="300" cy="130" r="40" fill="url(#hc2)" />
                        <text x="300" y="138" fontSize="24" fontWeight="900" fill="white" textAnchor="middle" fontFamily="Inter">AI</text>

                        {/* Orbiting dots */}
                        <circle cx="300" cy="78" r="5" fill="#06B6D4" />
                        <circle cx="352" cy="130" r="5" fill="#7C3AED" />
                        <circle cx="300" cy="182" r="5" fill="#10B981" />
                        <circle cx="248" cy="130" r="5" fill="#2563EB" />

                        {/* Leaves */}
                        <path d="M78 290 C70 280 58 283 62 294 C66 305 78 302 78 290Z" fill="#10B981" opacity="0.7" />
                        <path d="M70 305 C62 296 52 300 56 310 C60 320 70 316 70 305Z" fill="#34D399" opacity="0.5" />
                        <path d="M75 280 C80 270 88 272 86 280 C84 288 75 287 75 280Z" fill="#10B981" opacity="0.6" />

                        <path d="M418 80 C422 70 430 72 428 80 C426 88 418 87 418 80Z" fill="#10B981" opacity="0.5" />
                        <path d="M424 72 C428 62 436 65 434 72 C432 79 424 78 424 72Z" fill="#34D399" opacity="0.4" />

                        {/* Mini floating cards */}
                        <rect x="82" y="105" width="80" height="28" rx="6" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" />
                        <text x="122" y="123" fontSize="9" fill="white" opacity="0.9" textAnchor="middle">📊 Analytics</text>

                        <defs>
                            <linearGradient id="hg1" x1="0" y1="0" x2="0" y2="1">
                                <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#2563EB" />
                            </linearGradient>
                            <linearGradient id="hg2" x1="0" y1="0" x2="0" y2="1">
                                <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#2563EB" />
                            </linearGradient>
                            <linearGradient id="hg3" x1="0" y1="0" x2="0" y2="1">
                                <stop stopColor="#10B981" /><stop offset="1" stopColor="#06B6D4" />
                            </linearGradient>
                            <linearGradient id="hl" x1="0" y1="0" x2="1" y2="0">
                                <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#10B981" />
                            </linearGradient>
                            <linearGradient id="ha" x1="0" y1="0" x2="0" y2="1">
                                <stop stopColor="#06B6D4" /><stop offset="1" stopColor="transparent" />
                            </linearGradient>
                            <linearGradient id="hc1" x1="0" y1="0" x2="1" y2="1">
                                <stop stopColor="#2563EB" /><stop offset="0.5" stopColor="#06B6D4" /><stop offset="1" stopColor="#7C3AED" />
                            </linearGradient>
                            <linearGradient id="hc2" x1="0" y1="0" x2="1" y2="1">
                                <stop stopColor="#1D4ED8" /><stop offset="1" stopColor="#5B21B6" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Floating badge */}
                    <div className="hero-floating-badge">
                        <span>🟢</span> 1,320 premium users active
                    </div>
                </div>
            </div>
        </section>
    );
}
