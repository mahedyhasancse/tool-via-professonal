/**
 * Single source of truth for all 25 tools.
 * All tool detail pages live inside /dashboard/{category}/{slug}
 */
import {
    VatIcon, PercentageIcon, ProfitIcon, AgeIcon, RoiIcon,
    LoanIcon, DiscountIcon, SalaryIcon,
    InvoiceIcon, QuotationIcon, BreakEvenIcon, CurrencyIcon, UnitIcon,
    AiEmailIcon, ProductDescIcon, ResumeIcon, CoverLetterIcon, BusinessNameIcon,
    PdfMergeIcon, PdfSplitIcon, ImageToPdfIcon, PdfToJpgIcon,
    WordCounterIcon, MetaTagIcon, KeywordIcon,
} from '../Components/Common/ToolIcons';

export const CATEGORIES = [
    { key: 'calculators', label: 'Calculators', icon: '🧮', color: '#2563EB', dashHref: '/dashboard/calculators' },
    { key: 'business', label: 'Business Tools', icon: '💼', color: '#10B981', dashHref: '/dashboard/business-tools' },
    { key: 'ai', label: 'AI Tools', icon: '🤖', color: '#7C3AED', dashHref: '/dashboard/ai-tools' },
    { key: 'pdf', label: 'PDF Tools', icon: '📄', color: '#EF4444', dashHref: '/dashboard/pdf-tools' },
    { key: 'seo', label: 'SEO Tools', icon: '🔍', color: '#06B6D4', dashHref: '/dashboard/seo-tools' },
];

export const TOOLS = [
    // ── Calculators ─────────────────────────────────────────────────────────
    { id: 'vat', name: 'VAT Calculator', category: 'calculators', subLabel: 'Calculator', href: '/dashboard/calculators/vat-calculator', Icon: VatIcon, badge: 'free' },
    { id: 'pct', name: 'Percentage Calculator', category: 'calculators', subLabel: 'Calculator', href: '/dashboard/calculators/percentage-calculator', Icon: PercentageIcon, badge: 'free' },
    { id: 'profit', name: 'Profit Margin Calc', category: 'calculators', subLabel: 'Calculator', href: '/dashboard/calculators/profit-margin-calculator', Icon: ProfitIcon, badge: 'free' },
    { id: 'age', name: 'Age Calculator', category: 'calculators', subLabel: 'Calculator', href: '/dashboard/calculators/age-calculator', Icon: AgeIcon, badge: 'free' },
    { id: 'roi', name: 'ROI Calculator', category: 'calculators', subLabel: 'Calculator', href: '/dashboard/calculators/roi-calculator', Icon: RoiIcon, badge: 'free' },
    { id: 'loan', name: 'Loan Calculator', category: 'calculators', subLabel: 'Calculator', href: '/dashboard/calculators/loan-calculator', Icon: LoanIcon, badge: 'free' },
    { id: 'discount', name: 'Discount Calculator', category: 'calculators', subLabel: 'Calculator', href: '/dashboard/calculators/discount-calculator', Icon: DiscountIcon, badge: 'free' },
    { id: 'salary', name: 'Salary Calculator', category: 'calculators', subLabel: 'Calculator', href: '/dashboard/calculators/salary-calculator', Icon: SalaryIcon, badge: 'free' },

    // ── Business ────────────────────────────────────────────────────────────
    { id: 'invoice', name: 'Invoice Generator', category: 'business', subLabel: 'Business', href: '/dashboard/business-tools/invoice-generator', Icon: InvoiceIcon, badge: 'free' },
    { id: 'quoting', name: 'Quotation Generator', category: 'business', subLabel: 'Business', href: '/dashboard/business-tools/quotation-generator', Icon: QuotationIcon, badge: 'free' },
    { id: 'breakeven', name: 'Break-Even Calculator', category: 'business', subLabel: 'Finance', href: '/dashboard/business-tools/break-even-calculator', Icon: BreakEvenIcon, badge: 'free' },
    { id: 'currency', name: 'Currency Converter', category: 'business', subLabel: 'Finance', href: '/dashboard/business-tools/currency-converter', Icon: CurrencyIcon, badge: 'free' },
    { id: 'unit', name: 'Unit Converter', category: 'business', subLabel: 'Utility', href: '/dashboard/business-tools/unit-converter', Icon: UnitIcon, badge: 'free' },

    // ── AI Tools ────────────────────────────────────────────────────────────
    { id: 'ai-email', name: 'AI Email Writer', category: 'ai', subLabel: 'AI', href: '/dashboard/ai-tools/email-writer', Icon: AiEmailIcon, badge: 'free' },
    { id: 'ai-prod', name: 'AI Product Description', category: 'ai', subLabel: 'AI', href: '/dashboard/ai-tools/product-description', Icon: ProductDescIcon, badge: 'free' },
    { id: 'ai-resume', name: 'AI Resume Builder', category: 'ai', subLabel: 'AI', href: '/dashboard/ai-tools/resume-builder', Icon: ResumeIcon, badge: 'free' },
    { id: 'ai-cover', name: 'AI Cover Letter', category: 'ai', subLabel: 'AI', href: '/dashboard/ai-tools/cover-letter', Icon: CoverLetterIcon, badge: 'free' },
    { id: 'ai-bname', name: 'AI Business Name Generator', category: 'ai', subLabel: 'AI', href: '/dashboard/ai-tools/business-name', Icon: BusinessNameIcon, badge: 'free' },

    // ── PDF Tools ───────────────────────────────────────────────────────────
    { id: 'pdf-merge', name: 'PDF Merge', category: 'pdf', subLabel: 'PDF', href: '/dashboard/pdf-tools/pdf-merge', Icon: PdfMergeIcon, badge: 'free' },
    { id: 'pdf-split', name: 'PDF Split', category: 'pdf', subLabel: 'PDF', href: '/dashboard/pdf-tools/pdf-split', Icon: PdfSplitIcon, badge: 'free' },
    { id: 'img-pdf', name: 'Image to PDF', category: 'pdf', subLabel: 'PDF', href: '/dashboard/pdf-tools/image-to-pdf', Icon: ImageToPdfIcon, badge: 'free' },
    { id: 'pdf-jpg', name: 'PDF to JPG', category: 'pdf', subLabel: 'PDF', href: '/dashboard/pdf-tools/pdf-to-jpg', Icon: PdfToJpgIcon, badge: 'free' },

    // ── SEO Tools ───────────────────────────────────────────────────────────
    { id: 'words', name: 'Word Counter', category: 'seo', subLabel: 'SEO', href: '/dashboard/seo-tools/word-counter', Icon: WordCounterIcon, badge: 'free' },
    { id: 'meta', name: 'Meta Tag Generator', category: 'seo', subLabel: 'SEO', href: '/dashboard/seo-tools/meta-tag-generator', Icon: MetaTagIcon, badge: 'free' },
    { id: 'keyword', name: 'Keyword Density Checker', category: 'seo', subLabel: 'SEO', href: '/dashboard/seo-tools/keyword-density', Icon: KeywordIcon, badge: 'free' },
];

export const toolsByCategory = (catKey) => TOOLS.filter(t => t.category === catKey);
