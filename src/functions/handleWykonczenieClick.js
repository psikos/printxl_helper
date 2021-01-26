const handleWykonczenieClick = (e, arrayToFilter, setState) => {
  // eslint-disable-next-line
  arrayToFilter.filter((element) => {
    if (
      element.name === e.target.innerText &&
      element.group === e.target.className
    ) {
      setState(element);
    }
  });
};

export default handleWykonczenieClick;
