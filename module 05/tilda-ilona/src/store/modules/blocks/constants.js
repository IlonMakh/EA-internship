import { getLocalStorageArray, getLocalStorageValue } from "@/helpers/localStorageCheck";

export const BLOCKS = getLocalStorageArray('blocks');
export const STATE_HISTORY = getLocalStorageArray('stateHistory');
export const ACTIVE_BLOCK_ID = getLocalStorageValue('activeBlockId');
export const ACTIVE_VIDEO = getLocalStorageValue('activeVideo');