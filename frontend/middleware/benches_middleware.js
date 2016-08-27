import {BENCH_CONSTANTS } from '../actions/bench_actions';
import {fetchBenches} from '../util/bench_api_util';
import {receiveBenches} from '../actions/bench_actions';

const BenchesMiddleWare = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case BENCH_CONSTANTS.REQUEST_BENCHES:
      const success = data => dispatch(receiveBenches(data));
      fetchBenches(success);
      return next(action);
    default:
      return next(action);
  }
};

export default BenchesMiddleWare;
