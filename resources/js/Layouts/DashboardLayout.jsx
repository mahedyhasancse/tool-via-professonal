import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '../Components/Layout/Sidebar';

export default function DashboardLayout({ title, children }) {
    const [search, setSearch] = useState('');

    return (
        <>
            <Head title={title || 'Dashboard'} />
            <div className="dashboard-wrapper">
                <Sidebar />
                <div className="dashboard-main">
                    {/* Header */}
                    <header className="dash-header">
                        {/* Search */}
                        <div className="dash-search">
                            <span className="dash-search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search Tools..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        {/* Right Actions */}
                        <div className="dash-header-right">
                            {/* Dark mode */}
                            <button className="icon-btn" title="Toggle theme">🌙</button>

                            {/* Notifications */}
                            <button className="icon-btn" title="Notifications">
                                🔔
                                <span className="notif-dot" />
                            </button>

                            {/* Language */}
                            <button className="lang-btn">
                                🌐 EN <span>▾</span>
                            </button>

                            {/* User */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div className="user-avatar">W</div>
                                <span className="user-name">Waqar</span>
                            </div>
                        </div>
                    </header>

                    {/* Page Content */}
                    {children}
                </div>
            </div>
        </>
    );
}
