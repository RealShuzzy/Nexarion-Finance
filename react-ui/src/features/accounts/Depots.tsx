import React from 'react'
import { RotateCcw, TriangleAlert, CornerDownRight } from 'lucide-react'

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
  <div className="h-[150px] border-t-[2px] border-gray-7 p-3 pl-5 flex flex-col gap-3">
    {/* Depot */}
    <div className="h-1/2 grid grid-cols-[3%_47%_15%_15%_20%]">
      <img src={icon} alt={depot.bank} className="order-1 size-full rounded-lg" />
      <div className="order-2 bg-gray-10 pl-3 justify-center flex flex-col">
        <p className="text-[18px] font-semibold leading-[22px]">{depot.name}</p>
        <p className="text-[14px] font-semibold leading-[22px] text-gray-4">{depot.bank}</p>
      </div>
      <div className="order-3">graph WIP</div>
      <div className="order-4 flex flex-col items-center gap-1">
        <button className="flex gap-2 bg-gray-8 hover:bg-hover-l dark:hover:bg-hover-d py-1 rounded-lg px-4">
          <RotateCcw size={20} strokeWidth={2.5} />
          <p className="text-[14px] font-semibold leading-[22px]">Refresh</p>
        </button>
        <p className="text-orange-400 flex gap-1 text-[12px] font-semibold">
          <TriangleAlert size={18} /> Last: {depot.lastUpdate}
        </p>
      </div>
      <p className="order-5 text-[18px] font-semibold leading-[22px] flex items-center justify-end pr-3">
        {formatCurrency(depot.balance)}
      </p>
    </div>

    {/* Clearing Account */}
    <div className="h-1/2 grid grid-cols-[3%_47%_15%_15%_20%]">
      <div className="order-1 flex justify-end translate-y-1">
        <CornerDownRight className="rounded-lg" size={32} />
      </div>
      <div className="order-2 bg-gray-10 pl-3 justify-center flex flex-col">
        <p className="text-[18px] font-semibold leading-[22px]">{depot.clearingAccount.name}</p>
        <p className="text-[14px] font-semibold leading-[22px] text-gray-4">{depot.bank}</p>
      </div>
      <div className="order-3">graph WIP</div>
      <div className="order-4" />
      <p className="order-5 text-[18px] font-semibold leading-[22px] flex items-center justify-end pr-3">
        {formatCurrency(depot.clearingAccount.balance)}
      </p>
    </div>
  </div>
)

export default Depot
