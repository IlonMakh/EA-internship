import { defineStore } from "pinia";
import idGenerator from "@/helpers/idGenerator";
import { getLocalStorageArray, getLocalStorageValue } from "@/helpers/localStorageCheck";

const SITES = getLocalStorageArray('sites');
const ACTIVE_SITE_ID = getLocalStorageValue('activeSiteId');

export const useSitesStore = defineStore('sites',{
    state: () => ({
        sites: SITES,
        activeSiteId: ACTIVE_SITE_ID,
    }),

    actions: {
        updateSitesState() {
            this.sites = getLocalStorageArray('sites');
            this.activeSiteId = getLocalStorageValue('activeSiteId');
        },

        hasSite(siteId) {
            return this.sites.some(site => site.id === siteId);
        },

        getActiveSite(siteId) {
            return this.sites.find(site => site.id === siteId);
        },

        createSite() {
            const length = this.sites.length;

            this.sites.push({
                id: idGenerator(),
                title: `My project ${length ? length : 0}`,
            });

            localStorage.setItem("sites", JSON.stringify(this.sites));
        },

        deleteSite(index) {
            this.sites.splice(index, 1);
            localStorage.setItem("sites", JSON.stringify(this.sites));
        },

        setActiveSite(id) {
            this.activeSiteId = id;
            localStorage.setItem("activeSiteId", this.activeSiteId);
        },

        changeDomain(id, domain) {
            const index = this.sites.findIndex(site => site.id === id);
            
            this.sites[index].domain = domain;
            localStorage.setItem("sites", JSON.stringify(this.sites));
        }
    },
});