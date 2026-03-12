import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import GuestLayout from '../../Layouts/GuestLayout';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/login', {
            preserveScroll: false,
            onSuccess: () => {
                // Inertia will handle redirect automatically
            },
        });
    };

    return (
        <GuestLayout title="Sign In" description="Sign in to your Toolvia.io account">
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
                            Welcome Back
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            Sign in to access your dashboard
                        </p>
                    </div>

                    <form onSubmit={submit}>
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
                                autoFocus
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

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    style={{ width: 18, height: 18, cursor: 'pointer' }}
                                />
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Remember me</span>
                            </label>
                            <Link href="/forgot-password" style={{ fontSize: '0.85rem', color: 'var(--primary)', textDecoration: 'none' }}>
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '14px', fontSize: '1rem', fontWeight: 600 }}
                        >
                            {processing ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--border-light)' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            Don't have an account?{' '}
                            <Link href="/register" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
