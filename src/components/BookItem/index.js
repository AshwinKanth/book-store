import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

import "./index.css"


const BookItem = (props) =>{
    const {bookItemData} = props
    const {title,price,image,isbn13} = bookItemData

    // console.log(isbn13)

    const bookTitleSize = title.slice(0,25)

    return(
        <Link to={`/books/${isbn13}`} className="nav-link bookItem-container">
        <li>
            <img src={image} alt={title} className="bookImage"/>
            <p className="bookTitle">{bookTitleSize} ...</p>
            <p className="bookPrice">Price: <span className="priceSpan">{price}</span></p>
            <div className="bag-fav-container">
                <button className="addToBag" type="button">ADD TO BAG</button>
                <button className="favButton" type="button"><MdOutlineFavoriteBorder  size={25}/></button>
            </div>
        </li>
        </Link>
    )
}

export default BookItem