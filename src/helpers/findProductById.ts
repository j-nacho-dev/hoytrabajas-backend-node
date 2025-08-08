import { mockedProducts } from "../data/mocked_products.data";

export const  findProductById = ( id: number ) => {
    return mockedProducts.find( product => product.id === id )
}