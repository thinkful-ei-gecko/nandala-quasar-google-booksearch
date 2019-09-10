import React from 'react';
import Filter from './filter';
import Search from './search';

class BookHeader extends React.Component {

  render() {
    return (
      <header>
        <Filter />
        <Search />
      </header>
    );
  }

}

export default BookHeader;