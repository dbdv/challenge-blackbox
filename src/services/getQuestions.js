export const getData = async () => {
  const { results } = await fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((data) => data);

  //console.log(results);
  return results;
};
