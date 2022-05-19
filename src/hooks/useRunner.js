import { useState } from "react";
import { initialTestsState } from "../utils/testRunnerUtils";

export default function useRunner(tests) {
  const [testItems, setTestItems] = useState(() =>
    tests.map((i) => ({ ...i, status: "Not Started" }))
  );

  const [testsState, setTestsState] = useState(initialTestsState);

  const setTestsStateLogic = (status) => {
    setTestsState((data) => {
      const clonedData = { ...data };

      if (status) {
        clonedData.passed++;
      } else {
        clonedData.failed++;
      }
      if(clonedData.running !== 0) clonedData.running--;

      if (clonedData.running === 0) {
        clonedData.done = true;
      }

      return clonedData;
    });
  };

  const setTestItemsLogic = (status, index) => {
    setTestItems((oldTests) => {
      const cloned = [...oldTests];
      cloned[index] = {
        ...cloned[index],
        status: status ? "Passed" : "Failed"
      };
      return cloned;
    });
  };

  function callback(index, status) {
    setTestsStateLogic(status);
    setTestItemsLogic(status, index);
  }

  const logicRunner = () => {
    testItems.forEach((test, index) => {
      const updatedCallback = callback.bind(this, [index]);
      const result = test.run();
      result(updatedCallback);
    });
  };

  const onStart = () => {
    setTestItems(testItems.map((i) => ({ ...i, status: "Running..." })));
    setTestsState((prevState) => {
      prevState.running = testItems.length;
      return prevState;
    });
    logicRunner();
  };

  return [testItems, onStart, testsState];
}
