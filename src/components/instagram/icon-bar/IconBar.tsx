import React from 'react';
import HeartIcon from '../../icons/HeartIcon';
import BookmarkIcon from '../../icons/BookmarkIcon';
import CommentIcon from '../../icons/CommentIcon';
import ShareIcon from '../../icons/ShareIcon';
import styles from './IconBar.module.scss';

const IconBar: React.FC = () => {

  return (
    <div className={styles.container}>
      <div>
        <HeartIcon margin={true}/> 
        <CommentIcon margin={true}/>
        <ShareIcon/>
      </div>
      <div>
        <BookmarkIcon/>
      </div>
    </div>
  );
};

export default IconBar;