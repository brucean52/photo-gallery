import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import carouselImg from '../../../assets/icons/instagram-carousel.png';
import { postsState } from '../../../RecoilState';
import styles from './GridLayout.module.scss';

const GridLayout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const notLarge = useMediaQuery('(max-width:1030px)');
  const location = useLocation();
  const posts = useRecoilValue(postsState);

  return (
    <ImageList cols={3} rowHeight={notLarge ? 'auto' : 309} className={styles["image-list"]}>
      {posts.map(post => {
        return (
          <ImageListItem key={post.id} className={styles["image-container"]}>
            {post.photos.length > 1 && (
              <img
                className={styles["multiple-icon"]}
                src={carouselImg}
                alt="multiple-icon"
                loading="lazy"
              />
            )}
            <Link 
              to={`/instagram/${post.id}`}
              state={!isMobile && { modalBackground: location }}
            >
              <img
                className={styles.photo}
                src={post.photos[0].squareSrc}
                alt={post.photos[0].alt}
                loading="lazy"
              />
            </Link>
          </ImageListItem>
        )
      })}
    </ImageList>
  );
};

export default GridLayout;