import React from 'react';
import FilterPrintType from './filters/filterprinttype';
import FilterBookType from './filters/filterbooktype';

class Filter extends React.Component {
  render() {
    return (
      <div>
        <FilterPrintType />
        <FilterBookType />
      </div>
    );
  }
}

export default Filter;