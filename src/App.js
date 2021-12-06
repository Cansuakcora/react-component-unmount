import {useState} from 'react';
import Counter from "./Counter";

function App(){

  const [visible, setVisible] = useState(true);

  return (
    <div className="App">

      {visible && <Counter/>}
      <button onClick={() => setVisible(!visible)}>Toogle</button>
    </div>
  );

  }
export default App;
