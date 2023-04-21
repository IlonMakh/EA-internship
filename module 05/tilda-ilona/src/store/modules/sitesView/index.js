import { defineStore } from "pinia";
import idGenerator from "@/helpers/idGenerator";

export const useSitesStore = defineStore('sites',{
    state: () => ({
        sites: [
            {
                id: 12,
                title: "My project 0",
                pages: [
                    {
                        id: 123,
                        title: "Page 0",
                        img: "/images/cat.jpg",
                        blocks: [],
                    }
                ],
            },
            {
                id: 23,
                title: "My project 1",
                pages: [
                    {
                        id: 234,
                        title: "Page 0",
                        img: "/images/cat.jpg",
                        blocks: [],
                    }
                ],
            },
            {
                id: 34,
                title: "My project 2",
                pages: [
                    {
                        id: 345,
                        title: "Page 0",
                        img: "/images/cat.jpg",
                        blocks: [],
                    }
                ],
            }
        ],

        activeId: '',
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
    },
});