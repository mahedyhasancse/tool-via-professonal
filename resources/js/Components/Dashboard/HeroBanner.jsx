// HeroBanner widget shown at top of Dashboard — dark navy with AI illustration style
export default function HeroBanner() {
    return (
        <div className="hero-widget animate-fade-up">
            <div className="hero-widget-content">
                <div className="hero-widget-tag">✨ Welcome to Toolvia.io</div>
                <h1 className="hero-widget-title">
                    AI Tools for Business<br />
                    <span style={{ color: '#06B6D4' }}>& Productivity</span>
                </h1>
                <div className="hero-widget-actions">
                    <a href="/tools" className="btn btn-primary">
                        Explore Tools →
                    </a>
                    <a href="/tools" className="btn" style={{
                        background: 'rgba(255,255,255,0.12)',
                        color: '#fff', border: '1px solid rgba(255,255,255,0.25)',
                        backdropFilter: 'blur(8px)'
                    }}>
                        Generate Invoice
                    </a>
                </div>
            </div>

            {/* Illustrated dashboard graphic — inline SVG */}
            <div className="hero-widget-img animate-float">
                <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Main screen */}
                    <rect x="20" y="10" width="220" height="140" rx="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <rect x="20" y="10" width="220" height="28" rx="12" fill="rgba(255,255,255,0.12)" />
                    <circle cx="36" cy="24" r="5" fill="#EF4444" opacity="0.8" />
                    <circle cx="50" cy="24" r="5" fill="#F59E0B" opacity="0.8" />
                    <circle cx="64" cy="24" r="5" fill="#10B981" opacity="0.8" />

                    {/* Bar chart */}
                    <rect x="36" y="100" width="16" height="35" rx="4" fill="url(#hb1)" />
                    <rect x="58" y="80" width="16" height="55" rx="4" fill="url(#hb2)" />
                    <rect x="80" y="65" width="16" height="70" rx="4" fill="url(#hb3)" />
                    <rect x="102" y="75" width="16" height="60" rx="4" fill="url(#hb1)" opacity="0.7" />

                    {/* Line chart area */}
                    <path d="M130 110 L150 90 L170 100 L190 70 L210 80 L220 65" stroke="url(#hb4)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M130 110 L150 90 L170 100 L190 70 L210 80 L220 65 L220 135 L130 135Z" fill="url(#hb5)" opacity="0.2" />

                    {/* AI badge circle */}
                    <circle cx="168" cy="70" r="26" fill="url(#hb6)" />
                    <circle cx="168" cy="70" r="20" fill="url(#hb7)" />
                    <text x="168" y="75" fontSize="14" fontWeight="900" fill="white" textAnchor="middle">AI</text>

                    {/* Floating leaves */}
                    <path d="M22 120 C18 110 10 112 12 122 C14 132 22 130 22 120Z" fill="#10B981" opacity="0.7" />
                    <path d="M18 130 C14 122 8 126 10 134 C12 142 18 138 18 130Z" fill="#34D399" opacity="0.5" />
                    <path d="M248 50 C244 40 236 44 238 52 C240 60 248 56 248 50Z" fill="#10B981" opacity="0.5" />

                    {/* Mini stats */}
                    <rect x="130" y="48" width="50" height="16" rx="4" fill="rgba(255,255,255,0.1)" />
                    <text x="155" y="60" fontSize="8" fill="white" opacity="0.8" textAnchor="middle">120+ Tools</text>

                    <defs>
                        <linearGradient id="hb1" x1="0" y1="0" x2="0" y2="1">
                            <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#2563EB" />
                        </linearGradient>
                        <linearGradient id="hb2" x1="0" y1="0" x2="0" y2="1">
                            <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#2563EB" />
                        </linearGradient>
                        <linearGradient id="hb3" x1="0" y1="0" x2="0" y2="1">
                            <stop stopColor="#10B981" /><stop offset="1" stopColor="#06B6D4" />
                        </linearGradient>
                        <linearGradient id="hb4" x1="0" y1="0" x2="1" y2="0">
                            <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#10B981" />
                        </linearGradient>
                        <linearGradient id="hb5" x1="0" y1="0" x2="0" y2="1">
                            <stop stopColor="#06B6D4" /><stop offset="1" stopColor="transparent" />
                        </linearGradient>
                        <linearGradient id="hb6" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#2563EB" /><stop offset="0.5" stopColor="#06B6D4" /><stop offset="1" stopColor="#7C3AED" />
                        </linearGradient>
                        <linearGradient id="hb7" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#1D4ED8" /><stop offset="1" stopColor="#5B21B6" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
