import * as React from "react";
import { connect } from "react-redux";
import { incrementBy, decrementBy } from "./redux/actions/count";
import { State } from "./redux/";

type dispatchCountAction = () => void;

type CounterProps = {
  count: number;
  increment: dispatchCountAction;
  decrement: dispatchCountAction;
};

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

export default connect<State>(
  ({ count }: State) => ({ count }),
  (dispatch: Function) => ({
    increment: () => dispatch(incrementBy(1)),
    decrement: () => dispatch(decrementBy(1))
  })
)(Counter);

export { CounterProps };
