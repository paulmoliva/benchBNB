import React from 'react';
import * as Actions from '../actions/bench_actions';
export default class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    let benches = this.props.benches;
    benches = Object.keys(benches).map( (el) => benches[el] );
    return (
      <ul>
        <li>{benches}</li>
      </ul>
    );
  }
}
