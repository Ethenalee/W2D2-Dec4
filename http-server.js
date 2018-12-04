let http = require( "http" );

const PORT = 3000;

let resources = {
	"/happy" : "holidays",
	"/felices" : "fiestas",
	"/feliz" : "festa"
}

function handleRequest( request , response ) {
	if ( resources[ request.url ] ) {
		response.end( request.url + 
			resources[ request.url ] );
	}
	else {
		response.statusCode = 404;
		response.end( "resource not found" );
	}
}

let httpServer = http.createServer( handleRequest );

httpServer.listen( PORT , function ( ) {
	console.log( "HTTP server starter at port " , PORT );
});


