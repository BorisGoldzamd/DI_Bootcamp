import jwt from "jsonwebtoken";

// sign( {payload} , secret-code , {expire-time} )

const token = jwt.sign(
  { email: "zivuch@gmail.com", userid: 16 },
  "1234@334!55$",
  { expiresIn: "60s" }
);

// console.log(token);

const mytoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppdnVjaEBnbWFpbC5jb20iLCJ1c2VyaWQiOjE2LCJpYXQiOjE3MTAxNzU2NTgsImV4cCI6MTcxMDE3NTcxOH0.mxScZd-GnOPGOGOuMMLR58mMu_h54-w0gZPQ5E8nQgA";

/**
 * verify( token, secret , (err, decode)=>{})
 */

jwt.verify(mytoken, "1234@334!55$", (err, decode) => {
  if (err) return console.log(err.message);

  console.log(decode);
});
