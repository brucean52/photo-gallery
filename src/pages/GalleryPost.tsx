import React, {useRef, useEffect, useContext, useState} from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useHistory, useParams} from "react-router-dom";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import CloseIcon from '../components/icons/CloseIcon';
import {AppContext} from '../AppContext';
import TabPanel from '../components/common/TabPanel';
import LabelsView from '../components/gallery/LabelsView';
import ObjectsView from '../components/gallery/ObjectsView';
import MobilePhotoView from '../components/gallery/MobilePhotoView';
import {Post} from '../types';
import {defaultGalleryPhoto} from '../defaults';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1200
  },
  modal: {
    margin: 'auto 0',
    position: 'relative',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  },
  close: {
    position: 'absolute',
    color: '#fff',
    top: '20px',
    right: '20px',
    cursor: 'pointer'
  },
  next: {
    position: 'absolute',
    color: '#fff',
    right: '10%',
    top: '46%',
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
    color: '#fff',
    left: '10%',
    top: '46%',
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
  },
  image: {
    position: 'absolute',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  },
  canvas: {
    zIndex: 1500,
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  },
  container: {
    display: 'flex',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
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

export default function GalleryPost() {
  const classes = useStyles();
  const history = useHistory();
  let { id } = useParams<{id: string}>();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { appOptions } = useContext(AppContext);
  const modalRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [value, setValue] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(defaultGalleryPhoto);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [labels, setLabels] = useState<any[]>([])
  const [objects, setObjects] = useState<any[]>([])

  useEffect(() => {
    if (appOptions.sortedPhotos.length > 0) {
      let index = appOptions.sortedPhotos.findIndex( photo => photo.id === id);
      let photo = appOptions.sortedPhotos[index];
     
      parseVisionAPI(photo);
      calculateImageSize(photo);
      setCurrentPhoto(photo);
      setPhotoIndex(index);
      disableBodyScroll(modalRef.current);
    } else {
      history.push("/")
    }
  }, []);

  useEffect(() => {
    if (mobile) {
      clearAllBodyScrollLocks();
    }
  }, [mobile]);

  const handleChange = (event, newValue) => {
    if (newValue === 1) {
      drawBoundingBoxes();
    } else {
      clearCanvas();
    }
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
    console.log('visionAPI', visionAPI);
    console.log('labels', labels);
    console.log('objects', objects);
    console.log('update', uniqueLabels)
    setLabels(uniqueLabels);
    setObjects(objects)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  const calculateImageSize = (photo) => {
    let height: number = 550;
    let width: number;
    let aspectRatio = photo.width / photo.height;
    if (aspectRatio < 1) {
      // 3:4 image
    } else if (aspectRatio > 1.5) {
      // 16:9 image
      height = 400;
    } else if (aspectRatio > 1 && aspectRatio <= 1.5) {
      // 4:3 image
      height = 500;
    }

    width = height * aspectRatio;

    setWidth(width);
    setHeight(height);
  }

  const close = (e) => {
    e.stopPropagation();
    enableBodyScroll(modalRef.current);
    history.goBack();
  };

  const nextPost = (e) => {
    e.stopPropagation();
    let index = photoIndex + 1;
    let photo = appOptions.sortedPhotos[index];

    clearCanvas();
    setValue(0);
    calculateImageSize(photo);
    parseVisionAPI(photo);
    setCurrentPhoto(photo);
    setPhotoIndex(index);
  }

  const prevPost = (e) => {
    e.stopPropagation();
    let index = photoIndex - 1;
    let photo = appOptions.sortedPhotos[index];

    clearCanvas();
    setValue(0);
    calculateImageSize(photo);
    parseVisionAPI(photo);
    setCurrentPhoto(photo);
    setPhotoIndex(index);
  }

  const drawBoundingBoxes = () => {
    if (objects.length) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      objects.forEach((object, index) => {
        let coordsArr = object['boundingPoly']['normalizedVertices']
        const xArr = coordsArr.map(c => c.x);
        const yArr = coordsArr.map(c => c.y);
    
        let l = Math.min(...xArr) * width;
        let r = Math.max(...xArr) * width;
        let b = Math.min(...yArr) * height;
        let t = Math.max(...yArr) * height;
    
        const boxWidth  = r - l;
        const boxHeight = t - b;

        context.lineWidth = 3;
        context.strokeStyle = "#43a047";
        context.strokeRect(l, b, boxWidth, boxHeight);
      });
    }
  }

  if (mobile) return <MobilePhotoView photo={currentPhoto}/>

  return (
    <div aria-label="modal-backdrop" className={classes.root} ref={modalRef} onClick={close}>
      {photoIndex > 0 && <ChevronLeftIcon className={classes.previous} onClick={prevPost}/>}
      {photoIndex < appOptions.sortedPhotos.length -1 && <ChevronRightIcon className={classes.next} onClick={nextPost}/>}
      <div aria-label="modal" onClick={(e) => e.stopPropagation()} className={classes.modal}>

        <Paper elevation={3}>
          <div className={classes.container}>
            <img
              className={classes.image}
              src={process.env.PUBLIC_URL + currentPhoto.src} 
              width={width} 
              height={height}  
            />
            <canvas
              className={classes.canvas}
              ref={canvasRef}
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
                  <Tab className={classes.tabDisabled}label="Objects" disabled={objects.length ? false : true}/>
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
