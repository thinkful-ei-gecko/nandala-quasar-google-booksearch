import React from 'react';
import FilterPrintType from './filters/filterprinttype';
import FilterBookType from './filters/filterbooktype';

class Filter extends React.Component {
  render() {
    return (
      <section>
        <FilterPrintType  />
        <FilterBookType getFilter={this.props.getFilter} />
      </section>
    );
  }
}

export default Filter;