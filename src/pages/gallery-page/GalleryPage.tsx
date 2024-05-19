import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import PhotoAlbum from "react-photo-album";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { sortedPhotosState, postsState } from '../../RecoilState';
import { shufflePosts } from '../../util/shufflePosts';
import { Photo } from '../../types';
import styles from './GalleryPage.module.scss';

const GalleryPage: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const posts = useRecoilValue(postsState);
  const [sortedPhotos, setSortedPhotos] = useRecoilState(sortedPhotosState);
  

  useEffect(() => {
    let newPosts = shufflePosts(posts);
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

    clearAllBodyScrollLocks();
    setSortedPhotos(parsedPhotos);
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
        photos={sortedPhotos}
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