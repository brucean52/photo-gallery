import React, { useContext, useState, useRef, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useHistory} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import TabPanel from '../common/TabPanel';
import LabelsView from '../gallery/LabelsView';
import ObjectsView from '../gallery/ObjectsView';

type Props = {
  photo: any
}


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '30px'
  },
  backIcon: {
    margin: '55px 0px 6px 16px'
  },
  container: {
    paddingTop: '30px'
  },
  image: {
    display: 'flex',
    margin: '0 auto'
  },
  tabContainer: {
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  },
  tabDisabled: {
    '&.Mui-disabled': {
      opacity: 0.5,
    },
  }
}));

export default function MobilePhotoView(props: Props) {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [labels, setLabels] = useState<any[]>([]);
  const [objects, setObjects] = useState<any[]>([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if(props.photo.id) {
      parseVisionAPI(props.photo);
      calculateImageSize(props.photo);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const parseVisionAPI = (photo) => {
    let visionAPI = JSON.parse(photo.vision);
    let objects: any[] = [];
    let labels = visionAPI['labelAnnotations'].filter( label => photo.tags.includes(label['description'].toLowerCase().split(' ').join('')));
    let uniqueLabels = Array.from(new Set(labels.map(a => a.description)))
      .map(id => { return labels.find(a => a.description === id)});

    if (visionAPI.hasOwnProperty('localizedObjectAnnotations')) {
      objects = [...objects, ...visionAPI['localizedObjectAnnotations']]
    }
    // if (visionAPI.hasOwnProperty('landmarkAnnotations')) {
    //   objects = [...objects, ...visionAPI['landmarkAnnotations']]
    // }
    // if (visionAPI.hasOwnProperty('logoAnnotations')) {
    //   objects = [...objects, ...visionAPI['logoAnnotations']]
    // }

    setLabels(uniqueLabels);
    setObjects(objects)
  }

  const calculateImageSize = (photo) => {
    let width: number;

    if (mobile) {
      width = 400
    } else {
      width = 600
    }
    
    let aspectRatio = photo.width / photo.height;
    let height: number = width / aspectRatio
    setWidth(width);
    setHeight(height);
  }

  return (
    <div className={classes.root}>
      <div className={classes.backIcon} onClick={() => history.goBack()}>
        <ArrowBackIcon />
      </div>
      <div>
      <Paper elevation={3}>
          <div className={classes.container}>
            <img
              className={classes.image}
              src={process.env.PUBLIC_URL + props.photo.src} 
              width={width} 
              height={height}  
            />
            <div>
              <div className={classes.tabContainer}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="Labels" />
                  <Tab className={classes.tabDisabled} label="Objects" disabled={true}/>
                </Tabs>
              </div>
            
              <TabPanel name="vision-panel" value={value} index={0}>
                <LabelsView labels={labels}/>
              </TabPanel>
              <TabPanel name="vision-panel" value={value} index={1}>
                <ObjectsView objects={objects}/>
              </TabPanel>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
