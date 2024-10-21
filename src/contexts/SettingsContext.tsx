import { createContext, ReactNode, useState } from 'react';

const defaultSettingsContextValues = {
  isBottomTab: true,
  changeIsBottomTab: () => {},
};

const SettingsContext = createContext<SettingsCtxProps>(defaultSettingsContextValues);

export const SettingsContextProvider = ({ children }: CtxProviderProps) => {
  const [isBottomTab, setIsBottomTab] = useState(true);

  const changeIsBottomTab = (value: boolean) => {
    setIsBottomTab(value);
  };

  const ctxValues = { isBottomTab, changeIsBottomTab };

  return <SettingsContext.Provider value={ctxValues}>{children}</SettingsContext.Provider>;
};

export default SettingsContext;
