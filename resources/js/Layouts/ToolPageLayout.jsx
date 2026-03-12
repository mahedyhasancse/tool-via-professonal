import DashboardLayout from './DashboardLayout';
import { Link, Head, usePage } from '@inertiajs/react';

/**
 * Shared wrapper for every individual tool page.
 * Renders INSIDE the dashboard — DashboardLayout provides sidebar + header.
 * URL pattern: /{category}/{tool-slug} (no dashboard prefix)
 */
export default function ToolPageLayout({
    title,
    description,
    category,
    categoryHref,
    categoryIcon,
    icon,
    badge = 'free',
    children,
}) {
    const { url } = usePage();
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://toolvia.io';
    const fullUrl = baseUrl + url;
    
    // Generate SEO-friendly title and description
    const seoTitle = `${title} - Free Online Tool | Toolvia.io`;
    const seoDescription = description || `${title} - Free online tool for ${category.toLowerCase()}. Use instantly, no signup required.`;
    
    // Schema.org JSON-LD for SoftwareApplication
    const schemaMarkup = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': title,
        'description': seoDescription,
        'applicationCategory': 'UtilityApplication',
        'operatingSystem': 'Web',
        'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
        },
        'url': fullUrl,
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'ratingCount': '1250'
        }
    };
    
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>{seoTitle}</title>
                <meta name="title" content={seoTitle} />
                <meta name="description" content={seoDescription} />
                <meta name="keywords" content={`${title}, ${category}, free tool, online calculator, toolvia`} />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="author" content="Toolvia.io" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={fullUrl} />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={fullUrl} />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
                
                {/* Canonical URL */}
                <link rel="canonical" href={fullUrl} />
                
                {/* Schema.org JSON-LD */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
            </Head>
            <DashboardLayout>
            {/* Tool Hero Banner */}
            <div style={{
                background: 'linear-gradient(135deg, #0a1628 0%, #0d2060 60%, #1a0845 100%)',
                borderRadius: 20,
                padding: '28px 36px',
                marginBottom: 24,
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* glow */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(circle at 15% 50%, rgba(37,99,235,0.3) 0%, transparent 55%), radial-gradient(circle at 85% 30%, rgba(124,58,237,0.2) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }} />

                {/* Breadcrumb */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                    <Link href="/dashboard" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Dashboard</Link>
                    <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
                    <Link href={categoryHref} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                        {categoryIcon} {category}
                    </Link>
                    <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)' }}>{title}</span>
                </div>

                {/* Title Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '2.2rem', flexShrink: 0 }}>{icon}</div>
                    <div>
                        <h1 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 6 }}>
                            {title}
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', maxWidth: 520 }}>
                            {description}
                        </p>
                    </div>
                    <span style={{
                        marginLeft: 'auto', flexShrink: 0,
                        background: 'linear-gradient(135deg,#10B981,#059669)',
                        color: '#fff', fontSize: '0.72rem', fontWeight: 700,
                        padding: '4px 14px', borderRadius: 99,
                    }}>✓ Free</span>
                </div>
            </div>

            {/* Tool Content Card */}
            <div style={{
                background: '#fff',
                borderRadius: 20,
                boxShadow: '0 4px 24px rgba(37,99,235,0.08)',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
            }}>
                {children}
            </div>
        </DashboardLayout>
        </>
    );
}
