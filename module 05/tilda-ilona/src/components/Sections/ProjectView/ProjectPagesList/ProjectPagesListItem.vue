<template>
<div class="project__list-item">
    <div class="project__list-item-info">
        <router-link :to="{
                    name: 'page-edit',
                    params: {
                        projectId: this.$route.params.projectId,
                        id: this.page.id,
                    },
                }" class="item-info__img" @click="setParams">
            <img :src="page.badge" />
        </router-link>
        <div class="project__list-item-details">
            <router-link :to="{
                    name: 'page-edit',
                    params: {
                        projectId: this.$route.params.projectId,
                        id: this.page.id,
                    },
                }" class="item-info__title" @click="setParams">{{ page.title }}</router-link>
                <p>Описание: {{ page.description }}</p>
                <p>Адрес: {{ page.adress }}</p>
        </div>
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
        },

        setParams() {
            this.setActivePage(this.page.id);
            this.setActiveImage(this.page.badge)
        }
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
    },
};
</script>
