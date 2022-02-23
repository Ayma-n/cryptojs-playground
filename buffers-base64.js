let buf1;
let buf2;

const testString = "hello, world!"
const stringBuffer = Buffer.from(testString);
buf1 = stringBuffer;
const stringB64 = stringBuffer.toString('base64');

const stringBufferTest = Buffer.from(stringB64, 'base64');
buf2 = stringBufferTest;
console.log(stringBufferTest.toString());

console.log(buf1 == buf2);
console.log(buf1);
console.log(buf2);

