import { Minus, Square, X } from 'lucide-react';

const CustomTitleBar: React.FC = () => {

  const handleWindowAction = (action: 'minimize' | 'maximize' | 'close') => {
    window.electronAPI?.windowAction(action);
  };

  const windowName = window.electronAPI?.getWindowName();

  const isLogin = windowName === 'login';

  return (
    <div
      className='relative flex justify-center items-center min-h-[30px] w-full dark:bg-gray-10 text-black dark:text-white border-b-[1px] border-black dark:border-gray-7'
      style={{ WebkitAppRegion: 'drag' } as React.CSSProperties & { WebkitAppRegion: string }}
    >
      <div className="text-sm font-semibold">Nexarion</div>

      <div className="absolute flex gap-2 right-[5px]" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties & { WebkitAppRegion: string }}>

        {!isLogin &&
        <button onClick={() => handleWindowAction('minimize')} className="p-1 rounded hover:bg-hover-l dark:hover:bg-hover-d" tabIndex={-1}>
          <Minus size={16} />
        </button>
        }

        {!isLogin &&
        <button onClick={() => handleWindowAction('maximize')} className="p-1 rounded hover:bg-hover-l dark:hover:bg-hover-d" tabIndex={-1}>
          <Square size={16} />
        </button>
        }
        
        <button onClick={() => handleWindowAction('close')} className="p-1 rounded hover:bg-red-400" tabIndex={-1}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CustomTitleBar;
