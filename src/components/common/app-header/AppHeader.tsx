import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './AppHeader.module.scss';

const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentTab = pathname;

  return (
    <AppBar position="fixed">
      <Container className={styles.container}>
        <div className={styles["logo-container"]} onClick={() => navigate("/")}>
          <CameraEnhanceIcon className={styles["logo-icon"]}/>
          <Typography variant="h4" className={styles.title}>Photos</Typography>
        </div>
        <div className={styles.flex}>
          <Tabs
            className={styles["nav-tabs"]}
            value={currentTab}
            aria-label="nav-tabs"
            variant="fullWidth"
            centered
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
            onChange={()=> window.scrollTo(0, 0)}
          >
            <Tab
              className={styles["nav-tab"]}
              label="Gallery"
              component={Link}
              to={"/"}
              value="/"
              disableRipple
            />
            <Tab
              className={styles["nav-tab"]}
              label="Instagram"
              component={Link}
              to={"/instagram"}
              value="/instagram"
              disableRipple
            />
          </Tabs>
        </div>
        <Tooltip 
          title="Github"
          PopperProps={{
            modifiers: [
              {
                name: "offset",
                options: {
                    offset: [0, -8],
                },
              },
            ],
        }}>
          <IconButton className={styles["github-padding"]} disableRipple>
            <a href="https://github.com/brucean52/photo-gallery" target="_blank" rel="noreferrer">
              <GitHubIcon className={styles["github-color"]} />
            </a>
          </IconButton>
        </Tooltip>
      </Container>
    </AppBar>
  );
};

export default AppHeader;