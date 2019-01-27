import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducer";

type State = {
  count: number;
};

export default createStore(reducers, composeWithDevTools());

export { State };
