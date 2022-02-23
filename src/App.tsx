// eslint-disable-next-line
import React, { useRef , useLayoutEffect } from 'react';
import { Puzzle } from "./components/Pipes/Puzzle";
import { Puzzle as PuzzleClass } from "./api/puzzle/puzzle"
import { Provider } from "react-redux";
import store from './store';
import { AppContextType , AppContext } from './components/AppContext/AppContext';

export function App() {
  const ctx = useRef<AppContextType>({
    puzzleApi: new PuzzleClass()
  })
  useLayoutEffect(() => {
    ctx.current.puzzleApi.init();
    ctx.current.puzzleApi.setLevel(1);
  }, []);
  return <Provider store={store}>
    <AppContext.Provider value={ctx.current}>
      <Puzzle />;
    </AppContext.Provider>
  </Provider>
}
