import React from 'react';
import BookItem from './bookitem';

class BookList extends React.Component {
render(){

  const bookListItem = this.props.bookList.map((bookItem) => {
    return <BookItem bookDetails={bookItem}/>
  });

  return(
    <section>
      <ol>
        {bookListItem}
      </ol>
    </section>
  )
}
}

export default BookList;