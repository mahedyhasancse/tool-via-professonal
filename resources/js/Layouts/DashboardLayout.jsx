import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '../Components/Layout/Sidebar';

export default function DashboardLayout({ title, children }) {
    const [search, setSearch] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Close sidebar when route changes on mobile
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when sidebar is open on mobile
    useEffect(() => {
        if (sidebarOpen && window.innerWidth <= 768) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [sidebarOpen]);

    return (
        <>
            <Head title={title || 'Dashboard'} />
            <div className={`dashboard-wrapper ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <Sidebar onClose={() => setSidebarOpen(false)} />
                <div className="dashboard-main">
                    {/* Header */}
                    <header className="dash-header">
                        {/* Burger Menu Button */}
                        <button 
                            className="sidebar-toggle-btn"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            aria-label="Toggle sidebar"
                        >
                            <span className={sidebarOpen ? 'open' : ''}></span>
                            <span className={sidebarOpen ? 'open' : ''}></span>
                            <span className={sidebarOpen ? 'open' : ''}></span>
                        </button>

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
