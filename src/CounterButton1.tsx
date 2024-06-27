import { Groupui1010Button } from "@group-ui/group-ui-react";
import { defineCustomElements } from "@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/components";
import useCount from "./store";
import PropTypes from 'prop-types';  

void defineCustomElements();

export default function CounterButton1({greeting}: CounterButtonProps) {
  const [count, setCount] = useCount();

  return (
    <div className="bg-amber-100 px-2 m-3 border-dashed border-2 border-green-500">
      <p className="italic">This is a remote Group UI Button from app 1</p>
      <Groupui1010Button
        className="font-button"
        onClick={() => setCount((count) => count + 1)}
      >
        Hi {greeting}, count of CounterButton is {count}
      </Groupui1010Button>
    </div>
  );
}


/* CounterButton1.propTypes  = {
  greeting: PropTypes.string.isRequired
}  

 */

type CounterButtonProps = {
  greeting: string;
  gender?: string;
}