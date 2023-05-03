<template>
<div class="page-preview">
    <div v-if="pageBlocks.length" class="page-edit__blocks">
        <div v-for="(block, index) in pageBlocks" :key="index" class="block-wrapper">
            <component :is="componentMap[block.type]" :blockId="block.blockId" :text="block.text" :image="block.img" :videoId="block.videoId" :videoUrl="block.videoUrl"></component>
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

    data() {
        return {
            isPopupOpen: false,

            componentMap: {
                text: "BlocksText",
                cover: "BlocksCover",
                slider: "BlocksSlider",
                vimeo: "BlocksVimeo",
                youtube: "BlocksYoutube",
                'vimeo-p': "BlocksPopupVimeo",
                'youtube-p': "BlocksPopupYoutube",
                video: "BlocksVideo",
            },
        };
    },

    methods: {
        ...mapActions(useBlocksStore, ["getPageBlocks"]),

    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
        pageBlocks() {
            return this.getPageBlocks(this.activeSiteId, this.activePageId);
        },
    },
};
</script>
