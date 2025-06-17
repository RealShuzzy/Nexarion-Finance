// Imports
import { Plus } from 'lucide-react';
import React from 'react';
import PieChart from './PieChart';
import DataNumbers from './DataNumbers';

const Dashboard: React.FC = () => {

  // Variables
  const username = localStorage.getItem('username')
  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;

  return (
  // Dashboard
  <div className="scrollbar-hidden flex flex-col justify-between gap-5 dark:bg-gray-9 p-[20px] w-full h-full overflow-y-scroll dark:text-white">

    {/* Top */}
    <div className='flex items-center w-full h-[50px]
                    s:bg-red-400 m:bg-yellow-400 l:bg-green-400 xl:bg-blue-400'>

      {/* Dashboard Text */}
      <div className='flex flex-col'>
        <span className='font-bold text-gray-4 text-sm'>Welcome, {username}!</span>
        <span className='font-bold dark:text-white text-2xl'>Dashboard</span>
      </div>

      {/* Spacer */}
      <div className='flex-grow min-w-6'/>

      {/* Buttons */}
      <div className='flex gap-8 h-[38px] space-between'>

        {/* Buttons time */}
        <div className='flex flex-row gap-3'>
          <button className='flex flex-row justify-center items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg w-[38px] h-[38px] font-semibold text-m'>
            1W
          </button>

          <button className='flex flex-row justify-center items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg w-[38px] h-[38px] font-semibold text-m'>
            1M
          </button>

          <button className='flex flex-row justify-center items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg w-[38px] h-[38px] font-semibold text-m'>
            6M
          </button>
          
          <button className='flex flex-row justify-center items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg w-[48px] h-[38px] font-semibold text-m'>
            YTD
          </button>

          <button className='flex flex-row justify-center items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg w-[38px] h-[38px] font-semibold text-m'>
            1Y
          </button>

          <button className='flex flex-row justify-center items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg w-[38px] h-[38px] font-semibold text-m'>
            5Y
          </button>

          <button className='flex flex-row justify-center items-center gap-3 hover:bg-hover-l dark:hover:bg-hover-d p-2 rounded-lg w-[56px] h-[38px] font-semibold text-m'>
            MAX
          </button>

        </div>

        {/* Button add */}
        <button className='flex flex-row items-center gap-3 bg-hover-l hover:bg-hover-l dark:bg-gray-7 dark:hover:bg-hover-d p-2 rounded-lg w-[38px] text-xl'>
            <Plus size={24}/>
        </button>

      </div>

    </div>

    <div className={`grid grid-cols-[45%_55%]
              s:grid-cols-1 s:grid-rows-[40%_20%_40%] s:h-[1500px]
              m:grid-cols-1 m:grid-rows-[40%_20%_40%]  m:h-[1500px]
              l:grid-cols-[45%_55%] l:grid-rows-[55%_45%] ${isElectron ? 'l:h-[calc(100vh-140px)]' : 'l:h-[calc(100vh-110px)]'}
              xl:grid-cols-[35%_65%] xl:grid-rows-[60%_40%] ${isElectron ? 'xl:h-[calc(100vh-140px)]' : 'xl:h-[calc(100vh-110px)]'}
              max-w-full`}>

    <div className="order-1">
      <PieChart data={[
              { value: 500, group: 'crypto',     name: 'Bitcoin' },
              { value: 100, group: 'cash',       name: 'Cash' },
              { value: 200, group: 'realEstate', name: 'White House' },
              { value: 200, group: 'cash',       name: 'S&P500' },
              { value: 300, group: 'cash',       name: 'NVIDIA' },
              { value: 100, group: 'other',      name: 'Side Hussle' }
            ]}/>
    </div>

    <div className="bg-gray-9 s:order-2 m:order-2 l:order-3 xl:order-3 p-5">
      <DataNumbers />
    </div>

    <div className={`bg-green-400 
                    s:row-span-1 m:row-span-1 l:row-span-2 xl:row-span-2
                    s:order-3 m:order-3
                    l:order-2
                    xl:order-2
                    `}>
      <PieChart data={[
            { value: 500, group: 'crypto',     name: 'Bitcoin' },
            { value: 100, group: 'cash',       name: 'Cash' },
            { value: 200, group: 'realEstate', name: 'White House' },
            { value: 200, group: 'cash',       name: 'S&P500' },
            { value: 300, group: 'cash',       name: 'NVIDIA' },
            { value: 100, group: 'other',      name: 'Side Hussle' }
          ]}/>
    </div>
  </div>

  <div className="flex flex-col gap-5">
    <div className="bg-yellow-200">
      <p>holdings</p>
      <p>holdings</p>
      <p>holdings</p>
      <p>holdings</p>
      <p>holdings</p>
      <p>holdings</p>
      <p>holdings</p>
    </div>
    <div className="bg-purple-200">
      <p>cash</p>
      <p>cash</p>
      <p>cash</p>
      <p>cash</p>
      <p>cash</p>
      <p>cash</p>
      <p>cash</p>
    </div>
  </div>

  {/* Padding for electron */}
  {isElectron && <div className='w-full min-h-[10px]' />}
</div>
)};

export default Dashboard;