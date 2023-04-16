import React, { useEffect, useCallback, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PhotoAlbum from "react-photo-album";
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
  const navigate = useNavigate();
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

  const photoClicked = (photo: Photo) => {
    if (!isMedium) {
      navigate(`/gallery/${photo.id}`, { state: { modalBackground: location }});
    } else {
      navigate(`/gallery/${photo.id}`);
    }
  }

  return (
    <div className={styles.container}>
      <PhotoAlbum
        photos={appOptions.sortedPhotos}
        layout="masonry"
        onClick={({ index, photo }) => {photoClicked(photo)}}
        targetRowHeight={isSmall ? 180 : isMedium ? 250 : 350}
        spacing={4}
        columns={3}
      />
    </div>
  );
};

export default GalleryPage;