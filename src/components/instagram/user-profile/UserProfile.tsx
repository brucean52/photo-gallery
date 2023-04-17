import React from 'react';
import { useRecoilValue } from 'recoil';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '../../icons/PersonIcon';
import { userProfileState, postsState } from '../../../RecoilState';
import styles from './UserProfile.module.scss';

const UserProfile: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const posts = useRecoilValue(postsState);
  const userProfile = useRecoilValue(userProfileState);
  const followers = new Intl.NumberFormat().format(userProfile.followers);
  const following = new Intl.NumberFormat().format(userProfile.following);

  return (
    <div>
      {isMobile && (
        <div className={styles.username}>{userProfile.username}</div> 
      )}
      <div id="instagram-profile" className={styles.container}>
        <div className={styles["image-container"]}>
          <Avatar aria-label="user" className={styles.avatar} src={userProfile.imgSrc}/>
        </div>

        <div className={styles["text-container"]}>
          {!isMobile && (
            <div className={styles.header}>
              <div className={styles.username}>{userProfile.username}</div> 
              <div className={styles["button-header"]}>
                <div>
                  <Button
                    variant="contained"
                    disableElevation
                    disableRipple
                    className={styles["follow-btn"]}
                  >Follow
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    disableElevation
                    disableRipple
                    className={styles["message-btn"]}
                  >Message
                  </Button>
                </div>
                <div>
                  <Button 
                    variant="contained"
                    disableElevation
                    disableRipple
                    className={styles["icon-button"]}
                    startIcon={<PersonIcon/>}
                  />
                </div>
                <MoreHorizIcon className={styles["menu-icon"]}/>
              </div>
            </div>
          )}

          <ul className={styles["meta-container"]}>
            <li>
              <span className={styles.bold}>{posts.length}</span>
              {isMobile ? <div>Posts</div>: <>&nbsp;posts</>}
            </li>
            <li>
              <span className={styles.bold}>{followers}</span>
              {isMobile ? <div>Followers</div>: <>&nbsp;followers</>}
            </li>
            <li>
              <span className={styles.bold}>{following}</span>
              {isMobile ? <div>Following</div>: <>&nbsp;following</>}
            </li>
          </ul>

          {!isMobile && (
            <>
              <div className={styles["name-text"]}>{userProfile.name}</div>
              <div className={styles["description-text"]}>{userProfile.bio}</div>
            </>
          )}
        </div>
      </div>
      {isMobile && (
        <>
          <div className={styles["name-text"]}>{userProfile.name}</div>
          <div className={styles["description-text"]}>{userProfile.bio}</div>
          
          <div className={styles["button-header"]}>
            <Button
              variant="contained"
              disableElevation
              disableRipple
              className={styles["follow-btn"]}
            >Follow
            </Button>
            <Button
              variant="contained"
              disableElevation
              disableRipple
              className={styles["message-btn"]}
            >Message
            </Button>
            <Button 
              variant="contained"
              disableElevation
              disableRipple
              className={styles["icon-button"]}
              startIcon={<PersonIcon/>}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
