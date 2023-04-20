<template>
<div v-if="pages.length" class="project__list">
    <project-pages-list-item v-for="(page, index) in pages" :page="page" :index="index" :key="page.title" @remove="removeItem" @openSettings="openSettings"></project-pages-list-item>
</div>
<div v-else class="project__message">
    В этом проекте пока нет ни одной страницы. Добавьте новую!
</div>
</template>

<script>
import ProjectPagesListItem from "./ProjectPagesList/ProjectPagesListItem.vue";

export default {
    name: "project-pages-list",
    components: {
        ProjectPagesListItem
    },
    props: {
        pages: Object,
    },

    methods: {
        removeItem(index) {
            this.$emit("remove", index);
        },

        openSettings(index) {
            this.$emit("openSettings", index);
        },
    },
};
</script>
