<template>
<div class="header-edit__breadcrumps">
    <svg>
        <use xlink:href="#home"></use>
    </svg>
    <router-link v-for="link in links" :to="link.path" :key="link.text" class="header-edit__breadcrumps">
        {{ link.text }}
    </router-link>
</div>
</template>

<script>
export default {
    name: "edit-page-breadcrumps",
    components: {},
    data() {
        return {
            links: [{
                    path: "/",
                    text: "Мои сайты",
                },
                {
                    path: `/project/${this.$route.params.projectId}`,
                    text: "Проект",
                },
                {
                    path: `/project/${this.$route.params.projectId}/page-edit/${this.$route.params.id}`,
                    text: "Страница",
                },
            ],
        };
    },
    methods: {},
};
</script>
