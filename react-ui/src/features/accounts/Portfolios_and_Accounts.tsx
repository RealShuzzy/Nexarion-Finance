import React, { useState } from 'react';
import { Plus, Eye, EyeOff, Pencil } from 'lucide-react';
import Depot from '@features/accounts/Depots';
import { formatCurrency } from '@components/common/CurrencyFormatter';
import { depotData, depotIcons } from '@data/depots';
import { accountData, accountIcons } from '@data/accounts';
import { useStyle } from '@components/common/StyleContext';
import Account from './Accounts';

const Portfolios_and_Accounts: React.FC = () => {
  const { styleType } = useStyle();
  const [hidden, setHidden] = useState(false);
  const numberHidden = 1;
  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;

  return (
    <div
      className={`scrollbar-hidden flex flex-col justify-between gap-5 dark:bg-gray-9 w-full h-full overflow-y-scroll text-white ${
        isElectron ? 'pb-[30px]' : ''
      }`}
    >
      {/* Fixed Header */}
      <div
        className={`${
          styleType === 'style1'
            ? 'w-[calc(100%-250px)]'
            : styleType === 'style2'
            ? 'w-[calc(100%-60px)]'
            : 'w-full'
        } fixed flex h-[70px] bg-primary dark:bg-gray-10 border-b-[2px] dark:border-gray-7 border-white items-center p-[10px] z-50`}
      >
        <div>
          <p className="text-[20px] font-semibold leading-[28px]">Portfolios & Accounts</p>
        </div>

        <div className="flex-grow"></div>

        <div className="flex gap-[10px]">
          <button
            className="flex p-[10px] rounded-lg gap-2 hover:bg-hover-l dark:hover:bg-hover-d"
            onClick={() => setHidden((prev) => !prev)}
          >
            {hidden ? <EyeOff /> : <Eye />}
            <p>{numberHidden} hidden</p>
          </button>

          <button className="flex bg-primary-d hover:bg-hover-l dark:bg-gray-8 p-[10px] rounded-lg gap-2">
            <Pencil />
            Edit
          </button>

          <button className="flex bg-primary-d2 dark:bg-gray-7 p-[10px] rounded-lg gap-2">
            <Plus />
            Add account
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="w-full pt-[80px] p-[40px] gap-10 flex flex-col">
        {/* Depot Section */}
        <div className="flex flex-col rounded-2xl dark:bg-gray-10 mt-[30px] rounded-lg shadow-[0_0_15px_10px_rgba(0,0,0,0.1)]">
          <div className="h-[70px] flex items-center p-3 text-[20px] font-semibold leading-[28px] text-black dark:text-white rounded-t-lg">
            <button className="flex gap-2 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg">
              <p>Depot</p>
              <Plus />
            </button>
            <div className="flex-grow" />
            <p className="pr-3">{formatCurrency(depotData.depotsTotal, depotData.currency)}</p>
          </div>

          {depotData.depots.map((depot, idx) => (
            <Depot
              key={idx}
              depot={depot}
              icon={depotIcons[depot.bank]}
              formatCurrency={formatCurrency}
            />
          ))}
        </div>

        {/* Account Section */}
        <div className="flex flex-col rounded-2xl dark:bg-gray-10 mt-[30px] rounded-lg shadow-[0_0_15px_10px_rgba(0,0,0,0.1)]">
          <div className="h-[70px] flex items-center p-3 text-[20px] font-semibold leading-[28px] text-black dark:text-white">
            <button className="flex gap-2 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg">
              <p>Accounts</p>
              <Plus />
            </button>
            <div className="flex-grow" />
            <p className="pr-3">
              {formatCurrency(accountData.depotsTotal, accountData.currency)}
            </p>
          </div>

          {accountData.accounts.map((account, idx) => (
            <Account key={idx} account={account} icon={accountIcons[account.bank]} />
          ))}
        </div>
      </div>

      {/* Spacer for Electron Scrollbar Padding */}
      {/*isElectron && <div className="relative min-h-[10px]" />*/}
    </div>
  );
};

export default Portfolios_and_Accounts;
