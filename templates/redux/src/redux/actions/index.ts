import { Action as ReduxAction } from "redux";

interface Action<Payload> extends ReduxAction<string> {
  payload: Payload;
}

export default Action;
