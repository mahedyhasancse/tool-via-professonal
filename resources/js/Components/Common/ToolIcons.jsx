// Tool icon illustrations as inline SVG components
// Each icon matches the illustrated gradient style from the reference

export function VatIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#EEF2FF" />
            <rect x="8" y="14" width="28" height="26" rx="4" fill="url(#vat1)" />
            <rect x="10" y="20" width="24" height="3" rx="1.5" fill="white" opacity="0.6" />
            <rect x="10" y="26" width="16" height="3" rx="1.5" fill="white" opacity="0.5" />
            <rect x="10" y="32" width="20" height="3" rx="1.5" fill="white" opacity="0.5" />
            <rect x="24" y="28" width="18" height="12" rx="3" fill="url(#vat2)" />
            <text x="26" y="37" fontSize="7" fontWeight="900" fill="white" textAnchor="middle">VAT</text>
            <circle cx="40" cy="16" r="6" fill="url(#vat3)" />
            <text x="40" y="19" fontSize="8" fontWeight="700" fill="white" textAnchor="middle">$</text>
            <defs>
                <linearGradient id="vat1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="vat2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="vat3" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#FBBF24" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function InvoiceIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#F0FDF4" />
            <rect x="10" y="8" width="26" height="34" rx="4" fill="white" stroke="#E5E7EB" />
            <rect x="14" y="15" width="18" height="2" rx="1" fill="#2563EB" opacity="0.7" />
            <rect x="14" y="20" width="14" height="2" rx="1" fill="#6B7280" opacity="0.5" />
            <rect x="14" y="25" width="16" height="2" rx="1" fill="#6B7280" opacity="0.5" />
            <rect x="14" y="30" width="12" height="2" rx="1" fill="#6B7280" opacity="0.5" />
            <circle cx="38" cy="14" r="8" fill="url(#inv1)" />
            <path d="M34 14 L37 17 L42 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="36" cy="36" r="7" fill="url(#inv2)" />
            <text x="36" y="39" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">$</text>
            <defs>
                <linearGradient id="inv1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="inv2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function QuotationIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#FFF0F3" />
            <rect x="8" y="12" width="24" height="30" rx="4" fill="url(#quo1)" />
            <text x="12" y="26" fontSize="12" fontWeight="900" fill="white" opacity="0.9">"</text>
            <rect x="12" y="30" width="16" height="2" rx="1" fill="white" opacity="0.6" />
            <rect x="12" y="34" width="11" height="2" rx="1" fill="white" opacity="0.5" />
            <rect x="28" y="20" width="16" height="20" rx="4" fill="url(#quo2)" opacity="0.9" />
            <rect x="30" y="24" width="5" height="10" rx="2" fill="white" opacity="0.8" />
            <rect x="37" y="28" width="5" height="6" rx="2" fill="white" opacity="0.6" />
            <path d="M28 36 L44 28" stroke="url(#quo3)" strokeWidth="2" strokeLinecap="round" />
            <defs>
                <linearGradient id="quo1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#EC4899" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="quo2" x1="0" y1="1" x2="0" y2="0">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="quo3" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#10B981" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function ProfitIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#F0FDF4" />
            <rect x="8" y="28" width="8" height="14" rx="3" fill="url(#prof1)" />
            <rect x="19" y="20" width="8" height="22" rx="3" fill="url(#prof2)" />
            <rect x="30" y="14" width="8" height="28" rx="3" fill="url(#prof3)" />
            <path d="M12 24 L22 18 L34 12" stroke="url(#prof4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="34" cy="12" r="4" fill="url(#prof4)" />
            <path d="M38 8 L42 12 L38 16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="prof1" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#34D399" /><stop offset="1" stopColor="#10B981" />
                </linearGradient>
                <linearGradient id="prof2" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#0891B2" />
                </linearGradient>
                <linearGradient id="prof3" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="1" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="prof4" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function PercentageIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#FFF7ED" />
            <circle cx="26" cy="26" r="18" fill="url(#pct1)" />
            <circle cx="26" cy="26" r="14" fill="url(#pct2)" />
            <text x="26" y="31" fontSize="16" fontWeight="900" fill="white" textAnchor="middle">%</text>
            <defs>
                <linearGradient id="pct1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#EF4444" />
                </linearGradient>
                <linearGradient id="pct2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#FBBF24" /><stop offset="1" stopColor="#F97316" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function UnitIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#EFF6FF" />
            <rect x="8" y="28" width="36" height="14" rx="4" fill="url(#unit1)" />
            <rect x="10" y="30" width="4" height="10" rx="1" fill="white" opacity="0.5" />
            <rect x="16" y="32" width="4" height="8" rx="1" fill="white" opacity="0.6" />
            <rect x="22" y="30" width="4" height="10" rx="1" fill="white" opacity="0.5" />
            <rect x="28" y="33" width="4" height="7" rx="1" fill="white" opacity="0.6" />
            <rect x="34" y="30" width="4" height="10" rx="1" fill="white" opacity="0.5" />
            <circle cx="26" cy="18" r="8" fill="url(#unit2)" />
            <path d="M22 18 L25 21 L30 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="unit1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="unit2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function CurrencyIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#ECFEFF" />
            <circle cx="26" cy="26" r="18" stroke="url(#cur1)" strokeWidth="3" fill="none" />
            <path d="M18 26 C18 22 21 18 26 18" stroke="url(#cur1)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M34 26 C34 30 31 34 26 34" stroke="url(#cur2)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M14 22 L18 26 L22 22" stroke="url(#cur1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M38 30 L34 26 L30 30" stroke="url(#cur2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="16" cy="22" r="5" fill="url(#cur1)" />
            <text x="16" y="25" fontSize="7" fontWeight="700" fill="white" textAnchor="middle">$</text>
            <circle cx="36" cy="30" r="5" fill="url(#cur2)" />
            <text x="36" y="33" fontSize="7" fontWeight="700" fill="white" textAnchor="middle">€</text>
            <defs>
                <linearGradient id="cur1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="cur2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#10B981" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function AiEmailIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#F5F3FF" />
            <rect x="8" y="18" width="30" height="22" rx="4" fill="url(#email1)" />
            <path d="M8 22 L23 30 L38 22" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" />
            <circle cx="36" cy="16" r="9" fill="url(#email2)" />
            <text x="36" y="19" fontSize="9" fontWeight="900" fill="white" textAnchor="middle">AI</text>
            {/* Leaves */}
            <path d="M42 36 C44 34 46 36 44 38 C42 40 40 38 42 36Z" fill="#10B981" opacity="0.8" />
            <path d="M44 40 C45 38 47 39 46 41 C45 43 43 42 44 40Z" fill="#34D399" opacity="0.7" />
            <defs>
                <linearGradient id="email1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="email2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function SeoIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#F0FDF4" />
            <circle cx="22" cy="22" r="12" stroke="url(#seo1)" strokeWidth="3" fill="none" />
            <path d="M30 30 L40 40" stroke="url(#seo2)" strokeWidth="3" strokeLinecap="round" />
            <path d="M18 22 L21 22 M22 18 L22 21" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <defs>
                <linearGradient id="seo1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="seo2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function PdfIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#FEF2F2" />
            <rect x="12" y="8" width="22" height="30" rx="4" fill="white" stroke="#E5E7EB" />
            <path d="M28 8 L34 8 L34 14 L28 14 Z" fill="url(#pdf1)" />
            <rect x="16" y="18" width="14" height="2" rx="1" fill="#E5E7EB" />
            <rect x="16" y="23" width="10" height="2" rx="1" fill="#E5E7EB" />
            <rect x="16" y="28" width="12" height="2" rx="1" fill="#E5E7EB" />
            <rect x="20" y="30" width="20" height="14" rx="4" fill="url(#pdf1)" />
            <text x="30" y="40" fontSize="9" fontWeight="900" fill="white" textAnchor="middle">PDF</text>
            <defs>
                <linearGradient id="pdf1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#EF4444" /><stop offset="1" stopColor="#EC4899" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function AiToolIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#EFF6FF" />
            <circle cx="26" cy="26" r="14" fill="url(#ai1)" />
            <circle cx="26" cy="26" r="10" fill="url(#ai2)" />
            <text x="26" y="30" fontSize="11" fontWeight="900" fill="white" textAnchor="middle">AI</text>
            {/* Orbiting dots */}
            <circle cx="26" cy="10" r="2.5" fill="#06B6D4" />
            <circle cx="42" cy="26" r="2.5" fill="#7C3AED" />
            <circle cx="26" cy="42" r="2.5" fill="#10B981" />
            <circle cx="10" cy="26" r="2.5" fill="#2563EB" />
            <defs>
                <linearGradient id="ai1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="0.5" stopColor="#06B6D4" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="ai2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#1D4ED8" /><stop offset="1" stopColor="#5B21B6" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function LoanIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#ECFDF5" />
            <rect x="8" y="16" width="32" height="22" rx="4" fill="url(#loan1)" />
            <rect x="10" y="22" width="28" height="10" rx="2" fill="rgba(255,255,255,0.15)" />
            <text x="26" y="29" fontSize="9" fontWeight="900" fill="white" textAnchor="middle">LOAN</text>
            <circle cx="38" cy="12" r="7" fill="url(#loan2)" />
            <text x="38" y="15" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">$</text>
            <defs>
                <linearGradient id="loan1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="loan2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#EF4444" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function AgeIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#FFF7ED" />
            <circle cx="26" cy="22" r="12" fill="url(#age1)" />
            <circle cx="26" cy="22" r="8" fill="url(#age2)" />
            <rect x="25" y="14" width="2" height="9" rx="1" fill="white" />
            <rect x="25" y="22" width="6" height="2" rx="1" fill="white" />
            <path d="M14 38 Q26 32 38 38" stroke="url(#age3)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <circle cx="14" cy="38" r="3" fill="#F59E0B" />
            <circle cx="38" cy="38" r="3" fill="#EF4444" />
            <defs>
                <linearGradient id="age1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#F97316" /><stop offset="1" stopColor="#F59E0B" />
                </linearGradient>
                <linearGradient id="age2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#FB923C" /><stop offset="1" stopColor="#FBBF24" />
                </linearGradient>
                <linearGradient id="age3" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#EF4444" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function RoiIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#F0FDF4" />
            <path d="M8 36 L16 28 L24 32 L34 18 L44 14" stroke="url(#roi1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="44" cy="14" r="4" fill="url(#roi1)" />
            <path d="M40 14 L44 10 L48 14" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <rect x="8" y="38" width="8" height="6" rx="2" fill="url(#roi2)" opacity="0.7" />
            <rect x="20" y="34" width="8" height="10" rx="2" fill="url(#roi2)" />
            <rect x="32" y="28" width="8" height="16" rx="2" fill="url(#roi3)" />
            <defs>
                <linearGradient id="roi1" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="roi2" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#34D399" /><stop offset="1" stopColor="#10B981" />
                </linearGradient>
                <linearGradient id="roi3" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function DiscountIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#FFF0F3" />
            <path d="M8 28 L24 8 L44 8 L44 28 L24 44 Z" fill="url(#disc1)" />
            <circle cx="36" cy="16" r="4" fill="white" opacity="0.9" />
            <path d="M16 36 L34 18" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <circle cx="18" cy="34" r="3" fill="white" opacity="0.7" />
            <text x="26" y="31" fontSize="11" fontWeight="900" fill="white" textAnchor="middle" opacity="0.9">%</text>
            <circle cx="42" cy="34" r="8" fill="url(#disc2)" />
            <text x="42" y="37" fontSize="7" fontWeight="900" fill="white" textAnchor="middle">OFF</text>
            <defs>
                <linearGradient id="disc1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#EC4899" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="disc2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#EF4444" /><stop offset="1" stopColor="#EC4899" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function SalaryIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#EFF6FF" />
            <rect x="8" y="14" width="30" height="26" rx="5" fill="url(#sal1)" />
            <circle cx="22" cy="27" r="7" fill="rgba(255,255,255,0.2)" />
            <text x="22" y="30" fontSize="10" fontWeight="900" fill="white" textAnchor="middle">$</text>
            <rect x="12" y="19" width="8" height="2" rx="1" fill="white" opacity="0.5" />
            <rect x="12" y="34" width="10" height="2" rx="1" fill="white" opacity="0.5" />
            <circle cx="38" cy="16" r="9" fill="url(#sal2)" />
            <path d="M34 16 L37 19 L42 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="sal1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="sal2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function BreakEvenIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#F5F3FF" />
            <line x1="8" y1="44" x2="44" y2="44" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="44" x2="8" y2="8" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 40 L30 12" stroke="url(#be1)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M8 12 L44 40" stroke="url(#be2)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="25" cy="26" r="5" fill="url(#be3)" />
            <text x="25" y="29" fontSize="7" fontWeight="900" fill="white" textAnchor="middle">✓</text>
            <defs>
                <linearGradient id="be1" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="be2" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#EF4444" /><stop offset="1" stopColor="#F59E0B" />
                </linearGradient>
                <linearGradient id="be3" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function ProductDescIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#F5F3FF" />
            <rect x="8" y="10" width="24" height="32" rx="4" fill="url(#pd1)" />
            <rect x="12" y="16" width="16" height="2" rx="1" fill="white" opacity="0.7" />
            <rect x="12" y="21" width="12" height="2" rx="1" fill="white" opacity="0.5" />
            <rect x="12" y="26" width="14" height="2" rx="1" fill="white" opacity="0.5" />
            <rect x="12" y="31" width="10" height="2" rx="1" fill="white" opacity="0.4" />
            <circle cx="38" cy="18" r="10" fill="url(#pd2)" />
            <text x="38" y="21" fontSize="10" fontWeight="900" fill="white" textAnchor="middle">AI</text>
            <path d="M30 30 L44 30" stroke="url(#pd3)" strokeWidth="2" strokeLinecap="round" />
            <path d="M30 35 L40 35" stroke="url(#pd3)" strokeWidth="2" strokeLinecap="round" />
            <defs>
                <linearGradient id="pd1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="pd2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="pd3" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function ResumeIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#F0FDF4" />
            <rect x="10" y="6" width="26" height="36" rx="4" fill="white" stroke="#E5E7EB" />
            <circle cx="22" cy="16" r="5" fill="url(#res1)" />
            <rect x="14" y="24" width="18" height="2" rx="1" fill="#E5E7EB" />
            <rect x="14" y="29" width="14" height="2" rx="1" fill="#E5E7EB" />
            <rect x="14" y="34" width="16" height="2" rx="1" fill="#E5E7EB" />
            <circle cx="38" cy="14" r="9" fill="url(#res2)" />
            <text x="38" y="17" fontSize="9" fontWeight="900" fill="white" textAnchor="middle">AI</text>
            <path d="M32 36 L36 40 L44 30" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="res1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="res2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function CoverLetterIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#EFF6FF" />
            <rect x="8" y="12" width="28" height="34" rx="4" fill="url(#cl1)" />
            <path d="M8 18 L22 26 L36 18" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
            <rect x="12" y="32" width="16" height="2" rx="1" fill="white" opacity="0.5" />
            <rect x="12" y="37" width="10" height="2" rx="1" fill="white" opacity="0.4" />
            <circle cx="38" cy="16" r="10" fill="url(#cl2)" />
            <text x="38" y="19" fontSize="10" fontWeight="900" fill="white" textAnchor="middle">AI</text>
            <path d="M32 34 C33 32 36 32 36 34 C36 36 33 37 32 36" fill="#F59E0B" opacity="0.8" />
            <defs>
                <linearGradient id="cl1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="cl2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#EC4899" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function BusinessNameIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#FFF7ED" />
            <rect x="8" y="24" width="36" height="20" rx="4" fill="url(#bn1)" />
            <rect x="18" y="18" width="16" height="10" rx="3" fill="url(#bn2)" />
            <rect x="22" y="13" width="8" height="8" rx="2" fill="url(#bn3)" />
            <circle cx="38" cy="14" r="8" fill="url(#bn4)" />
            <text x="38" y="17" fontSize="9" fontWeight="900" fill="white" textAnchor="middle">AI</text>
            <rect x="12" y="30" width="8" height="2" rx="1" fill="white" opacity="0.6" />
            <rect x="12" y="35" width="12" height="2" rx="1" fill="white" opacity="0.5" />
            <defs>
                <linearGradient id="bn1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#F97316" /><stop offset="1" stopColor="#F59E0B" />
                </linearGradient>
                <linearGradient id="bn2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#EF4444" /><stop offset="1" stopColor="#F97316" />
                </linearGradient>
                <linearGradient id="bn3" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#EF4444" />
                </linearGradient>
                <linearGradient id="bn4" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function PdfMergeIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#FEF2F2" />
            <rect x="6" y="10" width="16" height="22" rx="3" fill="url(#pm1)" opacity="0.9" />
            <rect x="12" y="16" width="16" height="22" rx="3" fill="url(#pm2)" opacity="0.9" />
            <rect x="18" y="22" width="16" height="22" rx="3" fill="url(#pm3)" />
            <path d="M38 20 L44 26 L38 32" stroke="url(#pm4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="32" y1="26" x2="44" y2="26" stroke="url(#pm4)" strokeWidth="2.5" strokeLinecap="round" />
            <defs>
                <linearGradient id="pm1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#FCA5A5" /><stop offset="1" stopColor="#EF4444" />
                </linearGradient>
                <linearGradient id="pm2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#EF4444" /><stop offset="1" stopColor="#DC2626" />
                </linearGradient>
                <linearGradient id="pm3" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#DC2626" /><stop offset="1" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="pm4" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#EF4444" /><stop offset="1" stopColor="#EC4899" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function PdfSplitIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#FEF2F2" />
            <rect x="16" y="8" width="20" height="28" rx="3" fill="url(#ps1)" />
            <rect x="20" y="14" width="12" height="2" rx="1" fill="white" opacity="0.6" />
            <rect x="20" y="19" width="8" height="2" rx="1" fill="white" opacity="0.5" />
            <path d="M8 38 L20 28" stroke="url(#ps2)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M44 38 L32 28" stroke="url(#ps2)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="8" cy="40" r="4" fill="url(#ps2)" />
            <circle cx="44" cy="40" r="4" fill="url(#ps2)" />
            <path d="M24 30 L26 28 L28 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <defs>
                <linearGradient id="ps1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#EF4444" /><stop offset="1" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="ps2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#EF4444" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function ImageToPdfIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#FEF2F2" />
            <rect x="6" y="10" width="24" height="20" rx="3" fill="url(#ip1)" />
            <circle cx="12" cy="16" r="3" fill="white" opacity="0.8" />
            <path d="M6 26 L14 18 L20 22 L26 16 L30 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
            <path d="M32 24 L38 18 L44 24" stroke="url(#ip2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="38" y1="18" x2="38" y2="34" stroke="url(#ip2)" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="24" y="32" width="22" height="14" rx="3" fill="url(#ip3)" />
            <text x="35" y="41" fontSize="8" fontWeight="900" fill="white" textAnchor="middle">PDF</text>
            <defs>
                <linearGradient id="ip1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="ip2" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#EF4444" />
                </linearGradient>
                <linearGradient id="ip3" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#EF4444" /><stop offset="1" stopColor="#EC4899" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function PdfToJpgIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#FEF2F2" />
            <rect x="6" y="8" width="20" height="26" rx="3" fill="url(#pj1)" />
            <text x="16" y="24" fontSize="8" fontWeight="900" fill="white" textAnchor="middle">PDF</text>
            <path d="M28 20 L34 14 L40 20" stroke="url(#pj2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="34" y1="14" x2="34" y2="30" stroke="url(#pj2)" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="22" y="32" width="24" height="16" rx="3" fill="url(#pj3)" />
            <circle cx="28" cy="38" r="2.5" fill="white" opacity="0.8" />
            <path d="M22 44 L30 38 L36 42 L46 34" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
            <defs>
                <linearGradient id="pj1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#EF4444" /><stop offset="1" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="pj2" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#EF4444" />
                </linearGradient>
                <linearGradient id="pj3" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function WordCounterIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#F0FDF4" />
            <rect x="8" y="10" width="28" height="34" rx="4" fill="url(#wc1)" />
            <rect x="12" y="16" width="20" height="2.5" rx="1.25" fill="white" opacity="0.8" />
            <rect x="12" y="22" width="16" height="2.5" rx="1.25" fill="white" opacity="0.65" />
            <rect x="12" y="28" width="18" height="2.5" rx="1.25" fill="white" opacity="0.65" />
            <rect x="12" y="34" width="12" height="2.5" rx="1.25" fill="white" opacity="0.5" />
            <circle cx="38" cy="16" r="9" fill="url(#wc2)" />
            <text x="38" y="20" fontSize="10" fontWeight="900" fill="white" textAnchor="middle">W</text>
            <defs>
                <linearGradient id="wc1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="wc2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#06B6D4" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function MetaTagIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#EFF6FF" />
            <rect x="6" y="14" width="40" height="26" rx="5" fill="url(#mt1)" />
            <text x="12" y="25" fontSize="7" fontWeight="700" fill="white" opacity="0.7">{"<"}</text>
            <text x="17" y="25" fontSize="7" fontWeight="700" fill="white" opacity="0.9">meta</text>
            <text x="34" y="25" fontSize="7" fontWeight="700" fill="white" opacity="0.7">{">"}</text>
            <rect x="10" y="29" width="18" height="2" rx="1" fill="white" opacity="0.5" />
            <rect x="10" y="33" width="12" height="2" rx="1" fill="white" opacity="0.4" />
            <circle cx="38" cy="32" r="5" fill="url(#mt2)" />
            <text x="38" y="35" fontSize="7" fontWeight="700" fill="white" textAnchor="middle">✓</text>
            <defs>
                <linearGradient id="mt1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="mt2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function KeywordIcon({ size = 52 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="10" fill="#F0FDF4" />
            <circle cx="22" cy="22" r="13" stroke="url(#kw1)" strokeWidth="3" fill="none" />
            <path d="M31 31 L42 42" stroke="url(#kw2)" strokeWidth="3" strokeLinecap="round" />
            <rect x="16" y="20" width="12" height="2" rx="1" fill="url(#kw1)" />
            <rect x="16" y="24" width="8" height="2" rx="1" fill="url(#kw1)" opacity="0.7" />
            <circle cx="38" cy="14" r="7" fill="url(#kw3)" />
            <text x="38" y="17" fontSize="8" fontWeight="900" fill="white" textAnchor="middle">%</text>
            <defs>
                <linearGradient id="kw1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#10B981" /><stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="kw2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#2563EB" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="kw3" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#EF4444" />
                </linearGradient>
            </defs>
        </svg>
    );
}
