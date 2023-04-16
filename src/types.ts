export type AppContextType = {
  appOptions: AppOptionsType;
  setSortedPhotos: (photos: Photo[]) => void;
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
  width: number,
  height: number
}

export type UserProfile = {
  username: string,
  name: string,
  followers: number,
  following: number,
  bio: string,
  imgSrc: any
}
