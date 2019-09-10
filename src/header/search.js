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
  render() {
    return (
      <form onSubmit={e =>this.searchTitle}>
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