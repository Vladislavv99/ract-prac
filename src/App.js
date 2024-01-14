import "./App.css";
import { Route, Routes } from "react-router-dom";

import ListFetch from "./components/ListFetch";
import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPages";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layouts/Layour";
import SingleTodo from "./pages/SingleTodo";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/todos" element={<ListFetch />} />
        <Route path="/todos/:id" element={<SingleTodo />} />
        <Route path="/todos/edit/:id" element={<EditPage />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
