import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function RoiCalculator() {
    const [invested, setInvested] = useState('');
    const [returned, setReturned] = useState('');
    const [months, setMonths] = useState('12');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const inv = parseFloat(invested), ret = parseFloat(returned), m = parseFloat(months);
        if (!inv || !ret || !m) return;
        const roi = ((ret - inv) / inv) * 100;
        const annualRoi = roi * (12 / m);
        const netProfit = ret - inv;
        setResult({ roi, annualRoi, netProfit, paybackMonths: inv / (netProfit / m) });
    };

    const s = { label: { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }, input: { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 20 } };

    return (
        <ToolPageLayout title="ROI Calculator" description="Measure the profitability and return on any investment." category="Calculators" categoryHref="/dashboard/calculators" categoryIcon="🧮" icon="💹" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Investment Details</h2>
                        <label style={s.label}>Initial Investment ($)</label>
                        <input type="number" value={invested} onChange={e => setInvested(e.target.value)} placeholder="e.g. 10000" style={s.input} />
                        <label style={s.label}>Final Return / Value ($)</label>
                        <input type="number" value={returned} onChange={e => setReturned(e.target.value)} placeholder="e.g. 15000" style={s.input} />
                        <label style={s.label}>Time Period (Months)</label>
                        <input type="number" value={months} onChange={e => setMonths(e.target.value)} placeholder="e.g. 12" style={s.input} />
                        <button className="btn btn-primary w-full" onClick={calculate}>Calculate ROI</button>
                    </div>
                    <div>
                        {result ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                <div style={{ background: result.roi >= 0 ? 'linear-gradient(135deg, #10B981, #06B6D4)' : 'linear-gradient(135deg, #EF4444, #F97316)', borderRadius: 16, padding: '28px', textAlign: 'center', color: '#fff' }}>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: 6 }}>Return on Investment</div>
                                    <div style={{ fontSize: '3rem', fontWeight: 900 }}>{result.roi.toFixed(2)}%</div>
                                    <div style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: 6 }}>
                                        {result.roi >= 0 ? '✅ Profitable' : '❌ Loss-making'}
                                    </div>
                                </div>
                                {[
                                    { label: 'Net Profit / Loss', value: `$${result.netProfit.toFixed(2)}`, color: result.netProfit >= 0 ? '#10B981' : '#EF4444' },
                                    { label: 'Annualized ROI', value: `${result.annualRoi.toFixed(2)}%`, color: 'var(--primary)' },
                                    { label: 'Payback Period', value: `${result.paybackMonths.toFixed(1)} months`, color: 'var(--accent)' },
                                ].map(row => (
                                    <div key={row.label} style={{ background: 'var(--bg-light)', borderRadius: 10, padding: '14px 18px', display: 'flex', justifyContent: 'space-between', border: '1px solid var(--border-light)' }}>
                                        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{row.label}</span>
                                        <span style={{ fontWeight: 700, color: row.color }}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)', borderRadius: 16, border: '2px dashed var(--border)', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>💹</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Enter investment details</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

