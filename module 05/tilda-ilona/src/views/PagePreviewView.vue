<template>
<div class="page-preview">
    <div v-if="pageBlocks.length" class="page-edit__blocks">
        <div v-for="(block, index) in pageBlocks" :key="index" class="block-wrapper">
            <blocks-text v-if="block.type === 'text'" :text="block.text"></blocks-text>
            <blocks-cover v-else-if="block.type === 'cover'" :image="block.img" :text="block.text"></blocks-cover>
            <blocks-slider v-else-if="block.type === 'slider'" :blockId="block.blockId"></blocks-slider>
            <blocks-vimeo v-else-if="block.type === 'vimeo'" :blockId="block.blockId" :videoId="block.videoId"></blocks-vimeo>
            <blocks-youtube v-else-if="block.type === 'youtube'" :blockId="block.blockId" :videoId="block.videoId"></blocks-youtube>
            <blocks-popup-vimeo v-else-if="block.type === 'vimeo-p'" :blockId="block.blockId" :videoId="block.videoId"></blocks-popup-vimeo>
            <blocks-popup-youtube v-else-if="block.type === 'youtube-p'" :blockId="block.blockId" :videoId="block.videoId"></blocks-popup-youtube>
            <blocks-video v-else-if="block.type === 'video'" :blockId="block.blockId" :videoUrl="block.videoUrl"></blocks-video>
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
import BlocksSlider from "@/components/Partials/Blocks/BlocksSlider.vue";
import BlocksYoutube from "@/components/Partials/Blocks/BlocksYoutube.vue";
import BlocksPopupYoutube from "@/components/Partials/Blocks/BlocksPopupYoutube.vue";
import BlocksPopupVimeo from "@/components/Partials/Blocks/BlocksPopupVimeo.vue";
import BlocksVimeo from "@/components/Partials/Blocks/BlocksVimeo.vue";
import BlocksVideo from "@/components/Partials/Blocks/BlocksVideo.vue";
import { useBlocksStore } from "@/store/modules/blocks";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { mapState, mapActions } from "pinia";

export default {
    name: "page-edit-view",
    components: {
        BlocksCover,
        BlocksText,
        BlocksSlider,
        BlocksYoutube,
        BlocksPopupYoutube,
        BlocksVimeo,
        BlocksPopupVimeo,
        BlocksVideo,
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
