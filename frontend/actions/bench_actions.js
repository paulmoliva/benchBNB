export const BENCH_CONSTANTS = {
  RECEIVE_BENCHES: 'RECEIVE_BENCHES',
  REQUEST_BENCHES: 'REQUEST_BENCHES'
};

export const requestBenches = () => {
  return {
    type: BENCH_CONSTANTS.REQUEST_BENCHES
  };
};

export const receiveBenches = (benches) => {
  return {
    type: BENCH_CONSTANTS.RECEIVE_BENCHES,
    benches: benches
  };
};
