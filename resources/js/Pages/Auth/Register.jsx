import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import GuestLayout from '../../Layouts/GuestLayout';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <GuestLayout title="Create Account" description="Sign up for a free Toolvia.io account">
            <div className="container" style={{ padding: '80px 24px', maxWidth: 480, margin: '0 auto' }}>
                <div style={{
                    background: '#fff',
                    borderRadius: 20,
                    padding: '40px',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                    border: '1px solid var(--border-light)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: 32 }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: 8 }}>
                            Create Account
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            Join Toolvia.io and access all free tools
                        </p>
                    </div>

                    <form onSubmit={submit}>
                        <div style={{ marginBottom: 20 }}>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    borderRadius: 10,
                                    border: errors.name ? '2px solid #EF4444' : '1px solid var(--border)',
                                    fontSize: '0.9rem',
                                    outline: 'none',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="John Doe"
                                required
                            />
                            {errors.name && (
                                <div style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: 4 }}>{errors.name}</div>
                            )}
                        </div>

                        <div style={{ marginBottom: 20 }}>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    borderRadius: 10,
                                    border: errors.email ? '2px solid #EF4444' : '1px solid var(--border)',
                                    fontSize: '0.9rem',
                                    outline: 'none',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="john@example.com"
                                required
                            />
                            {errors.email && (
                                <div style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: 4 }}>{errors.email}</div>
                            )}
                        </div>

                        <div style={{ marginBottom: 20 }}>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
                                Password
                            </label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    borderRadius: 10,
                                    border: errors.password ? '2px solid #EF4444' : '1px solid var(--border)',
                                    fontSize: '0.9rem',
                                    outline: 'none',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="••••••••"
                                required
                            />
                            {errors.password && (
                                <div style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: 4 }}>{errors.password}</div>
                            )}
                        </div>

                        <div style={{ marginBottom: 24 }}>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    borderRadius: 10,
                                    border: '1px solid var(--border)',
                                    fontSize: '0.9rem',
                                    outline: 'none',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '14px', fontSize: '1rem', fontWeight: 600 }}
                        >
                            {processing ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--border-light)' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            Already have an account?{' '}
                            <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
