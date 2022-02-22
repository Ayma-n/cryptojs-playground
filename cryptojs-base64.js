const fs = require('fs');

const CryptoJS = require("crypto-js");
const encryptedString = CryptoJS.AES.encrypt("hello, world!", "super-secret-key");
console.log(encryptedString.toString());

const decryptedString = CryptoJS.AES.decrypt(encryptedString, "super-secret-key");
console.log(decryptedString.toString(CryptoJS.enc.Utf8));

const encrypt = () => {
    const originalFileBuffer = fs.readFileSync("plain-imgs/2560px-Npm-logo.svg.png");
    const imgBase64 = originalFileBuffer.toString('base64');
    const encryptedImg = CryptoJS.AES.encrypt(imgBase64, "super-secret-key");
    const buffer = Buffer.from(encryptedImg.toString());
    fs.writeFileSync("encrypted-imgs/file.encrypted", buffer);
}

const decrypt = () => {
    const encryptedFileBuffer = fs.readFileSync("encrypted-imgs/file.encrypted");
    const encryptedImgString = encryptedFileBuffer.toString();
    const decryptedFile = CryptoJS.AES.decrypt(encryptedImgString, "super-secret-key");
    const decryptedFileString = decryptedFile.toString(CryptoJS.enc.Utf8);
    fs.writeFileSync("plain-imgs/decrypted.png", decryptedFileString, 'base64');
}

encrypt();
decrypt();

// The encrypted version of the file is bigger than the original one.