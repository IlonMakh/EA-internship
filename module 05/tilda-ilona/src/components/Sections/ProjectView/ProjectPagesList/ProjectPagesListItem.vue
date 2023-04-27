<template>
<div class="project__list-item">
    <div class="project__list-item-info">
        <router-link :to="{
                    name: 'page-edit',
                    params: {
                        projectId: this.$route.params.id,
                        id: this.page.id,
                    },
                }" class="item-info__img" @click="setActivePage(page.id), setActiveImage(page.badge)">
            <img :src="page.badge" />
        </router-link>
        <router-link :to="{
                    name: 'page-edit',
                    params: {
                        projectId: this.$route.params.id,
                        id: this.page.id,
                    },
                }" class="item-info__title" @click="setActivePage(page.id), setActiveImage(page.badge)">{{ page.title }}</router-link>
    </div>
    <div class="project__list-item-menu">
        <button class="item-menu__settings" @click="toSettings">
            <svg>
                <use xlink:href="#settings"></use>
            </svg>
            <span>Настройки</span>
        </button>
        <button class="item-menu__delete" @click="deletePage(activeSiteId, page.id)">
            <svg>
                <use xlink:href="#delete"></use>
            </svg>
            <span>Удалить</span>
        </button>
    </div>
</div>
</template>

<script>
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { useModalsStore } from "@/store/modules/modals";
import { mapState, mapActions } from "pinia";

export default {
    name: "project-pages-list-item",
    props: {
        page: Object,
        index: Number,
    },
    methods: {
        ...mapActions(usePagesStore, ["setActivePage", "deletePage", "getActivePage"]),
        ...mapActions(useModalsStore, ["openGlobalModal", "setActiveImage"]),

        toSettings() {
            this.setActivePage(this.page.id);
            this.openGlobalModal("settings");
            this.setActiveImage(this.page.badge);
        }
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
    },
};
</script>
