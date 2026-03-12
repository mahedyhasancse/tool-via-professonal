import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function AgeCalculator() {
    const [dob, setDob] = useState('');
    const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);
    const [result, setResult] = useState(null);

    const calculate = () => {
        if (!dob) return;
        const birth = new Date(dob);
        const target = new Date(targetDate);
        if (birth > target) return;

        let years = target.getFullYear() - birth.getFullYear();
        let months = target.getMonth() - birth.getMonth();
        let days = target.getDate() - birth.getDate();

        if (days < 0) { months--; days += new Date(target.getFullYear(), target.getMonth(), 0).getDate(); }
        if (months < 0) { years--; months += 12; }

        const totalDays = Math.floor((target - birth) / (1000 * 60 * 60 * 24));
        const totalWeeks = Math.floor(totalDays / 7);
        const totalMonths = years * 12 + months;
        const nextBirthday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());
        if (nextBirthday <= target) nextBirthday.setFullYear(target.getFullYear() + 1);
        const daysToNext = Math.floor((nextBirthday - target) / (1000 * 60 * 60 * 24));

        setResult({ years, months, days, totalDays, totalWeeks, totalMonths, daysToNext });
    };

    const labelStyle = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 };
    const inputStyle = { width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text-primary)', background: '#fff', outline: 'none' };

    return (
        <ToolPageLayout title="Age Calculator" description="Calculate exact age in years, months, days and more." category="Calculators" categoryHref="/calculators" categoryIcon="🧮" icon="🎂" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-2" style={{ gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Date Details</h2>
                        <div style={{ marginBottom: 20 }}>
                            <label style={labelStyle}>Date of Birth</label>
                            <input type="date" value={dob} onChange={e => setDob(e.target.value)} style={inputStyle} />
                        </div>
                        <div style={{ marginBottom: 28 }}>
                            <label style={labelStyle}>Age At Date</label>
                            <input type="date" value={targetDate} onChange={e => setTargetDate(e.target.value)} style={inputStyle} />
                        </div>
                        <button className="btn btn-primary w-full" onClick={calculate}>Calculate Age</button>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Your Age</h2>
                        {result ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: 16, padding: '24px', textAlign: 'center', color: '#fff', marginBottom: 8 }}>
                                    <div style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>{result.years}</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.85, marginTop: 4 }}>Years Old</div>
                                    <div style={{ fontSize: '1rem', marginTop: 8, opacity: 0.9 }}>
                                        {result.months} months, {result.days} days
                                    </div>
                                </div>
                                {[
                                    { label: 'Total Months', value: result.totalMonths.toLocaleString() },
                                    { label: 'Total Weeks', value: result.totalWeeks.toLocaleString() },
                                    { label: 'Total Days', value: result.totalDays.toLocaleString() },
                                    { label: 'Days to Next Birthday 🎂', value: result.daysToNext },
                                ].map(row => (
                                    <div key={row.label} style={{ background: 'var(--bg-light)', borderRadius: 10, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', border: '1px solid var(--border-light)' }}>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{row.label}</span>
                                        <span style={{ fontWeight: 700 }}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)', borderRadius: 16, border: '2px dashed var(--border)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🎂</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Select your date of birth</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

