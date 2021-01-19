import React, {useState, useContext, useEffect, useCallback} from 'react';
import {Link, useLocation} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Gallery from 'react-photo-gallery';
import LazyLoad from 'react-lazyload';

import {AppContext} from '../AppContext';
import {shufflePosts} from '../util/posts';
import {Post} from '../types';
import {Posts} from '../assets/mocks/index';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '935px',
    margin: '85px auto 60px auto',
    minHeight: '80vh',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '60px',
      width: '98%',
    }
  },
  image: {
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8',
      filter: 'grayscale(100%)',
      transition: '.1s ease-in-out',
   },
  },
}));

export default function GalleryPage() {
  const classes = useStyles();
  const location = useLocation();
  const { appOptions, setDefaultPosts, setSortedPhotos } = useContext(AppContext);
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    parsePhotos(Posts); 
  }, []);

  const parsePhotos = (posts: Post[]) => {
    let newPosts = shufflePosts(posts);
    let parsedPhotos = [];

    newPosts.forEach((post) => {
      post.photos.forEach((photo) => {
        let newPhoto = {
          id: photo.id,
          src: photo.src,
          width: photo.exifImageWidth,
          height: photo.exifImageHeight,
          alt: photo.alt,
          vision: photo.vision,
          tags: post.tags
        }
        
        parsedPhotos.push(newPhoto);
      });
    });
    setPhotos(parsedPhotos);
    setSortedPhotos(parsedPhotos);
  }

  const renderImage = useCallback(
    ({ index, left, top, key, photo }) => (
      <div key={photo.id} style={{ margin: '1.5px', height: photo.height, width: photo.width }}>
        <LazyLoad height={photo.height}>
          <Link to={{
            pathname: `/gallery/${photo.id}`,
            state: { modalBackground: location }
          }}>
            <img
              className={classes.image}
              alt={photo.alt}
              {...photo}
            />
          </Link>
        </LazyLoad>
      </div>
    ), 
    [],
  );

  return (
    <div className={classes.root}>
      <Gallery photos={photos} renderImage={renderImage} targetRowHeight={350}/>
    </div>
  );
}

