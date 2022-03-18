//styles
import './App.css';
//components
// import Select from './components/Select';
import Timer from './components/Timer';
//hooks
import { useState } from 'react';

const currentYear = new Date().getFullYear()
const newYears = `01 Jan ${ currentYear + 1 } 00:00:00 GMT`


function App() {

  const [isReady, setIsReady] = useState(false)
  const [category, setCategory] = useState(newYears)

  return (
    <div className="App">
      <Timer isReady={isReady} setIsReady={setIsReady} category={category} setCategory={setCategory} />
    </div>
  );
}

export default App;
