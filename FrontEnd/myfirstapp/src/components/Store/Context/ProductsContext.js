import React, { createContext, useState } from 'react';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [products] = useState('');

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;