import Action from "./";
import { DECREMENT_BY, INCREMENT_BY } from "./types/count";

type IncrementBy = Action<number>;

type DecrementBy = IncrementBy;

type CountAction = IncrementBy | DecrementBy;

export default CountAction;

const incrementBy = (amount: number) => ({
  type: INCREMENT_BY,
  payload: amount
});

const decrementBy = (amount: number) => ({
  type: DECREMENT_BY,
  payload: amount
});

export { incrementBy, decrementBy };
