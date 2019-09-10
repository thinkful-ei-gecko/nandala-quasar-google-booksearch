import React from 'react';

class BookItem extends React.Component {
render(){
  return(
    <li>
      <h2>Title</h2>
      <img src="" alt="bookImage"/>
      <h3>Auhor</h3>
      <h3>Price:</h3>
      <p>description</p>
    </li>
  )
}
}

export default BookItem;

//title
//Image,author,price,decription