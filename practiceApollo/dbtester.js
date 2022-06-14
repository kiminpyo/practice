const lolChamp = require('./dataSource')
const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    type Query{
        lol: [champion]
    }
    type Mutation{
        createChampion(
            name:String,
            position:String,
            tier: Int,
        ): champion
    }
    type champion {
        name: String,
        position: String,
        tier: Int,
    }
    `


const resolvers = {
    Query:{
        lol: () => lolChamp
    },
    Mutation:{
        createChampion: (parent,args,context,info) => {
            console.log(args)
            console.log(parent)
            console.log(context)
            console.log(info)
            lolChamp.push(args)
            return args
        }
    }
}
const server = new ApolloServer({typeDefs,resolvers});

server.listen().then((url)=>{

    console.log(`server running ${url}`)
})
