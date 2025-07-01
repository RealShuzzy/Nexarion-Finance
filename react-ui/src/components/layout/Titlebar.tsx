import { Minus, Square, X } from 'lucide-react';

const CustomTitleBar: React.FC = () => {

  const handleWindowAction = (action: 'minimize' | 'maximize' | 'close') => {
    window.electronAPI?.windowAction(action);
  };

  const windowName = window.electronAPI?.getWindowName();

  const isLogin = windowName === 'login';

  return (
    <div
      className='relative flex justify-center items-center bg-primary dark:bg-gray-10 dark:border-gray-7 border-b-[1px] border-white w-full min-h-[30px] text-white'
      style={{ WebkitAppRegion: 'drag' } as React.CSSProperties & { WebkitAppRegion: string }}
    >
      <div className="font-semibold text-sm">Nexarion</div>

      <div className="right-[5px] absolute flex gap-2" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties & { WebkitAppRegion: string }}>

        {!isLogin &&
        <button onClick={() => handleWindowAction('minimize')} className="hover:bg-hover-l dark:hover:bg-hover-d p-1 rounded" tabIndex={-1}>
          <Minus size={16} />
        </button>
        }

        {!isLogin &&
        <button onClick={() => handleWindowAction('maximize')} className="hover:bg-hover-l dark:hover:bg-hover-d p-1 rounded" tabIndex={-1}>
          <Square size={16} />
        </button>
        }
        
        <button onClick={() => handleWindowAction('close')} className="hover:bg-red-400 p-1 rounded" tabIndex={-1}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CustomTitleBar;
