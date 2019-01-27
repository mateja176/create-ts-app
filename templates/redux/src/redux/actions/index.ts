import { Action as ReduxAction } from "redux";

type Action = ReduxAction<string>;

interface ActionWithPayload<Payload> extends ReduxAction<string> {
  payload: Payload;
}

export default ActionWithPayload;

export { Action };
