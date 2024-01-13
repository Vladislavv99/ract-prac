import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
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
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
