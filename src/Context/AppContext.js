import React from "react";


const AppContext = React.createContext({
    cartList: [],
    addCartItem: () =>{},
    removeCartItem: ()  => {},
    removeAllCartItems: () =>{},
    IncrementCartItemQuantity: () =>{},
    decrementCartItemQuantity: () =>{},

    favouriteList:[],
    removeFavouriteItem: () =>{},
    addFavouriteItem: () =>{},
})

export default AppContext