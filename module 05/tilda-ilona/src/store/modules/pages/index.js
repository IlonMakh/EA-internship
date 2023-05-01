import { defineStore } from "pinia";
import idGenerator from "@/helpers/idGenerator";

export const usePagesStore = defineStore("pages", {
    state: () => ({
        pages: [
            {
                siteId: 12,
                items: [
                    {
                        id: 1,
                        title: "Page 0",
                        badge: "/images/cat.jpg",
                        description: "Стандартная страница",
                        adress: "Адрес страницы",
                    },
                    {
                        id: 2,
                        title: "Page 1",
                        badge: "/images/cat.jpg",
                        description: "Стандартная страница",
                        adress: "Адрес страницы",
                    },
                ],
            },
        ],

        activePageId: "",
    }),

    actions: {
        setActivePage(id) {
            this.activePageId = id;
        },

        getSitePages(id) {
            const sitePages = this.pages.find((item) => item.siteId === id);

            if (sitePages) {
                return sitePages.items;
            } else {
                return [];
            }
        },

        getActivePage(siteId, pageId) {
            const sitePages = this.pages.find((item) => item.siteId === siteId);

            if (sitePages) {
                return sitePages.items.find(item => item.id === pageId);
            }
        },

        createPage(id) {
            const sitePages = this.pages.find((item) => item.siteId === id);
            const length = (sitePages && sitePages.items.length) || 0;
            const page = {
                id: idGenerator(),
                title: `page ${length}`,
                badge: "/images/cat.jpg",
                description: "Стандартная страница",
                adress: "Адрес страницы",
            };
            
            if (sitePages) {
                sitePages.items.push(page);
            } else {
                this.pages.push({
                    siteId: id,
                    items: [page],
                });
            }
        },

        deletePage(siteId, pageId) {
            const sitePages = this.pages.find((item) => item.siteId === siteId);

            if (sitePages) {
                const index = sitePages.items.findIndex(item => item.id === pageId);

                sitePages.items.splice(index, 1);
            }
        },

        changeBadge(siteId, pageId, img) {
            const sitePages = this.pages.find((item) => item.siteId === siteId);

            if (sitePages) {
                const index = sitePages.items.findIndex(item => item.id === pageId);

                sitePages.items[index].badge = img;
            }
        },

        changeInfo(siteId, pageId, info) {
            const sitePages = this.pages.find((item) => item.siteId === siteId);
        
            if (sitePages) {
                const index = sitePages.items.findIndex(item => item.id === pageId);
                const page = sitePages.items[index];
        
                page.title = info.title || page.title;
                page.description = info.description || page.description;
                page.adress = info.adress || page.adress;
            }
        },

    },
});
