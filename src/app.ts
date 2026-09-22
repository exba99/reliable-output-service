import { Hono } from 'hono'


const app = new Hono()

app.get('/', (c) => c.text('reliable-output-service'))
app.get('/health', (c) => c.json({ status: 'ok' }))

export default app