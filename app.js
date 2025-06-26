// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package

// Your code here
const jwt = require('jsonwebtoken');
// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.

// Your code here
//const payload = 'rahmon.adeniji@gmail.com';
token = jwt.sign(
    { email: 'rahmon.adeniji@gmail.com' }, 
    process.env.SECRET_KEY,
    { expiresIn: '1s' }
);
// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

// Your code here
payload = jwt.decode(token);
// See the decoded payload in the console - DO NOT MODIFY
console.log('Payload:', payload);

// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

// Your code here
verifiedPayload = jwt.verify(token, process.env.SECRET_KEY);
// See the verified payload in the console - DO NOT MODIFY
console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// Your code here
try {
    let newKey = '8e70a734c74e546a407d27cab5627f929480d973e2a3b4933c86d2321671d62bf95dba3bd6dca038490d3901a00d486b3fe7ee3fe623ed2947ab784e3286126e'
    verifiedPayload = jwt.verify(token, newKey);
} catch (error) {
    console.error(error.message)
}
// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// Your code here
setTimeout(() => {
    try {
        verifiedPayload = jwt.verify(token, process.env.SECRET_KEY);
        console.log('Verified Payload:', verifiedPayload);
    } catch (error) {
        console.error(error.message);
    }
}, 2000);