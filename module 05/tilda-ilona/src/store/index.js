import { createPinia } from "pinia";
import { useBlocksStore } from "./modules/blocks";
import { useSitesStore } from "./modules/sites";
import { usePagesStore } from "./modules/pages";
import { useModalsStore } from "./modules/modals";
import { useUserStore } from "./modules/user";

export const pinia = createPinia();

pinia.use(() => useBlocksStore());
pinia.use(() => useSitesStore());
pinia.use(() => usePagesStore());
pinia.use(() => useModalsStore());
pinia.use(() => useUserStore());