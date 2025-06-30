import React from 'react'
import { RotateCcw } from 'lucide-react'
import { formatCurrency } from '@components/common/CurrencyFormatter'
type AccountProps = {
  account: {
    currency: string
    name: string
    bank: string
    balance: number
    lastUpdate: string
    graph: string
  }

  icon: string
}

const Account: React.FC<AccountProps> = ({ account, icon }) => (
  <div className="flex flex-col gap-3 p-3 pl-5 text-black dark:text-white dark:border-gray-7 border-t-[2px] h-[100px] justify-center">
    
    {/* Account */}
    <div className="flex flex-row h-1/2">

      <button className='w-[50px] group flex justify-center items-center'>
        <img src={icon} alt={account.bank} className="rounded-lg group-hover:hidden border-orange-400 border-2" />
        <RotateCcw size={50} strokeWidth={2.5}  className='group-hover:block hidden bg-primary rounded-lg p-3'/>
      </button>

      <div className="flex flex-col justify-center dark:bg-gray-10 pl-3">
        <p className="font-semibold text-[18px] leading-[22px]">{account.name}</p>
        <p className="font-semibold text-gray-4 text-[14px] leading-[22px]">{account.bank}</p>
      </div>

      <div className='flex-grow'/>
      
      <div className="m:hidden s:hidden l:block xl:block l:ml-10 xl:ml-32">graph WIP</div>

      <p className="flex justify-end items-center order-5 l:ml-12 m:ml-5 xl:ml-40 pr-3 font-semibold text-[18px] leading-[22px] w-[100px]">
        {formatCurrency(account.balance, account.currency)}
      </p>
    </div>
</div>
)

export default Account
