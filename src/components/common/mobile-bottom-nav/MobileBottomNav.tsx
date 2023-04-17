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
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, value: number) => {
    setValue(value);
    if (value === 0) {
      navigate('/');
    } else {
      navigate('/instagram');
    }
  }

  useEffect(() => {
    if (location.pathname.includes('instagram')) {
      setValue(1);
    } else {
      setValue(0);
    }
  }, [location.pathname]);

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={styles.root}
    >
      <BottomNavigationAction className={styles.action} label="Gallery" icon={<DashboardIcon />} value={0} />
      <BottomNavigationAction className={styles.action} label="Instagram" icon={<InstagramIcon />} value={1}/>
    </BottomNavigation>
  );
};

export default MobileBottomNav;