import React from 'react';
import {Provider} from 'react-redux';
import BenchIndex from './bench_index';
import BenchIndexContainer from './bench_index_container';
const Root = ({store}) => {
  return (
    <Provider store={store}>
      <BenchIndexContainer />
    </Provider>
  );
};

export default Root;
