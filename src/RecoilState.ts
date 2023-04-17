import { atom } from 'recoil';
import { samplePosts } from './assets/model/_index';
import { defaultUserProfile } from './defaults'
import { Post, Photo, UserProfile } from './types';

const sortByDatePosts = samplePosts.sort((a, b) => (a.postedDate > b.postedDate) ? -1 : ((a.postedDate < b.postedDate) ? 1 : 0));

export const postsState = atom<Post[]>({
  key: 'posts',
  default: sortByDatePosts
});

export const sortedPhotosState = atom<Photo[]>({
  key: 'sortedPhotos',
  default: []
});

export const userProfileState = atom<UserProfile>({
  key: 'userProfile',
  default: defaultUserProfile
});
