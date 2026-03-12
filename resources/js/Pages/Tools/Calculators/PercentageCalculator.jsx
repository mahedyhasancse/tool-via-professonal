import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function PercentageCalculator() {
    const [mode, setMode] = useState('of');
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [result, setResult] = useState(null);

    const modes = [
        { id: 'of', label: 'X% of Y', desc: 'What is X% of Y?' },
        { id: 'what', label: 'X is what % of Y', desc: 'X is what % of Y?' },
        { id: 'change', label: '% Change', desc: 'Change from X to Y' },
        { id: 'increase', label: '% Increase', desc: 'Increase X by Y%' },
        { id: 'decrease', label: '% Decrease', desc: 'Decrease X by Y%' },
    ];

    const calculate = () => {
        const x = parseFloat(a), y = parseFloat(b);
        if (isNaN(x) || isNaN(y)) return;
        let res;
        if (mode === 'of') res = { label: `${x}% of ${y}`, value: (y * x / 100).toFixed(4) };
        else if (mode === 'what') res = { label: `${x} is what % of ${y}`, value: `${(x / y * 100).toFixed(4)}%` };
        else if (mode === 'change') { const pct = (y - x) / x * 100; res = { label: `Change from ${x} to ${y}`, value: `${pct > 0 ? '+' : ''}${pct.toFixed(4)}%`, color: pct >= 0 ? '#10B981' : '#EF4444' }; }
        else if (mode === 'increase') res = { label: `${x} increased by ${y}%`, value: (x * (1 + y / 100)).toFixed(4) };
        else if (mode === 'decrease') res = { label: `${x} decreased by ${y}%`, value: (x * (1 - y / 100)).toFixed(4) };
        setResult(res);
    };

    const labelStyle = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
    const inputStyle = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text-primary)', background: '#fff', outline: 'none' };

    return (
        <ToolPageLayout
            title="Percentage Calculator"
            description="Calculate percentages in 5 different ways — quick, accurate, and free."
            category="Calculators" categoryHref="/calculators" categoryIcon="🧮" icon="%" badge="free"
        >
            <div style={{ padding: '36px 40px' }}>
                <div style={{ marginBottom: 28 }}>
                    <label style={labelStyle}>Select Calculation Type</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {modes.map(m => (
                            <button key={m.id} onClick={() => { setMode(m.id); setResult(null); }} style={{ padding: '8px 16px', borderRadius: 8, background: mode === m.id ? 'var(--primary)' : 'var(--bg-light)', color: mode === m.id ? '#fff' : 'var(--text-secondary)', border: `1px solid ${mode === m.id ? 'var(--primary)' : 'var(--border)'}`, fontWeight: 600, fontSize: '0.83rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                                {m.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-2" style={{ gap: 24, marginBottom: 24 }}>
                    <div>
                        <label style={labelStyle}>{mode === 'of' ? 'Percentage (X%)' : mode === 'what' ? 'Value (X)' : mode === 'increase' || mode === 'decrease' ? 'Original Value (X)' : 'Original Value (X)'}</label>
                        <input type="number" value={a} onChange={e => setA(e.target.value)} placeholder="Enter X" style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>{mode === 'of' ? 'Total Value (Y)' : mode === 'what' ? 'Total (Y)' : mode === 'increase' || mode === 'decrease' ? 'Percentage (Y%)' : 'New Value (Y)'}</label>
                        <input type="number" value={b} onChange={e => setB(e.target.value)} placeholder="Enter Y" style={inputStyle} />
                    </div>
                </div>
                <button className="btn btn-primary" onClick={calculate} style={{ marginBottom: 24 }}>Calculate</button>
                {result && (
                    <div style={{ background: 'linear-gradient(135deg, #EEF2FF, #F5F3FF)', borderRadius: 16, padding: '24px 28px', border: '2px solid var(--primary)', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 8 }}>{result.label}</p>
                        <p style={{ fontSize: '2.5rem', fontWeight: 900, color: result.color || 'var(--primary)' }}>{result.value}</p>
                    </div>
                )}
            </div>
        </ToolPageLayout>
    );
}

