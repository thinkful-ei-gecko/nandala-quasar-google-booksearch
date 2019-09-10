import React from 'react';
import Filter from './filter';
import Search from './search';

class BookHeader extends React.Component {

 
  render() {
    return (
      <header>
        <h1>Google Book Search</h1>
        <Filter getFilter={this.props.getFilter} getPrint={this.props.getPrint}/>
        <Search handleAdd={this.props.handleAdd}/>
      </header>
    );
  }

}

export default BookHeader;