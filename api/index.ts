import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import QRCodeGenerator from '../utils/qrcode';

// Vercel
export const config = {
  runtime: 'edge'
}

// Hono
const app = new Hono().basePath('/api')

// QR code generator
const generator = new QRCodeGenerator();

// Root
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

// Generate and View SVG QR Code
app.get('/view', async (c) => {
  const { text } = c.req.query();
  try {
    const response = await generator.generateQRCodeSVG(text);
    return c.body(response);
  } catch (err) {
    return c.json({ error: "Failed to generate QR code." });
  }
})

export default handle(app)
