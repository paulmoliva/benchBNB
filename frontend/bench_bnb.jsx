import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TESTING
import * as Actions from './actions/bench_actions';
import {fetchBenches} from './util/bench_api_util';
///

document.addEventListener('DOMContentLoaded', ( ) => {
  window.fetchBenches = fetchBenches;
  let store = configureStore();
  window.Store = store;
  window.Actions = Actions //TODO: TESTING TAKE OUT
  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store}/>, root
  );
});
