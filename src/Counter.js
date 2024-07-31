import React from "react";
import { useSelector , useDispatch } from "react-redux"
import { mul , increment ,decrement , incrementByAmount , reduceByAmount , multiByAmount , divideByAmount } from './counterSlice'
import { useState } from "react";

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    const [reduceAmount, setReduceAmount] = useState('2');
    const [multiAmount, setMultiAmount] = useState('2');
    const [divideAmount, setDivideAmount] = useState('2');
    const [multiplier, setMultiplier] = useState(0);
    const [multiplicand, setMultiplicand] = useState(0);
    const [multiplird, setMultiplird] = useState(0);

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
            </div>
            <div>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <div>
                <input
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >
                    Add Amount
                </button>
            </div>
            <div>
                <input
                    value={reduceAmount}
                    onChange={e => setReduceAmount(e.target.value)}
                />
                <button
                    onClick={() =>
                        dispatch(reduceByAmount(Number(reduceAmount) || 0))
                    }
                >
                    Subtract Amount
                </button>
            </div>
            <div>
                <input
                    value={multiAmount}
                    onChange={e => setMultiAmount(e.target.value)}
                />
                <button
                    onClick={() =>
                        dispatch(multiByAmount(Number(multiAmount) || 0))
                    }
                >
                    Multi Amount
                </button>
            </div>
            <div>
                <input
                    value={divideAmount}
                    onChange={e => setDivideAmount(e.target.value)}
                />
                <button
                    onClick={() =>
                        dispatch(divideByAmount(Number(divideAmount) || 0))
                    }
                >
                    Divide Amount
                </button>
            </div>
            <br/>
            <div>
                <input
                    value={multiplier}
                    onChange={e => setMultiplier(e.target.value)}
                />
                x
                <input
                    value={multiplicand}
                    onChange={e => setMultiplicand(e.target.value)}
                />
                x
                <input
                    value={multiplird}
                    onChange={e => setMultiplird(e.target.value)}
                />
                = {count}
                <br></br>
                <button
                    onClick={() =>
                        dispatch(mul({"multiplier": multiplier, "multiplicand": multiplicand, "multiplird": multiplird}))
                    }
                >
                    Count
                </button>
            </div>
        </div>
    )
}
