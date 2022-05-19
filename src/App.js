import './App.css';
import { dummyTests } from "./dummyTestData";
import TestRunner from "./components/TestRunner";

function App() {
  return (
    <div className="App">
      <h2>Automated Test Runner</h2>
      <div>
        <TestRunner tests={dummyTests} />
      </div>
    </div>
  );
}

export default App;
