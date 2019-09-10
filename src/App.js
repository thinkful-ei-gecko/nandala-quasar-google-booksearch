import React from 'react';
import BookHeader from './header/bookheader';
import BookList from './booklist/booklist';

class App extends React.Component {

  state={
    bookList:[],
    printType:"All",
    filterType:"All",
    searchTitle:"",
    loading: false
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

    this.setState({ loading: true });

    fetch(url)
      .then( (response) => {
        if(response.ok){
          return response.json()
        }
        throw new Error(response.statusText)
      })
      .then(
        (json) => {
          console.log(json);
          // console.log(json.items)

          // if it doesn't find anything, server will still send ok response
          // except response doesn't contain items array
          // instead it will return object with key totalItems: 0
          if (json.totalItems === 0) {
            throw new Error('No items found matching search parameters');
          }

          const bookList = json.items.map((bookItem) => {
             return { 
               volumeInfo: bookItem.volumeInfo, 
               saleInfo: bookItem.saleInfo,
               id: bookItem.id
              }
          });
          // console.log(bookListArray);
          this.setState({bookList,error:null, loading: false});
        }
      )
      .catch(err => {
        this.setState({error: `${err}`, loading: false});
      }) 
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

  handlePrintFilter(printType){
    this.setState({
      printType
    }, () => {
      this.fetchBookList(printType);
    })
  }

  render(){

    const loading = this.state.loading 
          ? <div className="loading">retrieving results...</div>
          : "";

    const error = this.state.error
          ? <div className="error">{this.state.error}</div>
          : "";

    return (
      <main className='App'>
        <BookHeader 
          handleAdd={searchTitle => this.handleAdd(searchTitle)} 
          getFilter={bookType => this.handleBookFilter(bookType)}
          getPrint={printType => this.handlePrintFilter(printType)}/>
          {error}
          {loading}
        <BookList bookList={this.state.bookList}/>
      </main>
    );
  }
}

export default App;