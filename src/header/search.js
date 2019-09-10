import React from 'react';

class Search extends React.Component {

  state={
    search:""
  }

  searchChanged(search){
    this.setState({
      search
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchTitle = this.state.search;
     this.props.handleAdd(searchTitle);
   }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>Search:
          <input type="text" 
          placeholder="Lord of the Rings" 
          required 
          value={this.state.search}
          onChange={e => this.searchChanged(e.target.value)}></input>
          <button type="submit" value="Search"></button>
        </label>
      </form>
    );
  }
}

export default Search;

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