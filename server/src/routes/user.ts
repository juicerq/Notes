import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from "../lib/prisma";

export async function userRoutes(app: FastifyInstance) {
  // Route to create an account
  app.post('/register', async (req) => {

    // Creates a verification for the user infos
    const userSchema = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string()
    })

    const userInfo = userSchema.parse(req.body)

    // Try to find a user with the user infos
    let user = await prisma.user.findFirst({
      where: {
        email: userInfo.email,
        password: userInfo.password
      }
    })

    // If there's no user with verified infos, create a new one.
    if (!user) {
      user = await prisma.user.create({
        data: {
          name: userInfo.name,
          email: userInfo.email,
          password: userInfo.password
        }
      })
    }

    const token = app.jwt.sign({
      name: user.name,
      email: user.email,
      createdAt: user.createdAt
    }, {
      sub: user.id,
      expiresIn: '30 days'
    })

    return {
      token
    }
  })

  app.get('/login', async (req) => {
    const loginSchema = z.object({
      email: z.string(),
      password: z.string()
    })

    const userInfo = loginSchema.parse(req.body)

    const user = await prisma.user.findFirst({
      where: {
        email: userInfo.email,
        password: userInfo.password
      }
    })

    if (user) {
      const token = app.jwt.sign({
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
      }, {
        sub: user.id,
        expiresIn: '30 days'
      })
  
      return {
        token
      }
    }
  })
}