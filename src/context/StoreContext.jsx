import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null)

export const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;