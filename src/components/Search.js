import { useState } from "react";

export default function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (evn) => {
    if (evn.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="search-field"
          type="search"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={(evn) => setValue(evn.target.value)}
          value={value}
        />
        <button
          className="btn"
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}
