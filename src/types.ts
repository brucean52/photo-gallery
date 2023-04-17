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
