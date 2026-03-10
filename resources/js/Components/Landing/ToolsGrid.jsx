import { Link } from '@inertiajs/react';
import {
    VatIcon, InvoiceIcon, QuotationIcon, ProfitIcon,
    PercentageIcon, UnitIcon, CurrencyIcon, AiEmailIcon,
    SeoIcon, PdfIcon, AiToolIcon
} from '../Common/ToolIcons';

const toolsList = [
    { Icon: VatIcon, name: 'VAT Calculator', category: 'Calculator', badge: 'free', href: '/calculators' },
    { Icon: InvoiceIcon, name: 'Invoice Generator', category: 'Business', badge: 'free', href: '/tools' },
    { Icon: QuotationIcon, name: 'Quotation Generator', category: 'Business', badge: 'free', href: '/tools' },
    { Icon: ProfitIcon, name: 'Profit Margin Calc', category: 'Calculator', badge: 'free', href: '/calculators' },
    { Icon: PercentageIcon, name: 'Percentage Calc', category: 'Calculator', badge: 'free', href: '/calculators' },
    { Icon: UnitIcon, name: 'Unit Converter', category: 'Utility', badge: 'free', href: '/tools' },
    { Icon: CurrencyIcon, name: 'Currency Converter', category: 'Finance', badge: 'free', href: '/tools' },
    { Icon: AiEmailIcon, name: 'AI Email Writer', category: 'AI', badge: 'pro', href: '/ai-tools' },
    { Icon: SeoIcon, name: 'SEO Analyzer', category: 'SEO', badge: 'pro', href: '/tools' },
    { Icon: PdfIcon, name: 'PDF Converter', category: 'PDF', badge: 'free', href: '/tools' },
    { Icon: AiToolIcon, name: 'AI Content Writer', category: 'AI', badge: 'pro', href: '/ai-tools' },
    { Icon: InvoiceIcon, name: 'Receipt Generator', category: 'Business', badge: 'free', href: '/tools' },
];

export default function ToolsGrid({ limit = 12 }) {
    const displayed = toolsList.slice(0, limit);

    return (
        <div className="grid-tools grid">
            {displayed.map(({ Icon, name, category, badge, href }) => (
                <Link key={name} href={href} className="tool-card">
                    <div className="tool-card-icon">
                        <Icon size={52} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 6 }}>
                            <div className="tool-card-name">{name}</div>
                            <span className={`badge badge-${badge}`} style={{ flexShrink: 0 }}>
                                {badge === 'pro' ? '⭐ Pro' : '✓ Free'}
                            </span>
                        </div>
                        <div className="tool-card-desc">{category}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
