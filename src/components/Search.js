import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { setFilteredCatalog } from "../redux/reducers/catalog_slice";

export default function Search() {
  const { catalog } = useSelector((state) => state.catalog);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    dispatch(
      setFilteredCatalog(
        catalog.filter((item) =>
          item.strCategory.toLowerCase().startsWith(str.toLowerCase())
        )
      )
    );
    push({ pathname, search: `?search=${str}` });
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="search-field"
          type="search"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={(e) => {
            setValue(e.target.value);
            handleSearch(value);
          }}
          value={value}
        />
        <button
          className="btn"
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={() => handleSearch(value)}
        >
          Search
        </button>
      </div>
    </div>
  );
}
