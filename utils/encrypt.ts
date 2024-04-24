import * as crypto from "crypto";

class DataEncryptor {
  private algorithm: string;
  private key: string;
  private iv: string;

  constructor(key: string, iv: string = "") {
    this.algorithm = "aes-256-cbc";
    this.key = key;
    this.iv = iv;
  }

  encryptData(data: string): string {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encryptedData = cipher.update(data, "utf8", "hex");
    encryptedData += cipher.final("hex");
    return encryptedData;
  }
}

export { DataEncryptor }