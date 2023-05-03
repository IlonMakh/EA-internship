import { getLocalStorageArray, getLocalStorageValue } from "@/helpers/localStorageCheck";

export const SITES = getLocalStorageArray('sites');
export const ACTIVE_SITE_ID = getLocalStorageValue('activeSiteId');