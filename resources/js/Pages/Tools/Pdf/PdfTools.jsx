import { useState, useRef } from 'react';
import ToolPageLayout from '../../../Layouts/ToolPageLayout';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { jsPDF } from 'jspdf';

// Configure pdfjs worker - use local file (copied to public directory)
if (typeof window !== 'undefined') {
    // Use local worker file for better reliability
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
}

// PDF Drop Zone Component
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

// Image Drop Zone Component
function ImageDropZone({ label, onFiles, multiple = true }) {
    const ref = useRef();
    const [files, setFiles] = useState([]);
    const [dragging, setDragging] = useState(false);

    const handleFiles = (fs) => {
        const list = Array.from(fs).filter(f => f.type.startsWith('image/'));
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
                <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🖼️</div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>{label}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Drag & drop images here, or click to browse</p>
                <input ref={ref} type="file" accept="image/*" multiple={multiple} style={{ display: 'none' }} onChange={e => handleFiles(e.target.files)} />
            </div>
            {files.length > 0 && (
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {files.map((f, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem' }}>
                            <span>🖼️</span>
                            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
                            <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>{(f.size / 1024).toFixed(1)}KB</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// PDF Merge Tool
export function PdfMerge() {
    const [pdfFiles, setPdfFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFiles = (files) => {
        setPdfFiles(files);
        setError('');
    };

    const mergePdfs = async () => {
        if (pdfFiles.length < 2) {
            setError('Please select at least 2 PDF files to merge.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const mergedPdf = await PDFDocument.create();

            for (const file of pdfFiles) {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await PDFDocument.load(arrayBuffer);
                const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                pages.forEach((page) => mergedPdf.addPage(page));
            }

            const pdfBytes = await mergedPdf.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'merged-document.pdf';
            a.click();
            URL.revokeObjectURL(url);

            setError('');
        } catch (err) {
            setError('Failed to merge PDFs: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ToolPageLayout title="PDF Merge" description="Merge multiple PDF files into one document instantly." category="PDF Tools" categoryHref="/pdf-tools" categoryIcon="📄" icon="📎" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div style={{ maxWidth: 800, margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Merge PDF Files</h2>
                    
                    <PdfDropZone label="Select PDF Files to Merge" onFiles={handleFiles} multiple={true} />

                    {error && (
                        <div style={{ marginTop: 16, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px', fontSize: '0.85rem', color: '#DC2626' }}>
                            ❌ {error}
                        </div>
                    )}

                    {pdfFiles.length > 0 && (
                        <div style={{ marginTop: 24 }}>
                            <div style={{ marginBottom: 12, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                {pdfFiles.length} file{pdfFiles.length > 1 ? 's' : ''} selected. Files will be merged in the order shown above.
                            </div>
                            <button 
                                className="btn btn-primary" 
                                onClick={mergePdfs} 
                                disabled={loading || pdfFiles.length < 2}
                                style={{ width: '100%', padding: '13px' }}
                            >
                                {loading ? '⏳ Merging PDFs...' : `📎 Merge ${pdfFiles.length} PDF${pdfFiles.length > 1 ? 's' : ''}`}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </ToolPageLayout>
    );
}

// PDF Split Tool
export function PdfSplit() {
    const [pdfFile, setPdfFile] = useState(null);
    const [pageRanges, setPageRanges] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [totalPages, setTotalPages] = useState(0);

    const handleFile = async (files) => {
        if (files.length === 0) return;
        const file = files[0];
        setPdfFile(file);
        setError('');
        setPageRanges('');

        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            setTotalPages(pdf.numPages);
        } catch (err) {
            setError('Failed to read PDF: ' + err.message);
        }
    };

    const splitPdf = async () => {
        if (!pdfFile) {
            setError('Please select a PDF file.');
            return;
        }

        if (!pageRanges.trim()) {
            setError('Please specify page ranges (e.g., 1-3, 4-6, 7-10).');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const arrayBuffer = await pdfFile.arrayBuffer();
            const sourcePdf = await PDFDocument.load(arrayBuffer);
            const ranges = pageRanges.split(',').map(r => r.trim());

            for (let i = 0; i < ranges.length; i++) {
                const range = ranges[i];
                const [start, end] = range.includes('-') 
                    ? range.split('-').map(n => parseInt(n.trim()) - 1)
                    : [parseInt(range.trim()) - 1, parseInt(range.trim()) - 1];

                if (isNaN(start) || isNaN(end) || start < 0 || end >= sourcePdf.getPageCount() || start > end) {
                    throw new Error(`Invalid page range: ${range}`);
                }

                const newPdf = await PDFDocument.create();
                const pages = await newPdf.copyPages(sourcePdf, Array.from({ length: end - start + 1 }, (_, i) => start + i));
                pages.forEach((page) => newPdf.addPage(page));

                const pdfBytes = await newPdf.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `split-${i + 1}-pages-${start + 1}-${end + 1}.pdf`;
                a.click();
                URL.revokeObjectURL(url);
            }
        } catch (err) {
            setError('Failed to split PDF: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ToolPageLayout title="PDF Split" description="Split a PDF into multiple files by pages." category="PDF Tools" categoryHref="/pdf-tools" categoryIcon="📄" icon="✂️" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div style={{ maxWidth: 800, margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Split PDF File</h2>
                    
                    <PdfDropZone label="Select PDF File to Split" onFiles={handleFile} multiple={false} />

                    {totalPages > 0 && (
                        <div style={{ marginTop: 20, padding: '12px 16px', background: 'rgba(37,99,235,0.08)', borderRadius: 10, fontSize: '0.9rem', color: 'var(--primary)' }}>
                            📄 PDF has {totalPages} page{totalPages > 1 ? 's' : ''}
                        </div>
                    )}

                    {pdfFile && (
                        <div style={{ marginTop: 24 }}>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
                                Page Ranges (e.g., 1-3, 4-6, 7-10)
                            </label>
                            <input
                                type="text"
                                value={pageRanges}
                                onChange={(e) => setPageRanges(e.target.value)}
                                placeholder="1-3, 4-6, 7-10"
                                style={{ width: '100%', padding: '11px 16px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-primary)', background: '#fff', outline: 'none', marginBottom: 16 }}
                            />
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                                Enter page ranges separated by commas. Each range can be a single page (e.g., 5) or a range (e.g., 1-3).
                            </div>
                        </div>
                    )}

                    {error && (
                        <div style={{ marginTop: 16, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px', fontSize: '0.85rem', color: '#DC2626' }}>
                            ❌ {error}
                        </div>
                    )}

                    {pdfFile && (
                        <button 
                            className="btn btn-primary" 
                            onClick={splitPdf} 
                            disabled={loading || !pageRanges.trim()}
                            style={{ width: '100%', padding: '13px' }}
                        >
                            {loading ? '⏳ Splitting PDF...' : '✂️ Split PDF'}
                        </button>
                    )}
                </div>
            </div>
        </ToolPageLayout>
    );
}

// Image to PDF Tool
export function ImageToPdf() {
    const [imageFiles, setImageFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFiles = (files) => {
        setImageFiles(files);
        setError('');
    };

    const convertToPdf = async () => {
        if (imageFiles.length === 0) {
            setError('Please select at least one image file.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            for (let i = 0; i < imageFiles.length; i++) {
                if (i > 0) {
                    pdf.addPage();
                }

                const file = imageFiles[i];
                const reader = new FileReader();

                await new Promise((resolve, reject) => {
                    reader.onload = (e) => {
                        const img = new Image();
                        img.onload = () => {
                            const imgWidth = img.width;
                            const imgHeight = img.height;
                            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                            const width = imgWidth * ratio;
                            const height = imgHeight * ratio;
                            const x = (pdfWidth - width) / 2;
                            const y = (pdfHeight - height) / 2;

                            pdf.addImage(img, 'JPEG', x, y, width, height);
                            resolve();
                        };
                        img.onerror = reject;
                        img.src = e.target.result;
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            }

            pdf.save('converted-images.pdf');
            setError('');
        } catch (err) {
            setError('Failed to convert images to PDF: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ToolPageLayout title="Image to PDF" description="Convert JPG, PNG, or WEBP images to a PDF document." category="PDF Tools" categoryHref="/pdf-tools" categoryIcon="📄" icon="🖼️" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div style={{ maxWidth: 800, margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Convert Images to PDF</h2>
                    
                    <ImageDropZone label="Select Image Files" onFiles={handleFiles} multiple={true} />

                    {error && (
                        <div style={{ marginTop: 16, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px', fontSize: '0.85rem', color: '#DC2626' }}>
                            ❌ {error}
                        </div>
                    )}

                    {imageFiles.length > 0 && (
                        <div style={{ marginTop: 24 }}>
                            <div style={{ marginBottom: 12, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                {imageFiles.length} image{imageFiles.length > 1 ? 's' : ''} selected. Each image will be a page in the PDF.
                            </div>
                            <button 
                                className="btn btn-primary" 
                                onClick={convertToPdf} 
                                disabled={loading}
                                style={{ width: '100%', padding: '13px' }}
                            >
                                {loading ? '⏳ Converting...' : `🖼️ Convert ${imageFiles.length} Image${imageFiles.length > 1 ? 's' : ''} to PDF`}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </ToolPageLayout>
    );
}

// PDF to JPG Tool
export function PdfToJpg() {
    const [pdfFile, setPdfFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [totalPages, setTotalPages] = useState(0);

    const handleFile = async (files) => {
        if (files.length === 0) return;
        const file = files[0];
        setPdfFile(file);
        setError('');

        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            setTotalPages(pdf.numPages);
        } catch (err) {
            setError('Failed to read PDF: ' + err.message);
        }
    };

    const convertToJpg = async () => {
        if (!pdfFile) {
            setError('Please select a PDF file.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const arrayBuffer = await pdfFile.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const numPages = pdf.numPages;

            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: 2.0 });
                
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise;

                canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `page-${pageNum}.jpg`;
                    a.click();
                    URL.revokeObjectURL(url);
                }, 'image/jpeg', 0.95);
            }
        } catch (err) {
            setError('Failed to convert PDF to JPG: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ToolPageLayout title="PDF to JPG" description="Convert each PDF page to a high-quality JPG image." category="PDF Tools" categoryHref="/pdf-tools" categoryIcon="📄" icon="🖼️" badge="free">
            <div style={{ padding: '36px 40px' }}>
                <div style={{ maxWidth: 800, margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Convert PDF to JPG Images</h2>
                    
                    <PdfDropZone label="Select PDF File" onFiles={handleFile} multiple={false} />

                    {totalPages > 0 && (
                        <div style={{ marginTop: 20, padding: '12px 16px', background: 'rgba(37,99,235,0.08)', borderRadius: 10, fontSize: '0.9rem', color: 'var(--primary)' }}>
                            📄 PDF has {totalPages} page{totalPages > 1 ? 's' : ''}. Each page will be converted to a separate JPG file.
                        </div>
                    )}

                    {error && (
                        <div style={{ marginTop: 16, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px', fontSize: '0.85rem', color: '#DC2626' }}>
                            ❌ {error}
                        </div>
                    )}

                    {pdfFile && (
                        <div style={{ marginTop: 24 }}>
                            <button 
                                className="btn btn-primary" 
                                onClick={convertToJpg} 
                                disabled={loading}
                                style={{ width: '100%', padding: '13px' }}
                            >
                                {loading ? '⏳ Converting...' : `🖼️ Convert ${totalPages} Page${totalPages > 1 ? 's' : ''} to JPG`}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </ToolPageLayout>
    );
}
