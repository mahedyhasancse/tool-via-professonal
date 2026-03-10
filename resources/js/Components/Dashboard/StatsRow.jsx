const stats = [
    {
        icon: '🔧',
        iconClass: 'stat-icon-blue',
        label: 'Total Tools',
        value: '120+',
    },
    {
        icon: '👥',
        iconClass: 'stat-icon-cyan',
        label: 'Active Users',
        value: '12,450',
    },
    {
        icon: '📈',
        iconClass: 'stat-icon-green',
        label: 'Monthly Visits',
        value: '85.2K',
    },
    {
        icon: '👑',
        iconClass: 'stat-icon-amber',
        label: 'Premium Users',
        value: '1,320',
    },
];

export default function StatsRow() {
    return (
        <div className="stats-row animate-fade-up-delay-1">
            {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                    <div className={`stat-icon ${stat.iconClass}`}>
                        <span>{stat.icon}</span>
                    </div>
                    <div>
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-value">{stat.value}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
