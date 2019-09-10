import React from 'react';
import Filter from './filter';
import Search from './search';

class BookHeader extends React.Component {

  render() {
    return (
      <header>
        <h1>Google Book Search</h1>
        <Filter />
        <Search />
      </header>
    );
  }

}

export default BookHeader;