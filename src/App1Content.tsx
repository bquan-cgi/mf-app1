import React from "react";
// import CounterButton from "shellApp/CounterButton";
// dynamic import
const CounterButton = React.lazy(() => import('shellApp/CounterButton'))


export default function App1Content() {
  return (
    <div className="app1 p-5 bg-blue-500">
      <h1>App1 Content</h1>

      <CounterButton></CounterButton>
    </div>
  );
}
