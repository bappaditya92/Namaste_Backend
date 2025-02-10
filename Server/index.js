const http = require("http");
const { json } = require("stream/consumers");

const server = http.createServer((req, res)=>{
    if(req.url === "/home"){
        let obj = {
            status: 1,
            data: [
                {
                    newsTitle: 'ws',
                    newsDes: 'hello from ws'
                },
                {
                    newsTitle: 'IIP',
                    newsDes: 'hello from IIP'
                }
            ]
        }
        res.end(JSON.stringify(obj));
    }

    
    if(req.url === "/about"){
        
    }
   
});
server.listen(8000);