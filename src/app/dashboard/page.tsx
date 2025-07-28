import './components/style.css';
import * as React from 'react';
import LogoutButton from './components/LogoutButton';
import { createClient } from '@/lib/supabase/server'; 

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">Selamat Datang di Dashboard</h1>

      {user ? (
        <div className="mb-6 text-center">
          <p className="text-lg">ID: <span className="font-mono">{user.id}</span></p>
          <p className="text-lg">Email: <span className="font-semibold">{user.email}</span></p>
        </div>
      ) : (
        <p className="text-red-600">Gagal memuat data user.</p>
      )}

      <LogoutButton />
    </div>
  );
}
