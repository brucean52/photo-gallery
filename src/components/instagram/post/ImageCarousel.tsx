import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import {Post} from '../../../types';

type Props = {
  post: Post,
  imageWidth: number,
  imageHeight: number
}

const useStyles = makeStyles((theme) => ({
  prevCarousel: {
    outline: 'none',
    position: 'absolute',
    left: '8px',
    top: '50%',
    zIndex: 2,
    borderRadius: '50%',
    padding: '0 2px 2px 0',
    opacity: '0.7',
    border: 'none',
    backgroundColor: 'transparent'
  },
  nextCarousel: {
    outline: 'none',
    position: 'absolute',
    right: '8px',
    top: '50%',
    zIndex: 2,
    borderRadius: '50%',
    padding: '0 2px 2px 0',
    opacity: '0.7',
    border: 'none',
    backgroundColor: 'transparent'
  },
  chevronIcon: {
    color: '#fafafa',
    fontSize: '24px',
    cursor: 'pointer',
    opacity: 0.8,
    borderRadius: '100%',
    boxShadow: '-1px 1px 2px rgba(0,0,0,0.6)'
  },
  indicator: {
    display: 'inline-block',
    margin: '0 2px',
    width: 6,
    height: 6,
    background: '#e6e6e6',
    borderRadius: '50%',
    opacity: 0.7
  },
  indicatorSelected: {
    display: 'inline-block',
    margin: '0 2px',
    width: 6,
    height: 6,
    background: '#1997F3',
    borderRadius: '50%'
  }
}));

export default function ImageCarousel(props: Props) {
  const classes = useStyles();
  const {post, imageWidth, imageHeight} = props;
  return (
    <Carousel
      autoPlay={false}
      showThumbs={false}
      showStatus={false}
      // For Mobile: statusFormatter={(current, total) => `${current}/${total}`}
      renderArrowPrev={(clickHandler: () => void, hasPrev: boolean) => hasPrev && <button type="button" className={classes.prevCarousel} onClick={clickHandler}><FontAwesomeIcon className={classes.chevronIcon} icon={faChevronCircleLeft}/></button>}
      renderArrowNext={(clickHandler: () => void, hasNext: boolean) => hasNext && <button type="button" className={classes.nextCarousel} onClick={clickHandler}><FontAwesomeIcon className={classes.chevronIcon} icon={faChevronCircleRight}/></button>}
      renderIndicator={(onClickHandler, isSelected, index, label) => {

        if (isSelected) {
          return (
            <li
              className={classes.indicatorSelected}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            className={classes.indicator}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index} 
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
      );
      }}
    >
      {post.photos.map(photo => {
        return (
          <img
            key={photo.src}
            src={process.env.PUBLIC_URL + photo.src}
            alt="test"
            width={imageWidth}
            height={imageHeight}
          />
        )
      })}
    </Carousel>
  );
}
