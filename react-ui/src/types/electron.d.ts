export {};

declare global {
  interface Window {
    electronAPI?: {
      windowAction: (action: 'minimize' | 'maximize' | 'close') => void;
      loginSuccess: () => void;
      logout: () => void;
      getWindowName: () => string | undefined;
    };
  }
}