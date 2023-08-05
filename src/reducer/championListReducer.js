export function reducer(state, action) {
  switch (action.type) {
    case "SET_HEROES":
      return { ...state, heroes: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_SORTED_HEROES":
      return { ...state, sortedHeroes: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_SELECTED_ROLE":
      return { ...state, selectedRole: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}