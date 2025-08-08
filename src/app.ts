import express from 'express';
import cors from 'cors';

// Create Express server
const app = express();

// Enable CORS
app.use( cors() );

// Public Directory
app.use( express.static('public') )

// Middleware to parse incoming JSON
app.use( express.json() )


// Listen Port
const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ PORT }`)
} )
