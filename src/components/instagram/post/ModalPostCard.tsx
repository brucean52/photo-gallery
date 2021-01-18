import React, { useState, useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import dateFormat from 'dateformat';

import ImageCarousel from './ImageCarousel';
import IconBar from './IconBar';
import CommentInput from './CommentInput';
import MenuIcon from '../../icons/MenuIcon';

import { AppContext } from '../../../AppContext';
import {Post} from '../../../types';

type Props = {
  post: Post
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  card: {
    width: '300px',
    margin: '0',
    borderRadius: 0,
  },
  container: {
    display: 'flex',
  },
  cardHeader: {
    padding: '10px'
  },
  settingsIcon: {
    marginTop: '18px',
    marginRight: '10px'
  },
  postTitle: {
    fontSize: '14px',
    fontWeight: 600
  },
  subHeader: {
    fontSize: '12px',
    color: '#262626',
    fontWeight: 400
  },
  username: {
    fontSize: '14px',
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'default'
   },
  },
  content: {
    padding: '16px 0 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '94%'
  },
  postTextContainer: {
    display: 'flex',
    paddingLeft: '10px'
  },
  postText: {
    display: 'inline-block',
    wordBreak: 'break-word',
    padding: '0 16px'
  },
  time: {
    color: '#8e8e8e',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.2px',
    padding: '8px 16px'
  },
  divider: {
    marginBottom: '12px',
    backgroundColor: 'rgba(239, 239, 239, 1)',
  },
  iconBarContainer: {
    padding: '0 16px'
  },
  carousel: {
    width: '450px'
  },
  tag: {
    color: '#00376B'
  },
  likesText: {
    fontWeight: 600,
    color: '#262626',
    fontSize: '14px',
    margin: '4px 0 4px 16px',
  }
}));

export default function ModalPostCard(props: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const { appOptions } = useContext(AppContext);
  const { userProfile } = appOptions;
  const {post} = props;
  const likesText = post.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const min = useMediaQuery(theme.breakpoints.up('sm'));
  const max = useMediaQuery('(max-width:1400px)');


  let height: number = 600;
  let width: number;
  let aspectRatio: number
  
  if (post.id) {
    aspectRatio = post.photos[0].exifImageWidth / post.photos[0].exifImageHeight;

    if (aspectRatio < 1) {
      // 3:4 image
    } else if (aspectRatio > 1.5) {
      // 16:9 image
      height = 400;
    } else if (aspectRatio > 1 && aspectRatio <= 1.5) {
      // 4:3 image
      height = 550;
    }

    if (min && max) {
      if (aspectRatio < 1) {
        // 3:4 image
        height = 500
      } else if (aspectRatio > 1.5) {
        // 16:9 image
        height = 300;
      } else if (aspectRatio > 1 && aspectRatio <= 1.5) {
        // 4:3 image
        height = 450;
      }
    }

    width = height * aspectRatio;
  } else return null

  return (
    <div className={classes.container}>
      {post.photos.length <= 1 ? (
        <img
          src={process.env.PUBLIC_URL + post.photos[0].src}
          alt={post.photos[0].alt}
          width={width}
          height={height}
        />
      ) : <div className={classes.carousel}><ImageCarousel post={post} imageHeight={height} imageWidth={width} /></div>}

      <Card className={classes.card} style={{ height: `${height}`}}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<Avatar aria-label="user" src={process.env.PUBLIC_URL + '/images/placeholder.png'}/>}
        action={<div className={classes.settingsIcon}><MenuIcon /></div>}
        title={userProfile.username + " • " + "Following"}
        titleTypographyProps={{ className: classes.username }}
        subheader={post.location}
        subheaderTypographyProps={{ className: classes.subHeader }}
      />
      <Divider/>
      <CardContent className={classes.content}>
        <div className={classes.postTextContainer}>
          <Avatar aria-label="user" src={process.env.PUBLIC_URL + '/images/placeholder.png'}/>
          <div className={classes.postText}>
            <span className={classes.username}>{userProfile.username}&nbsp;</span>
            {post.description !== '' && <span>{post.description}&nbsp;</span>}
            {post.tags.map((tag, index) => (<span className={classes.tag} key={tag+index}>#{tag} </span>))}
          </div>

        </div>

        <div>
          <Divider className={classes.divider}/>
          <div className={classes.iconBarContainer}>
            <IconBar/>
          </div>
          <div className={classes.likesText}>{likesText}&nbsp;likes</div>
          <div className={classes.time}>{dateFormat(post.postedDate, "mmmm d, yyyy")}</div>
          <Divider/>
          <CommentInput/>
        </div>
      </CardContent>

      </Card>
    </div>
  );
}
