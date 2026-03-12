import DashboardLayout from '../../Layouts/DashboardLayout';
import HeroBanner from '../../Components/Dashboard/HeroBanner';
import StatsRow from '../../Components/Dashboard/StatsRow';
import PopularTools from '../../Components/Dashboard/PopularTools';
import RecentActivity from '../../Components/Dashboard/RecentActivity';
import SiteAnalytics from '../../Components/Dashboard/SiteAnalytics';
import { usePage } from '@inertiajs/react';

export default function Index() {
    const { auth } = usePage().props;
    
    return (
        <DashboardLayout title="Dashboard">
            <div className="dash-content" style={{ padding: '32px 40px' }}>
                {/* Welcome Message */}
                <div style={{ marginBottom: 24, padding: '20px', background: '#fff', borderRadius: 12, border: '1px solid var(--border-light)' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                        Welcome back, {auth?.user?.name || 'Guest'}! 👋
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        Access all your tools and manage your account from here.
                    </p>
                </div>

                {/* Hero Banner */}
                <HeroBanner />

                {/* Stats Row */}
                <StatsRow />

                {/* Popular Tools */}
                <div style={{ marginBottom: 28 }}>
                    <PopularTools />
                </div>

                {/* Bottom: Activity + Analytics */}
                <div className="dash-bottom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    <RecentActivity />
                    <SiteAnalytics />
                </div>
            </div>
        </DashboardLayout>
    );
}
