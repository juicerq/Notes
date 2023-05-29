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
      expiresIn: '7 days'
    })

    return {
      token
    }
  })

  // Route to login
  app.post('/login', async (req, res) => {
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

    if (!user) {
      return null
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

  //Route to verify if a user already exist
  app.post('/verify/user', async (req) => {
    const verifySchema = z.object({
      email: z.string()
    })

    const emailToVerify = verifySchema.parse(req.body)

    const user = await prisma.user.findUnique({
      where: {
        email: emailToVerify.email
      }
    })

    if (!user) {
      return false
    }

    return true
  })

  // Edit name info
  app.put('/edit/name', async (req) => {
    const editNameSchema = z.object({
      name: z.string()
    })

    const newName = editNameSchema.parse(req.body)

    await prisma.user.update({
      where: {
        id: req.user.sub
      },
      data: {
        name: newName.name
      }
    })
  })

  // Edit email info
  app.put('/edit/email', async (req) => {
    const emailSchema = z.object({
      email: z.string()
    })

    const newEmail = emailSchema.parse(req.body)

    await prisma.user.update({
      where: {
        id: req.user.sub
      },
      data: {
        email: newEmail.email
      }
    })
  })

  // Edit password info
  app.put('/edit/password', async (req) => {
    const passwordSchema = z.object({
      password: z.string()
    })

    const newPassword = passwordSchema.parse(req.body)

    await prisma.user.update({
      where: {
        id: req.user.sub
      },
      data: {
        password: newPassword.password
      }
    })
  })

  // Delete user and all his notes
  app.delete('/delete', async (req) => {
    await prisma.notes.deleteMany({
      where: {
        userId: req.user.sub
      }
    })

    await prisma.user.delete({
      where: {
        id: req.user.sub
      }
    })
  })
}