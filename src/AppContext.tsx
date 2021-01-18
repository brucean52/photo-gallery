import React, { useState } from 'react';
import { 
  AppContextType,
  AppOptionsType,
  Post
 } from './types';
import { defaultAppOptions } from './defaults';


export const AppContext = React.createContext<AppContextType>({
  appOptions: defaultAppOptions,
  setDefaultPosts: () => {},
  setSelectedPost: () => {},
  clearSelectedPost: () => {},
  setSortedPhotos: () => {}
});

const AppProvider: React.FC<{ children: any }> = ({ children }) => {

  const [appOptions, setAppOptions] = useState<AppOptionsType>(defaultAppOptions);

  const setDefaultPosts = (posts: Post[]) => {
    setAppOptions({ ...appOptions, defaultPosts: posts });
  };

  const setSelectedPost = (postId: string) => {
    setAppOptions({ ...appOptions, selectedPostId: postId });
  }

  const clearSelectedPost = () => {
    setAppOptions({ ...appOptions, selectedPostId: "" });
  }

  const setSortedPhotos = (photos: any[]) => {
    setAppOptions({ ...appOptions, sortedPhotos: [...photos] });
  }

  return (
    <AppContext.Provider value={{
      appOptions,
      setDefaultPosts,
      setSelectedPost,
      clearSelectedPost,
      setSortedPhotos
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
