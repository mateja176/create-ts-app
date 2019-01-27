import * as React from "react";
import { connect } from "react-redux";
import { State } from "./redux/";
import {
  decrementBy,
  DecrementBy,
  incrementBy,
  IncrementBy
} from "./redux/actions/count";

interface CounterProps {
  count: number;
  increment: () => IncrementBy;
  decrement: () => DecrementBy;
}

const Counter: React.SFC<CounterProps> = ({
  count,
  increment,
  decrement
}: CounterProps) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

export default connect(
  ({ count }: State) => ({ count }),
  dispatch => ({
    increment: () => dispatch(incrementBy(1)),
    decrement: () => dispatch(decrementBy(1))
  })
)(Counter);

export { CounterProps };
