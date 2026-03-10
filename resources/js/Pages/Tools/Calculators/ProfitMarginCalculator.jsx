import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function ProfitMarginCalculator() {
    const [cost, setCost] = useState('');
    const [revenue, setRevenue] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const c = parseFloat(cost);
        const r = parseFloat(revenue);
        if (isNaN(c) || isNaN(r) || c <= 0) return;
        const profit = r - c;
        const margin = (profit / r) * 100;
        const markup = (profit / c) * 100;
        setResult({ profit, margin, markup, cost: c, revenue: r });
    };

    const labelStyle = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
    const inputStyle = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text-primary)', background: '#fff', outline: 'none' };

    return (
        <ToolPageLayout
            title="Profit Margin Calculator"
            description="Calculate your profit margin, markup percentage and net profit instantly."
            category="Calculators" categoryHref="/dashboard/calculators" categoryIcon="🧮" icon="📈" badge="free"
        >
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Enter Figures</h2>
                        <div style={{ marginBottom: 20 }}>
                            <label style={labelStyle}>Cost Price ($)</label>
                            <input type="number" value={cost} onChange={e => setCost(e.target.value)} placeholder="e.g. 50" style={inputStyle} />
                        </div>
                        <div style={{ marginBottom: 28 }}>
                            <label style={labelStyle}>Selling Price / Revenue ($)</label>
                            <input type="number" value={revenue} onChange={e => setRevenue(e.target.value)} placeholder="e.g. 100" style={inputStyle} />
                        </div>
                        <button className="btn btn-primary w-full" onClick={calculate}>Calculate Profit</button>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Results</h2>
                        {result ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                {[
                                    { label: 'Net Profit', value: `$${result.profit.toFixed(2)}`, color: result.profit >= 0 ? '#10B981' : '#EF4444' },
                                    { label: 'Profit Margin', value: `${result.margin.toFixed(2)}%`, color: 'var(--primary)' },
                                    { label: 'Markup %', value: `${result.markup.toFixed(2)}%`, color: 'var(--secondary)' },
                                ].map(row => (
                                    <div key={row.label} style={{ background: 'var(--bg-light)', borderRadius: 12, padding: '16px 20px', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{row.label}</span>
                                        <span style={{ fontSize: '1.3rem', fontWeight: 800, color: row.color }}>{row.value}</span>
                                    </div>
                                ))}
                                {/* Visual bar */}
                                <div style={{ background: '#F3F4F6', borderRadius: 8, height: 12, overflow: 'hidden', marginTop: 8 }}>
                                    <div style={{ width: `${Math.max(0, Math.min(100, result.margin))}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', borderRadius: 8, transition: 'width 0.5s ease' }} />
                                </div>
                                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>Margin: {result.margin.toFixed(1)}%</p>
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)', borderRadius: 16, border: '2px dashed var(--border)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>📈</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Enter cost and selling price to calculate</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

