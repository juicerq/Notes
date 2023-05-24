import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from "../lib/prisma";

export async function notesRoutes(app: FastifyInstance) {
  // Verify if user is logged
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
  })

  // Create a note
  app.post('/notes', async (req, resp) => {
    const noteSchema = z.object({
      title: z.string(),
      content: z.string(),
    })

    const { title, content } = noteSchema.parse(req.body)

    const note = await prisma.notes.create({
      data: {
        userId: req.user.sub,
        title,
        content
      }
    })

    return note
  })

  // Get all notes
  app.get('/notes', async (req) => {

    const notes = await prisma.notes.findMany({
      where: {
        userId: req.user.sub
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

    return notes.map(note => {
      return {
        id: note.id,
        title: note.title,
        content: note.content,
        createdAt: note.createdAt
      }

    })
  })

  // Get specific note
  app.get('/notes/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    
    
    const { id } = paramsSchema.parse(req.params)

    const note = await prisma.notes.findFirst({
      where: {
        id,
        userId: req.user.sub
      }
    })

    return note
  })

  // Edit note
  app.put('/notes/:id', async (req) => {
    const noteSchema = z.object({
      title: z.string(),
      content: z.string(),
    })
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const noteInfo = noteSchema.parse(req.body)
    const { id } = paramsSchema.parse(req.params)

    await prisma.notes.update({
      where: {
        id,
      },
      data: {
        title: noteInfo.title,
        content: noteInfo.content
      }
    })
  })

  // Delete note
  app.delete('/notes/:id/:title/:content', { config: { bodyParsing: false } }, async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid()
    })
    
    const { id } = paramsSchema.parse(req.params);

    await prisma.notes.delete({
      where: {
        id
      }
    });
  
    res.send({ message: 'Note deleted successfully' });
  });
}