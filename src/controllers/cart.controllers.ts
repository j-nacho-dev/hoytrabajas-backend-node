import { Request, Response } from 'express';

export const getCart = (req: Request, res: Response) => {

    res.json({ 
        message: 'getCart controller' 
    });

};

export const addToCart = (req: Request, res: Response) => {

    res.json({ 
        message: 'addToCart controller' 
    });

};
