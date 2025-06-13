import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type StyleContextType = {
  styleType: string;
  toggleStyle: () => void;
};

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  const [userStyle, setUserStyle] = useState(() => {
    return localStorage.getItem('styleType') || 'style1';
  });
  const [isS, setIsS] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsS(window.innerWidth < 600);
    };
    checkViewport(); // run once on mount
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const toggleStyle = () => {
    if (isS) return; // cannot toggle when forced
    setUserStyle(prev => {
      const newStyle = prev === 'style1' ? 'style2' : 'style1';
      localStorage.setItem('styleType', newStyle);
      return newStyle;
    });
  };

  const styleType = isS ? 'styleS' : userStyle;

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
