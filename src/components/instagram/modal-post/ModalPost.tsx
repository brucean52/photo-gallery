import React from 'react';
import { useRecoilValue } from 'recoil';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import dateFormat from 'dateformat';
import ImageCarousel from '../image-carousel/ImageCarousel';
import IconBar from '../icon-bar/IconBar';
import CommentInput from '../comment-input/CommentInput';
import MenuIcon from '../../icons/MenuIcon';
import { userProfileState } from '../../../RecoilState';
import { useWindowDimensions } from '../../../util/useWindowDimensions';
import {Post} from '../../../types';
import styles from './ModalPost.module.scss';

type ModalPostProps = {
  post: Post
}

const ModalPost: React.FC<ModalPostProps> = (props) => {
  const userProfile = useRecoilValue(userProfileState);
  const { post } = props;
  const { winHeight, winWidth } = useWindowDimensions();
  const likesText = post.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  let calcWidth: number = (winWidth > 1150 && winWidth < 1550) ? winWidth - 600 : winWidth - 400;
  let calcHeight: number = 0;
  let aspectRatio: number = 0;
  
  if (post.id) {
    aspectRatio = post.photos[0].width / post.photos[0].height;
    calcHeight = calcWidth / aspectRatio;
    if (calcHeight > winHeight * 0.9) {
      calcHeight = winHeight * 0.9;
      calcWidth = calcHeight * aspectRatio;
    }
  } else return null

  return (
    <div className={styles.container}>
      {post.photos.length <= 1 ? (
        <img
          className={styles.image}
          src={post.photos[0].src}
          alt={post.photos[0].alt}
          width={calcWidth}
          height={calcHeight}
        />
      ) : (
        <div style={{ width: calcWidth }}>
          <ImageCarousel post={post} imageHeight={calcHeight} imageWidth={calcWidth} />
        </div>
      )}

      <Card style={{ height: `${calcHeight}`}} className={styles.card}>
        <CardHeader
          className={styles["card-header"]}
          avatar={<Avatar aria-label="user" className={styles.avatar} src={userProfile.imgSrc}/>}
          action={<div className={styles["settings-icon"]}><MenuIcon /></div>}
          title={<span className={styles.username}>{userProfile.username}</span>}
          subheader={post.location}
          subheaderTypographyProps={{ className: styles["sub-header"] }}
        />
        <Divider className={styles.divider}/>
        <CardContent className={styles.content}>
          <div className={styles["post-text-contain"]}>
            <Avatar className={styles.avatar} aria-label="user" src={userProfile.imgSrc}/>
            <div className={styles["post-text"]}>
              <span className={styles.username}>{userProfile.username}</span>
              <span> {post.description && post.description} </span>
              {post.tags.map((tag: string, index: Number) => (<span className={styles.tag} key={tag+index}>#{tag} </span>))}
            </div>
          </div>

          <div>
            <Divider className={styles["divider-icon"]}/>
            <div className={styles["icon-bar-contain"]}>
              <IconBar/>
            </div>
            <div className={styles["likes-text"]}>{likesText}&nbsp;likes</div>
            <div className={styles.time}>{dateFormat(post.postedDate, "mmmm d, yyyy")}</div>
            <Divider className={styles.divider}/>
            <CommentInput/>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModalPost;