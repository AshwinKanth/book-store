import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import CartItem from "../CartItem";
import CartSummary from "../CartSummary";
import AppContext from "../../Context/AppContext";

import './index.css'

class Cart extends Component {
    renderCartItems = () => (
        <AppContext.Consumer>
            {value => {
                const { removeAllCartItems, cartList } = value

                const onClickRemoveAllCartItems = () => {
                    removeAllCartItems()
                }

                return (
                    <>
                        {cartList.length === 0 ? (
                            <div className="cart-empty-view-container">
                                <img
                                    src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1729925157/cart_image_qveusl.png"
                                    className="cart-empty-img"
                                    alt="cart empty"
                                />
                                <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

                                <Link to="/books" className="navLink">
                                    <button type="button" className="exploreButton">
                                        Explore
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <div className="cart-container">
                                <h1 className="cartHeading">My Cart</h1>
                                <button className="removeAllButton" type="button" onClick={onClickRemoveAllCartItems}>Remove All</button>
                                <ul className="cartList">
                                    {cartList.map(eachBook => (
                                        <CartItem cartItemDetails={eachBook} key={eachBook.isbn13} />
                                    ))}
                                </ul>
                                <hr className="cartBreakLine"/>
                                <CartSummary />
                            </div>
                        )}
                    </>
                )
            }}
        </AppContext.Consumer>
    )

    render() {
        return (
            <div>
                <Header />
                <div className="cartBg-container">
                    {this.renderCartItems()}
                </div>
            </div>
        )
    }
}

export default Cart