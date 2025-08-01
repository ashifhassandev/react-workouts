import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addItem = () => {
    if (value.trim() === "") return;

    setList((previousList) => [...previousList, value]);
    setValue("");
  };

  return (
    <div className="list-box">
      <h1>React Lists</h1>
      <div className="search-box">
        <input 
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)} 
          placeholder="Enter your text..."
        />
        <button onClick={addItem}>Add</button>
      </div>
      {list.length > 0 && (
        <div className="list">
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
};

export default App;