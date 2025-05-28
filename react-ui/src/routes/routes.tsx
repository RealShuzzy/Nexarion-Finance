// Imports
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts/AppLayout';
import { LoginLayout } from '../layouts/LoginLayout';
import { RegisterLayout } from '../layouts/RegisterLayout.tsx';
import AuthGuard from '../features/auth/AuthGuard';

// Features
import Dashboard from '../features/dashboard/Dashboard';
import Budget from '../features/budget/Budget';
import Statistics from '../features/statistics/Statistics';
import Portfolios_and_Accounts from '../features/accounts/Portfolios_and_Accounts';
import User from '../features/user/User';
import Settings from '@features/settings/Settings.tsx';

// Routes
export default function App_Routes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginLayout/>}/>
      <Route path="/register" element={<RegisterLayout/>}/>

      <Route element={<AuthGuard/>}>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="statistics" element={<Statistics/>}/>
          <Route path="budget" element={<Budget/>}/>
          <Route path="accounts" element={<Portfolios_and_Accounts/>}/>
          <Route path="user" element={<User/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
      </Route>
    </Routes>
  );
}
