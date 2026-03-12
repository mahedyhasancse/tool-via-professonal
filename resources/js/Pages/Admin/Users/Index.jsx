import { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '../../../Layouts/DashboardLayout';

export default function UsersIndex({ users, filters }) {
    const { auth } = usePage().props;
    const [selectedUser, setSelectedUser] = useState(null);
    const [showRoleModal, setShowRoleModal] = useState(false);
    const [newRole, setNewRole] = useState('user');

    const updateRole = (userId) => {
        router.put(`/admin/users/${userId}/role`, { role: newRole }, {
            preserveScroll: true,
            onSuccess: () => {
                setShowRoleModal(false);
                setSelectedUser(null);
            }
        });
    };

    const deleteUser = (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            router.delete(`/admin/users/${userId}`, {
                preserveScroll: true
            });
        }
    };

    const openRoleModal = (user) => {
        setSelectedUser(user);
        setNewRole(user.role);
        setShowRoleModal(true);
    };

    const getRoleBadgeColor = (role) => {
        switch (role) {
            case 'super_admin': return { bg: '#7C3AED', text: '#fff' };
            case 'admin': return { bg: '#2563EB', text: '#fff' };
            default: return { bg: '#6B7280', text: '#fff' };
        }
    };

    return (
        <>
            <Head title="User Management - Admin" />
            <DashboardLayout>
                <div style={{ padding: '32px 40px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                        <div>
                            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: 8 }}>
                                👥 User Management
                            </h1>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                Manage all registered users and their roles
                            </p>
                        </div>
                    </div>

                    {/* Filters */}
                    <div style={{
                        background: '#fff',
                        borderRadius: 12,
                        padding: '20px',
                        marginBottom: 24,
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        gap: 16,
                        flexWrap: 'wrap'
                    }}>
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            defaultValue={filters?.search || ''}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    router.get('/admin/users', { search: e.target.value, role: filters?.role || 'all' }, { preserveState: true });
                                }
                            }}
                            style={{
                                flex: 1,
                                minWidth: 200,
                                padding: '10px 16px',
                                borderRadius: 8,
                                border: '1px solid var(--border)',
                                fontSize: '0.9rem',
                                outline: 'none'
                            }}
                        />
                        <select
                            defaultValue={filters?.role || 'all'}
                            onChange={(e) => router.get('/admin/users', { search: filters?.search || '', role: e.target.value }, { preserveState: true })}
                            style={{
                                padding: '10px 16px',
                                borderRadius: 8,
                                border: '1px solid var(--border)',
                                fontSize: '0.9rem',
                                outline: 'none',
                                background: '#fff'
                            }}
                        >
                            <option value="all">All Roles</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="super_admin">Super Admin</option>
                        </select>
                    </div>

                    {/* Users Table */}
                    <div style={{
                        background: '#fff',
                        borderRadius: 12,
                        border: '1px solid var(--border-light)',
                        overflow: 'hidden'
                    }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: 'var(--bg-light)', borderBottom: '2px solid var(--border-light)' }}>
                                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>User</th>
                                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Email</th>
                                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Role</th>
                                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Joined</th>
                                    <th style={{ padding: '16px', textAlign: 'right', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data.map((user) => {
                                    const roleColor = getRoleBadgeColor(user.role);
                                    return (
                                        <tr key={user.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                                            <td style={{ padding: '16px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                    <div style={{
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: '50%',
                                                        background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: '#fff',
                                                        fontWeight: 700,
                                                        fontSize: '0.9rem'
                                                    }}>
                                                        {user.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{user.name}</span>
                                                </div>
                                            </td>
                                            <td style={{ padding: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                {user.email}
                                            </td>
                                            <td style={{ padding: '16px' }}>
                                                <span style={{
                                                    display: 'inline-block',
                                                    padding: '4px 12px',
                                                    borderRadius: 6,
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    background: roleColor.bg,
                                                    color: roleColor.text
                                                }}>
                                                    {user.role.replace('_', ' ').toUpperCase()}
                                                </span>
                                            </td>
                                            <td style={{ padding: '16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                                {new Date(user.created_at).toLocaleDateString()}
                                            </td>
                                            <td style={{ padding: '16px', textAlign: 'right' }}>
                                                <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                                                    <button
                                                        onClick={() => openRoleModal(user)}
                                                        disabled={user.role === 'super_admin' && user.id !== auth.user.id}
                                                        style={{
                                                            padding: '6px 14px',
                                                            borderRadius: 6,
                                                            border: '1px solid var(--border)',
                                                            background: '#fff',
                                                            color: 'var(--text-primary)',
                                                            fontSize: '0.8rem',
                                                            fontWeight: 600,
                                                            cursor: 'pointer',
                                                            transition: 'all 0.2s'
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-light)'}
                                                        onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
                                                    >
                                                        Change Role
                                                    </button>
                                                    <button
                                                        onClick={() => deleteUser(user.id)}
                                                        disabled={user.role === 'super_admin' || user.id === auth.user.id}
                                                        style={{
                                                            padding: '6px 14px',
                                                            borderRadius: 6,
                                                            border: '1px solid #EF4444',
                                                            background: '#fff',
                                                            color: '#EF4444',
                                                            fontSize: '0.8rem',
                                                            fontWeight: 600,
                                                            cursor: 'pointer',
                                                            transition: 'all 0.2s',
                                                            opacity: (user.role === 'super_admin' || user.id === auth.user.id) ? 0.5 : 1
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            if (user.role !== 'super_admin' && user.id !== auth.user.id) {
                                                                e.currentTarget.style.background = '#FEF2F2';
                                                            }
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            if (user.role !== 'super_admin' && user.id !== auth.user.id) {
                                                                e.currentTarget.style.background = '#fff';
                                                            }
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        {users.links && users.links.length > 3 && (
                            <div style={{ padding: '20px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'center', gap: 8 }}>
                                {users.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        style={{
                                            padding: '8px 12px',
                                            borderRadius: 6,
                                            border: '1px solid var(--border)',
                                            background: link.active ? 'var(--primary)' : '#fff',
                                            color: link.active ? '#fff' : 'var(--text-primary)',
                                            textDecoration: 'none',
                                            fontSize: '0.85rem',
                                            pointerEvents: !link.url ? 'none' : 'auto',
                                            opacity: !link.url ? 0.5 : 1
                                        }}
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Role Change Modal */}
                    {showRoleModal && selectedUser && (
                        <div style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000
                        }} onClick={() => setShowRoleModal(false)}>
                            <div style={{
                                background: '#fff',
                                borderRadius: 12,
                                padding: '24px',
                                maxWidth: 400,
                                width: '90%',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                            }} onClick={(e) => e.stopPropagation()}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 16 }}>
                                    Change Role for {selectedUser.name}
                                </h3>
                                <select
                                    value={newRole}
                                    onChange={(e) => setNewRole(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px 16px',
                                        borderRadius: 8,
                                        border: '1px solid var(--border)',
                                        fontSize: '0.9rem',
                                        marginBottom: 20
                                    }}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="super_admin" disabled={selectedUser.role !== 'super_admin'}>
                                        Super Admin {selectedUser.role !== 'super_admin' && '(Cannot change)'}
                                    </option>
                                </select>
                                <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                                    <button
                                        onClick={() => setShowRoleModal(false)}
                                        style={{
                                            padding: '10px 20px',
                                            borderRadius: 8,
                                            border: '1px solid var(--border)',
                                            background: '#fff',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => updateRole(selectedUser.id)}
                                        style={{
                                            padding: '10px 20px',
                                            borderRadius: 8,
                                            background: 'var(--primary)',
                                            color: '#fff',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontWeight: 600
                                        }}
                                    >
                                        Update Role
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </DashboardLayout>
        </>
    );
}
