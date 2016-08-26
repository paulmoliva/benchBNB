import {
  BENCH_CONSTANTS,
  requestBenches,
  receiveBenches
} from '../actions/bench_actions';

const BenchesReducer = (state = {}, action) => {
  switch (action.type) {
    case BENCH_CONSTANTS.RECEIVE_BENCHES:
      return action.benches;
    default:
      return state;
  }
};

export default BenchesReducer;
