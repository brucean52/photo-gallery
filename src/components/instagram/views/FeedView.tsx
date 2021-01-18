import React, { useEffect, useContext, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PostCard from '../post/PostCard';
import {shufflePosts} from '../../../util/posts';
import {Post} from '../../../types';
import { AppContext } from '../../../AppContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '28px',
    minHeight: '60vh'
  }
}));

export default function FeedView() {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const { appOptions } = useContext(AppContext);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(()=> {
    setPosts(shufflePosts(appOptions.defaultPosts));
  },[])

  const renderPost = posts.map((post,index) => {
    let aspectRatio = post.photos[0].exifImageWidth / post.photos[0].exifImageHeight;
    let imageWidth = 614;
    let imageHeight = imageWidth / aspectRatio;

    return (
      <PostCard key={post.id+index} post={post} imageWidth={imageWidth} imageHeight={imageHeight}/>
    )
  });

  return (
    <div className={classes.root}>
      {renderPost}
    </div>
  );
}
