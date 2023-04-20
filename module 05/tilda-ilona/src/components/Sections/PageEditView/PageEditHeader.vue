<template>
<header class="header-edit">
    <div class="container">
        <page-edit-header-breadcrumps></page-edit-header-breadcrumps>
        <div class="header-edit__controls">
            <button class="header-edit__preview">Предпросмотр</button>
            <button class="header-edit__menu">Ещё &#9660;</button>
        </div>
    </div>
</header>
</template>

<script>
import PageEditHeaderBreadcrumps from './PageEditHeader/PageEditHeaderBreadcrumps.vue';

export default {
    name: "edit-page-header",
    components: {
        PageEditHeaderBreadcrumps
    },
    data() {
        return {
            isLogin: true,
            links: [{
                    path: "/",
                    text: "Мои сайты",
                    isActive: true,
                },
                {
                    path: "/profile",
                    text: "Профиль",
                    isActive: false,
                },
            ],
        };
    },
    methods: {
        changeActive(index) {
            this.links
                .filter((link) => link.isActive)
                .forEach((link) => (link.isActive = false));
            this.links[index].isActive = true;
        },
    },
};
</script>
