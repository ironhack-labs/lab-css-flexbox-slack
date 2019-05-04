const http = require("http");
const st = require("st");


const configServer = {
    path: __dirname + '/starter_code',
    index: 'index.html',
    cache: false
};


http.createServer(
    st(configServer)
).listen(3005, () => {
    console.log("iniciando 3002")
});
