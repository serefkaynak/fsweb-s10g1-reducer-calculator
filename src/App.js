import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';
import { addOne, applyNumber, changeOperation, setTotal, applyMR, memoryClear, totalClear } from './actions';

function App() {
  const [value, dispatchValue] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={value.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> 
              {value.operation}
              </span>
              <span id="memory"><b>Memory:</b>
              {value.memory}              
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatchValue(setTotal())}/>
              <CalcButton value={"MR"} onClick={() => dispatchValue(applyMR())}/>
              <CalcButton value={"MC"} onClick={() => dispatchValue(memoryClear())} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => dispatchValue(applyNumber(1))} />
              <CalcButton value={2} onClick={() => dispatchValue(applyNumber(2))}/>
              <CalcButton value={3} onClick={() => dispatchValue(applyNumber(3))}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => dispatchValue(applyNumber(4))}/>
              <CalcButton value={5} onClick={() => dispatchValue(applyNumber(5))}/>
              <CalcButton value={6} onClick={() => dispatchValue(applyNumber(6))}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => dispatchValue(applyNumber(7))}/>
              <CalcButton value={8} onClick={() => dispatchValue(applyNumber(8))}/>
              <CalcButton value={9} onClick={() => dispatchValue(applyNumber(9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => dispatchValue(changeOperation("+"))}/>
              <CalcButton value={"*"} onClick={() => dispatchValue(changeOperation("*"))}/>
              <CalcButton value={"-"} onClick={() => dispatchValue(changeOperation("-"))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatchValue(totalClear())}  />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
