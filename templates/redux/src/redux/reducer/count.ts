import { Reducer } from "redux";
import CountAction from "../actions/count";
import { DECREMENT_BY, INCREMENT_BY } from "../actions/types/count";

const initialState = 0;

const count: Reducer<number, CountAction> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case INCREMENT_BY:
      return state + payload;

    case DECREMENT_BY:
      return state - payload;

    default:
      return state;
  }
};

export { count };
