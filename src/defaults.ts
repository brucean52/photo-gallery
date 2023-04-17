import profileImg from './assets/images/profile.webp';
import { Post, Photo, UserProfile } from './types';

export const defaultUserProfile: UserProfile = {
  username: 'brucean52',
  name: 'Bruce',
  followers: 1000,
  following: 123,
  bio: 'Engineer',
  imgSrc: profileImg
}

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

