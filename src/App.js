import React from 'react';
import BookHeader from './header/bookheader';
import BookList from './booklist/booklist';

class App extends React.Component {

  state={
    bookList:[],
    printType:"All",
    filterType:"All",
    bookListFilter:[],
    searchTitle:""
  }
  getFilters(bookType){
    this.setState({filterType:bookType});
    this.createFilteredList();
  }

  createFilteredList(){
    
    const url = `https://www.googleapis.com/books/v1/volumes?q={${this.state.searchTitle}}&filter=${this.state.filterType}`;
    console.log(url);
    fetch(url)
      .then( (response) => {
        return response.json()
      })
      .then(
        (json) => {
           console.log(json.items)
         /* const bookList = json.items.map((bookItem) => {
             return { 
               volumeInfo: bookItem.volumeInfo, 
               saleInfo: bookItem.saleInfo
              }
          });
          // console.log(bookListArray);
          this.setState({bookList});*/
        }
      )
  }

  createBookList(searchTitle) {
    
    const url = `https://www.googleapis.com/books/v1/volumes?q={${searchTitle}}`;
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
          this.setState({bookList,searchTitle});
          
        }
      )
    
    // console.log(this.state.bookList);
  }

  render(){
    return (
      <main className='App'>

        <BookHeader handleAdd={searchTitle => this.createBookList(searchTitle)} 
        getFilter={bookType => this.getFilters(bookType)}/>
        <BookList bookList={this.state.bookList}/>
        
      </main>
    );
  }
}

export default App;