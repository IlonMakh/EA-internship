import { createPinia } from "pinia";
import { useBlocksStore } from "./modules/blocks";
import { useSitesStore } from "./modules/sites";
import { usePagesStore } from "./modules/pages";
import { useModalsStore } from "./modules/modals";

export const pinia = createPinia();

pinia.use(() => useBlocksStore());
pinia.use(() => useSitesStore());
pinia.use(() => usePagesStore());
pinia.use(() => useModalsStore());