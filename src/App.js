import React from 'react';
import BookHeader from './header/bookheader';
import BookList from './booklist/booklist';

function App() {
  return (
    <main className='App'>
      <BookHeader />
      <BookList />
    </main>
  );
}

export default App;