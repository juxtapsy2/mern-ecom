import './App.css';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incremented, decremented} from './redux/slides/counterSlice';

function App() {
  const countNumber = useSelector((state) => state.counter.value);
  const dispatcher = useDispatch();

  return (
    <div>
      <Button type="primary" onClick={()=>dispatcher(incremented())}>Increment</Button>
      <span>{countNumber}</span>
      <Button type="dashed" onClick={() => dispatcher(decremented())}>Decrement</Button>
    </div>
  );
}

export default App;
