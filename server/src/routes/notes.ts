import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from "../lib/prisma";

export async function notesRoutes(app: FastifyInstance) {
  // Create a note
  app.post('/notes/new', async (req, resp) => {
    const noteSchema = z.object({
      title: z.string(),
      content: z.string(),
    })

    const { title, content } = noteSchema.parse(req.body)

    const note = await prisma.notes.create({
      data: {
        title,
        content
      }
    })

    return note
  })

  // Get all notes
  app.get('/notes', async () => {

    const notes = await prisma.notes.findMany({
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

    const note = await prisma.notes.findUniqueOrThrow({
      where: {
        id
      }
    })

    return note
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