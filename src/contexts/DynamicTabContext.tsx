import { defaultDynamicTabContextValues } from '@constants/context';
import ApiCall from '@network/api';
import { createContext, useState } from 'react';

const DynamicTabContext = createContext(defaultDynamicTabContextValues);

export const DynamicTabContextProvider = ({ children }: CtxProviderProps) => {
  const [success, setSuccess] = useState(defaultDynamicTabContextValues.success);
  const [globalSearch, setGlobalSearch] = useState(defaultDynamicTabContextValues.globalSearch);

  const search = async (text: string) => {
    console.warn(text);

    const response = await ApiCall<GlobalSearch, GlobalSearchParams>({
      method: 'GET',
      url: 'https://saavn.dev/api/search',
      params: {
        query: text,
      },
    });

    if (response.success) {
      console.log(response.responseData);

      setSuccess(true);
      setGlobalSearch(response.responseData);
    } else {
      setSuccess(false);
    }
  };

  const falseSuccess = () => setSuccess(false);

  const ctxValues = { globalSearch, search, success, falseSuccess };
  return <DynamicTabContext.Provider value={ctxValues}>{children}</DynamicTabContext.Provider>;
};

export default DynamicTabContext;
