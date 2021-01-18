import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import PostCard from '../post/PostCard';
import {Post} from '../../../types'

type Props = {
  post: Post
}


const useStyles = makeStyles((theme) => ({
  root: {
  },
  backIcon: {
    margin: '55px 0px 6px 16px'
  }
}));

export default function MobilePostView(props: Props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div className={classes.backIcon} onClick={() => history.goBack()}>
        <ArrowBackIcon />
      </div>
      <div>
        {props.post.id && <PostCard post={props.post} imageWidth={null} imageHeight={null}/>}
      </div>
    </div>
  );
}
