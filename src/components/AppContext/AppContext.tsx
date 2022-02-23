import React from 'react';
import {Puzzle} from '../../api/puzzle/puzzle';

export type AppContextType = {
    puzzleApi: Puzzle;
};

export const AppContext = React.createContext<AppContextType>({} as AppContextType);
