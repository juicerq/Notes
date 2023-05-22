import fastify from 'fastify'
import cors from '@fastify/cors'
import { notesRoutes } from './routes/notes'
import fastifyJwt from '@fastify/jwt'
import { userRoutes } from './routes/user'

const app = fastify()

// External Routes
app.register(cors, {
  origin: true
})
app.register(fastifyJwt, {
  secret: 'asodjfaopwekjrqoew'
})

// Local routes
app.register(notesRoutes)
app.register(userRoutes)

app.listen({
  port: 3333
}).then(() => {
  console.log('✔ Running on localhost:3333')
})