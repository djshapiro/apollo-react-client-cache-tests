import Data from './data'
import { makeExecutableSchema } from 'graphql-tools'

const rootSchema = `
  type RootQuery {
    test(id: Int!): Test
    g(id: Int!): G
  }
    
  type Test {
    a: String
    b: Int
    c: SubTest
    d: [SubTest]
  }

  type SubTest {
    e: String
    f: Int
  }
  
  type G {
    h: Int
  }

  schema {
    query: RootQuery
  }
`

const rootResolvers = {
  RootQuery: {
    test(root, args, context) {
      const id = args.id;
      const sid = '' + id;
      const sub = { e: sid, f: id };
      return {
        a: id,
        b: sid,
        c: sub,
        d: [ sub, sub ],
      }
    },
    g(root, args, context) {
      return {
        h: args.id,
      };
    },
  },
}

const schema = [
  rootSchema,
]

const resolvers = {
  ...rootResolvers,
}

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})

export default executableSchema
