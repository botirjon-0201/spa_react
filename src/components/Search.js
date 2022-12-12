import { useContext } from "react";
import { MainContext } from "../context";

export default function Search() {
  const [{ value, setValue, handleSearch }] = useContext(MainContext);

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="search-field"
          type="search"
          placeholder="Search..."
          onKeyDown={(evn) => {
            if (evn.key === "Enter") handleSearch(value);
          }}
          onChange={(evn) => {
            setValue(evn.target.value);
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
