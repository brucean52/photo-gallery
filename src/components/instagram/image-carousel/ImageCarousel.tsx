import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../../types';
import styles from './ImageCarousel.module.scss';

type ImageCarouselProps = {
  post: Post,
  imageWidth: number,
  imageHeight: number,
}

const ImageCarousel: React.FC<ImageCarouselProps> = (props) => {

  return (
    <Carousel
      autoPlay={false}
      showThumbs={false}
      showStatus={false}
      // For Mobile: statusFormatter={(current, total) => `${current}/${total}`}
      renderArrowPrev={(clickHandler: () => void, hasPrev: boolean) => hasPrev && (
        <button className={styles["prev-carousel"]} type="button" onClick={clickHandler}>
          <FontAwesomeIcon className={styles["chevron-icon"]} icon={faChevronCircleLeft}/>
        </button>
      )}
      renderArrowNext={(clickHandler: () => void, hasNext: boolean) => hasNext && (
        <button className={styles["next-carousel"]} type="button" onClick={clickHandler}>
          <FontAwesomeIcon className={styles["chevron-icon"]} icon={faChevronCircleRight}/>
        </button>
      )}
      renderIndicator={(onClickHandler, isSelected, index, label) => {

        if (isSelected) {
          return (
            <li
              className={styles["indicator-selected"]}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            className={styles.indicator}
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
      {props.post.photos.map(photo => {
        return (
          <img
            className={styles.image}
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={props.imageWidth}
            height={props.imageHeight}
          />
        )
      })}
    </Carousel>
  );
};

export default ImageCarousel;