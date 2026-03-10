// Toolvia Logo SVG Component
export default function Logo({ size = 32, className = '' }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
            </defs>
            {/* Outer ring segments */}
            <path d="M20 4 A16 16 0 0 1 36 20" stroke="url(#grad1)" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M36 20 A16 16 0 0 1 20 36" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M20 36 A16 16 0 0 1 4 20" stroke="url(#grad2)" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M4 20 A16 16 0 0 1 20 4" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Inner dot */}
            <circle cx="20" cy="20" r="5" fill="url(#grad1)" />
        </svg>
    );
}
