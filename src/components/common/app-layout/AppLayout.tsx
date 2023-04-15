import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import AppHeader from '../app-header/AppHeader';
import MobileBottomNav from '../mobile-bottom-nav/MobileBottomNav';
import styles from './AppLayout.module.scss';

const AppLayout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <AppHeader />
      <Container className={styles.container}>
        <Outlet />
      </Container>
      {isMobile && <MobileBottomNav />}
    </div>
  );
};

export default AppLayout;