import React from 'react'
import TestRunnerView from './TestRunnerView';
import TestStatus from "./TestStatus";
import useRunner from "./../hooks/useRunner";
import "../styles/TestRunner.css";

export default function TestRunner({tests}) {
    const [items, onStart, testsState] = useRunner(tests);

    const TestButtons = ({ isDone }) => (
        <div className="app__buttons">
        <button onClick={onStart}>Start Tests</button>
        {isDone && <span className="app__buttons--status">DONE!!!</span>}
        </div>
    );

    return (
        <div className="app">
          <TestRunnerView tests={items} />
          <TestStatus {...testsState} />
          <TestButtons isDone={testsState.done} />
        </div>
    );
}
