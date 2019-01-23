import { createStore } from "redux";
import reducers from "./reducer";

type State = {
  count: number;
};

export default createStore(reducers);

export { State };
