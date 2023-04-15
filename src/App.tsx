import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppLayout from './components/common/app-layout/AppLayout';
import GalleryPage from './pages/gallery-page/GalleryPage';
import GalleryPost from './pages/gallery-post/GalleryPost';
import InstagramPage from './pages/instagram-page/InstagramPage';
import InstagramPost from './pages/instagram-post/InstagramPost';

const App: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const modalBackground = !isMobile && location.state && location.state['modalBackground'];

  return (
    <>
      <Routes location={modalBackground || location}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<GalleryPage />} />
          <Route path="/gallery/:id" element={<GalleryPost />} />
          <Route path="/instagram" element={<InstagramPage />} />
          <Route path="/instagram/:id" element={<InstagramPost />} />
        </Route>
      </Routes>
      {modalBackground && (
        <Routes>
          <Route path="/instagram/:id" element={<InstagramPost/>} />
          <Route path="/gallery/:id" element={<GalleryPost/>} />
        </Routes>
      )}
    </>
  );
};

export default App;