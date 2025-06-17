import React, { useState } from 'react'
import { Plus, Eye, EyeOff, Pencil } from 'lucide-react'
import Depot from '@features/accounts/Depots'
import { useCurrencyFormatter } from '@components/common/CurrencyFormatter'
import { data, icons } from '@data/depots'
import { useStyle } from '@components/common/StyleContext'

const Portfolios_and_Accounts: React.FC = () => {
  const { styleType } = useStyle()
  const [hidden, setHidden] = useState(false)
  const numberHidden = 1
  const formatCurrency = useCurrencyFormatter(data.currency)

  return (
    <div className="scrollbar-hidden flex flex-col justify-between gap-5 dark:bg-gray-9 w-full h-full min-h-[100vh] overflow-y-scroll dark:text-white">
      <div
        className={`${
          styleType === 'style1'
            ? 'w-[calc(100%-250px)]'
            : styleType === 'style2'
            ? 'w-[calc(100%-60px)]'
            : 'w-full'
        } fixed flex  h-[70px] bg-gray-10 border-b-[2px] border-gray-7 items-center p-[10px]`}
      >
        <div>
          <p className="text-[20px] font-semibold leading-[28px]">Portfolios & Accounts</p>
        </div>

        <div className="flex-grow"></div>

        <div className="flex gap-[10px]">
          <button
            className="flex p-[10px] rounded-lg gap-2 hover:bg-hover-d"
            onClick={() => setHidden((prev) => !prev)}
          >
            {hidden ? <EyeOff /> : <Eye />}
            <p>{numberHidden} hidden</p>
          </button>

          <button className="flex bg-gray-8 p-[10px] rounded-lg gap-2">
            <Pencil />
            Edit
          </button>

          <button className="flex bg-gray-7 p-[10px] rounded-lg gap-2">
            <Plus />
            Add account
          </button>
        </div>
      </div>

      <div className="h-full w-full mt-[70px] p-[40px] gap-10 flex flex-col">
        <div className="flex flex-col rounded-2xl bg-gray-10">
          <div className="h-[70px] flex items-center p-3 text-[20px] font-semibold leading-[28px] ">
            <button className="flex gap-2 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg">
              <p>Depots</p>
              <Plus />
            </button>
            <div className="flex-grow" />
            <p className="pr-3">{formatCurrency(data.depotsTotal)}</p>
          </div>

          {data.depots.map((depot, idx) => (
            <Depot key={idx} depot={depot} icon={icons[depot.bank]} formatCurrency={formatCurrency} />
          ))}
        </div>

        {/* Your accounts section... */}
        <div className="bg-green-400 flex flex-col">
          <div className="h-[70px] bg-yellow-400">
            <button className="flex gap-2 hover:bg-hover-l dark:hover:bg-hover-d">
              <p>Accounts</p>
              <Plus />
            </button>
          </div>
          <div className="h-[100px] bg-purple-400">1st account</div>
          <div className="h-[100px] bg-green-400">2nd account</div>
          <div className="h-[100px] bg-red-400">3rd account</div>
        </div>
      </div>
    </div>
  )
}

export default Portfolios_and_Accounts
