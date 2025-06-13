import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type StyleContextType = {
  styleType: string;
  toggleStyle: () => void;
};

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  const [styleType, setStyleType] = useState(() => {
    return localStorage.getItem('styleType') || 'style1';
  });

  const toggleStyle = () => {
    setStyleType(prev => {
      const newStyle = prev === 'style1' ? 'style2' : 'style1';
      localStorage.setItem('styleType', newStyle);
      return newStyle;
    });
  };

  return (
    <StyleContext.Provider value={{ styleType, toggleStyle }}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) throw new Error('useStyle must be used within a StyleProvider');
  return context;
};
