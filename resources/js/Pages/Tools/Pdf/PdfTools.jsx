import { useState, useRef } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';

function PdfDropZone({ label, onFiles, multiple = true }) {
    const ref = useRef();
    const [files, setFiles] = useState([]);
    const [dragging, setDragging] = useState(false);

    const handleFiles = (fs) => {
        const list = Array.from(fs).filter(f => f.type === 'application/pdf');
        setFiles(prev => multiple ? [...prev, ...list] : list);
        onFiles(multiple ? (prev => [...prev, ...list]) : list);
    };

    return (
        <div>
            <div
                onClick={() => ref.current.click()}
                onDragOver={e => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={e => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
                style={{ border: `2px dashed ${dragging ? 'var(--primary)' : 'var(--border)'}`, borderRadius: 14, padding: '40px 20px', textAlign: 'center', cursor: 'pointer', background: dragging ? 'rgba(37,99,235,0.04)' : 'var(--bg-light)', transition: 'all 0.2s' }}
            >
                <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>📄</div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>{label}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Drag & drop PDF files here, or click to browse</p>
                <input ref={ref} type="file" accept=".pdf" multiple={multiple} style={{ display: 'none' }} onChange={e => handleFiles(e.target.files)} />
            </div>
            {files.length > 0 && (
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {files.map((f, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem' }}>
                            <span>📄</span>
                            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
                            <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>{(f.size / 1024).toFixed(1)}KB</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function ComingSoon({ title }) {
    return (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>🚀</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 10 }}>{title} — Coming Soon</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 400, margin: '0 auto 24px' }}>
                This tool is currently in development. We're building a fully browser-based PDF processor that requires no upload to our servers.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,99,235,0.08)', color: 'var(--primary)', padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: '0.9rem' }}>
                🔔 Get notified at launch — check Pricing page
            </div>
        </div>
    );
}

export function PdfMerge() {
    return (
        <ToolPageLayout title="PDF Merge" description="Merge multiple PDF files into one document instantly." category="PDF Tools" categoryHref="/dashboard" categoryIcon="📄" icon="📎" badge="free">
            <div style={{ padding: '36px 40px' }}><ComingSoon title="PDF Merge" /></div>
        </ToolPageLayout>
    );
}

export function PdfSplit() {
    return (
        <ToolPageLayout title="PDF Split" description="Split a PDF into multiple files by pages." category="PDF Tools" categoryHref="/dashboard" categoryIcon="📄" icon="✂️" badge="free">
            <div style={{ padding: '36px 40px' }}><ComingSoon title="PDF Split" /></div>
        </ToolPageLayout>
    );
}

export function ImageToPdf() {
    return (
        <ToolPageLayout title="Image to PDF" description="Convert JPG, PNG, or WEBP images to a PDF document." category="PDF Tools" categoryHref="/dashboard" categoryIcon="📄" icon="🖼️" badge="free">
            <div style={{ padding: '36px 40px' }}><ComingSoon title="Image to PDF" /></div>
        </ToolPageLayout>
    );
}

export function PdfToJpg() {
    return (
        <ToolPageLayout title="PDF to JPG" description="Convert each PDF page to a high-quality JPG image." category="PDF Tools" categoryHref="/dashboard" categoryIcon="📄" icon="🖼️" badge="free">
            <div style={{ padding: '36px 40px' }}><ComingSoon title="PDF to JPG" /></div>
        </ToolPageLayout>
    );
}

