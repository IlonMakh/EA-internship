import { defineStore } from "pinia";
import idGenerator from "@/helpers/idGenerator";

export const usePagesStore = defineStore("pages", {
    state: () => ({
        pages: JSON.parse(localStorage.getItem("pages")) || [],
        activePageId: +localStorage.getItem("activePageId") || '',
    }),

    actions: {
        setActivePage(id) {
            this.activePageId = id;
            localStorage.setItem("activePageId", this.activePageId);
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

            localStorage.setItem("pages", JSON.stringify(this.pages));
        },

        deletePage(siteId, pageId) {
            const sitePages = this.pages.find((item) => item.siteId === siteId);

            if (sitePages) {
                const index = sitePages.items.findIndex(item => item.id === pageId);

                sitePages.items.splice(index, 1);
            }

            localStorage.setItem("pages", JSON.stringify(this.pages));
        },

        changeBadge(siteId, pageId, img) {
            const sitePages = this.pages.find((item) => item.siteId === siteId);

            if (sitePages) {
                const index = sitePages.items.findIndex(item => item.id === pageId);

                sitePages.items[index].badge = img;
            }

            localStorage.setItem("pages", JSON.stringify(this.pages));
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

            localStorage.setItem("pages", JSON.stringify(this.pages));
        },

    },
});
