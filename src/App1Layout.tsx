import { Route, Routes, Link, Outlet } from "react-router-dom";

import App1Home from "./App1Home";
import App1Content from "./App1Content";
import App1Detail from "./App1Detail";

export default function App1Layout() {
  return (
    <>
    {/* no Router tag */}
      <nav>
        <Link to="">app1</Link>|
        <Link to="app1home">app1-home</Link>|
        <Link to="app1content">app1-content</Link>|
        <Link to="app1detail">app1-detail</Link>
      </nav>
      <Outlet></Outlet>
      <Routes>
        <Route index element={<App1Home />} />
        <Route path="app1home" element={<App1Home />} />
        <Route path="app1content" element={<App1Content />} />
        <Route path="app1detail" element={<App1Detail />} />
      </Routes>
    </>
  );
}
