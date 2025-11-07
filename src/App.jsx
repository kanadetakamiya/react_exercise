import { useState } from "react";
import SearchForm from "./components/SearchForm";
import ResultTable from "./components/ResultTable";
import "./App.css";
import AddUser from "./components/AddUser";

function App() {
  const [kw, setKeyword] = useState("");
  const [newUsers, setNewUsers] = useState(null);

  return (
    <div>
      <SearchForm onChangeValue={setKeyword} />
      <AddUser onAdd={setNewUsers} />
      <ResultTable
        keyword={kw}
        user={newUsers}
        onAdded={() => setNewUsers(null)}
      />
    </div>
  );
}

export default App;
