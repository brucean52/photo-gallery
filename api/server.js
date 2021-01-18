const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const cors = require('cors');
const mongoose = require('mongoose');

const keys = require('./config/keys')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const port = 5050; 

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }); 

let db = mongoose.connection;
db.once('open', () => console.log("Connected to MongoDB"));
db.on('error', (err) => {
  console.log("MongoDB Connection: " + err)
});

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});


app.use(cors());
server.applyMiddleware({app});

app.listen({port}, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);
