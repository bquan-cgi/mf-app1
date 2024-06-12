import CounterButton from "./CounterButton";
import useCount from "./store";
import { Groupui1010Button } from "@group-ui/group-ui-react";

export default function App1Detail() {
  const [count, setCount] = useCount();

  return (
    <div className="app1 p-5 bg-blue-500">
      <h1>App1 Detail</h1>

      <CounterButton></CounterButton>

      <Groupui1010Button
        className="font-button"
        onClick={() => setCount((count) => count + 1)}
      >
        native count is {count}
      </Groupui1010Button>
    </div>
  );
}
