import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts/AppLayout';
import Dashboard from '../components/Dashboard';
import Budget from '../components/Budget';
import Statistics from '../components/Statistics';
import Portfolios_and_Accounts from '../components/Portfolios_and_Accounts';
import User from '../components/User';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="budget" element={<Budget />} />
        <Route path="accounts" element={<Portfolios_and_Accounts />} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  );
}
