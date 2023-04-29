<template>
<main>
    <section class="project">
        <div class="container">
            <div class="project__header">
                <div class="project__header-top">
                    <button class="project__domain-btn" @click="openGlobalModal('domain')">
                        <svg>
                            <use xlink:href="#domain"></use>
                        </svg>
                        <span>Подключить домен</span>
                    </button>
                    <button class="project__preview-btn">
                        <svg>
                            <use xlink:href="#link"></use>
                        </svg>
                        <span>Адрес сайта</span>
                    </button>
                </div>
                <div class="project__header-bottom">
                    <h3 class="project__title">{{ activeSite.title }}</h3>
                    <button class="project__add-btn" @click="createPage(activeSiteId)">
                        <svg>
                            <use xlink:href="#plus2"></use>
                        </svg>
                        <span>Создать новую страницу</span>
                    </button>
                </div>
            </div>
            <h5 class="project__pages-title">Страницы сайта:</h5>
            <project-pages-list :pages="sitePages"></project-pages-list>
        </div>
    </section>
</main>
</template>

<script>
import ProjectPagesList from "@/components/Sections/ProjectView/ProjectPagesList.vue";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { useModalsStore } from "@/store/modules/modals";
import { mapState, mapActions } from "pinia";

export default {
    name: "project-page",
    components: {
        ProjectPagesList,
    },

    methods: {
        ...mapActions(usePagesStore, ["getSitePages", "createPage"]),
        ...mapActions(useModalsStore, ["openGlobalModal"]),
        ...mapActions(useSitesStore, ["setActiveSite", "getActiveSite"]),
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        sitePages() {
            return this.getSitePages(this.activeSiteId);
        },
        activeSite() {
            return this.getActiveSite(this.activeSiteId);
        }
    },
};
</script>
