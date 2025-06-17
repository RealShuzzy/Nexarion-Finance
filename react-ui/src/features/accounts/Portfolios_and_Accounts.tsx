import { useStyle } from '@components/common/StyleContext';
import { Eye, EyeOff, Pencil, Plus } from 'lucide-react';
import React from 'react';

const Portfolios_and_Accounts: React.FC = () => {
  const { styleType } = useStyle()
  let hidden = false

  return (
    <div className="scrollbar-hidden flex flex-col justify-between gap-5 dark:bg-gray-9 w-full h-full min-h-[200vh] overflow-y-scroll dark:text-white">

      <div className={`${styleType === 'style1' ? 'w-[calc(100%-250px)]' : `${styleType === 'style2' ? 'w-[calc(100%-60px)]' : 'w-full'}` } fixed flex  h-[70px] bg-gray-10 border-b-[2px] border-gray-7 items-center p-[10px]`}>
        <div className=''>
          <p>Portfolios & Accounts</p>
        </div>

        <div className='flex-grow'></div>

        <div className='flex gap-[10px]'>
          <button className='flex p-[10px] rounded-lg gap-2'>{/**toggle on cliok */}
            {hidden && <div className='flex'> <EyeOff />Hidden </div>}
            {!hidden && <div className='flex'> <Eye />Hide </div>}
          </button>

          <button className='flex bg-gray-8 p-[10px] rounded-lg gap-2'>
            <Pencil />Edit
          </button>

          <button className='flex bg-gray-7 p-[10px] rounded-lg gap-2'>
            <Plus />Add account
          </button>
        </div>
        
      </div>
      
      
    </div>
  )
};

export default Portfolios_and_Accounts;