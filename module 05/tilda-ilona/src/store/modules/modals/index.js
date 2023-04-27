import { defineStore } from "pinia";

export const useModalsStore = defineStore('modals',{
    state: () => ({
        isSettingsOpen: false,
        isDomainOpen: false,
    }),
    actions: {
        openSettings() {
            this.isSettingsOpen = true;
        },

        closeSettings() {
            this.isSettingsOpen = false;
        },

        openDomain() {
            this.isDomainOpen = true;
        },

        closeDomain() {
            this.isDomainOpen = false;
        },
    },
});