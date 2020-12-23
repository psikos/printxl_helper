export const filterByGroup = (group) => ({
  type: "FILTER_BY_GROUP",
  group,
});

export const openMenu = (isMenuOpen) => ({
  type: "OPEN_MENU",
  isMenuOpen,
});

export const searchWykonczenie = (text) => ({
  type: "SEARCH_WYKONCZENIE",
  text,
});
