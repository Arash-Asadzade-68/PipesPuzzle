import { combineReducers } from "redux";

import { puzzleLevelReducer , IPuzzleLevelState } from "./Puzzle";

export interface IReduxAppState {
  level:IPuzzleLevelState;
}

const combinedReducers = combineReducers({
  level : puzzleLevelReducer
});

export default combinedReducers;
