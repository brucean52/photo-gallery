import React, { useContext } from 'react';
import {Link, useLocation} from "react-router-dom";
import LazyLoad from 'react-lazyload';
import { makeStyles } from '@material-ui/core/styles';

import { AppContext } from '../../AppContext';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '16px',
    margin: '30px auto 40px auto',
    [theme.breakpoints.down('sm')]: {
      gridGap: '5px',
    },

  },
  imageContainer: {
    margin: '0 auto',
    position: 'relative',
    '&:hover': {
      filter: 'brightness(80%)',
   }
  },
  multipleIcon: {
    position: 'absolute',
    top: '8px',
    right: '8px'
  },
  image: {
    cursor: 'pointer',
    width: '293px',
    height: '293px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%'
    }
  },
  hoverImage: {
    position: 'absolute',
    zIndex: 5
  }
}));

export default function GridLayout() {
  const classes = useStyles();
  const location = useLocation();
  const { appOptions } = useContext(AppContext);

  return (
    <div id="gridview-container" className={classes.gridContainer}>
      {appOptions.defaultPosts.map((post) => {
        return (
          <div 
            className={classes.imageContainer} 
            key={post.id} 
          >
            {post.photos.length > 1 && (
              <img 
                className={classes.multipleIcon}
                src={process.env.PUBLIC_URL + '/icons/instagram-carousel.png'}
                width={16}
                height={16}
              />
            )}
            <LazyLoad height={293}>
              <Link to={{
                pathname: `/instagram/${post.id}`,
                state: { modalBackground: location }
              }}>
                <img
                  className={classes.image} 
                  src={process.env.PUBLIC_URL + post.photos[0].squareSrc} 
                />
              </Link >
            </LazyLoad>
          </div>
        )
      })}
    </div>
  );
}