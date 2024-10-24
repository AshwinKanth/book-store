import "./index.css"


const CheckoutCarItem = (props) => {
    const { cartItemDetails } = props
    const { image, price, title, quantity } = cartItemDetails

    const priceSplit = parseFloat(price.slice(1))

    return (
        <li className='cart-item'>
            <img src={image} alt={title} className='cart-product-image' />
            <div className='cart-item-details-container'>
                <p className='cart-product-title'>{title}</p>
                <p className='cart-total-price'>$ {priceSplit * quantity} /-</p>
            </div>
        </li>
    )
}

export default CheckoutCarItem