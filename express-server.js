let express = require( "express" );
let usersDB = require( "./data/users.js" );
let bodyParser = require( "body-parser" );
const PORT = 3001;

let app = express( );

app.set( "view engine" , "ejs" );
app.use( bodyParser.urlencoded( { extended : true } ) );

app.get( "/users/" , function( req , res ) {
	res.render( "users" , { users : usersDB.getAll( ) } );
});

app.get( "/search"  , function ( req , res ) {
	res.render( "filter" , { } );
})

app.post( "/users" , function( req , res ) {
	res.render( "users" , { users : usersDB.findByName( req.body.filter ) } );
})

app.get( "/users/name"  , function ( req , res ) {
	res.end( "hello" );
})


app.get( "/users/:id" , function( req , res ) {
	if( usersDB.getById( req.params.id ) ) {
		res.render( "user" , { user : usersDB.getById( req.params.id ) } );
	}
	else {
		res.end( "user not found");
	}
});


app.listen( PORT , function( ) {
	console.log( "express server running on port " , PORT );
});