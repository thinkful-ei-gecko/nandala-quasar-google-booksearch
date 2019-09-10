import React from 'react';

function FilterPrintType(props) {
  return(
    <div>
      <label>Print Type:
        <select onChange={e=>props.getPrint(e.target.value)}>
          <option value="All" name="bookTypeOption">No Filter</option>
          <option value="books" name="bookTypeOption">books</option>
          <option value="magazines" name="bookTypeOption">magazines</option>
        </select>
      </label>
    </div>
  );
}

export default FilterPrintType;