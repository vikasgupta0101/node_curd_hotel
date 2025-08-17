


// const http = require("http");

// const myServer = http.createServer((req, res) => {
//     console.log("Hello, Request received by server");
//     res.end("Hello, Server ended");
// });

// myServer.listen(8000, () => console.log("Server started and listening on port 8000"));
 
var fs=require('fs')
var os= require('os');

var user=os.userInfo();
console.log(user)

fs.appendFile('greeting.text','hii'  +  user.username + '!',()=>console.log("ram is hear") );