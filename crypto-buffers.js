const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr';

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encrypt = () => {
    const originalFileBuffer = fs.readFileSync("plain-imgs/2560px-Npm-logo.svg.png");
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(originalFileBuffer), cipher.final()]);
    fs.writeFileSync("encrypted-imgs/file2.encrypted", encrypted);
}

const decrypt = () => {
    const encryptedFileBuffer = fs.readFileSync("encrypted-imgs/file2.encrypted");
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const decrypted = Buffer.concat([decipher.update(encryptedFileBuffer), decipher.final()]);
    fs.writeFileSync("plain-imgs/decrypted2.png", decrypted);
}

encrypt();
decrypt();

// Dealing only with buffers, we get the same file size for the encrypted version!