import {
  GraphQLObjectType,
} from 'graphql';
import { TypeComposer } from 'graphql-compose';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
  },
});

export const rootQueryTypeComposer = new TypeComposer(RootQuery);
