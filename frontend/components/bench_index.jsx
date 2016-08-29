import React from 'react';
import * as Actions from '../actions/bench_actions';
export default class BenchIndex extends React.Component {
  componentDidMount() {
  }

  render() {
    let benches = this.props.benches;
    benches = Object.keys(benches).map( (el) => <li key ={benches[el].id}>{benches[el].description}</li> );
    return (
      <ul>
        {benches}
      </ul>
    );
  }
}
