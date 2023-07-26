// Create a const buffer of 64 bytes
const byteSize = 64;
const buffer = new ArrayBuffer(byteSize);
//Create a const i32View 32-bit int typed array with the above buffer
const i32View = new Int32Array(buffer);
i32View[0] = 32;
console.log(i32View)
// Write your code above this line
// ===================================================================

// DO NOT ALTER CODE BELOW THIS LINE
module.exports = buffer;
module.exports = i32View;
