// import List from "./List";
import { NavLink, Route, Routes } from "react-router-dom";
import ListFetch from "./components/ListFetch";
import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPages";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/todos">
          Todos
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<ListFetch />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/error" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
