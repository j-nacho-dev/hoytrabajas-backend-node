import { Request, Response } from "express"
import { mockedProducts } from "../data"

export const getProducts = (req: Request, res: Response) => {

    if( !mockedProducts.length ) {
        return res.status(500).json({
            ok: false,
            message: 'Can´t get products'
        })
    }

    return res.status(200).json({
        ok: true,
        products: mockedProducts
    })
    
}