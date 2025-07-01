import React from 'react'
import { RotateCcw,  CornerDownRight } from 'lucide-react'

type ClearingAccount = {
  name: string
  balance: number
  graph: string
}

type DepotProps = {
  depot: {
    currency: string
    name: string
    bank: string
    balance: number
    lastUpdate: string
    graph: string
    clearingAccount: ClearingAccount
  }
  icon: string
  formatCurrency: (amount: number) => string
}

const Depot: React.FC<DepotProps> = ({ depot, icon, formatCurrency }) => (
  <div className="flex flex-col gap-3 p-3 pl-5 dark:border-gray-7 border-t-[2px] h-[150px] text-black dark:text-white">
    {/* Depot */}
    <div className="flex flex-row h-1/2">

      <button className='w-[50px] group flex justify-center items-center'>
        <img src={icon} alt={depot.bank} className="rounded-lg group-hover:hidden border-orange-400 border-2" />
        <RotateCcw size={50} strokeWidth={2.5}  className='group-hover:block hidden bg-primary rounded-lg p-3 text-white'/>
      </button>

      <div className="flex flex-col justify-center dark:bg-gray-10 pl-3">
        <p className="font-semibold text-[18px] leading-[22px]">{depot.name}</p>
        <p className="font-semibold text-gray-4 text-[14px] leading-[22px]">{depot.bank}</p>
      </div>

      <div className='flex-grow'/>
      
      <div className="m:hidden s:hidden l:block xl:block l:ml-10 xl:ml-32">graph WIP</div>

      <p className="flex justify-end items-center order-5 l:ml-12 m:ml-5 xl:ml-40 pr-3 font-semibold text-[18px] leading-[22px] w-[100px]">
        {formatCurrency(depot.balance)}
      </p>
    </div>

    {/* Clearing Account */}
    <div className="flex flex-row h-1/2">

      <div className="flex pl-5 translate-y-1">
        <CornerDownRight className="rounded-lg" size={32} />
      </div>

      <div className="flex flex-col justify-center dark:bg-gray-10 pl-3">
        <p className="font-semibold text-[18px] leading-[22px]">{depot.clearingAccount.name}</p>
        <p className="font-semibold text-[14px] text-gray-4 leading-[22px]">{depot.bank}</p>
      </div>

      <div className='flex-grow'/>

      <div className="s:hidden m:hidden l:block xl:block">graph WIP</div>

      <div className="order-4" />
      <p className="flex justify-end items-center order-5 l:ml-12 m:ml-5 xl:ml-40 pr-3 font-semibold text-[18px] leading-[22px]  w-[100px]">
        {formatCurrency(depot.clearingAccount.balance)}
      </p>
    </div>
  </div>
)

export default Depot
