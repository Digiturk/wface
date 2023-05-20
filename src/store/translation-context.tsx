import React, { FC, createContext, useMemo, useContext } from "react";


export interface TranslationContext {
 
}

const defaultData: TranslationContext = {
 
}

interface TranslationContextValue extends TranslationContext {
  
}

const TranslationContextReact = createContext<TranslationContextValue>(defaultData as TranslationContextValue);

interface TranslationContextProviderProps {
  children: React.ReactNode, 
}

export const TranslationContextProvider: FC<TranslationContextProviderProps> = ({ children }) => {

  const value = useMemo<TranslationContextValue>(() => ({
  
  }), []);

  return (
    <TranslationContextReact.Provider value={value}>
      {children}
    </TranslationContextReact.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContextReact);
