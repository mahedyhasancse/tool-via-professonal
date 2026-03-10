import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import { Head } from '@inertiajs/react';

export default function GuestLayout({ title, description, children }) {
    return (
        <>
            <Head>
                <title>{title || 'Toolvia.io - AI Tools for Business & Productivity'}</title>
                <meta name="description" content={description || 'Free AI tools, calculators, invoice generators and business tools in one place.'} />
            </Head>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
