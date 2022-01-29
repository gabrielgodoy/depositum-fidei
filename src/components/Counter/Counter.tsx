import React from "react";
import { useDispatch, useSelector } from "redux/hooks";
import { decrementAction, incrementAction } from "redux/slices/counter.slice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementAction())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementAction())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
