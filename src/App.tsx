import { Button, Text } from "@deriv/ui";
import React, { useCallback, useState } from "react";
import "./App.css";
import { add } from "./Utils";

function App({ title }: { title: string }) {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);

  const onCalculate = useCallback(() => {
    setResult(add(first, second));
  }, [first, second]);

  return (
    <>
      <Text>{title}</Text>
      <div>
        <label htmlFor="first">First Number</label>
        <input
          placeholder="First Number"
          defaultValue={0}
          id="first"
          type="text"
          onChange={(event) => setFirst(Number(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="second">Second Number</label>
        <input
          placeholder="Second Number"
          defaultValue={0}
          id="second"
          type="text"
          onChange={(event) => setSecond(Number(event.target.value))}
        />
      </div>
      <Button onClick={onCalculate}>Calculate</Button>
      <Text data-testid="result">{result}</Text>
    </>
  );
}

export default App;
