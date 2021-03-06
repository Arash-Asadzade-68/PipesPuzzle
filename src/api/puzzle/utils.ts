import {Puzzle} from './puzzle';
import {PuzzleFieldRaw} from './types';

const TOTAL_ROTATIONS = 4 as const;

export const scanMap = (api: Puzzle) => async (): Promise<PuzzleFieldRaw[][][]> => {
    const result = [];
    const [maxY, maxX] = await api.getSize();

    for (let i = 0; i < maxY; i++) {
        const line = [];

        for (let j = 0; j < maxX; j++) {
            const snapshots = [];
            for (let k = 0; k < TOTAL_ROTATIONS; k++) {
                const y = i;
                const x = j;

                const snapshot = await api.mapParsed();
                await api.rotate([x, y]);
                snapshots.push(snapshot);
            }
            line.push(snapshots);
        }
        result.push(line);
    }

    return result;
};
