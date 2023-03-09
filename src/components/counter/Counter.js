import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetCustom, decrement, increment } from '../../redux/state/counter/CounterSlice';

const Counter = () => {

    const MyNumber = useRef();
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4 className="text-white">My Counter App</h4>
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="my-4">
                    <button onClick={() => dispatch(increment())} className="btn btn-success">Increase</button>
                    <button onClick={() => dispatch(decrement())} className="btn mx-2 btn-danger">Decrease</button>
                </div>
                <div className="my-4">
                    <input ref={MyNumber} className="form-control w-50 my-2" type="number"></input>
                    <button onClick={() => dispatch(SetCustom(MyNumber.current.value))} className="btn w-50 my-2 btn-danger">Set Custom</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;