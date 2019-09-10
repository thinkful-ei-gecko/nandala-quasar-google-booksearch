import React from 'react';
import BookHeader from './header/bookheader';
import BookList from './booklist/booklist';

class App extends React.Component {

  state={
    bookList:[],
    printType:"All",
    filterType:"All"
  }

  createBookList(bookList) {
    this.setState({ bookList });
    // console.log(this.state.bookList);
  }

  render(){
    return (
      <main className='App'>

        <BookHeader handleAdd={bookList => this.createBookList(bookList)}/>
        <BookList bookList={this.state.bookList}/>
      </main>
    );
  }
}

export default App;