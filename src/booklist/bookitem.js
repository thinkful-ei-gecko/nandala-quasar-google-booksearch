import React from 'react';

class BookItem extends React.Component {

checkForSale(bookDetails) {
  const saleability = bookDetails.saleInfo.saleability;
  return saleability === 'FOR_SALE' 
    ? `${bookDetails.saleInfo.listPrice.amount} ${bookDetails.saleInfo.listPrice.currencyCode}`
    : 'Book is not for sale';
}

render(){
  const bookDetails = this.props.bookDetails;
  const bookTitle = bookDetails.volumeInfo.title;
  const bookAuthors = bookDetails.volumeInfo.authors;
  const bookDescription = bookDetails.volumeInfo.description;

  const imgSrc = bookDetails.volumeInfo.imageLinks.thumbnail;

  const saleHeading = this.checkForSale(bookDetails);
  return(
    <li>
      <h2>{bookTitle}</h2>
      <img src={imgSrc} alt={bookTitle}/>
      <h3>{bookAuthors}</h3>
      <h3>{saleHeading}</h3>
      <p>{bookDescription}</p>
    </li>
  )
}
}

export default BookItem;

//title
//Image,author,price,decription

/* items =  [
  {
    volumeInfo {
      authors: [],
      title: '',
      description: '',
      imageLinks: {
        smallThumbnail: '',
        thumbnail: ''
      }
    },
    saleInfo {
      listPrice: {
        amount: number,
        currencyCode: ''
      }
      saleability: "NOT_FOR_SALE" or "FOR_SALE"
    }
  }, 
  {

  }
]

bookItem = {
  volumeInfo: {

  }, 

  SaleInfo: [

  ]
} */