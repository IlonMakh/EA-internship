<template>
<div class="page-edit__modal" @click.self="closeModal">
    <div class="page-edit__modal-content">
        <div class="page-edit__modal-menu">
            <div class="page-edit__modal-panel">
                <input class="page-edit__modal-input" type="text" placeholder="Библиотека блоков" />
                <button class="page-edit__modal-search">
                    <svg>
                        <use xlink:href="#search"></use>
                    </svg>
                </button>
                <button class="page-edit__modal-close" @click="closeModal">
                    <svg>
                        <use xlink:href="#close2"></use>
                    </svg>
                </button>
            </div>
            <button :class="activeTab === 'PageEditModalText' ? 'active' : ''" class="page-edit__modal-tab" @click="activeTab = 'PageEditModalText'">
                Текстовые блоки
            </button>
            <button :class="activeTab === 'PageEditModalCover' ? 'active' : ''" class="page-edit__modal-tab" @click="activeTab = 'PageEditModalCover'">
                Обложки
            </button>
        </div>
        <component :is="activeTab" @addBlock="addBlock"></component>
    </div>
</div>
</template>

<script>
import PageEditModalText from "./PageEditModal/PageEditModalText.vue";
import PageEditModalCover from "./PageEditModal/PageEditModalCover.vue";

export default {
    name: "edit-modal",
    components: {
        PageEditModalText,
        PageEditModalCover
    },
    props: {},

    data() {
        return {
            activeTab: "PageEditModalText",
        };
    },

    methods: {
        closeModal() {
            this.$emit("closeModal");
        },

        addBlock(type) {
            this.$emit("addBlock", type);
        }
    },
};
</script>
