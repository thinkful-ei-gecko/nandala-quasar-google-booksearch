import React from 'react';

class FilterPrintType extends React.Component {
  render() {
    return(
      <div>
        <label>Print Type:
          <select>
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