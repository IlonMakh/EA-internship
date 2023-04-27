<template>
<div class="image-modal" @click.self="closeGlobalModal('image')">
    <div class="image-modal__content">
        <div class="image-modal__select">
            <input v-model="searchValue" type="text" class="image-modal__search" placeholder="Поиск изображения" @keypress.enter="searchImages" />
            <div class="image-modal__images">
                <img v-for="image in images" :key="image.id" :src="image.urls.regular" :alt="image.alt_description" @click="selectImg = image.urls.regular" />
            </div>
        </div>
        <div class="image-modal__menu">
            <div class="image-modal__upload">
                <input class="image-modal__upload-input" type="file" name="file" id="input__file" accept="image/*" ref="fileInput" @change="uploadImage" />
                <label class="image-modal__upload-label" for="input__file">Загрузить изображение</label>
            </div>
            <div class="image-modal__active-img">
                <h6 class="image-modal__active-title">
                    Активное изображение:
                </h6>
                <img v-if="isSettingsOpen" :src="selectImg || activePage.badge" />
                <img v-else :src="selectImg || activeBlock.img" />
            </div>
            <div class="image-modal__buttons">
                <button class="image-modal__save" @click.self="setActiveImage(selectImg || activeImage), closeGlobalModal('image')">
                    Выбрать
                </button>
                <button class="image-modal__cancel" @click.self="closeGlobalModal('image')">
                    Отмена
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ProjectSettingsMain from "../Sections/ProjectView/ProjectSettings/ProjectSettingsMain.vue";
import ProjectSettingsBadge from "../Sections/ProjectView/ProjectSettings/ProjectSettingsBadge.vue";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { useBlocksStore } from "@/store/modules/blocks";
import { useModalsStore } from "@/store/modules/modals";
import { mapActions, mapState } from "pinia";

export default {
    name: "settings-modal",
    components: {
        ProjectSettingsMain,
        ProjectSettingsBadge,
    },

    data() {
        return {
            selectImg: "",
            images: [],
            searchValue: "cat",
        };
    },

    methods: {
        ...mapActions(usePagesStore, ["getActivePage", "changeBadge"]),
        ...mapActions(useBlocksStore, ["getActiveBlock", "changeImg"]),
        ...mapActions(useModalsStore, ["closeGlobalModal", "setActiveImage"]),

        searchImages() {
            fetch(
                    `https://api.unsplash.com/search/photos?query=${this.searchValue}&client_id=zZLvByVzrsS0XqGaJaZDUYAJBsk0fe7tHGO5Y-4FnHw&count=10`
                )
                .then((response) => response.json())
                .then((data) => {
                    this.images = data.results;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        uploadImage() {
            const file = this.$refs.fileInput.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.selectImg = reader.result;
            };
        },
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
        ...mapState(useBlocksStore, ["activeBlockId"]),
        ...mapState(useModalsStore, ["activeImage", "isSettingsOpen"]),
        activePage() {
            return this.getActivePage(this.activeSiteId, this.activePageId);
        },
        activeBlock() {
            return this.getActiveBlock(
                this.activeSiteId,
                this.activePageId,
                this.activeBlockId
            );
        },
    },

    mounted() {
        this.searchImages();
    },
};
</script>
