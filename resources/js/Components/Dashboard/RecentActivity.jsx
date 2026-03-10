import { VatIcon, InvoiceIcon, PdfIcon } from '../Common/ToolIcons';

const activities = [
    { Icon: InvoiceIcon, name: 'Invoice Generated', time: '2 min ago', color: 'rgba(37,99,235,0.1)' },
    { Icon: VatIcon, name: 'VAT Calculated', time: '10 min ago', color: 'rgba(6,182,212,0.1)' },
    { Icon: PdfIcon, name: 'PDF Exported', time: '1 hour ago', color: 'rgba(239,68,68,0.1)' },
    { Icon: InvoiceIcon, name: 'Quote Generated', time: '2 hours ago', color: 'rgba(124,58,237,0.1)' },
    { Icon: VatIcon, name: 'VAT Calculated', time: '3 hours ago', color: 'rgba(16,185,129,0.1)' },
];

export default function RecentActivity() {
    return (
        <div className="card" style={{ overflow: 'hidden' }}>
            <div className="card-body">
                <h3 className="dash-section-title" style={{ marginBottom: 4 }}>Recent Activity</h3>
                <div className="activity-list">
                    {activities.map((item, i) => (
                        <div key={i} className="activity-item">
                            <div className="activity-icon" style={{ background: item.color }}>
                                <item.Icon size={30} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div className="activity-name">{item.name}</div>
                            </div>
                            <div className="activity-time-right">{item.time}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
