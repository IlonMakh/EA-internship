<template>
<div class="page-edit__modal" @click.self="closeModal">
    <div class="page-edit__modal-content">
        <div class="page-edit__modal-menu">
            <div class="page-edit__modal-panel">
                <input v-model="searchValue" class="page-edit__modal-input" type="text" placeholder="Библиотека блоков" @keyup="debounceSearch" @keydown.enter="search" />
                <button class="page-edit__modal-search" @click="search">
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
            <button v-for="tab in displayedTabs" :key="tab.name" :class="activeTab === tab.name ? 'active' : ''" class="page-edit__modal-tab" @click="activeTab = tab.name">
                {{ tab.title }}
            </button>
            <p class="page-edit__modal-message" v-if="!displayedTabs.length">
                Нет результатов
            </p>
        </div>
        <component :is="activeTab"></component>
    </div>
</div>
</template>

<script>
import PageEditLibraryText from "./PageEditLibrary/PageEditLibraryText.vue";
import PageEditLibraryCover from "./PageEditLibrary/PageEditLibraryCover.vue";
import PageEditLibrarySlider from "./PageEditLibrary/PageEditLibrarySlider.vue";
import PageEditLibraryVideo from "./PageEditLibrary/PageEditLibraryVideo.vue";

export default {
    name: "edit-modal",
    components: {
        PageEditLibraryText,
        PageEditLibraryCover,
        PageEditLibrarySlider,
        PageEditLibraryVideo,
    },
    props: {},

    data() {
        return {
            searchValue: "",
            activeTab: "PageEditLibraryText",

            tabs: [{
                    name: "PageEditLibraryText",
                    title: "Текстовые блоки",
                    blocks: ["Блок с текстом"],
                },
                {
                    name: "PageEditLibraryCover",
                    title: "Обложки",
                    blocks: ["Блок с текстом и фоновой картинкой"],
                },
                {
                    name: "PageEditLibrarySlider",
                    title: "Слайдеры",
                    blocks: ["Блок со слайдером"],
                },
                {
                    name: "PageEditLibraryVideo",
                    title: "Видео",
                    blocks: [
                        "Видео с Youtube",
                        "Popup с Youtube видео",
                        "Видео с Vimeo",
                        "Popup с Vimeo видео",
                        "Блок с видео",
                    ],
                },
            ],

            filteredTabs: [],
        };
    },

    methods: {
        closeModal() {
            this.$emit("closeModal");
        },

        debounceSearch() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            this.debounceTimeout = setTimeout(this.search, 500);
        },

        search() {
            const value = this.searchValue.trim().toLowerCase();

            this.filteredTabs = this.tabs.filter((tab) => {
                if (tab.title.toLowerCase().includes(value)) {
                    return true;
                }

                return tab.blocks.some((block) =>
                    block.toLowerCase().includes(value)
                );
            });

            this.activeTab = this.filteredTabs[0]?.name;
        },
    },

    computed: {
        displayedTabs() {
            return this.filteredTabs.length ?
                this.filteredTabs :
                this.searchValue ?
                [] :
                this.tabs;
        },
    },
};
</script>
