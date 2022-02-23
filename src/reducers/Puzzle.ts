import { SET_PUZZLE_LEVEL } from "../constants";


export interface IPuzzleLevelState {
  level:number
}

const initalState = {
  level:1
};
export function puzzleLevelReducer(state: IPuzzleLevelState = initalState, action: any) {
    switch (action.type) {
        case SET_PUZZLE_LEVEL:
            return {
                ...state,
                level: action.payload
            };
        default:
            return state;
    }
}