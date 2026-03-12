import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

const UNITS = {
    Length: {
        Meter: 1, Kilometer: 0.001, Centimeter: 100, Millimeter: 1000,
        Mile: 0.000621371, Yard: 1.09361, Foot: 3.28084, Inch: 39.3701,
    },
    Weight: {
        Kilogram: 1, Gram: 1000, Milligram: 1e6, 'Metric Ton': 0.001,
        Pound: 2.20462, Ounce: 35.274, Stone: 0.157473,
    },
    Temperature: { Celsius: null, Fahrenheit: null, Kelvin: null },
    Volume: {
        Liter: 1, Milliliter: 1000, 'Cubic Meter': 0.001,
        Gallon: 0.264172, Quart: 1.05669, Pint: 2.11338, Cup: 4.22675,
    },
    Speed: {
        'km/h': 1, 'm/s': 0.277778, mph: 0.621371, Knot: 0.539957,
    },
    Area: {
        'm²': 1, 'km²': 1e-6, 'cm²': 10000, Hectare: 0.0001,
        Acre: 0.000247105, 'ft²': 10.7639, 'yd²': 1.19599,
    },
};

function convertTemp(value, from, to) {
    let celsius;
    if (from === 'Celsius') celsius = value;
    else if (from === 'Fahrenheit') celsius = (value - 32) * 5 / 9;
    else celsius = value - 273.15;

    if (to === 'Celsius') return celsius;
    if (to === 'Fahrenheit') return celsius * 9 / 5 + 32;
    return celsius + 273.15;
}

export default function UnitConverter() {
    const [category, setCategory] = useState('Length');
    const [fromUnit, setFromUnit] = useState('Meter');
    const [toUnit, setToUnit] = useState('Foot');
    const [value, setValue] = useState('1');
    const [result, setResult] = useState('');

    const units = Object.keys(UNITS[category]);

    const convert = () => {
        const v = parseFloat(value);
        if (isNaN(v)) return;
        let res;
        if (category === 'Temperature') {
            res = convertTemp(v, fromUnit, toUnit);
        } else {
            const fromFactor = UNITS[category][fromUnit];
            const toFactor = UNITS[category][toUnit];
            res = (v / fromFactor) * toFactor;
        }
        setResult(res.toLocaleString('en', { maximumFractionDigits: 8 }));
    };

    const swap = () => { setFromUnit(toUnit); setToUnit(fromUnit); setResult(''); };

    const sel = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', cursor: 'pointer' };

    return (
        <ToolPageLayout title="Unit Converter" description="Convert between any units — length, weight, temperature, area, speed, and volume." category="Business Tools" categoryHref="/business-tools" categoryIcon="💼" icon="📏" badge="free">
            <div style={{ padding: '36px 40px' }}>
                {/* Category Tabs */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                    {Object.keys(UNITS).map(cat => (
                        <button key={cat} onClick={() => { setCategory(cat); setFromUnit(Object.keys(UNITS[cat])[0]); setToUnit(Object.keys(UNITS[cat])[1]); setResult(''); }}
                            style={{ padding: '8px 18px', borderRadius: 8, background: category === cat ? 'var(--primary)' : 'var(--bg-light)', color: category === cat ? '#fff' : 'var(--text-secondary)', border: `1px solid ${category === cat ? 'var(--primary)' : 'var(--border)'}`, fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 20, alignItems: 'end', marginBottom: 24 }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>From</label>
                        <input type="number" value={value} onChange={e => setValue(e.target.value)} style={{ ...sel, fontSize: '1.2rem', fontWeight: 700, marginBottom: 10 }} />
                        <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} style={sel}>
                            {units.map(u => <option key={u}>{u}</option>)}
                        </select>
                    </div>
                    <button onClick={swap} style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4, boxShadow: '0 4px 14px rgba(37,99,235,0.3)', flexShrink: 0, transition: 'all 0.2s' }}>
                        ⇄
                    </button>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>To</label>
                        <div style={{ ...sel, fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', display: 'flex', alignItems: 'center', marginBottom: 10, minHeight: 45 }}>
                            {result || '—'}
                        </div>
                        <select value={toUnit} onChange={e => setToUnit(e.target.value)} style={sel}>
                            {units.map(u => <option key={u}>{u}</option>)}
                        </select>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={convert} style={{ width: '100%', padding: '13px' }}>
                    Convert {category}
                </button>

                {result && (
                    <div style={{ marginTop: 20, background: 'linear-gradient(135deg, #EEF2FF, #F5F3FF)', borderRadius: 14, padding: '20px 24px', textAlign: 'center', border: '2px solid var(--primary)' }}>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Result</div>
                        <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary)', marginTop: 4 }}>
                            {value} {fromUnit} = <span>{result}</span> {toUnit}
                        </div>
                    </div>
                )}
            </div>
        </ToolPageLayout>
    );
}

