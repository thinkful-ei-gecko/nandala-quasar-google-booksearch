import React from 'react';
import BookHeader from './header/bookheader';
import BookList from './booklist/booklist';

class App extends React.Component {

  state={
    bookList:[],
    printType:"All",
    filterType:"All",
    searchTitle:""
  }

  fetchBookList() {
    let queryOptions = {
        q: this.state.searchTitle, 
        filter: this.state.filterType,
        printType: this.state.printType
      };
    
    let queryString = '';
    Object.keys(queryOptions).forEach((key) =>{
      if (key === 'filter') {
        const filterString = queryOptions.filter === 'All' ? '' : `${key}=${queryOptions[key]}&`; 
        queryString += filterString;   
      } else {
        queryString += `${key}=${queryOptions[key]}&`
      }
    }
    )

    const url = `https://www.googleapis.com/books/v1/volumes?${queryString}`;
    
    console.log(url);
    fetch(url)
      .then( (response) => {
        return response.json()
      })
      .then(
        (json) => {
          // console.log(json.items)
          const bookList = json.items.map((bookItem) => {
             return { 
               volumeInfo: bookItem.volumeInfo, 
               saleInfo: bookItem.saleInfo
              }
          });
          // console.log(bookListArray);
          this.setState({bookList});
        }
      )
    // console.log(this.state.bookList);
  }

  handleAdd(searchTitle) {
    this.setState({
      searchTitle
    }, () => {
      this.fetchBookList(searchTitle);
    });
  }

  handleBookFilter(filterType) {
    this.setState({ 
      filterType 
    }, () => {
      this.fetchBookList( filterType );
    });
  }

  render(){
    return (
      <main className='App'>

        <BookHeader 
          handleAdd={searchTitle => this.handleAdd(searchTitle)} 
          getFilter={bookType => this.handleBookFilter(bookType)}/>
        <BookList bookList={this.state.bookList}/>
        
      </main>
    );
  }
}

export default App;