//styles
import './App.css';
//components
// import Select from './components/Select';
import Timer from './components/Timer';
//hooks
import { useState } from 'react';




function App() {

  const [isReady, setIsReady] = useState(false)
  const [category, setCategory] = useState('')

  return (
    <div className="App">
      <Timer isReady={isReady} setIsReady={setIsReady} category={category} setCategory={setCategory} />
    </div>
  );
}

export default App;
