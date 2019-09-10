import React from 'react';

class FilterPrintType extends React.Component {

  
  render() {
    return(
      <div>
        <label>Print Type:
          <select onChange={e=>this.props.getPrint(e.target.value)}>
            <option value="All" name="bookTypeOption">No Filter</option>
            <option value="books" name="bookTypeOption">books</option>
            <option value="magazines" name="bookTypeOption">magazines</option>
          </select>
        </label>
      </div>
    );
  }
}

export default FilterPrintType;