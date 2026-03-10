import { useState } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

export default function QuotationGenerator() {
    const [from, setFrom] = useState({ name: '', email: '', address: '' });
    const [to, setTo] = useState({ name: '', email: '', address: '' });
    const [items, setItems] = useState([{ desc: '', qty: 1, price: '' }]);
    const [quoteNo, setQuoteNo] = useState(`QTE-${Date.now().toString().slice(-6)}`);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [validUntil, setValidUntil] = useState('');
    const [notes, setNotes] = useState('This quotation is valid until the date above. Prices are subject to change after expiry.');
    const [vatRate, setVatRate] = useState('0');

    const addItem = () => setItems([...items, { desc: '', qty: 1, price: '' }]);
    const removeItem = (i) => setItems(items.filter((_, idx) => idx !== i));
    const updateItem = (i, field, val) => setItems(items.map((item, idx) => idx === i ? { ...item, [field]: val } : item));

    const subtotal = items.reduce((s, i) => s + (parseFloat(i.qty) || 0) * (parseFloat(i.price) || 0), 0);
    const vat = subtotal * (parseFloat(vatRate) / 100);
    const total = subtotal + vat;

    const inpStyle = { padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', width: '100%' };
    const label = { fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 4 };

    return (
        <ToolPageLayout title="Quotation Generator" description="Create professional business quotations instantly — free, no signup." category="Business Tools" categoryHref="/dashboard" categoryIcon="💼" icon="📋" badge="free">
            <div style={{ padding: '32px 40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Quotation Details</h2>
                        <span className="badge badge-primary" style={{ marginTop: 4 }}>Quotation</span>
                    </div>
                    <button className="btn btn-primary" onClick={() => window.print()}>🖨️ Print / Save PDF</button>
                </div>

                <div className="grid grid-2" style={{ gap: 20, marginBottom: 24 }}>
                    <div>
                        <label style={label}>Quotation Number</label>
                        <input value={quoteNo} onChange={e => setQuoteNo(e.target.value)} style={inpStyle} />
                    </div>
                    <div>
                        <label style={label}>Date</label>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)} style={inpStyle} />
                    </div>
                    <div>
                        <label style={label}>Valid Until</label>
                        <input type="date" value={validUntil} onChange={e => setValidUntil(e.target.value)} style={inpStyle} />
                    </div>
                    <div>
                        <label style={label}>VAT Rate (%)</label>
                        <input type="number" value={vatRate} onChange={e => setVatRate(e.target.value)} placeholder="0" style={inpStyle} />
                    </div>
                </div>

                <div className="grid grid-2" style={{ gap: 20, marginBottom: 28 }}>
                    {[{ label: 'From (Your Company)', data: from, setData: setFrom }, { label: 'To (Client / Prospect)', data: to, setData: setTo }].map(({ label: sLabel, data, setData }) => (
                        <div key={sLabel} style={{ background: 'var(--bg-light)', borderRadius: 12, padding: '20px', border: '1px solid var(--border-light)' }}>
                            <h3 style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: 14, color: 'var(--text-secondary)' }}>{sLabel}</h3>
                            {['name', 'email', 'address'].map(field => (
                                <div key={field} style={{ marginBottom: 10 }}>
                                    <label style={label}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                    <input value={data[field]} onChange={e => setData(prev => ({ ...prev, [field]: e.target.value }))} placeholder={`Enter ${field}`} style={inpStyle} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 14 }}>Items / Services</h3>
                <div style={{ marginBottom: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 120px 40px', gap: 8, marginBottom: 8 }}>
                        {['Description', 'Qty', 'Unit Price', ''].map(h => (
                            <div key={h} style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', padding: '0 4px' }}>{h}</div>
                        ))}
                    </div>
                    {items.map((item, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 120px 40px', gap: 8, marginBottom: 8 }}>
                            <input value={item.desc} onChange={e => updateItem(i, 'desc', e.target.value)} placeholder="Service / product description" style={inpStyle} />
                            <input type="number" value={item.qty} onChange={e => updateItem(i, 'qty', e.target.value)} style={inpStyle} min={1} />
                            <input type="number" value={item.price} onChange={e => updateItem(i, 'price', e.target.value)} placeholder="0.00" style={inpStyle} />
                            <button onClick={() => removeItem(i)} style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, color: '#EF4444', cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
                        </div>
                    ))}
                    <button onClick={addItem} className="btn btn-secondary btn-sm" style={{ marginTop: 8 }}>+ Add Item</button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ minWidth: 280 }}>
                        {[
                            { label: 'Subtotal', value: `$${subtotal.toFixed(2)}` },
                            { label: `VAT (${vatRate}%)`, value: `$${vat.toFixed(2)}` },
                        ].map(row => (
                            <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>{row.label}</span>
                                <span style={{ fontWeight: 600 }}>{row.value}</span>
                            </div>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>
                            <span>Total</span><span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 16 }}>
                    <label style={label}>Terms & Notes</label>
                    <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} style={{ ...inpStyle, resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.6 }} />
                </div>
            </div>
        </ToolPageLayout>
    );
}

