import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function LoanCalculator() {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const P = parseFloat(principal);
        const r = parseFloat(rate) / 100 / 12;
        const n = parseFloat(years) * 12;
        if (!P || !r || !n) return;
        const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = monthly * n;
        const totalInterest = totalPayment - P;
        setResult({ monthly, totalPayment, totalInterest, principal: P, interestPct: (totalInterest / totalPayment * 100).toFixed(1) });
    };

    const labelStyle = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
    const inputStyle = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 20 };

    return (
        <ToolPageLayout title="Loan Calculator" description="Calculate monthly payments, total interest and full loan cost instantly." category="Calculators" categoryHref="/calculators" categoryIcon="🧮" icon="🏦" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Loan Details</h2>
                        <label style={labelStyle}>Loan Amount ($)</label>
                        <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="e.g. 10000" style={inputStyle} />
                        <label style={labelStyle}>Annual Interest Rate (%)</label>
                        <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 5.5" style={inputStyle} />
                        <label style={labelStyle}>Loan Term (Years)</label>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                            {[1, 2, 3, 5, 10, 15, 20, 30].map(y => (
                                <button key={y} onClick={() => setYears(String(y))} style={{ padding: '6px 12px', borderRadius: 7, background: years === String(y) ? 'var(--primary)' : 'var(--bg-light)', color: years === String(y) ? '#fff' : 'var(--text-secondary)', border: `1px solid ${years === String(y) ? 'var(--primary)' : 'var(--border)'}`, fontWeight: 600, fontSize: '0.83rem', cursor: 'pointer', transition: 'all 0.2s' }}>{y}yr</button>
                            ))}
                        </div>
                        <input type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="Custom years" style={{ ...inputStyle, marginTop: 8 }} />
                        <button className="btn btn-primary w-full" onClick={calculate}>Calculate Loan</button>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Loan Breakdown</h2>
                        {result ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: 16, padding: '24px', textAlign: 'center', color: '#fff' }}>
                                    <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: 4 }}>Monthly Payment</div>
                                    <div style={{ fontSize: '2.8rem', fontWeight: 900 }}>${result.monthly.toFixed(2)}</div>
                                </div>
                                {[
                                    { label: 'Principal Amount', value: `$${result.principal.toLocaleString()}`, color: 'var(--text-primary)' },
                                    { label: 'Total Interest', value: `$${result.totalInterest.toFixed(2)}`, color: '#EF4444' },
                                    { label: 'Total Payment', value: `$${result.totalPayment.toFixed(2)}`, color: 'var(--primary)' },
                                ].map(row => (
                                    <div key={row.label} style={{ background: 'var(--bg-light)', borderRadius: 10, padding: '14px 18px', display: 'flex', justifyContent: 'space-between', border: '1px solid var(--border-light)' }}>
                                        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{row.label}</span>
                                        <span style={{ fontWeight: 700, color: row.color }}>{row.value}</span>
                                    </div>
                                ))}
                                {/* Interest bar */}
                                <div style={{ borderRadius: 8, overflow: 'hidden', height: 12, display: 'flex' }}>
                                    <div style={{ width: `${100 - parseFloat(result.interestPct)}%`, background: 'var(--primary)' }} />
                                    <div style={{ flex: 1, background: '#EF4444' }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                    <span>Principal ({(100 - parseFloat(result.interestPct)).toFixed(1)}%)</span>
                                    <span>Interest ({result.interestPct}%)</span>
                                </div>
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)', borderRadius: 16, border: '2px dashed var(--border)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🏦</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Fill in loan details to calculate</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

