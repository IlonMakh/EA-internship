import { defineStore } from "pinia";

export const useModalsStore = defineStore("modals", {
    state: () => ({
        isSettingsOpen: false,
        isDomainOpen: false,
        isImageOpen: false,

        activeImage: localStorage.getItem("activeImage") || '',
    }),
    actions: {
        setActiveImage(img) {
            this.activeImage = img;
            localStorage.setItem("activeImage", this.activeImage);
        },

        openGlobalModal(type) {
            switch (type) {
                case "settings":
                    this.isSettingsOpen = true;
                    break;

                case "domain":
                    this.isDomainOpen = true;
                    break;

                case "image":
                    this.isImageOpen = true;
                    break;
            }
        },

        closeGlobalModal(type) {
            switch (type) {
                case "settings":
                    this.isSettingsOpen = false;
                    break;

                case "domain":
                    this.isDomainOpen = false;
                    break;

                case "image":
                    this.isImageOpen = false;
                    break;
            }
        },
    },
});
