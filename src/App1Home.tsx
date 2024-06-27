import { defineCustomElements } from "@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/components";
import CounterButton from "./CounterButton";

void defineCustomElements();

export default function App1Home() {
  return (
    <div className="p-5 bg-blue-500">
      <h1>App1 Home</h1>
      <CounterButton greeting="tag"></CounterButton>
    </div>
  );
}
