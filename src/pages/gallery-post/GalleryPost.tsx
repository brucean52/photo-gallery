import React, { useState, useContext, useRef, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper  from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../../components/common/tab-panel/TabPanel';
import AnnotationScoreView from '../../components/gallery/annnotation-score-view/AnnotationScoreView';
import { AppContext } from '../../AppContext';
import { defaultPhoto } from '../../defaults';
import { shufflePosts } from '../../util/shufflePosts';
import { useWindowDimensions } from '../../util/useWindowDimensions';
import { usePreviousValue } from '../../util/usePreviousValue';
import { Photo } from '../../types';
import styles from './GalleryPost.module.scss';

const GalleryPost: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const modalRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { appOptions, setSortedPhotos } = useContext(AppContext);
  const [tabValue, setTabValue] = useState<number>(0);
  const [currentPhoto, setCurrentPhoto] = useState<Photo>(defaultPhoto);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [labels, setLabels] = useState<any[]>([]);
  const [objects, setObjects] = useState<any[]>([]);
  const [hoveredObjIndex, setHoveredObjIndex] = useState<number>(null);
  const prevHoveredObjIndex = usePreviousValue(hoveredObjIndex);
  const { winHeight, winWidth } = useWindowDimensions();

  const showPost = (sortedPhotos: Photo[]) => {
    let index: number = sortedPhotos.findIndex( photo => photo.id === id);
    let photo: Photo = sortedPhotos[index];
   
    parseVisionAPI(photo);
    calculateImageSize(photo);
    setCurrentPhoto(photo);
    setPhotoIndex(index);
    disableBodyScroll(modalRef.current);
  }

  const handleChange = (event, newValue) => {
    if (newValue === 1) {
      drawCanvasBoxes();
    } else {
      clearCanvas();
    }
    setTabValue(newValue);
  };

  const parseVisionAPI = (photo) => {
    let visionAPI = JSON.parse(photo.vision);
    let objects: any[] = [];
    let labels = visionAPI['labelAnnotations'];

    if (visionAPI.hasOwnProperty('localizedObjectAnnotations')) {
      objects = [...objects, ...visionAPI['localizedObjectAnnotations']]
    }

    setLabels(labels);
    setObjects(objects)
  }

  const calculateImageSize = useCallback((photo) => {
    let calcWidth: number = winWidth < 900 ? winWidth : (winWidth > 900 && winWidth < 1400) ? winWidth - 500 : winWidth - 400;
    let calcHeight: number = 0;
    let aspectRatio = photo.width / photo.height;

    calcHeight = calcWidth / aspectRatio;
    if (winWidth > 899 && calcHeight > winHeight * 0.9) {
      calcHeight = winHeight * 0.9;
      calcWidth = calcHeight * aspectRatio;
    }

    setWidth(calcWidth);
    setHeight(calcHeight);
  }, [winWidth, winHeight]);

  const close = (e) => {
    e.stopPropagation();
    enableBodyScroll(modalRef.current);
    navigate(-1);
  };

  const nextPost = (e) => {
    e.stopPropagation();
    let index = photoIndex + 1;
    let photo = appOptions.sortedPhotos[index];

    clearCanvas();
    setTabValue(0);
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
    setTabValue(0);
    calculateImageSize(photo);
    parseVisionAPI(photo);
    setCurrentPhoto(photo);
    setPhotoIndex(index);
  }

  const drawCanvasBoxes = () => {
    if (objects.length) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      objects.forEach((object) => {
        let coordsArr = object['boundingPoly']['normalizedVertices']
        const xArr = coordsArr.map(c => c.x);
        const yArr = coordsArr.map(c => c.y);
    
        let x = Math.min(...xArr) * width;
        let xMax = Math.max(...xArr) * width;
        let y = Math.min(...yArr) * height;
        let yMax = Math.max(...yArr) * height;
    
        const boxWidth  = xMax - x;
        const boxHeight = yMax - y;

        ctx.save();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#5dbb62";
        ctx.strokeRect(x, y, boxWidth, boxHeight);
        ctx.restore();
      });
    }
  }

  const drawCanvasBoxHovered = useCallback((object, color) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let coordsArr = object['boundingPoly']['normalizedVertices']
    const xArr = coordsArr.map(c => c.x);
    const yArr = coordsArr.map(c => c.y);

    let x = Math.min(...xArr) * width;
    let xMax = Math.max(...xArr) * width;
    let y = Math.min(...yArr) * height;
    let yMax = Math.max(...yArr) * height;

    const boxWidth  = xMax - x;
    const boxHeight = yMax - y;

    ctx.save();
    ctx.lineWidth = 4;
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, boxWidth, boxHeight);
    ctx.restore();
  }, [height, width]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  const renderImagePost = (
    <Paper elevation={3}>
      <div className={styles["img-container"]}>
        <img
          className={styles.image}
          src={currentPhoto.src} 
          width={width} 
          height={height}
          alt={currentPhoto.alt}
        />
        <canvas
          className={styles.canvas}
          ref={canvasRef}
          width={width}
          height={height}
        />
        <div className={styles["content-container"]}>
          <div className={styles["tab-container"]}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Labels" disableRipple/>
              <Tab
                className={styles["tab-disabled"]}
                label="Objects"
                disabled={objects.length ? false : true}
                disableRipple
              />
            </Tabs>
          </div>
        
          <TabPanel name="vision-panel" value={tabValue} index={0}>
            <AnnotationScoreView
              annotations={labels}
              height={height}
              setHoveredObjIndex={setHoveredObjIndex}
            />
          </TabPanel>
          <TabPanel name="vision-panel" value={tabValue} index={1}>
            <AnnotationScoreView 
              annotations={objects}
              height={height}
              setHoveredObjIndex={setHoveredObjIndex}
            />
          </TabPanel>
        </div>
      </div>
    </Paper>
  )

  useEffect(() => {
    if (appOptions.sortedPhotos.length > 0) {
      showPost(appOptions.sortedPhotos);
    } else {
      let newPosts = shufflePosts(appOptions.defaultPosts);
      let parsedPhotos: Photo[] = [];
  
      newPosts.forEach((post) => {
        post.photos.forEach((photo) => {
          let newPhoto = {
            id: photo.id,
            src: photo.src,
            squareSrc: photo.squareSrc,
            width: photo.width,
            height: photo.height,
            alt: photo.alt,
            vision: photo.vision
          }
          
          parsedPhotos.push(newPhoto);
        });
      });
      showPost(parsedPhotos);
      setSortedPhotos(parsedPhotos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tabValue === 1) {
      if (objects.length && hoveredObjIndex !== null) {
        drawCanvasBoxHovered(objects[hoveredObjIndex], "#0066cc");
      }
      
      if (objects.length && prevHoveredObjIndex !== null) {
        drawCanvasBoxHovered(objects[prevHoveredObjIndex], "#5dbb62");
      }
    } else if (tabValue === 0) {
      setHoveredObjIndex(null);
    }
  }, [hoveredObjIndex, objects, tabValue, drawCanvasBoxHovered, prevHoveredObjIndex]);

  useEffect(() => {
    if (isMobile) {
      clearAllBodyScrollLocks();
    }
    calculateImageSize(currentPhoto);
  }, [isMobile, currentPhoto, calculateImageSize]);

  return (
    <>
      {isMobile ? (
        <div className={styles["mobile-container"]}>
          <div className={styles["mobile-header"]}>
            
            <div className={styles["back-icon"]} onClick={() => navigate(-1)}>
              <ArrowBackIcon /> 
            </div>
            <div className={styles["mobile-text"]}>Gallery</div>
            <div className={styles.spacer}></div>
          </div>
          {renderImagePost}
        </div>
      ) : (
        <div aria-label="modal-backdrop" className={styles.root} ref={modalRef} onClick={close}>
          <div className={styles.container}>
            <div className={styles["prev-btn-container"]}>
              {photoIndex > 0 && (
                <FontAwesomeIcon
                  className={styles["modal-prev-btn"]}
                  icon={faCircleChevronLeft}
                  onClick={prevPost}
                />
              )}
            </div>

            <div aria-label="modal" onClick={(e) => e.stopPropagation()} className={currentPhoto.id ? styles.modal : styles.hidden}>
              {renderImagePost}
            </div>

            <div className={styles["next-btn-container"]}>
              {photoIndex < appOptions.sortedPhotos.length -1 && (
                <FontAwesomeIcon
                  className={styles["modal-next-btn"]}
                  icon={faCircleChevronRight}
                  onClick={nextPost}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPost;