import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './MobileBottomNav.module.scss';

const MobileBottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname.includes('instagram') ? '/instagram' : '/');

  const handleChange = (event, value) => {
    setValue(value);
    navigate(value);
  }

  useEffect(() => {
    if (location.pathname.includes('instagram')) {
      setValue('/instagram')
    } else {
      setValue('/')
    }
  }, [location.pathname]);

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={styles.root}
    >
      <BottomNavigationAction className={styles.action} label="Gallery" icon={<DashboardIcon />} value="/" />
      <BottomNavigationAction className={styles.action} label="Instagram" icon={<InstagramIcon />} value="/instagram"/>
    </BottomNavigation>
  );
};

export default MobileBottomNav;