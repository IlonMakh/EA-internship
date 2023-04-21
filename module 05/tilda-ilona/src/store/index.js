import { createPinia } from "pinia";
import { useEditViewStore } from "./modules/pageEditView";

export const pinia = createPinia();

pinia.use(() => useEditViewStore());