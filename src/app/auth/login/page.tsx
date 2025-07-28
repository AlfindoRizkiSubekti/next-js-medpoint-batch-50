import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { APP_DASHBOARD } from '@/constants';
import './style.css';

import LoginForm from './components/LoginForm';
import LogoSection from './components/LogoSection';
import Illustration from './components/Illustration';

export default async function LoginPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (data?.user) redirect(APP_DASHBOARD);

  return (
    <div className="container">
      <div className="left">
        <LogoSection />
        <LoginForm />
      </div>
      <div className="right">
        <Illustration />
      </div>
    </div>
  );
}
