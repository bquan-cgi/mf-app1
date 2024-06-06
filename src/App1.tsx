import { Link, Outlet } from "react-router-dom";
import { defineCustomElements } from "@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/components";

void defineCustomElements();

export default function App1() {
  return (
    <div className="p-5 bg-blue-500">
      <nav>
        <Link to="/app1">app1-home</Link>|
        <Link to="/app1/app1content">app1-content</Link>|
        <Link to="/app1/app1detail">app1-detail</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
