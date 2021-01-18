const {gql} = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  type Post {
    id: ID
    photos: [Photo]
    likes: Int
    views: Int
    description: String
    location: String
    postedDate: Date
    tags: [String]
  }

  type Photo {
    id: ID
    src: String
    squareSrc: String
    alt: String
    vision: String
    make: String
    model: String
    xyResolution: Int
    orientation: String
    exposureTime: String
    apertureValue: Float
    iso: Int
    dateTimeOriginal: Date
    brightnessValue: Float
    subjectDistance: String
    flash: String,
    focalLength: String
    fov: String
    exifImageWidth: Int
    exifImageHeight: Int
    digitalZoomRatio: Float
    focalLengthIn35mmFormat: String
    subjectDistanceRange: String
    gpsAltitude: String
    gpsLatitude: String
    gpsLongitude: String
    gpsDateTime: Date
    circleOfConfusion: String
    hyperfocalDistance: String
    lightValue: Float
  }

  type Query {
    getPosts: [Post]
    getPostById: Post
    getPostsDev: [Post]
  }

  type Mutation {
    addPost: Post
    updatePosts: [Post]
  }
`
module.exports = typeDefs;