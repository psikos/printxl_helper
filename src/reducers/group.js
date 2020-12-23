import wykonczenia from "../wykonczenia";

export const group = (state = wykonczenia, action) => {
  // (1)
  switch (
    action.type // (2)
  ) {
    case "FILTER_BY_GROUP":
      //??
      return [...action.contacts];
    default:
      return state;
  }
};
