const fs = require('fs');

const CryptoJS = require("crypto-js");
const encryptedString = CryptoJS.AES.encrypt("hello, world!", "super-secret-key");
console.log(encryptedString.toString());

const decryptedString = CryptoJS.AES.decrypt(encryptedString, "super-secret-key");
console.log(decryptedString.toString(CryptoJS.enc.Utf8));

const encrypt = () => {
    fs.readFile('plain-imgs/2560px-Npm-logo.svg.png', (err, data) => {
        if (err) throw err;
        const imgBase64 = data.toString('base64');
        const encryptedImg = CryptoJS.AES.encrypt(imgBase64, "super-secret-key");
        const buffer = Buffer.from(encryptedImg.toString());

        fs.writeFile("encrypted-imgs/file.encrypted", buffer, (err) => {
            if (err) throw err;
        });
    })
}

const decrypt = () => {
    fs.readFile("encrypted-imgs/file.encrypted", (err, data) => {
        if (err) throw err;
        const encryptedImgString = data.toString();
        const decryptedFile = CryptoJS.AES.decrypt(encryptedImgString, "super-secret-key");
        const decryptedFileString = decryptedFile.toString(CryptoJS.enc.Utf8);
        fs.writeFile("plain-imgs/decrypted.png", decryptedFileString, 'base64', (err) => {
            if (err) throw err;
        })
    })
}