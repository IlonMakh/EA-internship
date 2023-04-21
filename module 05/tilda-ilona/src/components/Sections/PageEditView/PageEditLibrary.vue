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
            <button v-for="tab in tabs" :key="tab.name" :class="activeTab === tab.name ? 'active' : ''" class="page-edit__modal-tab" @click="activeTab = tab.name">
                {{ tab.title }}
            </button>
        </div>
        <component :is="activeTab" @addBlock="addBlock"></component>
    </div>
</div>
</template>

<script>
import PageEditLibraryText from "./PageEditLibrary/PageEditLibraryText.vue";
import PageEditLibraryCover from "./PageEditLibrary/PageEditLibraryCover.vue";

export default {
    name: "edit-modal",
    components: {
        PageEditLibraryText,
        PageEditLibraryCover
    },
    props: {},

    data() {
        return {
            activeTab: "PageEditLibraryText",

            tabs: [{
                    name: "PageEditLibraryText",
                    title: "Текстовые блоки",
                },
                {
                    name: "PageEditLibraryCover",
                    title: "Обложки",
                },
            ],
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
