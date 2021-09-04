const http = require("http");

const sever = http.createServer((request,response) =>{
    response.end("Hello From NodeJS Sever 2");
});

const port = 3000;
const ip ="127.0.0.1";

sever.listen(port,ip,()=>{
    console.log(`sever is running at http://${ip}:${port}`);

});