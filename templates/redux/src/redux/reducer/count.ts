import { INCREMENT_BY, DECREMENT_BY } from "../actions/types/count";
import CountAction from "../actions/count";

const initialState = 0;

const count = (state = initialState, { type, payload }: CountAction) => {
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
