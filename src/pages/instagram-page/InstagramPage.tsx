import React, { useState, useEffect } from 'react';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import GridIcon from '../../components/icons/GridIcon';
import UserProfile from '../../components/instagram/user-profile/UserProfile';
import GridLayout from '../../components/instagram/grid-layout/GridLayout';
import TabPanel from '../../components/common/tab-panel/TabPanel';
import FeedView from '../../components/instagram/feed-view/FeedView';
import styles from './InstagramPage.module.scss';

const InstagramPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState(0);

  useEffect(() => {
    clearAllBodyScrollLocks();
  }, []);

  const tabChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setValue(newValue);
  };
  
  const renderPostsTab = (
    <div className={styles["tab-container"]}>
      <div>
        <GridIcon size={isMobile ? 24 : 12}/>
      </div>
      {!isMobile && <div className={styles["tab-font"]}>Posts</div>}
    </div>
  )

  const renderFeedTab = (
    <div className={styles["tab-container"]}>
      <div>
        <PhotoCameraIcon className={styles["feed-icon"]}/>
      </div>
      {!isMobile && <div className={styles["tab-font-feed"]}>Feed</div>}
    </div>
  )

  return (
    <div className={styles.container}>
      <UserProfile/>
      <AppBar
        position="relative"
        color="default"
        className={styles.nav}
      >
        <Tabs
          value={value}
          onChange={tabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          classes={{ root: styles["tabs-wrapper"], indicator: styles.indicator}}
          TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        >
          <Tab label={renderPostsTab} disableRipple/>
          <Tab label={renderFeedTab} disableRipple/>
        </Tabs>
      </AppBar>
      <TabPanel name="ig-panel" value={value} index={0}>
        <GridLayout/>
      </TabPanel>
      <TabPanel name="ig-panel" value={value} index={1}>
        <FeedView/>
      </TabPanel>
    </div>
  );
};

export default InstagramPage;