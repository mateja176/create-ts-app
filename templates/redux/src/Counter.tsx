import * as React from "react";
import { connect } from "tls";
import { incrementBy, decrementBy } from "./redux/actions/count";

type CounterProps = {};

const Counter = ({ count }) => (
  <>
    <p>Count: {count}</p>
    <button>+</button>
    <button>-</button>
  </>
);

export default connect(
  ({ count }) => ({ count }),
  (dispatch: Function) => ({
    increment: (amount: number) => dispatch(incrementBy(amount)),
    decrement: (amount: number) => dispatch(decrementBy(amount))
  })
)(Counter);

export { CounterProps };
