import React from 'react';
import Filter from './filter';
import Search from './search';

function BookHeader(props) {

  return (
    <header>
      <h1>Google Book Search</h1>
      <Filter getFilter={props.getFilter} getPrint={props.getPrint}/>
      <Search handleAdd={props.handleAdd}/>
    </header>
  );

}

export default BookHeader;