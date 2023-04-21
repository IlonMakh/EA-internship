<template>
    <HeaderApp
        v-if="$route.name !== 'page-edit' && $route.name !== 'page-preview'"
    ></HeaderApp>
    <header-edit v-else-if="$route.name == 'page-edit'"></header-edit>
    <router-view />
    <sprites-svg></sprites-svg>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import SpritesSvg from "./components/Global/SpritesSvg.vue";
import HeaderEdit from "./components/HeaderEdit.vue";

export default {
    name: "App",
    components: {
        HeaderApp,
        SpritesSvg,
        HeaderEdit,
    },
};
</script>

