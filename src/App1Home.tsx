import CounterButton from "./CounterButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Groupui1010Button } from "@group-ui/group-ui-react";
import { defineCustomElements } from "@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/components";

void defineCustomElements();

export default function App1Home() {
  // const navigate = useNavigate();

  return (
    <div className="p-5 bg-blue-500">
      <h1>App1 Home</h1>
      <Groupui1010Button onClick={() => console.log("Clicked 10")}>
        default groupui-10-1-0-button!
      </Groupui1010Button>

      <h1>CounterButton within App1</h1>

      <CounterButton></CounterButton>
      {/*       <button className="btn" onClick={() => navigate('/app1content')}>
          Place Order
</button>  */}

      {/* <Link to="app1content">content</Link> */}

      {/* <Navigate to="/app1content" state={{ todos: [] }} replace={true} /> */}

      {/*             <br></br>
<a href="http://localhost:5001/app1content">app1content full</a>
      <br></br>
      <a href="app1content">app1content r</a>
      <br></br>

      <a href="/app1content">app1content a</a>
      <br></br> 



      <h2>H2 in app1 fuchsia-300, Counter button in home-remote</h2>
      */}
    </div>
  );
}
