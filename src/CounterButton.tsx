import { useState } from "react";
import { Groupui1010Button } from "@group-ui/group-ui-react";
import { defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/components';

void defineCustomElements();

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-amber-100 px-2 m-3 border-dashed border-2 border-green-500">
      <p className="italic">
        remote Groupui1010Button from app 1
      </p>
      <Groupui1010Button
        className="font-button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Groupui1010Button>
    </div>
  );
}
