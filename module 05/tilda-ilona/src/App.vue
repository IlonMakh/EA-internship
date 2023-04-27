<template>
    <HeaderApp
        v-if="$route.name !== 'page-edit' && $route.name !== 'page-preview'"
    ></HeaderApp>
    <header-edit v-else-if="$route.name == 'page-edit'"></header-edit>
    <router-view />

    <settings-modal v-if="isSettingsOpen && activePageId"></settings-modal>
    <domain-modal v-if="isDomainOpen"></domain-modal>

    <sprites-svg></sprites-svg>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import SpritesSvg from "./components/Global/SpritesSvg.vue";
import HeaderEdit from "./components/HeaderEdit.vue";
import SettingsModal from "@/components/Modal/SettingsModal.vue";
import DomainModal from "@/components/Modal/DomainModal.vue";
import { useModalsStore } from "@/store/modules/modals";
import { usePagesStore } from "@/store/modules/pages";
import { mapState} from "pinia";

export default {
    name: "App",
    components: {
        HeaderApp,
        SpritesSvg,
        HeaderEdit,
        SettingsModal,
        DomainModal
    },
    computed: {
        ...mapState(useModalsStore, ["isSettingsOpen", "isDomainOpen"]),
        ...mapState(usePagesStore, ["activePageId"]),
    },
};
</script>

