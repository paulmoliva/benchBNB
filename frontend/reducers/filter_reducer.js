import {
  FILTER_CONSTANTS,
  updateBounds
} from '../actions/filter_actions';
import merge from 'lodash/merge';


 const defaultState =
 {
   benches: {},
   filters: {
     bounds: {}
   }
  };
const FilterReducer = ( state =  defaultState, action) => {
  switch (action.type) {
    case FILTER_CONSTANTS.UPDATE_BOUNDS:
      const newBounds = {
        filters: {
          bounds: action.bounds
        }
      };
      return merge({}, state,newBounds);
    default:
      return state;
  }
};

export default FilterReducer;
