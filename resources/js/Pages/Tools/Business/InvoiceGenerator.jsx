import { useState, useRef } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';
import html2pdf from 'html2pdf.js';
import { CURRENCIES, formatCurrency, getCurrencyByCode } from '../../../data/currencies';

export default function InvoiceGenerator() {
    const [from, setFrom] = useState({ name: '', email: '', address: '' });
    const [to, setTo] = useState({ name: '', email: '', address: '' });
    const [items, setItems] = useState([{ desc: '', qty: 1, price: '' }]);
    const [invoiceNo, setInvoiceNo] = useState(`INV-${Date.now().toString().slice(-6)}`);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [dueDate, setDueDate] = useState('');
    const [notes, setNotes] = useState('');
    const [vatRate, setVatRate] = useState('0');
    const [currency, setCurrency] = useState('USD');

    const addItem = () => setItems([...items, { desc: '', qty: 1, price: '' }]);
    const removeItem = (i) => setItems(items.filter((_, idx) => idx !== i));
    const updateItem = (i, field, val) => setItems(items.map((item, idx) => idx === i ? { ...item, [field]: val } : item));

    const subtotal = items.reduce((s, i) => s + (parseFloat(i.qty) || 0) * (parseFloat(i.price) || 0), 0);
    const vat = subtotal * (parseFloat(vatRate) / 100);
    const total = subtotal + vat;
    const invoiceRef = useRef(null);

    const print = () => window.print();

    const downloadPDF = async () => {
        if (!invoiceRef.current) return;
        
        const element = invoiceRef.current;
        const contentElement = element.querySelector('div'); // Get the inner content div
        
        if (!contentElement) return;
        
        // Temporarily make element visible for rendering (off-screen but visible to html2canvas)
        const originalStyle = element.style.cssText;
        element.style.position = 'fixed';
        element.style.left = '-2000px';
        element.style.top = '0';
        element.style.width = '800px';
        element.style.zIndex = '-1';
        element.style.visibility = 'visible';
        element.style.opacity = '1';
        
        // Wait a bit for rendering
        await new Promise(resolve => setTimeout(resolve, 200));
        
        const opt = {
            margin: [10, 10, 10, 10],
            filename: `Invoice-${invoiceNo}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true,
                logging: false,
                windowWidth: 800,
                allowTaint: true,
                backgroundColor: '#ffffff'
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        try {
            await html2pdf().set(opt).from(contentElement).save();
        } finally {
            // Restore original style
            element.style.cssText = originalStyle;
        }
    };

    const inpStyle = { padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', width: '100%' };
    const label = { fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 4 };

    return (
        <ToolPageLayout title="Invoice Generator" description="Create and print professional invoices instantly — free, no signup." category="Business Tools" categoryHref="/dashboard" categoryIcon="💼" icon="🧾" badge="free">
            <div style={{ padding: '32px 40px' }}>
                {/* Hidden printable version for PDF */}
                <div ref={invoiceRef} style={{ position: 'absolute', left: '-9999px', top: 0, width: '800px', visibility: 'hidden' }}>
                    <div style={{ padding: '40px', background: '#fff', fontFamily: 'Inter, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40, borderBottom: '2px solid #2563EB', paddingBottom: 20 }}>
                            <div>
                                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#2563EB', marginBottom: 8 }}>INVOICE</h1>
                                <div style={{ fontSize: '0.9rem', color: '#6B7280' }}>
                                    <div><strong>Invoice #:</strong> {invoiceNo}</div>
                                    <div><strong>Date:</strong> {date}</div>
                                    {dueDate && <div><strong>Due Date:</strong> {dueDate}</div>}
                                    <div><strong>Currency:</strong> {getCurrencyByCode(currency).flag} {currency}</div>
                                </div>
                            </div>
                        </div>

                        {/* From / To */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 40 }}>
                            <div>
                                <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6B7280', marginBottom: 12, textTransform: 'uppercase' }}>From</h3>
                                <div style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                                    {from.name && <div style={{ fontWeight: 600 }}>{from.name}</div>}
                                    {from.email && <div>{from.email}</div>}
                                    {from.address && <div style={{ whiteSpace: 'pre-line' }}>{from.address}</div>}
                                </div>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6B7280', marginBottom: 12, textTransform: 'uppercase' }}>Bill To</h3>
                                <div style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                                    {to.name && <div style={{ fontWeight: 600 }}>{to.name}</div>}
                                    {to.email && <div>{to.email}</div>}
                                    {to.address && <div style={{ whiteSpace: 'pre-line' }}>{to.address}</div>}
                                </div>
                            </div>
                        </div>

                        {/* Items Table */}
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 30 }}>
                            <thead>
                                <tr style={{ background: '#F3F4F6', borderBottom: '2px solid #E5E7EB' }}>
                                    <th style={{ padding: '12px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, color: '#374151' }}>Description</th>
                                    <th style={{ padding: '12px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, color: '#374151' }}>Qty</th>
                                    <th style={{ padding: '12px', textAlign: 'right', fontSize: '0.85rem', fontWeight: 700, color: '#374151' }}>Unit Price</th>
                                    <th style={{ padding: '12px', textAlign: 'right', fontSize: '0.85rem', fontWeight: 700, color: '#374151' }}>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, i) => {
                                    const itemTotal = (parseFloat(item.qty) || 0) * (parseFloat(item.price) || 0);
                                    return (
                                        <tr key={i} style={{ borderBottom: '1px solid #E5E7EB' }}>
                                            <td style={{ padding: '12px', fontSize: '0.9rem' }}>{item.desc || '-'}</td>
                                            <td style={{ padding: '12px', textAlign: 'center', fontSize: '0.9rem' }}>{item.qty || 0}</td>
                                            <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem' }}>{formatCurrency(item.price || 0, currency)}</td>
                                            <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', fontWeight: 600 }}>{formatCurrency(itemTotal, currency)}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        {/* Totals */}
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 30 }}>
                            <div style={{ minWidth: 250 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #E5E7EB', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#6B7280' }}>Subtotal</span>
                                    <span style={{ fontWeight: 600 }}>{formatCurrency(subtotal, currency)}</span>
                                </div>
                                {parseFloat(vatRate) > 0 && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #E5E7EB', fontSize: '0.9rem' }}>
                                        <span style={{ color: '#6B7280' }}>VAT ({vatRate}%)</span>
                                        <span style={{ fontWeight: 600 }}>{formatCurrency(vat, currency)}</span>
                                    </div>
                                )}
                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', fontSize: '1.2rem', fontWeight: 800, color: '#2563EB', borderTop: '2px solid #2563EB' }}>
                                    <span>Total</span>
                                    <span>{formatCurrency(total, currency)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        {notes && (
                            <div style={{ marginTop: 30, padding: '16px', background: '#F9FAFB', borderRadius: 8, fontSize: '0.85rem', color: '#374151', lineHeight: 1.6 }}>
                                <strong>Notes:</strong> {notes}
                            </div>
                        )}
                    </div>
                </div>
                {/* Controls */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Invoice Details</h2>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <button className="btn btn-secondary" onClick={print}>🖨️ Print</button>
                        <button className="btn btn-primary" onClick={downloadPDF}>📥 Download PDF</button>
                    </div>
                </div>

                {/* Invoice Header Row */}
                <div className="grid grid-2" style={{ gap: 20, marginBottom: 24 }}>
                    <div>
                        <label style={label}>Invoice Number</label>
                        <input value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} style={inpStyle} />
                    </div>
                    <div>
                        <label style={label}>Invoice Date</label>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)} style={inpStyle} />
                    </div>
                    <div>
                        <label style={label}>Due Date</label>
                        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} style={inpStyle} />
                    </div>
                    <div>
                        <label style={label}>Currency</label>
                        <select value={currency} onChange={e => setCurrency(e.target.value)} style={inpStyle}>
                            {CURRENCIES.map(c => (
                                <option key={c.code} value={c.code}>{c.flag} {c.code} - {c.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label style={label}>VAT Rate (%)</label>
                        <input type="number" value={vatRate} onChange={e => setVatRate(e.target.value)} placeholder="0" style={inpStyle} />
                    </div>
                </div>

                {/* From / To */}
                <div className="grid grid-2" style={{ gap: 20, marginBottom: 28 }}>
                    {[{ label: 'From (Your Details)', data: from, setData: setFrom }, { label: 'To (Client Details)', data: to, setData: setTo }].map(({ label: sLabel, data, setData }) => (
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

                {/* Items */}
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 14 }}>Line Items</h3>
                <div style={{ marginBottom: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 120px 40px', gap: 8, marginBottom: 8 }}>
                        {['Description', 'Qty', 'Unit Price', ''].map(h => (
                            <div key={h} style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', padding: '0 4px' }}>{h}</div>
                        ))}
                    </div>
                    {items.map((item, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 120px 40px', gap: 8, marginBottom: 8 }}>
                            <input value={item.desc} onChange={e => updateItem(i, 'desc', e.target.value)} placeholder="Service or product" style={inpStyle} />
                            <input type="number" value={item.qty} onChange={e => updateItem(i, 'qty', e.target.value)} style={inpStyle} min={1} />
                            <input type="number" value={item.price} onChange={e => updateItem(i, 'price', e.target.value)} placeholder="0.00" style={inpStyle} />
                            <button onClick={() => removeItem(i)} style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, color: '#EF4444', cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
                        </div>
                    ))}
                    <button onClick={addItem} className="btn btn-secondary btn-sm" style={{ marginTop: 8 }}>+ Add Line Item</button>
                </div>

                {/* Totals */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ minWidth: 280 }}>
                        {[
                            { label: 'Subtotal', value: formatCurrency(subtotal, currency) },
                            { label: `VAT (${vatRate}%)`, value: formatCurrency(vat, currency) },
                        ].map(row => (
                            <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>{row.label}</span>
                                <span style={{ fontWeight: 600 }}>{row.value}</span>
                            </div>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>
                            <span>Total</span><span>{formatCurrency(total, currency)}</span>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                <div style={{ marginTop: 16 }}>
                    <label style={label}>Notes / Payment Terms</label>
                    <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="e.g. Payment due within 30 days. Bank transfer preferred." rows={3} style={{ ...inpStyle, resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.6 }} />
                </div>
            </div>
        </ToolPageLayout>
    );
}

