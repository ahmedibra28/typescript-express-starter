import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import logger from './config/logger'

dotenv.config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Node.js + TypeScript!' })
})

app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}`)
})
