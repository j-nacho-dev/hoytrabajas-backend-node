import { mockedProducts } from "../data/mocked_products_data";

export const  findProductById = ( id: number ) => {
    return mockedProducts.find( product => product.id === id )
}