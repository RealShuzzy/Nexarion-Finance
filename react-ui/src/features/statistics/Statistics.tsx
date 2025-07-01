import React, { useEffect, useState } from "react";

interface Account {
  id: number;
  name: string;
  bank: string;
  currency: string;
  balance: number;
  type: string;
  last_update: string;
}

const Statistics: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      const token = localStorage.getItem("token"); // assuming you store JWT as "token"
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      try {
        const response = await fetch("http://shuzzy.duckdns.org:8000/accounts/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch accounts");
        }

        const data = await response.json();
        setAccounts(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div id="budget" className="bg-background p-[10px] w-full text-white">
      <p className="text-lg font-bold mb-2">Your Accounts</p>
      {error && <p className="text-red-500">{error}</p>}
      {accounts.length === 0 && !error && <p>Loading accounts...</p>}
      <ul className="space-y-2">
        {accounts.map((account) => (
          <li key={account.id} className="bg-gray-800 p-3 rounded-md">
            <p><strong>{account.name}</strong> ({account.type})</p>
            <p>{account.bank} — {account.currency} {account.balance.toFixed(2)}</p>
            <p className="text-sm text-gray-400">Last updated: {account.last_update}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
