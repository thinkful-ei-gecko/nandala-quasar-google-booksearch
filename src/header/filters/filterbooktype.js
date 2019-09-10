import React from 'react';

function FilterBookType(props) {
  return(
    <div>
      <label>Book Type:
        <select onChange={e=>props.getFilter(e.target.value)}>
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

export default FilterBookType;