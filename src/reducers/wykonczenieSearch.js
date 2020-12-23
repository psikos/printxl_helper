export const wykonczenieSearch = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_WYKONCZENIE":
      return action.text;
    default:
      return state;
  }
};
