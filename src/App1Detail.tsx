import CounterButton from "./CounterButton";
import CounterButton1 from "./CounterButton1";
import useCount from "./store";
import { Groupui1010Button } from "@group-ui/group-ui-react";

export default function App1Detail() {
  const [count, setCount] = useCount();

  return (
    <div className="app1 p-5 bg-blue-500">
      <h1>App1 Detail</h1>

      <CounterButton greeting="gg" gender={"Mr."}></CounterButton>
      <CounterButton1 greeting={"cb1"}></CounterButton1>

      <Groupui1010Button
        className="font-button"
        onClick={() => setCount((count) => count + 1)}
      >
        native count is {count}
      </Groupui1010Button>
    </div>
  );
}
