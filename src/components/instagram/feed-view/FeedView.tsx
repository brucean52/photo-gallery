import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import CardPost from '../card-post/CardPost';
import { shufflePosts } from '../../../util/shufflePosts';
import { postsState } from '../../../RecoilState';
import { Post } from '../../../types';
import styles from './FeedView.module.scss';

const FeedView: React.FC = () => {
  const posts = useRecoilValue(postsState);
  const [feedPosts, setFeedPosts] = useState<Post[]>([]);
  
  useEffect(()=> {
    setFeedPosts(shufflePosts(posts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const renderPost = feedPosts.map((post) => { 
    return <CardPost key={post.id} post={post} isMobilePost={false}/>
  });

  return (
    <div className={styles.root}>
      {renderPost}
    </div>
  );
};

export default FeedView;
