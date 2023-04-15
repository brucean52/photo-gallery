import { Post } from '../types';

export const shufflePosts = (posts: Post[]): Post[] => {
  let shuffledPosts = [...posts]
  // JavaScript implementation of the Durstenfeld shuffle, an optimized version of Fisher-Yates:
  // Reference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
  for (let i = shuffledPosts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPosts[i], shuffledPosts[j]] = [shuffledPosts[j], shuffledPosts[i]];
  }
  return shuffledPosts;
};