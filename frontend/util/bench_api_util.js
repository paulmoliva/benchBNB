export const fetchBenches = (success) => {
  $.get({
    url: 'api/benches',
    success,
    error: () => console.log("error")
  });
};
