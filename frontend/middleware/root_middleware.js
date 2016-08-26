import {applyMiddleware} from 'redux';
import BenchesMiddleWare from './benches_middleware';

const RootMiddleware = applyMiddleware(
  BenchesMiddleWare
);

export default RootMiddleware;
