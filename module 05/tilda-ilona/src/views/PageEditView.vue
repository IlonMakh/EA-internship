<template>
<main>
    <section class="page-edit">
        <div class="container">
            <div v-if="blocks.length" class="page-edit__blocks">
                <div v-for="(block, index) in blocks" :key="index" class="block-wrapper">
                    <blocks-text v-if="block.type === 'text'" :blockId="block.blockId" :text="block.text"></blocks-text>
                    <blocks-cover v-else-if="block.type === 'cover'" :image="block.img" :blockId="block.blockId" :text="block.text"></blocks-cover>
                </div>
            </div>
            <button v-show="!blocks.length" class="page-edit__add" @click="openPopup">
                Добавить блок
            </button>
            <button v-show="blocks.length" class="page-edit__add-more" @click="openPopup">
                <svg>
                    <use xlink:href="#plus"></use>
                </svg>
            </button>
        </div>
    </section>
    <page-edit-library :class="isPopupOpen ? 'open' : ''" @closeModal="closePopup" @addBlock="addBlock2"></page-edit-library>
</main>
</template>

<script>
import PageEditLibrary from "@/components/Sections/PageEditView/PageEditLibrary.vue";
import BlocksCover from "@/components/Partials/Blocks/BlocksCover.vue";
import BlocksText from "@/components/Partials/Blocks/BlocksText.vue";
import { useEditViewStore } from "@/store/modules/pageEditView";
import { mapState, mapActions } from "pinia";

export default {
    name: "page-edit-view",
    components: {
        PageEditLibrary,
        BlocksCover,
        BlocksText,
    },
    props: {},

    data() {
        return {
            isPopupOpen: false,
        };
    },

    methods: {
        ...mapActions(useEditViewStore, ["addBlock"]),

        openPopup() {
            this.isPopupOpen = true;
        },

        closePopup() {
            this.isPopupOpen = false;
        },

        addBlock2(type) {
            this.addBlock(type);
        },
    },

    computed: {
        ...mapState(useEditViewStore, ["blocks"]),
    },
};
</script>
