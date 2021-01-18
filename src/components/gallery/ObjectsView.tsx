import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

type Props = {
  objects: any[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '16px'
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

export default function ObjectsView(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.objects.length && props.objects.map((object, index) => (
        <div className={classes.labelContainer} key={object['mid'] + index}>
          <div className={classes.textContainer}>
            <div>{object.hasOwnProperty('name') ? object['name']: object['description']}</div>
            <div>{(object['score'] * 100).toFixed(2)}%</div>
          </div>
          <LinearProgress color="primary" variant="determinate"  value={object['score'] * 100}/>
        </div>
      ))}
    </div>  
  );
}
