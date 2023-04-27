<template>
<div class="page-edit__modal-blocks">
    <div class="blocks__item" @click="addBlock(activeSiteId, activePageId, 'text')">
        <h6 class="blocks__item-title">Блок с текстом</h6>
        <p class="blocks__item-description">Выравнивание текста посередине</p>
    </div>
</div>
</template>

<script>
import { useBlocksStore } from "@/store/modules/blocks";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { mapState, mapActions } from "pinia";

export default {
    name: "edit-text-tab",

    data() {
        return {};
    },

    methods: {
        ...mapActions(useBlocksStore, ["addBlock"]),
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
    },
};
</script>
