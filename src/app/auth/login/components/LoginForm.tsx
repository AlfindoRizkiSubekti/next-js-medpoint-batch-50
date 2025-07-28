'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

import EmailField from './fields/EmailField';
import PasswordField from './fields/PasswordField';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <EmailField value={email} onChange={setEmail} />
      <PasswordField value={password} onChange={setPassword} />

      <a href="#" className="forgot-password">
        Lupa Kata Sandi?
      </a>

      <button type="submit" className="login-button">MASUK SEKARANG</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
