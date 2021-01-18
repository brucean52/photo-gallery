import React, {useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InstagramIcon from '@material-ui/icons/Instagram';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    bottom: '-3px',
    backgroundColor: '#262626',
  },
  action: {
    color: '#fafafa',
    '&.Mui-selected': {
      color: '#ee0d0d',
    }
  }
});

export default function MobileBottomNav() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname.includes('instagram') ? '/instagram' : '/');

  const handleChange = (event, value) => {
    setValue(value);
    history.push(value);
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.action} label="Gallery" icon={<DashboardIcon />} value="/" />
      <BottomNavigationAction className={classes.action} label="Instagram" icon={<InstagramIcon />} value="/instagram"/>
    </BottomNavigation>
  );
}
