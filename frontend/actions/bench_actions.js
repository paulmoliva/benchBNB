export const BENCH_CONSTANTS = {
  RECEIVE_BENCHES: 'RECEIVE_BENCHES',
  REQUEST_BENCHES: 'REQUEST_BENCHES'
};

export const requestBenches = (filter) => {
  return {
    type: BENCH_CONSTANTS.REQUEST_BENCHES,
    filter: filter
  };
};

export const receiveBenches = (benches) => {
  return {
    type: BENCH_CONSTANTS.RECEIVE_BENCHES,
    benches: benches
  };
};
