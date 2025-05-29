export {};

declare global {
  interface Window {
    electronAPI?: {
      windowControl: (action: 'minimize' | 'maximize' | 'close') => void;
    };
  }
}