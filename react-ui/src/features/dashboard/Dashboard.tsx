import { Plus, Share2 } from 'lucide-react';
import React from 'react';

const Dashboard: React.FC = () => {

  const username = localStorage.getItem('username')

  return (
  <div className="flex flex-col space-between h-full w-full p-[10px] gap-5 dark:bg-gray-9 dark:text-white">

    <div className='flex items-center w-full bg-blue-400'>

      <div className='flex flex-col'>
        <span className='font-bold text-gray-4 text-sm'>Guten Morgen, {username}</span>
        <span className='font-bold text-2xl dark:text-white'>Dashboard</span>
      </div>

      <div className='flex-grow'/>

      <div className='flex space-between gap-8'>
        
        <button className='flex flex-row items-center p-2 gap-3 rounded-lg text-xl hover:bg-hover-l dark:hover:bg-hover-d'>
          <Share2 size={24}/>
          Share
        </button>

        <button className='flex flex-row items-center p-2 gap-3 rounded-lg text-xl bg-hover-l dark:bg-gray-7 hover:bg-hover-l dark:hover:bg-hover-d'>
          <Plus size={24}/>
          Add a Portfolio
        </button>

        <div className='flex flex-row gap-3'>
          <button className='flex flex-row items-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            1W
          </button>

          <button className='flex flex-row items-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            1M
          </button>

          <button className='flex flex-row items-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            6M
          </button>
          
          <button className='flex flex-row items-center h-[38px] w-[48px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            YTD
          </button>

          <button className='flex flex-row items-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            1Y
          </button>

          <button className='flex flex-row items-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            3Y
          </button>

          <button className='flex flex-row items-center h-[38px] w-[38px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            5Y
          </button>

          <button className='flex flex-row items-center h-[38px] w-[48px] p-2 gap-3 rounded-lg text-m font-semibold hover:bg-hover-l dark:hover:bg-hover-d'>
            MAX
          </button>

        </div>

      </div>

    </div>

    <div className='flex flex-row space-between h-[89vh] gap-5'>

      <div className='w-[40%] bg-red-400'>
        <p>ml</p>
      </div>

      <div className='w-[60%] bg-green-400'>
        <p>mr</p>
      </div>

    </div>

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