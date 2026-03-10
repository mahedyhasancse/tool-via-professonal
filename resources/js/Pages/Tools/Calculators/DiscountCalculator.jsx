import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function DiscountCalculator() {
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const p = parseFloat(price), d = parseFloat(discount);
        if (!p || isNaN(d)) return;
        const saved = (p * d) / 100;
        const finalPrice = p - saved;
        setResult({ original: p, discount: d, saved, finalPrice });
    };

    const s = { label: { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }, input: { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 20 } };

    return (
        <ToolPageLayout title="Discount Calculator" description="Find the final price after applying any discount percentage." category="Calculators" categoryHref="/dashboard/calculators" categoryIcon="🧮" icon="🏷️" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Discount Details</h2>
                        <label style={s.label}>Original Price ($)</label>
                        <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="e.g. 200" style={s.input} />
                        <label style={s.label}>Discount (%)</label>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                            {[5, 10, 15, 20, 25, 30, 40, 50].map(d => (
                                <button key={d} onClick={() => setDiscount(String(d))} style={{ padding: '7px 12px', borderRadius: 8, background: discount === String(d) ? 'var(--primary)' : 'var(--bg-light)', color: discount === String(d) ? '#fff' : 'var(--text-secondary)', border: `1px solid ${discount === String(d) ? 'var(--primary)' : 'var(--border)'}`, fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.2s' }}>{d}%</button>
                            ))}
                        </div>
                        <input type="number" value={discount} onChange={e => setDiscount(e.target.value)} placeholder="Custom %" style={{ ...s.input, marginTop: 8 }} />
                        <button className="btn btn-primary w-full" onClick={calculate}>Calculate Discount</button>
                    </div>
                    <div>
                        {result ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                <div style={{ background: 'linear-gradient(135deg, #10B981, #06B6D4)', borderRadius: 16, padding: '28px', textAlign: 'center', color: '#fff' }}>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: 4 }}>You Pay</div>
                                    <div style={{ fontSize: '3rem', fontWeight: 900 }}>${result.finalPrice.toFixed(2)}</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: 8, textDecoration: 'line-through' }}>${result.original.toFixed(2)}</div>
                                </div>
                                <div style={{ background: '#FEF3C7', borderRadius: 12, padding: '18px 20px', border: '1px solid #FDE68A', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 700, color: '#92400E' }}>💰 You Save</span>
                                    <span style={{ fontWeight: 900, fontSize: '1.4rem', color: '#D97706' }}>${result.saved.toFixed(2)}</span>
                                </div>
                                <div style={{ background: 'var(--bg-light)', borderRadius: 10, padding: '14px 18px', display: 'flex', justifyContent: 'space-between', border: '1px solid var(--border-light)' }}>
                                    <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Savings Rate</span>
                                    <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{result.discount}%</span>
                                </div>
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)', borderRadius: 16, border: '2px dashed var(--border)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🏷️</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Enter price and discount</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

