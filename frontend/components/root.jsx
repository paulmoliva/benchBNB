import React from 'react';
import {Provider} from 'react-redux';
import BenchIndex from './bench_index';
import SearchContainer from './search_container';
const Root = ({store}) => {
  return (
    <Provider store={store}>
      <SearchContainer />
    </Provider>
  );
};

export default Root;
