<template>
<div class="badge">
    <div class="badge-button">
        <img :src="activeImage">
        <button class="badge-button__item" @click="openGlobalModal('image')">
            Изменить бейдж
        </button>
    </div>
    <button class="settings-modal__save" @click.prevent="saveBadge">
        Сохранить изменения
    </button>
</div>
</template>

<script>
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { useModalsStore } from "@/store/modules/modals";
import { mapActions, mapState } from "pinia";

export default {
    name: "settings-badge-tab",

    data() {
        return {
        };
    },

    methods: {
        ...mapActions(usePagesStore, ['changeBadge']),
        ...mapActions(useModalsStore, ['closeGlobalModal', "openGlobalModal"]),

        saveBadge() {
            this.changeBadge(this.activeSiteId, this.activePageId, this.activeImage);
            this.closeGlobalModal("settings");
        }
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
        ...mapState(useModalsStore, ["activeImage"]),
    },
};
</script>
