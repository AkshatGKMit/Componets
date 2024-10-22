import { defaultDynamicTabContextValues } from '@constants/context';
import ApiCall from '@network/api';
import { createContext, useState } from 'react';

const DynamicTabContext = createContext(defaultDynamicTabContextValues);

export const DynamicTabContextProvider = ({ children }: CtxProviderProps) => {
  const [success, setSuccess] = useState(defaultDynamicTabContextValues.globalSearch.success);
  const [globalSearch, setGlobalSearch] = useState(defaultDynamicTabContextValues.globalSearch);

  const search = async (text: string) => {
    const response = await ApiCall<GlobalSearch, GlobalSearchParams>({
      method: 'GET',
      url: 'https://saavn.dev/api/search',
      params: {
        query: text,
      },
    });

    if (response.success) {
      setSuccess(true);
      setGlobalSearch(response.responseData);
    } else {
      setSuccess(false);
    }
  };

  const falseSuccess = () => setSuccess(false);

  const ctxValues = { globalSearch, search, falseSuccess };
  return <DynamicTabContext.Provider value={ctxValues}>{children}</DynamicTabContext.Provider>;
};

export default DynamicTabContext;
