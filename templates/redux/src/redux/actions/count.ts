import { INCREMENT_BY, DECREMENT_BY } from "./types/count";

interface IncrementBy {
  type: string;
  payload: number;
}

type DecrementBy = IncrementBy;

const incrementBy = (amount: number) => ({
  type: INCREMENT_BY,
  payload: amount
});

type CountAction = IncrementBy | DecrementBy;

const decrementBy = (amount: number) => ({
  type: DECREMENT_BY,
  payload: amount
});

export default CountAction;

export { incrementBy, decrementBy };
