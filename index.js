const CryptoJS = require("crypto-js");
const encryptedString = CryptoJS.AES.encrypt("hello, world!", "super-secret-key");
console.log(encryptedString.toString());

const decryptedString = CryptoJS.AES.decrypt(encryptedString, "super-secret-key");
console.log(decryptedString.toString(CryptoJS.enc.Utf8));