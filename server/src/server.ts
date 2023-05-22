import fastify from 'fastify'
import cors from '@fastify/cors'
import { notesRoutes } from './routes/notes'

const app = fastify()

app.register(cors, {
  origin: true
})
app.register(notesRoutes)

app.listen({
  port: 3333
}).then(() => {
  console.log('✔ Running on localhost:3333')
})