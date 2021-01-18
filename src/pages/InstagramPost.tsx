import React, {useRef, useEffect, useContext, useState} from "react";
import { gql, useLazyQuery } from '@apollo/client';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useHistory, useParams} from "react-router-dom";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import MobilePostView from '../components/instagram/views/MobilePostView';
import ModalPostCard from '../components/instagram/post/ModalPostCard';
import CloseIcon from '../components/icons/CloseIcon';
import {AppContext} from '../AppContext';
import {Post} from '../types';
import {defaultPost} from '../defaults';

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
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1200
  },
  modal: {
    margin: 'auto 0'
  },
  close: {
    position: 'absolute',
    color: '#fafafa',
    top: '20px',
    right: '20px',
    cursor: 'pointer'
  },
  next: {
    position: 'absolute',
    color: '#fafafa',
    right: '10%',
    top: '48.5%',
    fontSize: '48px',
    cursor: 'pointer',
    [theme.breakpoints.down('xl')]: {
      right: '12%',
    },
    [theme.breakpoints.down('lg')]: {
      right: '7%',
    },
    [theme.breakpoints.down('md')]: {
      right: '2%',
    }
  },
  previous: {
    position: 'absolute',
    color: '#fafafa',
    left: '10%',
    top: '48.5%',
    fontSize: '48px',
    cursor: 'pointer',
    [theme.breakpoints.down('xl')]: {
      left: '12%',
    },
    [theme.breakpoints.down('lg')]: {
      left: '7%',
    },
    [theme.breakpoints.down('md')]: {
      left: '2%',
    }
  }
}));

export default function InstagramModalPost() {
  const classes = useStyles();
  const history = useHistory();
  let { id } = useParams<{id: string}>();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const modalRef = useRef<HTMLDivElement>(null);
  const { appOptions, setDefaultPosts } = useContext(AppContext);
  const [getPosts, { loading, data }] = useLazyQuery(ALL_POSTS_QUERY);

  const [currentPost, setCurrentPost] = useState<Post>(defaultPost);
  const [postIndex, setPostIndex] = useState(0);
  const medium = useMediaQuery('(min-width:1400px)');


  useEffect(() => {
    if (appOptions.defaultPosts.length > 0) {
      setCurrentPost(appOptions.defaultPosts.find(post => post.id === id));
      setPostIndex(appOptions.defaultPosts.findIndex(post => post.id === id));
      disableBodyScroll(modalRef.current);
    } else {
      getPosts();
    }
    console.log('medium', medium)
  }, []);

  useEffect(() => {
    if (data) {
      let index = data['getPosts'].findIndex(post => post.id === id);
      let post = data['getPosts'][index];

      setCurrentPost(post);
      setPostIndex(index);
      disableBodyScroll(modalRef.current);
      setDefaultPosts(data['getPosts']);
    }
  }, [data]);

  useEffect(() => {
    if (mobile) {
      clearAllBodyScrollLocks();
    }
  }, [mobile]);

  const close = (e) => {
    e.stopPropagation();
    enableBodyScroll(modalRef.current);
    history.goBack();
  };

  const nextPost = (e) => {
    e.stopPropagation();
    let index = postIndex + 1;
    setCurrentPost(appOptions.defaultPosts[index]);
    setPostIndex(index);
  }

  const prevPost = (e) => {
    e.stopPropagation();
    let index = postIndex - 1;
    setCurrentPost(appOptions.defaultPosts[index]);
    setPostIndex(index);
  }

  if (mobile) return <MobilePostView post={currentPost}/>

  return (
    <div aria-label="modal-backdrop" className={classes.root} ref={modalRef} onClick={close}>
      <div className={classes.close} onClick={close}>
        <CloseIcon  />
      </div>
      {postIndex > 0 && <ChevronLeftIcon className={classes.previous} onClick={prevPost}/>}
      {postIndex < appOptions.defaultPosts.length -1 && <ChevronRightIcon className={classes.next} onClick={nextPost}/>}
      <div aria-label="modal" onClick={(e) => e.stopPropagation()} className={classes.modal}>    
        <ModalPostCard post={currentPost}/>
      </div>    
    </div>
  );
}
