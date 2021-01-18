import React, { useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import PersonIcon from '@material-ui/icons/Person';
import CheckIcon from '@material-ui/icons/Check';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { AppContext } from '../../AppContext';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    margin: '16px 16px 44px 16px'
  },
  metaContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px',
    padding: '0',
    '& > li': {
      listStyle: 'none',
      marginRight: '40px',
      fontSize: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      marginRight: '6px',
      gap: '50px'
    },
  },
  header: {
    display: 'flex',
    marginBottom: '20px'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '35%',
    textAlign: 'center'
  },
  image: {
    borderRadius: '50%',
    width: '150px',

    [theme.breakpoints.down('xs')]: {
      width: '100px',
      height: '100px'
    }
  },
  textContainer: {
    width: '65%',
  },
  tabIcon: {
    marginTop: '7px',
    fontSize: '14px'
  },
  button: {
    textTransform: 'capitalize',
    fontWeight: 600,
    letterSpace: 'normal',
    padding: '2px 9px'
  },
  buttonIcons: {
    fontSize: '18px',
  },
  buttonCheckIcon: {
    fontSize: '12px'
  },
  buttonIcon: {
    padding: '5px 20px'
  },
  iconButton: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '5px',
    borderRadius: '3px'
  },
  buttonHeader: {
    display: 'flex',
    gap: '0px 8px',
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginBottom: '16px'
    },
  },
  menuIcon: {
    fontSize: '28px',
    marginTop: '1px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '8px',
      marginLeft: '16px'
    },
  },
  userName: {
    fontSize: '18px',
    color: "#262626",
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  },
  nameText: {
    fontSize: '16px',
    fontWeight: 600,
    color: "#262626",
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  descriptionText: {
    fontSize: '16px',
    color: "#262626",
    marginTop: '4px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  bold: {
    fontWeight: 600
  }
}));

export default function UserProfile() {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { appOptions } = useContext(AppContext);
  const { userProfile } = appOptions;
  const followers = new Intl.NumberFormat().format(userProfile.followers);
  const following = new Intl.NumberFormat().format(userProfile.following);

  return (
    <div id="instagram-profile" className={classes.container}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={process.env.PUBLIC_URL + '/images/placeholder.png'} alt="my image" width={150} height={150} />
      </div>

      <div className={classes.textContainer}>
        <div className={classes.header}>
          <div className={classes.userName}>{userProfile.username}</div> 
          
          {mobile ? <MoreHorizIcon className={classes.menuIcon}/> : (
            <div className={classes.buttonHeader}>
              <div>
                <Button variant="outlined" disabled className={classes.button}>message</Button>
              </div>
              <div>
                <Button variant="outlined" disabled className={classes.buttonIcon}><PersonIcon className={classes.buttonIcons}/><CheckIcon className={classes.buttonCheckIcon}/></Button>
              </div>
              <div>
                <IconButton disabled className={classes.iconButton}><ArrowDropDownIcon className={classes.buttonIcons}/></IconButton>
              </div>
              <MoreHorizIcon className={classes.menuIcon}/>
            </div>
          )}
        </div>
            
        {mobile && (
          <div className={classes.buttonHeader}>
            <div>
              <Button variant="outlined" disabled className={classes.button}>message</Button>
            </div>
            <div>
              <Button variant="outlined" disabled className={classes.buttonIcon}><PersonIcon className={classes.buttonIcons}/><CheckIcon className={classes.buttonCheckIcon}/></Button>
            </div>
            <div>
              <IconButton disabled className={classes.iconButton}><ArrowDropDownIcon className={classes.buttonIcons}/></IconButton>
            </div>
          </div>
       )}

        {mobile ? (
        <div className={classes.metaContainer}>
          <div><div className={classes.bold}>{appOptions.defaultPosts.length}</div><div>posts</div></div>
          <div><div className={classes.bold}>{followers}</div><div>followers</div></div>
          <div><div className={classes.bold}>{following}</div><div>following</div></div>
        </div>

        ) : (
          <ul className={classes.metaContainer}>
            <li><span className={classes.bold}>{appOptions.defaultPosts.length}</span>&nbsp;posts</li>
            <li><span className={classes.bold}>{followers}</span>&nbsp;followers</li>
            <li><span className={classes.bold}>{following}</span>&nbsp;following</li>
          </ul>
        )}

        <div className={classes.nameText}>{userProfile.name}</div>
        <div className={classes.descriptionText}>{userProfile.bio}</div>
      </div>
    </div>
  );
}
