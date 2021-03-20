import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'
import withApollo from 'next-with-apollo'

const uri = 'http://localhost:4001/graphql'

const httpLink = createHttpLink({ uri, fetch })

const authLink = setContext((_, { headers }) => {
    const token = JSON.parse(localStorage.getItem('jwt'))
})
