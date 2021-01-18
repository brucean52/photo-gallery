import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import AppHeader from './components/common/AppHeader';
import GalleryPage from './pages/GalleryPage';
import InstagramPage from './pages/InstagramPage';
import GalleryPost from './pages/GalleryPost';
import InstagramPost from './pages/InstagramPost';
import ScrollTop from './components/common/ScrollTop';
import MobileBottomNav from './components/common/MobileBottomNav';

import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  const theme = useTheme();
  const location = useLocation();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const modalBackground = !mobile && location.state && location.state['modalBackground'];
 
  return (
    <div>
      <AppHeader/>
      <Switch location={modalBackground || location}>
        <Route path="/" exact>
          <GalleryPage/>
        </Route>
        <Route path="/gallery/:id">
          <GalleryPost/>
        </Route>
        <Route path="/instagram" exact>
          <InstagramPage/>
        </Route>
        <Route path="/instagram/:id">
          <InstagramPost/>
        </Route>
      </Switch>
      {modalBackground && <Route path="/instagram/:id" children={<InstagramPost/>} />}
      {modalBackground && <Route path="/gallery/:id" children={<GalleryPost/>} />}

      {/* <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
      {mobile && <MobileBottomNav/>}
    </div>  
  );
}

export default App;
