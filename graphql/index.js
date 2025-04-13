const {mergeTypeDefs, mergeResolvers} = require("@graphql-tools/merge")
const customerDef = require("./typedefs/customerDef")
const customerResolver=require('./resolver/customerResolver')


const typeDefs = mergeTypeDefs([customerDef])

const resolvers = mergeResolvers([customerResolver])

module.exports = {typeDefs,resolvers}