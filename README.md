# Title

    Interactive Bookstore Application

## Objective

    Build an application that allows users to browse and search for books, view book details, add books to a shopping cart, and place an order.

> Demo

*    Link: https://book-store-ten-eta.vercel.app/


## Development

    git clone <github repository link>  
    npm install
    npm start

## Tech Stack

    Frontend - React JS (React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.)

## Completion Instructions

### Functionality

#### Must Have

*  Build a ReactJS application with multiple pages/components, including Home, Book Listing, Book Details, Shopping Cart, and Checkout pages.

*    Implement features such as book search, book filtering, adding to cart, removing from cart, and order placement.

#### Nice to Have

    Bonus tasks include implementing user authentication, unit tests, and deploying the application on a hosting platform.

| Page                | Page Details                 | Navigation
| --------------------| ----------------------| ------
| Home                | Header - Links for pages Home, Book List, Cart, Banner - Heading, description, and “Explore Books Button                  | -
| Book List           | Header - Links for pages Home, Book List, Cart, Book Items - image, title, subtitle, price, Search (by title, author), Filter (by price)             | “Book List” link in Header, “Explore Books” Button, “Back” Button in Book Details Page
| Book Deatils        | Book detailed Information - image, title, subtitle, price, description, etc., “Add to cart” Button, “Back” button          | Each Book Item in Book List Page
| Cart                | Cart Items, “Remove” Button, Order Summary, “Checkout” Button                  | “Cart” link in Header, “Back” Button in Checkout Page
| Checkout            | “Back” Button, Order Form - Personal Details - First Name, Last Name, Email, Mobile No. , Place Order Button, Order Summary              |  “Checkout” Button in Cart


### Routes

| Page                | Route                 | Path
| --------------------| ----------------------| ------
| Home                | Home                  | /
| Book List           | Book List             | /books
| Book Deatils        | Book Details          | /book/:id
| Cart                | Cart                  | /cart
| Checkout            | Checkout              |  /checkout
| Not Found           | Not Found             |  /not-found


### Routes & Components

####   Home

| Component                | Details                 | State  | API (IT bookstore)
| --------------------| ----------------------| ------| --------------------------
| Home                | Heading, Description, and "ExploreBooks" button                  | -    | -
| Header              | Links for pages Home, Book List, Cart             | (Context Consumer) | -


####   Book List

| Component                | Details          | State  | API (IT bookstore)
| --------------------| ----------------------| -------| --------------------------
| Book List           | Heading, Description, and "ExploreBooks" button   | apiStatus, booksData, priceRangeValue    | /new
| Header              | Links for pages Home, Book List, Cart             | (Context Consumer) | -
| SearchInput         | Search (by title, author)                         | searchInputValue    | /search/{query}
| PriceRange          | Filter (by price)                                 | -    | -
| BookItem            | Book Items (title, subtitle, image, price)        | -    | -
| Loader           |                                                   | -    | -
| ErrorMessage           |                                                   | -    | -


####   Book Details

| Component                | Details          | State  | API (IT bookstore)
| --------------------| ----------------------| -------| --------------------------
| BookDetails         | Book detailed Information -  image, title, subtitle, price, description, etc., “Add to cart” Button, “Back” button   | apiStatus, bookDetailsData    | /books/{isbn13}
| Header              | Links for pages Home, Book List, Cart             | (Context Consumer) | -
| Loader              |                                                   | -    | -
| ErrorMessage        |                                                   | -    | -


####   Cart

| Component                | Details          | State  | API (IT bookstore)
| --------------------| ----------------------| -------| --------------------------
| Cart         | Cart Items, “Remove” Button, Order Summary, “Checkout” Button   | (Context Consumer)      | -
| Header       | Links for pages Home, Book List, Cart             | (Context Consumer) | -
| CartItem     |  Book Detailed Info (image, title, subtitle, price, description)                                                 | (Context Consumer)    | -

####   Checkout

| Component                | Details          | State  | API (IT bookstore)
| --------------------| ----------------------| -------| --------------------------
| Checkout         | “Back” button   | (Context Consumer)      | -
| UserDetailsForm       | Order Form - Personal Details - First Name, Last Name, Email, Mobile No. , Place Order Button, Order Summary             | userDetails, isFormSubmitted | -


###   Not Found

| Component                | Details          | State  | API (IT bookstore)
| --------------------| ----------------------| -------| --------------------------
| NotFound            |                       |  -     | -
| Header              | Links for pages Home, Book List, Cart             | (Context Consumer) | Links for pages Home, Book List, Cart


###   App

| Component                | Details          | State  | API (IT bookstore)
| --------------------| ----------------------| -------| --------------------------
| App                 |        -              |  cartList (Context Provider), Context: cartList, addToCart, deleteFromCart     | -


### Guidelines to develop a project

#### Must Have

*  Utilize GitHub
-  Commit code regularly and commit messages should be clear
-  Include a README file explaining the project setup, usage instructions, and any additional information
-  The repo should be well organized and easy to understand.
-  The code should be clean, modular, and well-structured
*  The application should be visually appealing.
*  The application should handle all the errors.

#### Nice to Have

* Implement Unit Tests

### Submission Instructions

#### Must Have

    List the Instructions to follow while submitting the project mentioned in the Assignment, if any

#### Nice to Have

    List the suggested instructions to follow while submitting the project mentioned in the Assignment, if any

## Resources

### Design files

    Home, Book Lists, Book Details, Shopping Cart, Checkout

####    Reference: https://www.crossword.in/

### APIs

    Books, Book Details, Search, Filter

 ####  Reference: https://api.itbook.store

### Third-party packages

    Icons (react-icons)
    Loader (react-loader-spinner)
    Range Slider (rc-slider)
