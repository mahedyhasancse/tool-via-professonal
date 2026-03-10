import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function BreakEvenCalculator() {
    const [fixedCosts, setFixedCosts] = useState('');
    const [varCost, setVarCost] = useState('');
    const [price, setPrice] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const fc = parseFloat(fixedCosts), vc = parseFloat(varCost), p = parseFloat(price);
        if (!fc || isNaN(vc) || !p || p <= vc) return;
        const contribution = p - vc;
        const units = fc / contribution;
        const revenue = units * p;
        const margin = (contribution / p) * 100;
        setResult({ units: Math.ceil(units), revenue, contribution, margin });
    };

    const s = { label: { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }, input: { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 20 } };

    return (
        <ToolPageLayout title="Break Even Calculator" description="Find exactly how many units you need to sell to cover all costs." category="Business Tools" categoryHref="/dashboard" categoryIcon="💼" icon="⚖️" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Cost & Price Details</h2>
                        <label style={s.label}>Total Fixed Costs ($)</label>
                        <input type="number" value={fixedCosts} onChange={e => setFixedCosts(e.target.value)} placeholder="e.g. 10000 (rent, salaries, etc.)" style={s.input} />
                        <label style={s.label}>Variable Cost per Unit ($)</label>
                        <input type="number" value={varCost} onChange={e => setVarCost(e.target.value)} placeholder="e.g. 15 (materials, packaging)" style={s.input} />
                        <label style={s.label}>Selling Price per Unit ($)</label>
                        <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="e.g. 45" style={s.input} />
                        <button className="btn btn-primary w-full" onClick={calculate}>Calculate Break-Even</button>
                    </div>
                    <div>
                        {result ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: 16, padding: '28px', textAlign: 'center', color: '#fff' }}>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.85 }}>Break-Even Point</div>
                                    <div style={{ fontSize: '3rem', fontWeight: 900 }}>{result.units.toLocaleString()}</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>units to sell</div>
                                </div>
                                {[
                                    { label: 'Break-Even Revenue', value: `$${result.revenue.toFixed(2)}` },
                                    { label: 'Contribution Margin', value: `$${result.contribution.toFixed(2)} / unit` },
                                    { label: 'Margin Ratio', value: `${result.margin.toFixed(1)}%` },
                                ].map(row => (
                                    <div key={row.label} style={{ background: 'var(--bg-light)', borderRadius: 10, padding: '14px 18px', display: 'flex', justifyContent: 'space-between', border: '1px solid var(--border-light)' }}>
                                        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{row.label}</span>
                                        <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)', borderRadius: 16, border: '2px dashed var(--border)', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>⚖️</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Enter costs and price above</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

