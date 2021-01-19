const defaultUserProfile = {
  username: 'brucean52',
  name: 'Bruce',
  followers: 123123,
  following: 1234,
  bio: 'Engineer'
}

export const defaultAppOptions = {
  userProfile:  defaultUserProfile,
  defaultPosts: [],
  sortedPhotos:[],
  selectedPostId: ''
};

export const defaultPost = {
  id: '',
  photos: [],
  likes: 0,
  views: 0,
  description: '',
  location: '',
  postedDate: '',
  tags: []
}

export const defaultGalleryPhoto = {
  id: '',
  src: '',
  width: 0,
  height: 0,
  alt: '',
  vision: '',
  tags: []
}

