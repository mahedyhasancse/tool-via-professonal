import GuestLayout from '../../Layouts/GuestLayout';
import { Link } from '@inertiajs/react';

const posts = [
    { icon: '💡', category: 'Business Tips', title: 'How to Calculate VAT for Your Business', excerpt: 'A complete guide to understanding VAT — when you charge it, how to calculate it, and what tools make it easy.', date: 'Mar 10, 2026', readTime: '5 min', href: '#' },
    { icon: '🤖', category: 'AI Tools', title: '5 Ways AI Can Write Your Business Emails', excerpt: 'Stop spending hours on emails. See how AI email generators save professionals 3+ hours every week.', date: 'Mar 8, 2026', readTime: '4 min', href: '#' },
    { icon: '📈', category: 'Finance', title: 'Understanding Profit Margins: A Practical Guide', excerpt: 'What profit margin should your business target? Learn industry benchmarks and how to optimize your margins.', date: 'Mar 5, 2026', readTime: '7 min', href: '#' },
    { icon: '💱', category: 'Currency', title: 'Top 10 Currency Pairs to Watch in 2026', excerpt: 'Which currency pairs offer the best trading opportunities? Our analysis of market trends and movements.', date: 'Mar 2, 2026', readTime: '6 min', href: '#' },
    { icon: '🔍', category: 'SEO', title: 'Keyword Density: How Much is Too Much?', excerpt: 'Stop keyword stuffing. Learn the ideal keyword density for SEO in 2026 and how to optimize your content.', date: 'Feb 28, 2026', readTime: '5 min', href: '#' },
    { icon: '📄', category: 'PDF Tools', title: 'Best Free PDF Tools for Small Businesses', excerpt: 'Compress, merge, split and convert PDFs without paying for expensive software. All tools are browser-based.', date: 'Feb 25, 2026', readTime: '4 min', href: '#' },
];

export default function Blog() {
    return (
        <GuestLayout title="Blog - Toolvia.io" description="Business tips, AI guides, finance insights, and tool tutorials from the Toolvia team.">
            <div style={{ paddingTop: 68 }}>
                <div style={{ background: 'var(--bg-light)', borderBottom: '1px solid var(--border-light)', padding: '64px 0 40px' }}>
                    <div className="container">
                        <div className="section-tag" style={{ marginBottom: 14 }}>📚 Blog</div>
                        <h1 className="section-title">Tips, Guides & Insights</h1>
                        <p className="section-subtitle" style={{ maxWidth: 520 }}>Business guides, AI tool tutorials, and productivity tips from the Toolvia team.</p>
                    </div>
                </div>
                <div className="container" style={{ padding: '48px 24px' }}>
                    <div className="grid grid-3" style={{ gap: 24 }}>
                        {posts.map((post, i) => (
                            <a key={i} href={post.href} className="card" style={{ overflow: 'hidden', display: 'block', textDecoration: 'none' }}>
                                <div style={{ height: 120, background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                                    {post.icon}
                                </div>
                                <div className="card-body">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                                        <span className="badge badge-primary">{post.category}</span>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>⏱️ {post.readTime}</span>
                                    </div>
                                    <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8, lineHeight: 1.4 }}>{post.title}</h2>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{post.excerpt}</p>
                                    <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{post.date}</span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)' }}>Read more →</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
