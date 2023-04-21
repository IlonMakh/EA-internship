<template>
<div class="page-preview">
    <div v-if="blocks.length" class="page-edit__blocks">
        <div v-for="(block, index) in blocks" :key="index" class="block-wrapper">
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
import { useEditViewStore } from "@/store/modules/pageEditView";
import { mapState } from "pinia";

export default {
    name: "page-edit-view",
    components: {
        BlocksCover,
        BlocksText,
    },

    computed: {
        ...mapState(useEditViewStore, ["blocks"]),
    },
};
</script>
