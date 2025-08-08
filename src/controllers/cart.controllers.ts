import { Request, Response } from 'express';
import { findProductById } from '../helpers/findProductById';

export const getCart = (req: Request, res: Response) => {

    res.json({ 
        message: 'getCart controller' 
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

    res.status(200).json({ 
        ok: true,
        message: 'Product added to cart',
        product
    });

};
