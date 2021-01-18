import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import GitHubIcon from '@material-ui/icons/GitHub';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  contain: {
    width: '935px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  titleContainer: {
    display: 'flex'
  },
  title: {
    fontFamily: "'Bebas Neue', cursive",
    padding: '11px 0 0 10px',
    fontSize: '24px',
    cursor: 'pointer',
    userSelect: 'none',
    letterSpacing: '0.5px'
  },
  link: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  white: {
    color: '#fff'
  },
  logoIcon: {
    fontSize:'24px',
    marginTop: '12px',
    cursor: "pointer"
  },
  githubIcon: {
    padding: '12px 0 0 0'
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: "100px",
      width: "100%",
      backgroundColor: "#ee0d0d"
    }
  }
}));

export default function AppHeader() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState(location.pathname.includes('instagram') ? '/instagram' : '/');

  useEffect(() => {
    if (location.pathname) {
      setValue(location.pathname.includes('instagram') ? '/instagram' : '/')
    }
  }, [location.pathname]);

  const handleChange = (event, value) => {
    setValue(value);
    history.push(value);
  }

  return (
    <AppBar position="fixed">
      <div className={classes.contain}>
        <div className={classes.root}>
        
          <div className={classes.titleContainer} onClick={() => history.push("/")}>
            <CameraEnhanceIcon className={classes.logoIcon}/>
            <Typography variant="h4"className={classes.title}>
              No Filter
            </Typography>
          </div>
          {!mobile && (
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              TabIndicatorProps={{ children: <span /> }}
              centered
              classes={{ indicator: classes.indicator}}
            >
              <Tab label="Gallery" value="/"/>
              <Tab label="Instagram" value="/instagram"/>
            </Tabs>
          )}

          <div>
            <Tooltip title="Github">
              <IconButton className={classes.githubIcon}>
                <a
                  href="https://github.com/brucean52/photo-gallery"
                  target="_blank"
                >
                  <GitHubIcon className={classes.white}/>
                </a>
              </IconButton>
            </Tooltip>
          </div>

        </div>
      </div>
    </AppBar>
  );
}
