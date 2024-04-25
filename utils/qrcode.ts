import * as qr from "qrcode";

// QR code generator class with options
class QRCodeGenerator {
  async generateQRCode(text: string, options?: qr.QRCodeToStringOptions) {
    try {
      // Generate QR code with optional options
      const qrData = await qr.toString(text, options);
      return qrData;
    } catch (err) {
      console.error("Error generating QR code:", err);
      throw err;
    }
  }

  async generateQRCodeSVG(text: string, options?: qr.QRCodeToBufferOptions) {
    try {
      // Generate QR code SVG with optional options
      const qrData = await qr.toBuffer(text, options);
      return qrData;
    } catch (err) {
      console.error("Error generating QR code:", err);
      throw err;
    }
  }
}

export default QRCodeGenerator;
