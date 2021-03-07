import logo from "./logo.svg";
import "./App.css";
import NavbarBooks from "./components/NavbarBooks";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <NavbarBooks />
      <SearchBox />
    </div>
  );
}

export default App;
