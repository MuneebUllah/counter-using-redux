import logo from './logo.svg';
import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counterSlice/counterSlice';

function App() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
    <button
    aria-label="Increment value"
    onClick={()=>dispatch(increment())}
    >Increment</button>
    <p>{counter}</p>
    <button
    aria-label="Decrement value"
    onClick={()=>dispatch(decrement())}
    >Decrement</button>
    </div>
  );
}

export default App;
