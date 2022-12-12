import { createContext, useReducer } from "react";
import { useHistory, useLocation } from "react-router-dom";
import reducer from "./reducer";

export const MainContext = createContext();

const initialState = {
  catalog: [],
  filteredCatalog: [],
  value: "",
  meals: [],
  reciepe: [],
  showReciepe: false,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pathname, search } = useLocation();
  const { push, goBack } = useHistory();

  state.handleSearch = (str) => {
    dispatch({
      type: "HANDLE_SEARCH",
      payload: { str, pathname, push },
    });
  };

  state.setCatalog = (data) => {
    dispatch({ type: "SET_CATALOG", payload: { data } });
  };

  state.setFilteredCatalog = (data) => {
    dispatch({ type: "SET_FILTERED_CATALOG", payload: { data, search } });
  };

  state.setValue = (newValue) => {
    dispatch({ type: "SET_VALUE", payload: { newValue } });
  };

  state.setMeals = (data) => {
    dispatch({ type: "SET_MEALS", payload: { data } });
  };

  state.setReciepe = (data) => {
    dispatch({ type: "SET_RECIEPE", payload: { data } });
  };

  state.setShowReciepe = () => {
    dispatch({ type: "SET_SHOW_RECIEPE", payload: state.showReciepe });
  };

  return (
    <MainContext.Provider value={[state, pathname, search, push, goBack]}>
      {children}
    </MainContext.Provider>
  );
};
