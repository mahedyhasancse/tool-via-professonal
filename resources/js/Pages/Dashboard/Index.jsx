import DashboardLayout from '../../Layouts/DashboardLayout';
import HeroBanner from '../../Components/Dashboard/HeroBanner';
import StatsRow from '../../Components/Dashboard/StatsRow';
import PopularTools from '../../Components/Dashboard/PopularTools';
import RecentActivity from '../../Components/Dashboard/RecentActivity';
import SiteAnalytics from '../../Components/Dashboard/SiteAnalytics';

export default function Index() {
    return (
        <DashboardLayout title="Dashboard">
            <div className="dash-content">
                {/* Hero Banner */}
                <HeroBanner />

                {/* Stats Row */}
                <StatsRow />

                {/* Popular Tools */}
                <div style={{ marginBottom: 28 }}>
                    <PopularTools />
                </div>

                {/* Bottom: Activity + Analytics */}
                <div className="dash-bottom">
                    <RecentActivity />
                    <SiteAnalytics />
                </div>
            </div>
        </DashboardLayout>
    );
}
