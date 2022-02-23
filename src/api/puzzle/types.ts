type Primitives = number | string | boolean;

export type FetchArg = (Primitives | Record<string, Primitives>);
export interface Transport {
    init(_env?: 'production' | 'development'): Promise<void>;
    fetch<T extends any>(path: string, ...args: FetchArg[]): Promise<T>;
};

export type PuzzleFieldRaw = string[][];
