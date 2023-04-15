import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ImageCarousel from '../image-carousel/ImageCarousel';
import IconBar from '../icon-bar/IconBar';
import MenuIcon from '../../icons/MenuIcon';
import EmojiIcon from '../../icons/EmojiIcon';
import { useWindowDimensions } from '../../../util/useWindowDimensions';
import { Post } from '../../../types';
import { AppContext } from '../../../AppContext';
import styles from './CardPost.module.scss';

type CardPostProps = {
  post: Post,
  isMobilePost: boolean
}

const CardPost: React.FC<CardPostProps> = (props) => {
  const { winWidth } = useWindowDimensions();
  const { appOptions } = useContext(AppContext);
  const { userProfile } = appOptions;

  let aspectRatio = props.post.photos[0].width / props.post.photos[0].height;
  let imageWidth = winWidth < 650 ? winWidth : 614;
  let imageHeight = imageWidth / aspectRatio;
  let likesText = props.post.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let timeNow = new Date().getTime();
  let postedTime = props.post.postedDate.split("T")[0];
  let postedDate = new Date(postedTime);
  let timeAgo = timeNow - postedDate.getTime();
  let daysAgo = timeAgo / 86400000;
  let timeAgoString = daysAgo <= 7 ? Math.floor(daysAgo) + 'd' : Math.floor(daysAgo / 7) +'w';
    
  return (
    <Card className={props.isMobilePost ? styles["mobile-card"] : styles.card}>
      <CardHeader
        className={styles["card-header"]}
        avatar={<Avatar aria-label="user" src={userProfile.imgSrc}/>}
        action={<div className={styles["settings-icon"]}><MenuIcon /></div>}
        title={<><span className={styles.username}>{userProfile.username}</span><span> &#8226; {timeAgoString}</span></>}
        subheader={props.post.location}
        subheaderTypographyProps={{ className: styles["sub-header"] }}
      />

      {props.post.photos.length <= 1 ? (
        <div className={styles["image-container"]}>
            <img
              className={styles.image}
              src={props.post.photos[0].src}
              alt="test"
              width={imageWidth}
              height={imageHeight}
              loading="lazy"
            />
        </div>
      ) : <ImageCarousel post={props.post} imageHeight={imageHeight} imageWidth={imageWidth} />}

      <CardContent className={styles.content}>
        <IconBar/>
        <div className={styles["likes-text"]}>{likesText}&nbsp;likes</div>
        <div className={styles["post-text"]}>
          <span className={styles.username}>{userProfile.username}&nbsp;</span>
          {props.post.description && <span>{props.post.description}&nbsp;</span>}
          {props.post.tags.map((tag, index) => (<span className={styles.tag} key={tag+index}>#{tag} </span>))}
        </div>
      </CardContent>
      
      <form className={styles["comment-container"]}>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <EmojiIcon size={13} />
              </InputAdornment>
            ),
          }}
          className={styles["text-field"]}
          variant="outlined"
          id="add-comment-input"
          placeholder="Add a comment..."
          disabled
        />    
      </form>
    </Card>
  )
};

export default CardPost;