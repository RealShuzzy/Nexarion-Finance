// Imports
import { Plus } from 'lucide-react';
import React from 'react';
import PieChart from './PieChart';

const Dashboard: React.FC = () => {

  // Variables
  const username = localStorage.getItem('username')
  const isElectron = typeof window !== 'undefined' && !!window.electronAPI;

  return (
  // Dashboard
  <div className="flex flex-col justify-between h-full w-full p-[20px] gap-5 dark:bg-gray-9 dark:text-white scrollbar-hidden overflow-y-scroll">

    {/* Top */}
    <div className='flex items-center h-[50px] w-full'>

      {/* Dashboard Text */}
      <div className='flex flex-col'>
        <span className='font-bold text-gray-4 text-sm'>Welcome, {username}!</span>
        <span className='font-bold text-2xl dark:text-white'>Dashboard</span>
      </div>

      {/* Spacer */}
      <div className='flex-grow min-w-6'/>

      {/* Buttons */}
      <div className='flex space-between gap-8 h-[38px]'>

        {/* Buttons time */}
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

        {/* Button add */}
        <button className='flex flex-row items-center p-2 gap-3 rounded-lg text-xl bg-hover-l dark:bg-gray-7 hover:bg-hover-l dark:hover:bg-hover-d  w-[38px]'>
            <Plus size={24}/>
        </button>

      </div>

    </div>
    
    {/* Middle */}
    <div className={`${isElectron ? 'min-h-[calc(100vh-140px)]' : 'min-h-[calc(100vh-110px)]'} flex flex-wrap flex-grow w-full gap-5`}>

      {/* Pie Chart */}
      <div className={`flex flex-col flex-grow items-center w-[clamp(350px,35%,100%)] bg-blue-400`}>
        <PieChart data={[
          { value: 500, group: 'crypto',     name: 'Bitcoin' },
          { value: 100, group: 'cash',       name: 'Cash' },
          { value: 200, group: 'realEstate', name: 'White House' },
          { value: 200, group: 'cash',       name: 'S&P500' },
          { value: 300, group: 'cash',       name: 'NVIDIA' },
          { value: 100, group: 'other',      name: 'Side Hussle' }
        ]}/>
      </div>
      
      {/* Chart */}
      <div className={`flex flex-col flex-grow items-center w-[clamp(350px,60%,100%)] bg-green-400`}>
        <PieChart data={[
          { value: 300, group: 'crypto',     name: 'Bitcoin' },
          { value: 100, group: 'cash',       name: 'Cash' },
          { value: 200, group: 'realEstate', name: 'White House' },
          { value: 200, group: 'cash',       name: 'S&P500' },
          { value: 300, group: 'cash',       name: 'NVIDIA' },
          { value: 100, group: 'other',      name: 'Side Hussle' }
        ]}/>
      </div>

    </div>
    
    {/* Holdings */}
    <div className='min-h-[1000px] bg-yellow-400'>
      <p>holdings</p>
    </div>
    
    {/* Cash */}
    <div className='flex flex-col min-h-[1000px] bg-purple-400 justify-end'>
      <p>cash</p>
      <p>cash</p>
      <p>cash</p>
      <p>cash</p>
    </div>

    {/* Padding for electron */}
    {isElectron && <div className='min-h-[10px] w-full' />}
      
  </div>
)};

export default Dashboard;