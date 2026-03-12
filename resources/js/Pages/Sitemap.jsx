import { Head } from '@inertiajs/react';
import GuestLayout from '../Layouts/GuestLayout';

export default function Sitemap({ sitemapData }) {
    const { pages, tools, lastModified } = sitemapData;

    return (
        <GuestLayout title="Sitemap" description="Complete sitemap of all tools and pages on Toolvia.io">
            <Head>
                <link rel="alternate" type="application/xml" href="/sitemap.xml" />
            </Head>
            <div className="container" style={{ padding: '60px 24px', maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: 12 }}>
                        📋 Sitemap
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: 8 }}>
                        Complete list of all pages and tools on Toolvia.io
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        Last updated: {new Date(lastModified).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </p>
                    <a 
                        href="/sitemap.xml" 
                        style={{ 
                            display: 'inline-block', 
                            marginTop: 16,
                            padding: '10px 20px',
                            background: 'var(--primary)',
                            color: '#fff',
                            borderRadius: 8,
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                        📄 View XML Sitemap
                    </a>
                </div>

                {/* Main Pages */}
                <div style={{ marginBottom: 48 }}>
                    <h2 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 800, 
                        color: 'var(--text-primary)', 
                        marginBottom: 24,
                        paddingBottom: 12,
                        borderBottom: '2px solid var(--border-light)'
                    }}>
                        🏠 Main Pages
                    </h2>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                        gap: 16 
                    }}>
                        {pages.map((page) => (
                            <a
                                key={page.url}
                                href={page.url}
                                style={{
                                    display: 'block',
                                    padding: '16px 20px',
                                    background: '#fff',
                                    border: '1px solid var(--border-light)',
                                    borderRadius: 12,
                                    textDecoration: 'none',
                                    color: 'var(--text-primary)',
                                    transition: 'all 0.2s',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--primary)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.12)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-light)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{ fontWeight: 600, marginBottom: 4, fontSize: '0.95rem' }}>
                                    {page.name}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 8 }}>
                                    {page.url}
                                </div>
                                <div style={{ display: 'flex', gap: 12, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                    <span>Priority: {page.priority}</span>
                                    <span>•</span>
                                    <span>Update: {page.changefreq}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Tools by Category */}
                {Object.entries(tools).map(([category, categoryTools]) => (
                    <div key={category} style={{ marginBottom: 48 }}>
                        <h2 style={{ 
                            fontSize: '1.5rem', 
                            fontWeight: 800, 
                            color: 'var(--text-primary)', 
                            marginBottom: 24,
                            paddingBottom: 12,
                            borderBottom: '2px solid var(--border-light)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        }}>
                            {categoryTools[0]?.icon || '🔧'} {categoryTools[0]?.categoryLabel || category}
                            <span style={{ 
                                fontSize: '0.9rem', 
                                fontWeight: 600, 
                                color: 'var(--text-muted)',
                                marginLeft: 'auto'
                            }}>
                                {categoryTools.length} tools
                            </span>
                        </h2>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                            gap: 16 
                        }}>
                            {categoryTools.map((tool) => (
                                <a
                                    key={tool.url}
                                    href={tool.url}
                                    style={{
                                        display: 'block',
                                        padding: '18px 20px',
                                        background: '#fff',
                                        border: '1px solid var(--border-light)',
                                        borderRadius: 12,
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        transition: 'all 0.2s',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--primary)';
                                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.12)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-light)';
                                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                                        <span style={{ fontSize: '1.5rem' }}>{tool.icon || '🔧'}</span>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>
                                                {tool.name}
                                            </div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                {tool.url}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: 12, fontSize: '0.75rem', color: 'var(--text-muted)', paddingTop: 8, borderTop: '1px solid var(--border-light)' }}>
                                        <span>Priority: {tool.priority}</span>
                                        <span>•</span>
                                        <span>Update: {tool.changefreq}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Footer Note */}
                <div style={{
                    marginTop: 60,
                    padding: '24px',
                    background: 'var(--bg-light)',
                    borderRadius: 12,
                    textAlign: 'center',
                    border: '1px solid var(--border-light)'
                }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 8 }}>
                        This sitemap is automatically generated and updated regularly.
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        For search engines, use the <a href="/sitemap.xml" style={{ color: 'var(--primary)', textDecoration: 'none' }}>XML version</a>.
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
