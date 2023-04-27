<template>
<div class="badge">
    <div class="badge-image">
        <img :src="activeBadge" />
    </div>
    <div class="badge-buttons">
        <button class="badge-buttons__item" @click="activeBadge = '/images/cat.jpg'">
            <img src="@/assets/images/cat.jpg" alt="cat1" />
        </button>
        <button class="badge-buttons__item" @click="activeBadge = '/images/cat2.jpeg'">
            <img src="@/assets/images/cat2.jpeg" alt="cat2" />
        </button>
        <button class="badge-buttons__item" @click="activeBadge = '/images/cat3.jpg'">
            <img src="@/assets/images/cat3.jpg" alt="cat3" />
        </button>
        <button class="badge-buttons__item" @click="activeBadge = '/images/cat4.jpg'">
            <img src="@/assets/images/cat4.jpg" alt="cat4" />
        </button>
        <button class="badge-buttons__item" @click="activeBadge = '/images/cat5.jpg'">
            <img src="@/assets/images/cat5.jpg" alt="cat5" />
        </button>
    </div>
    <button class="settings-modal__save" @click="saveBadge">
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
            activeBadge: "/images/cat.jpg",
        };
    },

    methods: {
        ...mapActions(usePagesStore, ['changeBadge']),
        ...mapActions(useModalsStore, ['closeSettings']),

        saveBadge() {
            this.changeBadge(this.activeSiteId, this.activePageId, this.activeBadge);
            this.closeSettings();
        },
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
    },
};
</script>
