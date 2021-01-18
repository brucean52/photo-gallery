import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import HeartIcon from '../../icons/HeartIcon';
import BookmarkIcon from '../../icons/BookmarkIcon';
import CommentIcon from '../../icons/CommentIcon';
import ShareIcon from '../../icons/ShareIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}));

export default function IconBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <HeartIcon margin={true}/> 
        <CommentIcon margin={true}/>
        <ShareIcon/>
      </div>
      <div>
        <BookmarkIcon/>
      </div>
  </div>
  );
}
