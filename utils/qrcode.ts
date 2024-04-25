import * as qr from "qrcode";

// QR code generator class
class QRCodeGenerator {
  async generateQRCode(text: string) {
    try {
      // Generate QR code
      const qrData = await qr.toString(text);
      return qrData
    } catch (err) {
      console.error("Error generating QR code:", err);
      throw err;
    }
  }
}

export default QRCodeGenerator;