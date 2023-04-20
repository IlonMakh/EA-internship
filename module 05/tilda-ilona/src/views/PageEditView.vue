<template>
<main>
    <section class="page-edit">
        <div class="container">
            <div v-if="blocks.length" class="page-edit__blocks">
                <div v-for="(block, index) in blocks" :key="index" class="block-wrapper">
                    <page-edit-blocks-text v-if="(block.type === 'text')" :text="block.text"></page-edit-blocks-text>
                    <page-edit-blocks-cover v-else-if="(block.type === 'cover')" :image="block.img" :text="block.text"></page-edit-blocks-cover>
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
    <page-edit-modal :class="isPopupOpen ? 'open' : ''" @closeModal="closePopup" @addBlock="addBlock"></page-edit-modal>
</main>
</template>

<script>
import PageEditModal from "@/components/Sections/PageEditView/PageEditModal.vue";
import PageEditBlocksCover from "@/components/Sections/PageEditView/PageEditBlocks/PageEditBlocksCover.vue";
import PageEditBlocksText from "@/components/Sections/PageEditView/PageEditBlocks/PageEditBlocksText.vue";

export default {
    name: "page-edit-view",
    components: {
        PageEditModal,
        PageEditBlocksCover,
        PageEditBlocksText
    },
    props: {},

    data() {
        return {
            isPopupOpen: false,
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            hic natus rerum sint expedita repellendus molestiae quisquam animi
            porro neque facilis sequi voluptate rem eligendi delectus esse
            explicabo, quod fuga! Если сзади смешной кот, то это просто я, когда увидела очередную порцию заданий на день.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati hic natus rerum sint expedita
            repellendus molestiae quisquam animi porro neque facilis sequi
            voluptate rem eligendi delectus esse explicabo, quod fuga!`,
            img: "@/assets/images/cat3.jpg",

            blocks: [],
        };
    },

    methods: {
        openPopup() {
            this.isPopupOpen = true;
        },

        closePopup() {
            this.isPopupOpen = false;
        },

        addBlock(type) {
            if (type === "text") {
                this.blocks.push({
                    text: this.text,
                    type
                });
            } else if (type === "cover") {
                this.blocks.push({
                    text: this.text,
                    img: this.img,
                    type
                });
            }
        },
    },
};
</script>
