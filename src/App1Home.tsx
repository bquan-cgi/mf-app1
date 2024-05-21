import CounterButton from "mainApp/CounterButton";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function App1Home() {
  // const navigate = useNavigate();

  return (
    <div className="p-5 bg-blue-500">
      <h1>App1Home</h1>

      {/*       <button className="btn" onClick={() => navigate('/app1content')}>
          Place Order
</button>  */}

      {/* <Link to="app1content">content</Link> */}

      {/* <Navigate to="/app1content" state={{ todos: [] }} replace={true} /> */}

      <a href="http://localhost:5001/app1content">app1content full</a>
      <br></br>
      <a href="app1content">app1content r</a>
      <br></br>

      <a href="/app1content">app1content a</a>
      <br></br>

      <CounterButton></CounterButton>
    </div>
  );
}
