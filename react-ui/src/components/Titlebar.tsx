import { Minimize, Maximize2, X } from 'lucide-react';

const CustomTitleBar: React.FC = () => {
  const handleWindowAction = (action: 'minimize' | 'maximize' | 'close') => {
    // @ts-ignore - electronAPI injected by preload
    window.electronAPI?.windowControl(action);
  };

  return (
    <div
      id="titlebar"
      style={{ WebkitAppRegion: 'drag' } as React.CSSProperties & { WebkitAppRegion: string }}
    >
      <div className="text-sm font-semibold">Nexarion</div>

      <div className="flex gap-2" id="windowAction" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties & { WebkitAppRegion: string }}>

        <button onClick={() => handleWindowAction('minimize')} className="hover:bg-gray-700 p-1 rounded">
          <Minimize size={16} />
        </button>
        <button onClick={() => handleWindowAction('maximize')} className="hover:bg-gray-700 p-1 rounded">
          <Maximize2 size={16} />
        </button>
        <button onClick={() => handleWindowAction('close')} className="hover:bg-red-600 p-1 rounded">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CustomTitleBar;
