import { useState } from "react";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <Navbar />
      <FilterBar setFilter={setFilter} />
      <Content filter={filter} />
    </div>
  );
}

export default App;
