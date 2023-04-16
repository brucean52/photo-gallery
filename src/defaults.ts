import profileImg from './assets/images/profile.webp';
import { samplePosts } from './assets/model/_index';
import { Post, Photo, AppOptionsType, UserProfile } from './types';

const sortByDatePosts = samplePosts.sort((a, b) => (a.postedDate > b.postedDate) ? -1 : ((a.postedDate < b.postedDate) ? 1 : 0));

const defaultUserProfile: UserProfile = {
  username: 'brucean52',
  name: 'Bruce',
  followers: 1000,
  following: 123,
  bio: 'Engineer',
  imgSrc: profileImg
}

export const defaultAppOptions: AppOptionsType = {
  userProfile:  defaultUserProfile,
  defaultPosts: sortByDatePosts,
  sortedPhotos:[],
  selectedPostId: ''
};

export const defaultPost: Post = {
  id: '',
  photos: [],
  likes: 0,
  description: '',
  location: '',
  postedDate: '',
  tags: []
}

export const defaultPhoto: Photo = {
  id: '',
  src: '',
  squareSrc: '',
  width: 0,
  height: 0,
  alt: '',
  vision: ''
}

