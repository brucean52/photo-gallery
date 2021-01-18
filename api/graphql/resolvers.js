const Post = require('../models/post');
const { GraphQLScalarType, Kind } = require('graphql');

//const post = require('../../src/assets/mocks/photos/wynn')

const resolvers = {
  Query: {
    getPosts: async (parent, args, context) => {
      return await Post.find({"published": true}).sort({"postedDate": -1});
    },
    getPostById: async (parent, args, context, info) => {
      return await Post.findOne({ id: args.id });
    },
    getPostsDev: async (parent, args, context) => {
      return await Post.find().sort({"postedDate": -1});
    },
  },
  Mutation: {
    addPost(parent, args, context){
      // let newPost = new Post()

      // newPost.description = post.description
      // newPost.location = post.location
      // newPost.photos = post.photos
      // newPost.postedDate = post.postedDate
      // newPost.tags = post.tags
      // newPost.likes = post.likes
      // return newPost.save()
    },
    updatePosts(parent, args, context) {
      // Post.updateMany({"published": false}, {"$set":{"published": true}}, (err, writeResult) => {});

    }
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Custom date scalar',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return new Date(Number(value));
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
}

module.exports = resolvers;