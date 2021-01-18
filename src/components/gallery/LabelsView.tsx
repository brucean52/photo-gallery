import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LinearProgress from '@material-ui/core/LinearProgress';

type Props = {
  labels: any[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '16px',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '24px',
    },
  },
  labelContainer: {
    padding: '8px 16px',
    [theme.breakpoints.down('sm')]: {
      padding: '8px 28px',
    },
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default function LabelsView(props: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      {props.labels.length && props.labels.map(label => (
        <div className={classes.labelContainer} key={label['mid']}>
          <div className={classes.textContainer}>
            <div>{label['description']}</div>
            <div>{(label['score'] * 100).toFixed(2)}%</div>
          </div>
          <LinearProgress color="primary" variant="determinate"  value={label['score'] * 100}/>
        </div>
      ))}
    </div>  
  );
}
