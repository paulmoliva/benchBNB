export const fetchBenches = (success, filters) => {
  let query = '';
  if (filters){
    query = (`?bounds=${encodeURIComponent(JSON.stringify(filters))}`);
  }
  console.log(`api/benches${query}`);
  $.get({
    url: `api/benches${query}`,
    success,
    error: () => console.log("error")
  });
};
