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
    const url = `https://www.googleapis.com/books/v1/volumes?q={${searchTitle}}`;

    fetch(url)
      .then( (response) => {
        return response.json()
      })
      .then(
        (json) => {
          // console.log(json.items)
          const bookListArray = json.items.map((bookItem) => {
             return { 
               volumeInfo: bookItem.volumeInfo, 
               saleInfo: bookItem.saleInfo
              }
          });
          // console.log(bookListArray);
          this.props.handleAdd(bookListArray);
        }
      )
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