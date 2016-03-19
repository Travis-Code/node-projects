var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<b>HELLO WORLD!</b>");
	response.end();
}).listen(8887);

console.log(process.argv);

