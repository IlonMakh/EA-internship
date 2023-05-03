<template>
    <HeaderApp v-if="$route.name == 'sites' || $route.name == 'profile' || $route.name == 'project'"></HeaderApp>
    <header-edit v-else-if="$route.name == 'page-edit'"></header-edit>
    <router-view />

    <settings-modal v-if="isSettingsOpen && activePageId"></settings-modal>
    <domain-modal v-if="isDomainOpen"></domain-modal>
    <image-modal v-if="isImageOpen"></image-modal>

    <sprites-svg></sprites-svg>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import SpritesSvg from "./components/Global/SpritesSvg.vue";
import HeaderEdit from "./components/HeaderEdit.vue";
import SettingsModal from "@/components/Modal/SettingsModal.vue";
import DomainModal from "@/components/Modal/DomainModal.vue";
import ImageModal from "@/components/Modal/ImageModal.vue";
import { useModalsStore } from "@/store/modules/modals";
import { useUserStore } from "@/store/modules/user";
import { usePagesStore } from "@/store/modules/pages";
import { useSitesStore } from "@/store/modules/sites";
import { useBlocksStore } from "@/store/modules/blocks";
import { mapState, mapActions } from "pinia";

export default {
    name: "App",
    components: {
        HeaderApp,
        SpritesSvg,
        HeaderEdit,
        SettingsModal,
        DomainModal,
        ImageModal,
    },

    methods: {
        ...mapActions(useSitesStore, ["updateSitesState"]),
        ...mapActions(usePagesStore, ["updatePagesState"]),
        ...mapActions(useBlocksStore, ["updateBlocksState"]),
        ...mapActions(useUserStore, ["updateUserState"]),
    },

    computed: {
        ...mapState(useModalsStore, ["isSettingsOpen", "isDomainOpen", "isImageOpen"]),
        ...mapState(usePagesStore, ["activePageId"]),
    },

    mounted() {
        window.addEventListener('storage', (event) => {
            this.updateSitesState();
            this.updatePagesState();
            this.updateBlocksState();
            this.updateUserState();
        })
    },
};
</script>

