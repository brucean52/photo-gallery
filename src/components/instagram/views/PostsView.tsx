import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridLayout from '../GridLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '935px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  }
}));

export default function PostsView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridLayout/>
    </div>
  );
}
