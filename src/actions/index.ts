import { SET_PUZZLE_LEVEL } from "../constants";

export function setPuzzleLevel(level: number) {
  return {
      type: SET_PUZZLE_LEVEL,
      payload: level
  }
}