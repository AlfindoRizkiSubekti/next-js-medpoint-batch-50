'use client';
import SubmitButton from './auth/login/components/buttons/SubmitButton';
import { useRouter } from 'next/navigation';
import './auth/login/style.css';

export default function HomePage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">Selamat Datang</h1>
      <SubmitButton text="Ke Halaman Login" onClick={handleLogin} />
    </div>
  );
}
