import React from 'react';
import BookHeader from './header/bookheader';
import BookList from './booklist/booklist';

class App extends React.Component {
  state={
  
    bookList:[],
    printType:"All",
    filterType:"All"
  }
  render(){
    return (
      <main className='App'>

        <BookHeader />
        <BookList />
      </main>
    );
  }
}

export default App;