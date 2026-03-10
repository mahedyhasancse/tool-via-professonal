import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function VatCalculator() {
    const [amount, setAmount] = useState('');
    const [vatRate, setVatRate] = useState('20');
    const [mode, setMode] = useState('exclusive'); // exclusive | inclusive
    const [result, setResult] = useState(null);

    const calculate = () => {
        const a = parseFloat(amount);
        const v = parseFloat(vatRate);
        if (isNaN(a) || isNaN(v)) return;

        if (mode === 'exclusive') {
            const vatAmount = (a * v) / 100;
            const total = a + vatAmount;
            setResult({ net: a, vatAmount, total, rate: v });
        } else {
            const net = a / (1 + v / 100);
            const vatAmount = a - net;
            setResult({ net, vatAmount, total: a, rate: v });
        }
    };

    const reset = () => { setAmount(''); setResult(null); };

    return (
        <ToolPageLayout
            title="VAT Calculator"
            description="Calculate VAT instantly — add or remove VAT from any amount with any rate."
            category="Calculators"
            categoryHref="/dashboard/calculators"
            categoryIcon="🧮"
            icon="🧾"
            badge="free"
        >
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    {/* Inputs */}
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24, color: 'var(--text-primary)' }}>
                            Enter Details
                        </h2>

                        {/* Mode Toggle */}
                        <div style={{ marginBottom: 24 }}>
                            <label style={labelStyle}>Calculation Mode</label>
                            <div style={{ display: 'flex', gap: 0, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)' }}>
                                {[
                                    { value: 'exclusive', label: 'Add VAT (Exclusive)' },
                                    { value: 'inclusive', label: 'Remove VAT (Inclusive)' },
                                ].map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => setMode(opt.value)}
                                        style={{
                                            flex: 1, padding: '10px 8px',
                                            background: mode === opt.value ? 'var(--primary)' : '#fff',
                                            color: mode === opt.value ? '#fff' : 'var(--text-secondary)',
                                            border: 'none', cursor: 'pointer',
                                            fontSize: '0.83rem', fontWeight: 600,
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: 20 }}>
                            <label style={labelStyle}>Amount ($)</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ marginBottom: 28 }}>
                            <label style={labelStyle}>VAT Rate (%)</label>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                                {['5', '10', '15', '20', '25'].map((rate) => (
                                    <button
                                        key={rate}
                                        onClick={() => setVatRate(rate)}
                                        style={{
                                            padding: '7px 16px', borderRadius: 8,
                                            background: vatRate === rate ? 'var(--primary)' : 'var(--bg-light)',
                                            color: vatRate === rate ? '#fff' : 'var(--text-secondary)',
                                            border: `1px solid ${vatRate === rate ? 'var(--primary)' : 'var(--border)'}`,
                                            fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        {rate}%
                                    </button>
                                ))}
                            </div>
                            <input
                                type="number"
                                value={vatRate}
                                onChange={(e) => setVatRate(e.target.value)}
                                placeholder="Custom rate"
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: 12 }}>
                            <button className="btn btn-primary" style={{ flex: 1 }} onClick={calculate}>
                                Calculate VAT
                            </button>
                            <button className="btn btn-secondary" onClick={reset}>Reset</button>
                        </div>
                    </div>

                    {/* Result */}
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Result</h2>
                        {result ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                {[
                                    { label: 'Net Amount (Ex. VAT)', value: `$${result.net.toFixed(2)}`, color: 'var(--text-primary)' },
                                    { label: `VAT Amount (${result.rate}%)`, value: `$${result.vatAmount.toFixed(2)}`, color: 'var(--secondary)' },
                                    { label: 'Total Amount (Inc. VAT)', value: `$${result.total.toFixed(2)}`, color: 'var(--primary)', big: true },
                                ].map((row) => (
                                    <div key={row.label} style={{
                                        background: row.big ? 'linear-gradient(135deg, #EEF2FF, #F5F3FF)' : 'var(--bg-light)',
                                        borderRadius: 12, padding: '16px 20px',
                                        border: row.big ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    }}>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{row.label}</span>
                                        <span style={{ fontSize: row.big ? '1.4rem' : '1.1rem', fontWeight: 800, color: row.color }}>
                                            {row.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={emptyState}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🧾</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    Enter an amount and click Calculate
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

const labelStyle = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
const inputStyle = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text-primary)', background: '#fff', transition: 'border-color 0.2s', outline: 'none' };
const emptyState = { textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)', borderRadius: 16, border: '2px dashed var(--border)' };

