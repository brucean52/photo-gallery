import React, { useState, useContext } from 'react';
import LazyLoad from 'react-lazyload';
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
  post: Post,
  imageWidth: number,
  imageHeight: number
}

const useStyles = makeStyles((theme) => ({
  card: {
    width: '614px',
    margin: '0 auto 60px',
    borderRadius: '3px',
    border: '1px solid rgba(219,219,219,1)',
    boxShadow: '0 0 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0 auto 30px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '28px'
  },
  cardHeader: {
    padding: '10px'
  },
  settingsIcon: {
    marginTop: '18px',
    marginRight: '10px'
  },
  username: {
    fontSize: '14px',
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'default'
   },
  },
  subHeader: {
    fontSize: '12px',
    color: '#262626',
    fontWeight: 400
  },
  content: {
    paddingTop: '4px'
  },
  postText: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '4px'
  },
  time: {
    color: '#8e8e8e',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.2px'
  },
  tag: {
    color: '#00376B',
    whiteSpace: 'pre'
  },
  likesText: {
    fontWeight: 600,
    color: '#262626',
    fontSize: '14px',
    marginTop: '4px',
    marginBottom: '6px'
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      objectFit: 'contain'
    },
  }
}));

export default function PostCard(props: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { appOptions } = useContext(AppContext);
  const { userProfile } = appOptions;
  const {post, imageWidth, imageHeight} = props;
  const likesText = post.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Card className={classes.card} key={post.id}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<Avatar aria-label="user" src={process.env.PUBLIC_URL + '/images/placeholder.png'}/>}
        action={<div className={classes.settingsIcon}><MenuIcon /></div>}
        title={userProfile.username}
        titleTypographyProps={{ className: classes.username }}
        subheader={post.location}
        subheaderTypographyProps={{ className: classes.subHeader }}
      />

      {post.photos.length <= 1 ? (
        <LazyLoad height={imageHeight}>
          <img
            className={classes.image}
            src={process.env.PUBLIC_URL + post.photos[0].src}
            alt="test"
            width={mobile ? null : imageWidth}
            height={mobile ? null : imageHeight}
          />
        </LazyLoad>
      ) : <ImageCarousel post={post} imageHeight={imageHeight} imageWidth={imageWidth} />}

      <CardContent className={classes.content}>
        <IconBar/>
        <div className={classes.likesText}>{likesText}&nbsp;likes</div>
        <div className={classes.postText}>
          <span className={classes.username}>{userProfile.username}&nbsp;</span>
          {post.description !== '' && <span>{post.description}&nbsp;</span>}
          {post.tags.map((tag, index) => (<span className={classes.tag} key={tag+index}>#{tag} </span>))}
        </div>
        <span className={classes.time}>{dateFormat(post.postedDate, "mmmm d, yyyy")}</span>
      </CardContent>
      <Divider/>
      {!mobile && <CommentInput/>}
    </Card>
  );
}
