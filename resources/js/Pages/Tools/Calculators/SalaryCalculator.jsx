import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';
import { CURRENCIES, formatCurrency, getCurrencyByCode } from '../../../data/currencies';

export default function SalaryCalculator() {
    const [gross, setGross] = useState('');
    const [period, setPeriod] = useState('annual');
    const [taxRate, setTaxRate] = useState('20');
    const [currency, setCurrency] = useState('USD');
    const [result, setResult] = useState(null);

    const calculate = () => {
        let annual = parseFloat(gross);
        if (isNaN(annual)) return;
        if (period === 'monthly') annual *= 12;
        else if (period === 'hourly') annual *= 40 * 52;
        else if (period === 'daily') annual *= 260;
        const tax = parseFloat(taxRate);
        const taxAmount = (annual * tax) / 100;
        const net = annual - taxAmount;
        setResult({ annual, monthly: annual / 12, weekly: annual / 52, daily: annual / 260, hourly: annual / (40 * 52), taxAmount, net, netMonthly: net / 12 });
    };

    const s = { label: { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }, input: { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 20 } };

    return (
        <ToolPageLayout title="Salary Calculator" description="Convert salary between hourly, daily, weekly, monthly, and annual rates with tax." category="Calculators" categoryHref="/calculators" categoryIcon="🧮" icon="💼" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Salary Details</h2>
                        <label style={s.label}>Currency</label>
                        <select value={currency} onChange={e => setCurrency(e.target.value)} style={s.input}>
                            {CURRENCIES.map(c => (
                                <option key={c.code} value={c.code}>{c.flag} {c.code} - {c.name}</option>
                            ))}
                        </select>
                        <label style={s.label}>Gross Salary</label>
                        <input type="number" value={gross} onChange={e => setGross(e.target.value)} placeholder="Enter amount" style={s.input} />
                        <label style={s.label}>Pay Period</label>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                            {[{ id: 'hourly', label: 'Hourly' }, { id: 'daily', label: 'Daily' }, { id: 'monthly', label: 'Monthly' }, { id: 'annual', label: 'Annual' }].map(p => (
                                <button key={p.id} onClick={() => setPeriod(p.id)} style={{ padding: '8px 16px', borderRadius: 8, background: period === p.id ? 'var(--primary)' : 'var(--bg-light)', color: period === p.id ? '#fff' : 'var(--text-secondary)', border: `1px solid ${period === p.id ? 'var(--primary)' : 'var(--border)'}`, fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>{p.label}</button>
                            ))}
                        </div>
                        <label style={s.label}>Tax Rate (%)</label>
                        <input type="number" value={taxRate} onChange={e => setTaxRate(e.target.value)} placeholder="e.g. 20" style={s.input} />
                        <button className="btn btn-primary w-full" onClick={calculate}>Calculate Salary</button>
                    </div>
                    <div>
                        {result ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: 16, padding: '22px', textAlign: 'center', color: '#fff', marginBottom: 4 }}>
                                    <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Net Monthly Take-Home</div>
                                    <div style={{ fontSize: '2.6rem', fontWeight: 900 }}>{formatCurrency(result.netMonthly, currency)}</div>
                                </div>
                                {[
                                    { label: '📅 Annual (Gross)', value: formatCurrency(result.annual, currency) },
                                    { label: '💸 Tax Deducted', value: formatCurrency(result.taxAmount, currency), color: '#EF4444' },
                                    { label: '✅ Annual Net', value: formatCurrency(result.net, currency), color: '#10B981' },
                                    { label: '🗓️ Weekly', value: formatCurrency(result.weekly, currency) },
                                    { label: '📆 Daily', value: formatCurrency(result.daily, currency) },
                                    { label: '⏱️ Hourly', value: formatCurrency(result.hourly, currency) },
                                ].map(row => (
                                    <div key={row.label} style={{ background: 'var(--bg-light)', borderRadius: 8, padding: '11px 16px', display: 'flex', justifyContent: 'space-between', border: '1px solid var(--border-light)' }}>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{row.label}</span>
                                        <span style={{ fontWeight: 700, color: row.color || 'var(--text-primary)', fontSize: '0.95rem' }}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)', borderRadius: 16, border: '2px dashed var(--border)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>💼</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Enter your salary to convert</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

