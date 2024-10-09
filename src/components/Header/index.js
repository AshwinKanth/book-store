import { Component } from "react";
import { Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";


import "./index.css"


class Header extends Component {
    render() {
        return (
            <nav className="nav-container">
                <div className="header-container">
                    <div>
                        <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1728035532/BookLogo_1_knctja.png" alt="logo" className="logo" />
                        <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1728035547/BookStoreLogo_1_dfgqxt.png" alt="bookStoreLogo" className="storeLogo" />
                    </div>
                    <ul className="navList-container">
                        <Link to="/books" className="nav-link">
                            <li><IoBookOutline className="navIcon" /></li>
                        </Link>
                        <Link to="/favourite" className="nav-link">
                            <li><MdOutlineFavoriteBorder className="navIcon" /></li>
                        </Link>
                        <Link to="/cart" className="nav-link">
                            <li><MdOutlineShoppingBag className="navIcon" /></li>
                        </Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header