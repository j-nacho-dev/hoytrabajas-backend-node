import express from 'express';
import cors from 'cors';
import { productsRoutes, cartRoutes } from './routes';

// Create Express server
const app = express();

// Enable CORS
app.use( cors() );

// Public Directory
app.use( express.static('public') )

// Middleware to parse incoming JSON
app.use( express.json() )

// Routes
app.use('/products', productsRoutes)
app.use('/cart', cartRoutes)


// Listen Port
const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ PORT }`)
} )
