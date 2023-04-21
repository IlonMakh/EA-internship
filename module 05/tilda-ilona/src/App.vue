<template>
    <HeaderApp v-if="$route.name !== 'page-edit' && $route.name !== 'page-preview'"></HeaderApp>
    <page-edit-header v-else-if="$route.name == 'page-edit'"></page-edit-header>
    <router-view />
    <sprites-svg></sprites-svg>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import SpritesSvg from "./components/Global/SpritesSvg.vue";
import PageEditHeader from "./components/Sections/PageEditView/PageEditHeader.vue";

export default {
    name: "App",
    components: {
        HeaderApp,
        SpritesSvg,
        PageEditHeader,
    },
    data() {
        return {};
    },
};
</script>

