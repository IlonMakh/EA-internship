import { getLocalStorageArray, getLocalStorageValue } from "@/helpers/localStorageCheck";

export const PAGES = getLocalStorageArray('pages');
export const ACTIVE_PAGE_ID = getLocalStorageValue('activePageId');