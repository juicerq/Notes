/* eslint-disable prettier/prettier */
import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      sub: string
      email: string
    } // user type is return type of `request.user` object
  }
}