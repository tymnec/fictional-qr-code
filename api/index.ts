import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import QRCodeGenerator from '../utils/qrcode';

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

const generator = new QRCodeGenerator();

app.get('/', (c) => {
  return c.json({ message: "Hello Hono!" });
})

// Generate QR code SVG
app.get('/generate', async (c) => {
  const { text } = c.req.query();
  try {
    const response = await generator.generateQRCode(text);
    return c.json({ message: "Success", data: response });
  } catch (err) {
    return c.json({ error: "Failed to generate QR code." });
  }
})

export default handle(app)
