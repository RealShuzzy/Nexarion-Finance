import { Minus, Square, X } from 'lucide-react';

const CustomTitleBar: React.FC = () => {
  const handleWindowAction = (action: 'minimize' | 'maximize' | 'close') => {
    // @ts-ignore - electronAPI injected by preload
    window.electronAPI?.windowAction(action);
  };

  return (
    <div
      className='w-full min-h-[30px] bg-background-dark text-white flex items-center justify-center relative border-b-[2px] border-border'
      style={{ WebkitAppRegion: 'drag' } as React.CSSProperties & { WebkitAppRegion: string }}
    >
      <div className="text-sm font-semibold">Nexarion</div>

      <div className="flex gap-2" id="windowAction" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties & { WebkitAppRegion: string }}>

        <button onClick={() => handleWindowAction('minimize')} className="hover:bg-[#292929] p-1 rounded">
          <Minus size={16} />
        </button>
        <button onClick={() => handleWindowAction('maximize')} className="hover:bg-[#292929] p-1 rounded">
          <Square size={16} />
        </button>
        <button onClick={() => handleWindowAction('close')} className="hover:bg-red-500 p-1 rounded">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CustomTitleBar;
