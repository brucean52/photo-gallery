import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { gql, useLazyQuery } from '@apollo/client';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import TabPanel from '../components/common/TabPanel';
import UserProfile from '../components/instagram/UserProfile';
import PostsView from '../components/instagram/views/PostsView';
import FeedView from '../components/instagram/views/FeedView';
import GridIcon from '../components/icons/GridIcon';

import {AppContext} from '../AppContext';

const ALL_POSTS_QUERY = gql`
  query {
    getPosts{
      description
      id
      likes
      location
      tags
      postedDate
      photos {
        id
        src
        squareSrc
        vision
        alt
        exifImageWidth
        exifImageHeight
      }
    }
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    width: '935px',
    margin: '100px auto 30px',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '60px',
      width: '98%',
    }
  },
  tabsWrapper: {
    borderBottom: '1px solid #DBDBDB',
    flexDirection: 'row',
    width: '92.75%',
    margin: '0 auto'
  },
  tabContainer: {
    display: 'flex',
    fontFamily: '"-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"'
  },
  tabFont: {
    fontWeight: 'bold',
    fontSize: '12px',
    letterSpacing: '1px',
    fontFamily: 'inherit'
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: "70px",
      width: "100%",
      backgroundColor: "#262626"
    }
  },
  tabIcon: {
    marginTop: '2px',
    fontSize: '16px'
  },
  sticky: {
    top: '48px',
    boxShadow: '0 0 0',
    backgroundColor: '#FAFAFA',
    zIndex: 2
  }
}));

export default function InstagramPage() {
  const classes = useStyles();
  const { appOptions, setDefaultPosts } = useContext(AppContext);
  const [value, setValue] = useState(0);

  const [getPosts, { loading, data }] = useLazyQuery(ALL_POSTS_QUERY);

  useEffect(() => {
    if (appOptions.defaultPosts.length === 0) {
      getPosts();
    }
  }, []);

  useEffect(() => {
    if (data) {
      setDefaultPosts(data['getPosts']);
    }
  }, [data]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className={classes.root}>
      <div>
        <UserProfile/>
        <AppBar
          position="sticky"
          color="default"
          classes={{
            positionSticky: classes.sticky,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            classes={{ root: classes.tabsWrapper, indicator: classes.indicator}}
            TabIndicatorProps={{ children: <span /> }}
          >
            <Tab label={<div className={classes.tabContainer}><div><GridIcon /></div><div className={classes.tabFont}>&nbsp;Posts</div></div>}/>
            <Tab label={<div className={classes.tabContainer}><PhotoCameraIcon className={classes.tabIcon}/><div className={classes.tabFont}>&nbsp;Feed</div></div>}/>
          </Tabs>
        </AppBar>
        <TabPanel name="ig-panel" value={value} index={0}>
          <PostsView/>
        </TabPanel>
        <TabPanel name="ig-panel" value={value} index={1}>
          <FeedView/>
        </TabPanel>
      </div>
    </main>
  )
}
