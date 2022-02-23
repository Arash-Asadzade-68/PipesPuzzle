import {fragmentInfo} from './fragmentInfo';

export const next = (fragment: Fragment): Fragment => {
    return fragmentInfo[fragment].nextKey;
};
