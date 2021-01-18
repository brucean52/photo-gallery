import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderTop: '1px'
  },
  comment: {
    width: '550px',

    '& .MuiOutlinedInput-root': {
      borderRadius: '0px',
      fontSize: '14px',

      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
  },
  btn: {
    border: 'none',
    outline: 'none',
    background: 'none',
    fontSize: '14px',
    boxSizing: 'border-box',
    color: '#0094f6',
    opacity: 0.3
  },
  btnContainer: {
    margin: '19px 8px 19px 16px'
  }
}));

export default function CommentInput() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField
        className={classes.comment}
        variant="outlined"
        id="add-comment-input"
        placeholder="Add a comment..."
        disabled
      />
      <div className={classes.btnContainer}>
        <button className={classes.btn} type="submit" disabled>Post</button>
      </div>     
  </form>
  );
}
