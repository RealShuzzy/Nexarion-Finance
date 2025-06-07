import { Minus, Square, X } from 'lucide-react';

const CustomTitleBar: React.FC = () => {
  const handleWindowAction = (action: 'minimize' | 'maximize' | 'close') => {
    window.electronAPI?.windowAction(action);
  };

  const windowName = window.electronAPI?.getWindowName();

  const isLogin = windowName === 'login';

  return (
    <div
      className='w-full min-h-[30px] bg-background-dark text-white flex items-center justify-center relative border-b-[1px] border-border'
      style={{ WebkitAppRegion: 'drag' } as React.CSSProperties & { WebkitAppRegion: string }}
    >
      <div className="text-sm font-semibold">Nexarion</div>

      <div className="flex gap-2 absolute right-[5px]" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties & { WebkitAppRegion: string }}>

        {!isLogin &&
        <button onClick={() => handleWindowAction('minimize')} className="hover:bg-[#292929] p-1 rounded" tabIndex={-1}>
          <Minus size={16} />
        </button>
        }

        {!isLogin &&
        <button onClick={() => handleWindowAction('maximize')} className="hover:bg-[#292929] p-1 rounded" tabIndex={-1}>
          <Square size={16} />
        </button>
        }
        
        <button onClick={() => handleWindowAction('close')} className="hover:bg-red-500 p-1 rounded" tabIndex={-1}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CustomTitleBar;
