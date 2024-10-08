import './assets/main.css'

import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

import App from './App.vue'
import router from './router'

const apolloClient = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql', // replace with your actual GraphQL endpoint
    cache: new InMemoryCache(),
  })

// const app = createApp(App)
const app = createApp({
    setup () {
      provide(DefaultApolloClient, apolloClient)
    },
  
    render: () => h(App),
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
