const filtorwanie = (setArray, input, arrayToFilter) => {
  setArray(() =>
    arrayToFilter.filter((element) => {
      return element.name.includes(input) ? element : null;
    })
  );
};

export default filtorwanie;
