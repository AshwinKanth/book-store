import { Component } from "react";
import { Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";

import AppContext from "../../Context/AppContext";


import "./index.css"


class Header extends Component {

    renderCartItemsCount = () =>(
        <AppContext.Consumer>
            {value => {
                const {cartList} = value
                const cartItemsCount = cartList.length

                return(
                    <>
                        {cartItemsCount > 0 ? (
                            <span className="cartListCountBadge">{cartList.length}</span>
                        ):null}
                    </>
                )
            }}
        </AppContext.Consumer>
    )

    renderFavItemsCount = () =>(
        <AppContext.Consumer>
            {value => {
                const {favouriteList} = value
                const favItemsCount = favouriteList.length

                return(
                    <>
                        {favItemsCount > 0 ? (
                            <span className="cartListCountBadge">{favouriteList.length}</span>
                        ):null}
                    </>
                )
            }}
        </AppContext.Consumer>
    )

    render() {
        return (
            <nav className="nav-container">
                <div className="header-container">
                    <Link to="/" className="nav-link">
                        <div className="navLogo-container">
                            <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1728035532/BookLogo_1_knctja.png" alt="logo" className="logo" />
                            <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1728035547/BookStoreLogo_1_dfgqxt.png" alt="bookStoreLogo" className="storeLogo" />
                        </div>
                    </Link>
                    <ul className="navList-container">
                        <Link to="/books" className="nav-link">
                            <li><IoBookOutline className="navIcon" /></li>
                            <p className="navItemName">Books</p>
                        </Link>
                        <Link to="/favourite" className="nav-link">
                            <li><MdOutlineFavoriteBorder className="navIcon" /></li>
                            {this.renderFavItemsCount()}
                            <p className="navItemName">Wishlist</p>
                        </Link>
                        <Link to="/cart" className="nav-link">
                            <li><MdOutlineShoppingBag className="navIcon" /></li>
                            {this.renderCartItemsCount()}
                            <p className="navItemName">Cart</p>
                        </Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header