import React, {useState, useRef, useEffect, useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, useParams } from 'react-router-dom';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CloseIcon from '../../components/icons/CloseIcon';
import ModalPost from '../../components/instagram/modal-post/ModalPost';
import MobilePostView from '../../components/instagram/mobile-post-view/MobilePostView';
import { AppContext } from '../../AppContext';
import { defaultPost } from '../../defaults';
import { Post } from '../../types';
import styles from './InstagramPost.module.scss';

const InstagramPost: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const modalRef = useRef<HTMLDivElement>(null);
  const { appOptions } = useContext(AppContext);
  const [postIndex, setPostIndex] = useState(0);
  const [currentPost, setCurrentPost] = useState<Post>(defaultPost);

  useEffect(() => {
    if (appOptions.defaultPosts.length > 0) {
      let postIndex  = appOptions.defaultPosts.findIndex(post => post.id === id);
      setCurrentPost(appOptions.defaultPosts[postIndex]);
      setPostIndex(postIndex);
      if (modalRef.current !== null) {
        disableBodyScroll(modalRef.current);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isMobile) {
      clearAllBodyScrollLocks();
    }
  }, [isMobile]);
  

  const close = (e: React.SyntheticEvent<Element, Event>) => {
    e.stopPropagation();
    clearAllBodyScrollLocks();
    setPostIndex(0);
    setCurrentPost(defaultPost)
    navigate('/instagram');
  };

  const nextPost = (e: React.SyntheticEvent<Element, Event>) => {
    e.stopPropagation();
    let index = postIndex + 1;
    setCurrentPost(appOptions.defaultPosts[index]);
    setPostIndex(index);
    navigate(`/instagram/${appOptions.defaultPosts[index].id}`, {state: { modalBackground: '/instagram' }})
  }

  const prevPost = (e: React.SyntheticEvent<Element, Event>) => {
    e.stopPropagation();
    let index = postIndex - 1;
    setCurrentPost(appOptions.defaultPosts[index]);
    setPostIndex(index);
    navigate(`/instagram/${appOptions.defaultPosts[index].id}`, {state: { modalBackground: '/instagram' }})
  }

  if (isMobile) return <>{currentPost.id && <MobilePostView post={currentPost}/>}</>

  return (
    <div
      aria-label="modal-backdrop"
      ref={modalRef}
      className={styles.backdrop}
      onClick={close}
    >
      <div className={styles["close-icon"]} onClick={close}>
        <CloseIcon  />
      </div>
      <div className={styles.container}>
        <div className={styles["prev-btn-container"]}>
          <FontAwesomeIcon
            className={postIndex > 0 ? styles["modal-prev-btn"] : styles["modal-btn-hidden"]}
            icon={faCircleChevronLeft}
            onClick={prevPost}
            />
        </div>
        <div aria-label="modal" className={styles.modal} onClick={(e) => e.stopPropagation()}>    
          <ModalPost post={currentPost}/>
        </div>  
        <div className={styles["next-btn-container"]}>
          <FontAwesomeIcon
            className={postIndex < appOptions.defaultPosts.length -1 ? styles["modal-next-btn"] : styles["modal-btn-hidden"]}
            icon={faCircleChevronRight}
            onClick={nextPost}
          />
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;