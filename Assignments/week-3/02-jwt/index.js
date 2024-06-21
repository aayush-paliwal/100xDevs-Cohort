const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const user = zod.string().email("Give proper username");
const pass = zod.string().min(6);

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here
    const userCheck = user.safeParse(username);
    const passCheck = pass.safeParse(password);

    if(!userCheck.success || !passCheck.success){
        return null;
    }
    const token = jwt.sign({username: username}, jwtPassword);
    return token;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    let isVerified = true;
    try {
        jwt.verify(token, jwtPassword);
    } catch (error) {
        isVerified = false;
    }
    return isVerified;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    const decodedToken = jwt.decode(token);

    if(decodedToken){
        return true;
    }
    return false;

}

// console.log(signJwt("abc@gmail.com", "123456"))
// console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE3MDcyNzQzOTd9.v2IXPjAPbEVI4SL6SWkP18Co2T9HhsoZ9aEIhrUsux0"))
// console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE3MDcyNzQzOTd9.v2IXPjAPbEVI4SL6SWkP18Co2T9HhsoZ9aEIhrUsux0"))

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
