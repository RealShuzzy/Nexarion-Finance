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
  <div className="scrollbar-hidden flex flex-col justify-between gap-5 dark:bg-gray-9 p-[20px] w-full h-full overflow-y-scroll dark:text-white">

    {/* Top */}
    <div className='flex items-center w-full h-[50px]'>

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
    
    {/* Middle */}
    <div className={`${isElectron ? 'min-h-[calc(100vh-140px)]' : 'min-h-[calc(100vh-110px)]'} flex flex-wrap flex-grow w-full gap-5`}>

      {/* Pie Chart */}
      <div className={`flex flex-col flex-grow items-center w-[clamp(350px,35%,100%)] bg-gray-8 rounded-lg`}>
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
      <div className={`flex flex-col flex-grow items-center w-[clamp(350px,60%,100%)] bg-gray-8 rounded-lg`}>
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
    <div className='bg-gray-8 rounded-lg min-h-[300px]'>
      <p>holdings</p>
    </div>
    
    {/* Cash */}
    <div className='flex flex-col justify-end bg-gray-8 rounded-lg min-h-[300px]'>
      <p>cash</p>
      <p>cash</p>
      <p>cash</p>
      <p>cash</p>
    </div>

    {/* Padding for electron */}
    {isElectron && <div className='w-full min-h-[10px]' />}
      
  </div>
)};

export default Dashboard;