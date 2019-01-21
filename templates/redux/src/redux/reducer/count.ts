import { INCREMENT_BY, DECREMENT_BY } from "../actions/types/count";
import CountAction from "../actions/count";

const initialState = { count: 0 };

const count = (state = initialState, { type, payload }: CountAction) => {
  const { count } = state;

  switch (type) {
    case INCREMENT_BY:
      return { count: count + payload };

    case DECREMENT_BY:
      return { count: count - payload };

    default:
      return state;
  }
};

export { count };
