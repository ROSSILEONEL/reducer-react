import {Counter} from './components/Counter'  
import { CounterTwo } from './components/CounterTwo';
import { CounterReloaded } from './components/CounterReloaded';
import "./App.css";

function App() {
 

  return (
    <>
    <CounterReloaded/>
    <hr />
    <CounterTwo/>
    <hr />
    <Counter/>
    </>
  );
}

export default App;
