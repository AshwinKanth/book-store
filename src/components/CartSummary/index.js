import { Link } from "react-router-dom";

import AppContext from "../../Context/AppContext";


import "./index.css"


const CartSummary = () => (
    <AppContext.Consumer>
        {value => {
            const { cartList } = value

            let total = 0
            cartList.forEach(eachItem => {
                let eachPrice = parseFloat(eachItem.price.slice(1))
                total += eachPrice * eachItem.quantity
            })

            return (
                <div className="cartSummary-container">
                    <h1 className="cartSummaryHeading">Cart Summary</h1>
                    <h1 className="order-total">Order Total: <span className="orderTotal-span">$ {total} /-</span></h1>
                    <p className="cartItems-count">{cartList.length} items in cart</p>
                    <Link to="/checkout" className="nav-link">
                        <button className="checkOutButton" type="button">Proceed to Checkout</button>
                    </Link>
                </div>
            )
        }}
    </AppContext.Consumer>
)


export default CartSummary


