const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieparser = require('cookie-parser')
const {ApolloServer} = require('apollo-server-express')
const {typeDefs,resolvers} =require('./graphql/index.js')


const app = express()
dotenv.config()

// app.use(cors())

app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}))

app.use(express.json())
app.use(cookieparser())


const context = async ({ req,res }) => {
    try {
        const token = req?.cookies?.jwt  
        const operationName = req?.body?.operationName  
        // console.log(operationName,"dgfhj",token);
        
        const publicOperations = ["login", "register", "logout","getRandomProducts","getMerchantProduct"]

        if (publicOperations.includes(operationName)) {
            return { req ,res}
        }

        if (!token) {
            throw new Error("Unauthorized: No token found in cookies")
        }

        return {req,res}

        // const decoded = jwt.verify(token, process.env.JWT_SECRET)  // Verify JWT
        // return { req, user: decoded }  // Attach user to context

    } catch (error) {
        throw new Error("Unauthorized: Invalid token")
    }
}

const serverStart = async()=>{
    try{        
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            playground: true ,
            introspection: true,
            context
        })

        await server.start()
        server.applyMiddleware({app,cors:false})
        app.listen(process.env.PORT,()=>{
            console.log("app running in port",process.env.PORT);
        })
    }
    catch(err){
        console.log("error from start server",err);
    }
}

serverStart()