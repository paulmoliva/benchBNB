import {BENCH_CONSTANTS } from '../actions/bench_actions';
import {fetchBenches} from '../util/bench_api_util';
import {receiveBenches, requestBenches} from '../actions/bench_actions';
import {FILTER_CONSTANTS} from '../actions/filter_actions';

const BenchesMiddleWare = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case BENCH_CONSTANTS.REQUEST_BENCHES:
      const success = data => dispatch(receiveBenches(data));
      const filters = getState();
      fetchBenches(success, filters);
      return next(action);
    case FILTER_CONSTANTS.UPDATE_BOUNDS:
      next(action);
      dispatch(requestBenches(filters));
    default:
      return next(action);
  }
};

export default BenchesMiddleWare;
