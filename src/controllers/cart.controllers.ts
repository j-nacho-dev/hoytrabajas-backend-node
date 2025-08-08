import { Request, Response } from 'express';
import { findProductById } from '../helpers/findProductById';
import { cart } from '../data';



export const getCart = (req: Request, res: Response) => {

    res.json({ 
        ok: true,
        cart
    });

};


export const addToCart = (req: Request, res: Response) => {

    const { id: productId } = req.params

    const product = findProductById( Number( productId ) )

    if( !product ) {
        return res.status(404).json({
            ok: false,
            message: 'Product not found'
        })
    }

    cart.push( product )

    res.status(200).json({ 
        ok: true,
        message: `Product with id: ${ productId } added to cart`,
        product
    });

};
