import { Component } from "react";
import Header from "../Header"
import CheckoutForm from '../CheckoutForm'
import CheckoutCarItem from "../CheckoutCartItem";

import AppContext from "../../Context/AppContext";

import "./index.css"


class Checkout extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {value => {
                    const { cartList } = value

                    let total = 0
                    cartList.forEach(eachItem => {
                        let eachPrice = parseFloat(eachItem.price.slice(1))
                        total += eachPrice * eachItem.quantity
                    })

                    return (
                        <div>
                            <Header />
                            <div className="checkout-container">
                                <CheckoutForm />
                                <div className="checkoutCartList-summary-container">
                                    <ul className="checkoutCartList">
                                        {cartList.map(eachBook => (
                                            <CheckoutCarItem cartItemDetails={eachBook} key={eachBook.isbn13} />
                                        ))}
                                    </ul>
                                    <h1 className="order-total">Order Total: <span className="orderTotal-span">$ {total} /-</span></h1>
                                    <p className="cartItems-count">{cartList.length} items in cart</p>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </AppContext.Consumer>
        )
    }
}

export default Checkout