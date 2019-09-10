import React from 'react';

class Search extends React.Component {

  render() {
    return (
      <form>
        <label>Search:
          <input type="text" placeholder="Lord of the Rings" required></input>
          <input type="submit" value="Search"></input>
        </label>
      </form>
    );
  }
}

export default Search;