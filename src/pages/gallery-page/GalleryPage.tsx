import React, { useEffect, useCallback, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppContext } from '../../AppContext';
import { shufflePosts } from '../../util/shufflePosts';
import { Photo } from '../../types';
import styles from './GalleryPage.module.scss';

const GalleryPage: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const { appOptions, setSortedPhotos } = useContext(AppContext);

  useEffect(() => {
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

    setSortedPhotos(parsedPhotos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderImage = useCallback(
    ({ photo }) => (
      <div key={photo.id} style={{ margin: '2px', height: photo.height, width: photo.width }}>
        <Link
          to={`/gallery/${photo.id}`}
          state={!isMedium && { modalBackground: location }}
        >
          <img
            className={styles.image}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
          />
        </Link>
      </div>
    ), 
    [location, isMedium],
  );

  return (
    <div className={styles.container}>
      <Gallery photos={appOptions.sortedPhotos} renderImage={renderImage} targetRowHeight={isSmall ? 180 : isMedium ? 250 : 350}/>
    </div>
  );
};

export default GalleryPage;