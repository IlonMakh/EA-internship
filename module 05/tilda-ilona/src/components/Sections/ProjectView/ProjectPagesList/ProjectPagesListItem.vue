<template>
<div class="project__list-item">
    <div class="project__list-item-info">
        <router-link :to="{
                    name: 'page-edit',
                    params: {
                        projectId: this.$route.params.id,
                        id: this.page.id,
                    },
                }" class="item-info__img" @click="setActivePage(page.id)">
            <img :src="page.badge" />
        </router-link>
        <router-link :to="{
                    name: 'page-edit',
                    params: {
                        projectId: this.$route.params.id,
                        id: this.page.id,
                    },
                }" class="item-info__title" @click="setActivePage(page.id)">{{ page.title }}</router-link>
    </div>
    <div class="project__list-item-menu">
        <button class="item-menu__settings" @click="setActivePage(page.id), openSettings($event)">
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
        ...mapActions(usePagesStore, ["setActivePage", "deletePage"]),
        ...mapActions(useModalsStore, ["openSettings"]),
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
    },
};
</script>
