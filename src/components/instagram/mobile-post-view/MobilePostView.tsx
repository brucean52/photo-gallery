import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CardPost from '../card-post/CardPost';
import { Post } from '../../../types';
import styles from './MobilePostView.module.scss';

type MobilePostViewProps = {
  post: Post,
}

const MobilePostView: React.FC<MobilePostViewProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
       
        <div className={styles["back-icon"]} onClick={() => navigate(-1)}>
          <ArrowBackIcon /> 
        </div>
        <div className={styles.posts}>Posts</div>
        <div className={styles.spacer}></div>
      </div>
      <CardPost post={props.post} isMobilePost={true}/>
    </div>
  )
};

export default MobilePostView;