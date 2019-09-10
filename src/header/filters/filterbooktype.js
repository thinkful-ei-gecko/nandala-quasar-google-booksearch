import React from 'react';

class FilterBookType extends React.Component {

  render() {
    return(
      <div>
        <label>Book Type:
          <select>
            <option value="All" name="bookTypeOption">No Filter</option>
            <option value="free-ebooks" name="bookTypeOption">free-ebooks</option>
            <option value="paid-ebooks" name="bookTypeOption">paid-ebooks</option>
            <option value="ebooks" name="bookTypeOption">ebooks</option>
            <option value="full" name="bookTypeOption">full</option>
            <option value="partial" name="bookTypeOption">partial</option>
          </select>
        </label>
      </div>
    );
  }
}

export default FilterBookType;