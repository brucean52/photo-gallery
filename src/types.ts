export type AppContextType = {
  appOptions: AppOptionsType;
  setDefaultPosts: (posts: Post[]) => void;
  setSelectedPost: (postId: string) => void;
  clearSelectedPost: () => void;
  setSortedPhotos: (photos) => void;
}

export type AppOptionsType = {
  userProfile: UserProfile,
  defaultPosts: Post[],
  sortedPhotos:  any[],
  selectedPostId: string
}

export type Post = {
  id: string,
  photos: Photo[],
  likes: number,
  views: number,
  description: string,
  location: string,
  postedDate: string,
  tags: string[]
}

export type Photo = {
  id: string,
  src: string,
  squareSrc: string,
  alt: string,
  vision: string,
  make: string,
  model: string,
  xyResolution: number,
  orientation: string,
  exposureTime: string,
  apertureValue: number,
  iso: number,
  dateTimeOriginal: string,
  brightnessValue: number,
  subjectDistance: string,
  flash: string,
  focalLength: string,
  fov: string,
  exifImageWidth: number,
  exifImageHeight: number,
  digitalZoomRatio: number,
  focalLengthIn35mmFormat: string,
  subjectDistanceRange: string,
  gpsAltitude: string,
  gpsLatitude: string,
  gpsLongitude: string,
  gpsDateTime: string,
  circleOfConfusion: string,
  hyperfocalDistance: string,
  lightValue: number,
}

export type UserProfile = {
  username: string,
  name: string,
  followers: number,
  following: number,
  bio: string
}
