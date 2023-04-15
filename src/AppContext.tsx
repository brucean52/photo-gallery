import React, { useState } from 'react';
import { 
  AppContextType,
  AppOptionsType
 } from './types';
import { defaultAppOptions } from './defaults';

export const AppContext = React.createContext<AppContextType>({
  appOptions: defaultAppOptions,
  setSortedPhotos: () => {}
});

const AppProvider: React.FC<{ children: any }> = ({ children }) => {

  const [appOptions, setAppOptions] = useState<AppOptionsType>(defaultAppOptions);

  const setSortedPhotos = (photos: any[]) => {
    setAppOptions({ ...appOptions, sortedPhotos: [...photos] });
  }

  return (
    <AppContext.Provider value={{
      appOptions,
      setSortedPhotos
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
