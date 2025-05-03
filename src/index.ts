import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { downloaderController } from './controller/downloader-controller.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api', downloaderController)

serve({
  fetch: app.fetch,
  port: 3005
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
