<template>
<div class="page-preview">
    <div v-if="pageBlocks.length" class="page-edit__blocks">
        <div v-for="(block, index) in pageBlocks" :key="index" class="block-wrapper">
            <blocks-text v-if="block.type === 'text'" :text="block.text"></blocks-text>
            <blocks-cover v-else-if="block.type === 'cover'" :image="block.img" :text="block.text"></blocks-cover>
        </div>
    </div>
    <button class="page-preview__back" @click="$router.go(-1)">
        Вернуться к редактированию
    </button>
</div>
</template>

<script>
import BlocksCover from "@/components/Partials/Blocks/BlocksCover.vue";
import BlocksText from "@/components/Partials/Blocks/BlocksText.vue";
import { useBlocksStore } from "@/store/modules/blocks";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { mapState, mapActions } from "pinia";

export default {
    name: "page-edit-view",
    components: {
        BlocksCover,
        BlocksText,
    },
    methods: {
        ...mapActions(useBlocksStore, ["getPageBlocks"]),
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
        pageBlocks() {
            return this.getPageBlocks(this.activeSiteId, this.activePageId);
        }
    },
};
</script>
