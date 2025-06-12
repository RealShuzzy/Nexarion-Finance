import { Plus } from 'lucide-react';
import React from 'react';
import PieChart from './PieChart';

const Dashboard: React.FC = () => {

  const username = localStorage.getItem('username')
  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;

  return (
  <div className="flex flex-col justify-between h-full w-full p-[20px] gap-5 dark:bg-gray-9 dark:text-white scrollbar-hidden overflow-y-auto">

    <div className='flex items-center h-[50px] w-full '>

      <div className='flex flex-col'>
        <span className='font-bold text-gray-4 text-sm'>Guten Morgen, {username}</span>
        <span className='font-bold text-2xl dark:text-white'>Dashboard</span>
      </div>

      <div className='flex-grow'/>

      <div className='flex space-between gap-8'>

        <button className='flex flex-row items-center p-2 gap-3 rounded-lg text-xl bg-hover-l dark:bg-gray-7 hover:bg-hover-l dark:hover:bg-hover-d'>
          <Plus size={24}/>
          Add a Portfolio
        </button>

        <div className='flex flex-row gap-3'>
          <button className='flex flex-row items-center justify-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            1W
          </button>

          <button className='flex flex-row items-center justify-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            1M
          </button>

          <button className='flex flex-row items-center justify-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            6M
          </button>
          
          <button className='flex flex-row items-center justify-center h-[38px] w-[48px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            YTD
          </button>

          <button className='flex flex-row items-center justify-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            1Y
          </button>

          <button className='flex flex-row items-center justify-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            5Y
          </button>

          <button className='flex flex-row items-center justify-center h-[38px] w-[56px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            MAX
          </button>

        </div>

      </div>

    </div>

    {/**THIS IS NOT WORKING!!!!! */}
    <div className={`${isElectron ? 'min-h-[calc(100vh-140px)]' : 'min-h-[calc(100vh-110px)]'} flex flex-wrap w-full [container-type:inline-size]:w-[1200px]`}>

    <div className="flex flex-col items-center w-full box-border bg-red-400 [container-inline-size:1200px]:w-[40%]">
        <PieChart data={[
          { value: 300, group: 'crypto',     name: 'Bitcoin' },
          { value: 100, group: 'cash',       name: 'Cash' },         
          { value: 200, group: 'realEstate', name: 'White House' },
          { value: 200, group: 'cash',        name: 'S&P500' },
          { value: 300, group: 'cash',      name: 'NVIDIA' },
          { value: 100, group: 'other',      name: 'Side Hussle' }
        ]}/>
      </div>

      <div className="flex flex-col items-center w-full box-border bg-green-400 [container-inline-size:1200px]:w-[60%]">
        <PieChart data={[
          { value: 300, group: 'crypto',     name: 'Bitcoin' },
          { value: 100, group: 'cash',       name: 'Cash' },         
          { value: 200, group: 'realEstate', name: 'White House' },
          { value: 200, group: 'cash',        name: 'S&P500' },
          { value: 300, group: 'cash',      name: 'NVIDIA' },
          { value: 100, group: 'other',      name: 'Side Hussle' }
        ]}/>
      </div>

    </div>
    {/**UNTIL HERE */}

    <div className='flex flex-col w-full gap-5'>

      <div className='h-[300px] bg-yellow-400'>
        <p>holdings</p>
      </div>

      <div className='h-[180px] bg-purple-400'>
        <p>cash</p>
      </div>

    </div>
      
  </div>
)};

export default Dashboard;