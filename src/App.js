import React from 'react';
import store from './store';
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum } from './action/action';
import { mulNum, divNum } from './action/action';
import './App.css';

function App() {

  const myState = useSelector((state) => state.changeTheNumber);
  const newState = useSelector((state) => state.changeVal)
  const dispatch = useDispatch()
  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <div className='quantity'>
          <a className='quantity__minus' title='Decrement' onClick={() => dispatch(decNum())}><span>-</span></a>
          <input name='quantity' clas='text' className='quantity__input' value={myState} />
          <a className='quantity__plus' title='Increment' onClick={() => dispatch(incNum())}><span>+</span></a>
        </div>
      </div>

      <div className='container'>
        <h1>calculate</h1>
        <div className='quantity'>
          <button className='quantity__multiply' title='Multiply' onClick={() => dispatch(mulNum())}>multiply by 3.142</button>
          <input name='quantity' clas='text' className='quantity__input' value={newState} />
          <button className='quantity__divide' title='Divide' onClick={() => dispatch(divNum())}>divide by 3.142</button>
          {/* <input name='quantity' clas='text' className='quantity__input' value={newState} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
