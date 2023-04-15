import React, { useContext, useEffect, useState } from 'react';
import CardPost from '../card-post/CardPost';
import { shufflePosts } from '../../../util/shufflePosts';
import { Post } from '../../../types';
import { AppContext } from '../../../AppContext';
import styles from './FeedView.module.scss';

const FeedView: React.FC = () => {
  const { appOptions } = useContext(AppContext);
  const [posts, setPosts] = useState<Post[]>([]);
  
  useEffect(()=> {
    setPosts(shufflePosts(appOptions.defaultPosts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const renderPost = posts.map((post) => { 
    return <CardPost key={post.id} post={post} isMobilePost={false}/>
  });

  return (
    <div className={styles.root}>
      {renderPost}
    </div>
  );
};

export default FeedView;
