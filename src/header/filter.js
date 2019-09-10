import React from 'react';
import FilterPrintType from './filters/filterprinttype';
import FilterBookType from './filters/filterbooktype';

function Filter(props) {
  return (
    <section>
      <FilterPrintType getPrint={props.getPrint} />
      <FilterBookType getFilter={props.getFilter} />
    </section>
  );
}

export default Filter;