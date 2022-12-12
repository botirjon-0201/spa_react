function reducer(state, { type, payload }) {
    switch (type) {
      case "HANDLE_SEARCH": {
        const newCatalog = state.catalog.filter((item) =>
          item.strCategory.toLowerCase().startsWith(payload.str.toLowerCase())
        );
        payload.push({
          pathname: payload.pathname,
          search: `?search=${payload.str}`,
        });
        return {
          ...state,
          filteredCatalog: newCatalog,
        };
      }
  
      case "SET_CATALOG":
        return {
          ...state,
          catalog: payload.data,
        };
  
      case "SET_FILTERED_CATALOG":
        return {
          ...state,
          filteredCatalog: payload.search
            ? payload.data.filter((item) =>
                item.strCategory
                  .toLowerCase()
                  .startsWith(payload.search.split("=")[1].toLowerCase())
              )
            : payload.data,
        };
  
      case "SET_VALUE":
        return {
          ...state,
          value: payload.newValue,
        };
  
      case "SET_MEALS":
        return {
          ...state,
          meals: payload.data,
        };
  
      case "SET_RECIEPE":
        return {
          ...state,
          reciepe: payload.data,
        };
  
      case "SET_SHOW_RECIEPE":
        return {
          ...state,
          showReciepe: !payload,
        };
  
      default:
        return state;
    }
  }
  
  export default reducer;
  