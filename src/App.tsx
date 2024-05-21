import "./App.css";

import CounterButton from "remoteApp/CounterButton";

function App() {
  return (
    <>
      <div className="container mx-auto bg-slate-100 h-dvh">
        <div className="flex flex-col h-full">
          <div className="flex flex-row h-full">
            <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
              <div className="sticky top-0 p-4 w-full">
                <ul className="flex flex-col overflow-hidden">
                  <li>Home</li>
                  <li>App 1</li>
                  <li>App 2</li>
                </ul>
              </div>
            </aside>
            <main
              role="main"
              className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 bg-slate-300"
            >
              <div className="app1-bg-red-50">
                <h2>h2 in app1</h2>
                <h3>h 3 in app1</h3>
                <h1 className="app1-bg-blue-300">h1 in host app1</h1>
                <CounterButton></CounterButton>
              </div>
              
            </main>
          </div>
          <footer className="mt-auto bg-red-500">...</footer>
        </div>
      </div>
    </>
  );
}

export default App;
