import { defineStore } from "pinia";
import idGenerator from "@/helpers/idGenerator";

export const useSitesStore = defineStore('sites',{
    state: () => ({
        sites: [
            {
                id: 12,
                title: "My project 0",
                domain: '',
            },
            {
                id: 23,
                title: "My project 1",
                domain: '',
            }
        ],

        activeSiteId: '',
    }),
    actions: {
        createSite() {
            const length = this.sites.length;
            this.sites.push({
                id: idGenerator(),
                title: `My project ${length ? length : 0}`,
            });
        },

        deleteSite(index) {
            this.sites.splice(index, 1);
        },

        setActiveSite(id) {
            this.activeSiteId = id;
        },

        changeDomain(id, domain) {
            const index = this.sites.findIndex(site => site.id === id);
            this.sites[index].domain = domain;
        }
    },
});