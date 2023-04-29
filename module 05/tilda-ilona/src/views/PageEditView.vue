<template>
<main>
    <section class="page-edit">
        <div class="container">
            <div v-if="pageBlocks.length" class="page-edit__blocks">
                <div v-for="(block, index) in pageBlocks" :key="index" class="block-wrapper">
                    <blocks-text v-if="block.type === 'text'" :blockId="block.blockId" :text="block.text"></blocks-text>
                    <blocks-cover v-else-if="block.type === 'cover'" :image="block.img" :blockId="block.blockId" :text="block.text"></blocks-cover>
                    <blocks-slider v-else-if="block.type === 'slider'" :blockId="block.blockId"></blocks-slider>
                    <blocks-vimeo v-else-if="block.type === 'vimeo'" :blockId="block.blockId" :videoId="block.videoId"></blocks-vimeo>
                    <blocks-youtube v-else-if="block.type === 'youtube'" :blockId="block.blockId" :videoId="block.videoId"></blocks-youtube>
                    <blocks-popup-vimeo v-else-if="block.type === 'vimeo-p'" :blockId="block.blockId" :videoId="block.videoId"></blocks-popup-vimeo>
                    <blocks-popup-youtube v-else-if="block.type === 'youtube-p'" :blockId="block.blockId" :videoId="block.videoId"></blocks-popup-youtube>
                    <blocks-video v-else-if="block.type === 'video'" :blockId="block.blockId" :videoUrl="block.videoUrl"></blocks-video>
                </div>
            </div>
            <button v-show="!pageBlocks.length" class="page-edit__add" @click="openPopup">
                Добавить блок
            </button>
            <button v-show="pageBlocks.length" class="page-edit__add-more" @click="openPopup">
                <svg>
                    <use xlink:href="#plus"></use>
                </svg>
            </button>
        </div>
    </section>
    <page-edit-library :class="isPopupOpen ? 'open' : ''" @closeModal="closePopup"></page-edit-library>
    <page-edit-block-content v-if="isContentOpen" :block="block"></page-edit-block-content>
</main>
</template>

<script>
import PageEditLibrary from "@/components/Sections/PageEditView/PageEditLibrary.vue";
import PageEditBlockContent from "@/components/Sections/PageEditView/PageEditBlockContent.vue";
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
        PageEditLibrary,
        BlocksCover,
        BlocksText,
        PageEditBlockContent,
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
        };
    },

    methods: {
        ...mapActions(useBlocksStore, ["getPageBlocks", "getActiveBlock"]),

        openPopup() {
            this.isPopupOpen = true;
        },

        closePopup() {
            this.isPopupOpen = false;
        },
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
        ...mapState(useBlocksStore, ["isContentOpen", "activeBlockId"]),
        block() {
            return this.getActiveBlock(this.activeSiteId, this.activePageId, this.activeBlockId);
        },
        pageBlocks() {
            return this.getPageBlocks(this.activeSiteId, this.activePageId);
        }
    },
};
</script>
