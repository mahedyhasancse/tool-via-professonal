import { useState, useEffect } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

// Full list of all countries with their currency codes
const CURRENCIES = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
    { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪' },
    { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦' },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
    { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
    { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
    { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
    { code: 'KWD', name: 'Kuwaiti Dinar', flag: '🇰🇼' },
    { code: 'BHD', name: 'Bahraini Dinar', flag: '🇧🇭' },
    { code: 'QAR', name: 'Qatari Riyal', flag: '🇶🇦' },
    { code: 'OMR', name: 'Omani Rial', flag: '🇴🇲' },
    { code: 'JOD', name: 'Jordanian Dinar', flag: '🇯🇴' },
    { code: 'EGP', name: 'Egyptian Pound', flag: '🇪🇬' },
    { code: 'PKR', name: 'Pakistani Rupee', flag: '🇵🇰' },
    { code: 'BDT', name: 'Bangladeshi Taka', flag: '🇧🇩' },
    { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
    { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰' },
    { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿' },
    { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪' },
    { code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴' },
    { code: 'DKK', name: 'Danish Krone', flag: '🇩🇰' },
    { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦' },
    { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷' },
    { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽' },
    { code: 'RUB', name: 'Russian Ruble', flag: '🇷🇺' },
    { code: 'TRY', name: 'Turkish Lira', flag: '🇹🇷' },
    { code: 'PLN', name: 'Polish Zloty', flag: '🇵🇱' },
    { code: 'CZK', name: 'Czech Koruna', flag: '🇨🇿' },
    { code: 'HUF', name: 'Hungarian Forint', flag: '🇭🇺' },
    { code: 'RON', name: 'Romanian Leu', flag: '🇷🇴' },
    { code: 'IDR', name: 'Indonesian Rupiah', flag: '🇮🇩' },
    { code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾' },
    { code: 'THB', name: 'Thai Baht', flag: '🇹🇭' },
    { code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭' },
    { code: 'VND', name: 'Vietnamese Dong', flag: '🇻🇳' },
    { code: 'KRW', name: 'South Korean Won', flag: '🇰🇷' },
    { code: 'TWD', name: 'Taiwan Dollar', flag: '🇹🇼' },
    { code: 'NGN', name: 'Nigerian Naira', flag: '🇳🇬' },
    { code: 'KES', name: 'Kenyan Shilling', flag: '🇰🇪' },
    { code: 'GHS', name: 'Ghanaian Cedi', flag: '🇬🇭' },
    { code: 'MAD', name: 'Moroccan Dirham', flag: '🇲🇦' },
    { code: 'TND', name: 'Tunisian Dinar', flag: '🇹🇳' },
    { code: 'DZD', name: 'Algerian Dinar', flag: '🇩🇿' },
    { code: 'LYD', name: 'Libyan Dinar', flag: '🇱🇾' },
    { code: 'IQD', name: 'Iraqi Dinar', flag: '🇮🇶' },
    { code: 'SYP', name: 'Syrian Pound', flag: '🇸🇾' },
    { code: 'LBP', name: 'Lebanese Pound', flag: '🇱🇧' },
    { code: 'YER', name: 'Yemeni Rial', flag: '🇾🇪' },
    { code: 'AFN', name: 'Afghan Afghani', flag: '🇦🇫' },
    { code: 'NPR', name: 'Nepalese Rupee', flag: '🇳🇵' },
    { code: 'LKR', name: 'Sri Lankan Rupee', flag: '🇱🇰' },
    { code: 'MMK', name: 'Myanmar Kyat', flag: '🇲🇲' },
    { code: 'KHR', name: 'Cambodian Riel', flag: '🇰🇭' },
    { code: 'ETB', name: 'Ethiopian Birr', flag: '🇪🇹' },
    { code: 'TZS', name: 'Tanzanian Shilling', flag: '🇹🇿' },
    { code: 'UGX', name: 'Ugandan Shilling', flag: '🇺🇬' },
    { code: 'MZN', name: 'Mozambican Metical', flag: '🇲🇿' },
    { code: 'COP', name: 'Colombian Peso', flag: '🇨🇴' },
    { code: 'ARS', name: 'Argentine Peso', flag: '🇦🇷' },
    { code: 'CLP', name: 'Chilean Peso', flag: '🇨🇱' },
    { code: 'PEN', name: 'Peruvian Sol', flag: '🇵🇪' },
    { code: 'VES', name: 'Venezuelan Bolívar', flag: '🇻🇪' },
    { code: 'UYU', name: 'Uruguayan Peso', flag: '🇺🇾' },
    { code: 'PYG', name: 'Paraguayan Guaraní', flag: '🇵🇾' },
    { code: 'BOB', name: 'Bolivian Boliviano', flag: '🇧🇴' },
    { code: 'GTQ', name: 'Guatemalan Quetzal', flag: '🇬🇹' },
    { code: 'CRC', name: 'Costa Rican Colón', flag: '🇨🇷' },
    { code: 'DOP', name: 'Dominican Peso', flag: '🇩🇴' },
    { code: 'UAH', name: 'Ukrainian Hryvnia', flag: '🇺🇦' },
    { code: 'GEL', name: 'Georgian Lari', flag: '🇬🇪' },
    { code: 'AMD', name: 'Armenian Dram', flag: '🇦🇲' },
    { code: 'AZN', name: 'Azerbaijani Manat', flag: '🇦🇿' },
    { code: 'KZT', name: 'Kazakhstani Tenge', flag: '🇰🇿' },
    { code: 'UZS', name: 'Uzbekistani Som', flag: '🇺🇿' },
    { code: 'IRR', name: 'Iranian Rial', flag: '🇮🇷' },
];

export default function CurrencyConverter() {
    const [amount, setAmount] = useState('1');
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('EUR');
    const [result, setResult] = useState(null);
    const [rates, setRates] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [lastUpdated, setLastUpdated] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => { fetchRates(from); }, [from]);

    const fetchRates = async (base) => {
        setLoading(true); setError('');
        try {
            const res = await fetch(`/api/currency/rates?base=${base}`);
            if (!res.ok) throw new Error('Failed');
            const data = await res.json();
            setRates(data.rates || {});
            setLastUpdated(data.time_last_updated || '');
            if (data.rates[to]) {
                const conv = parseFloat(amount) * data.rates[to];
                setResult({ value: conv, rate: data.rates[to] });
            }
        } catch {
            setError('Failed to fetch rates. Using demo data.');
        } finally { setLoading(false); }
    };

    const convert = () => {
        const a = parseFloat(amount);
        if (isNaN(a) || !rates[to]) return;
        setResult({ value: a * rates[to], rate: rates[to] });
    };

    const swap = () => { setFrom(to); setTo(from); setResult(null); };

    const filteredCurrencies = CURRENCIES.filter(c =>
        c.code.toLowerCase().includes(search.toLowerCase()) ||
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    const selectStyle = {
        width: '100%', padding: '11px 16px', borderRadius: 10,
        border: '1px solid var(--border)', fontSize: '0.88rem',
        color: 'var(--text-primary)', background: '#fff', outline: 'none',
        cursor: 'pointer',
    };

    return (
        <ToolPageLayout title="Currency Converter" description="Convert between 80+ world currencies with real-time exchange rates." category="Business Tools" categoryHref="/dashboard" categoryIcon="💼" icon="💱" badge="free">
            <div style={{ padding: '36px 40px' }}>
                {error && (
                    <div style={{ background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 10, padding: '12px 16px', marginBottom: 20, fontSize: '0.85rem', color: '#92400E' }}>
                        ⚠️ {error}
                    </div>
                )}

                {/* Main converter */}
                <div style={{ background: 'linear-gradient(135deg, #EEF2FF, #F5F3FF)', borderRadius: 16, padding: '32px', border: '1px solid rgba(37,99,235,0.1)', marginBottom: 32 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'end' }}>
                        {/* From */}
                        <div>
                            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>Amount</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                                style={{ ...selectStyle, fontSize: '1.2rem', fontWeight: 700 }}
                            />
                            <select value={from} onChange={e => setFrom(e.target.value)} style={{ ...selectStyle, marginTop: 10 }}>
                                {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code} — {c.name}</option>)}
                            </select>
                        </div>

                        {/* Swap */}
                        <button onClick={swap} style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4, flexShrink: 0, boxShadow: '0 4px 14px rgba(37,99,235,0.35)', transition: 'all 0.2s' }}>
                            ⇄
                        </button>

                        {/* To */}
                        <div>
                            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>Converted To</label>
                            <div style={{ ...selectStyle, fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', background: '#fff', display: 'flex', alignItems: 'center', minHeight: 45 }}>
                                {loading ? '...' : result ? result.value.toFixed(4) : '—'}
                            </div>
                            <select value={to} onChange={e => { setTo(e.target.value); setResult(null); }} style={{ ...selectStyle, marginTop: 10 }}>
                                {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code} — {c.name}</option>)}
                            </select>
                        </div>
                    </div>

                    <button className="btn btn-primary" style={{ width: '100%', marginTop: 20, padding: '13px' }} onClick={convert} disabled={loading}>
                        {loading ? '⏳ Loading rates…' : '💱 Convert Now'}
                    </button>

                    {result && (
                        <div style={{ marginTop: 20, textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                                {amount} {from} = <span style={{ color: 'var(--primary)' }}>{result.value.toFixed(4)} {to}</span>
                            </div>
                            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 6 }}>
                                1 {from} = {result.rate.toFixed(6)} {to}
                                {lastUpdated && <> · Updated: {new Date(lastUpdated).toLocaleDateString()}</>}
                            </div>
                        </div>
                    )}
                </div>

                {/* Rate table */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>All Exchange Rates (Base: {from})</h3>
                        <input
                            type="text"
                            placeholder="Search currency…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid var(--border)', fontSize: '0.85rem', outline: 'none', width: 200 }}
                        />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10, maxHeight: 400, overflowY: 'auto', paddingRight: 4 }}>
                        {filteredCurrencies.map(c => {
                            const rate = rates[c.code];
                            return (
                                <div
                                    key={c.code}
                                    onClick={() => { setTo(c.code); convert(); }}
                                    style={{ background: to === c.code ? 'rgba(37,99,235,0.07)' : 'var(--bg-light)', border: `1px solid ${to === c.code ? 'var(--primary)' : 'var(--border-light)'}`, borderRadius: 10, padding: '12px 14px', cursor: 'pointer', transition: 'all 0.2s' }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{c.flag} {c.code}</span>
                                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary)' }}>
                                            {rate ? rate.toFixed(4) : '—'}
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>{c.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </ToolPageLayout>
    );
}

