import { MdOutlineFavoriteBorder } from "react-icons/md";

import "./index.css"


const BookItem = (props) =>{
    const {bookItemData} = props
    const {title,price,image} = bookItemData

    const bookTitleSize = title.slice(0,25)

    return(
        <li className="bookItem-container">
            <img src={image} alt={title} className="bookImage"/>
            <p className="bookTitle">{bookTitleSize} ...</p>
            <p className="bookPrice">Price: <span className="priceSpan">{price}</span></p>
            <div className="bag-fav-container">
                <button className="addToBag" type="button">ADD TO BAG</button>
                <button className="favButton" type="button"><MdOutlineFavoriteBorder  size={25}/></button>
            </div>
        </li>
    )
}

export default BookItem