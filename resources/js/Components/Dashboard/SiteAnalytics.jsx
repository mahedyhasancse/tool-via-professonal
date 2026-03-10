import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
    { name: 'Jan', visits: 32000 },
    { name: 'Feb', visits: 45000 },
    { name: 'Mar', visits: 38000 },
    { name: 'Apr', visits: 62000 },
    { name: 'May', visits: 55000 },
    { name: 'Jun', visits: 78000 },
    { name: 'Jul', visits: 71000 },
    { name: 'Aug', visits: 85000 },
    { name: 'Sep', visits: 92000 },
    { name: 'Oct', visits: 88000 },
    { name: 'Nov', visits: 95000 },
    { name: 'Dec', visits: 102000 },
];

const weeklyData = [
    { name: 'Mon', visits: 8200 },
    { name: 'Tue', visits: 9400 },
    { name: 'Wed', visits: 7800 },
    { name: 'Thu', visits: 11200 },
    { name: 'Fri', visits: 12800 },
    { name: 'Sat', visits: 9600 },
    { name: 'Sun', visits: 7200 },
];

export default function SiteAnalytics() {
    const [period, setPeriod] = useState('month');
    const data = period === 'month' ? monthlyData : weeklyData;

    return (
        <div className="analytics-card">
            <div className="analytics-header">
                <h3 className="dash-section-title">Site Analytics</h3>
                <select
                    className="analytics-select"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                >
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 11, fill: '#9CA3AF' }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fontSize: 11, fill: '#9CA3AF' }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => v >= 1000 ? `${v / 1000}K` : v}
                    />
                    <Tooltip
                        contentStyle={{
                            background: '#fff',
                            border: '1px solid #E5E7EB',
                            borderRadius: 8,
                            fontSize: 12,
                            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                        }}
                        formatter={(v) => [`${(v / 1000).toFixed(1)}K`, 'Visits']}
                    />
                    <Area
                        type="monotone"
                        dataKey="visits"
                        stroke="#06B6D4"
                        strokeWidth={2.5}
                        fill="url(#colorVisits)"
                        dot={false}
                        activeDot={{ r: 5, fill: '#06B6D4' }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
