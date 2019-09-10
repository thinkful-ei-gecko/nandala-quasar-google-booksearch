import React from 'react';
import BookItem from './bookitem';

function BookList(props) {

  const bookListItem = props.bookList.map((bookItem) => {
    return <BookItem 
              bookDetails={bookItem}
              key={bookItem.id}/>
  });

  return(
    <section>
      <ol>
        {bookListItem}
      </ol>
    </section>
  )

}

export default BookList;