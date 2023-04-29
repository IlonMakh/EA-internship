<template>
<div class="block-edit__modal" @click.self="cancelSave">
    <div class="block-edit__modal-content">
        <div class="wrapper">
            <div v-if="block.type === 'youtube' || block.type === 'vimeo' || block.type === 'youtube-p' || block.type === 'vimeo-p'" class="block-edit__modal-video">
                <label class="block-edit__modal-label" for="video">Id видео</label>
                <input v-model="videoValue" class="block-edit__modal-input" id="video" name="video" />
            </div>
            <div v-if="block.type === 'video'" class="block-edit__modal-upload">
                <label class="block-edit__modal-label" for="upload">Изменить видео</label>
                <input class="block-edit__modal-input" type="file"  id="upload" name="upload" accept="video/*" @change="uploadVideo"/>
                <p v-if="activeVideo" class="block-edit__modal-upload-message">Видео успешно загружено!</p>
            </div>
            <div v-if="block.type === 'text' || block.type === 'cover'" class="block-edit__modal-text">
                <label class="block-edit__modal-label" for="text">Текст</label>
                <textarea v-model="textValue" class="block-edit__modal-textarea" id="text" name="text"></textarea>
            </div>
            <div v-if="block.type === 'cover'" class="block-edit__modal-cover">
                <div class="block-image">
                    <p class="block-edit__modal-label">Фоновая картинка</p>
                    <div class="block-edit__modal-change">
                        <img :src="activeImage" />
                        <button class="block-edit__modal-change-btn" @click="openGlobalModal('image')">
                            Изменить изображение
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-edit__modal-buttons">
            <button class="block-edit__modal-save" @click="saveContent">
                Сохранить
            </button>
            <button class="block-edit__modal-cancel" @click="cancelSave">
                Отмена
            </button>
        </div>
    </div>
</div>
</template>

<script>
import * as filestack from "filestack-js";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { useBlocksStore } from "@/store/modules/blocks";
import { useModalsStore } from "@/store/modules/modals";
import { mapActions, mapState } from "pinia";

export default {
    name: "block-content",
    props: {
        block: Object,
    },

    data() {
        return {
            textValue: this.block.text,
            videoValue: this.block.videoId,
            apiKey: "AGbSKHPyQeCvCdadnnIEkz",
        };
    },

    methods: {
        ...mapActions(useBlocksStore, [
            "getActiveBlock",
            "closeContent",
            "editBlock",
            "setActiveVideo",
        ]),

        ...mapActions(useModalsStore, ["openGlobalModal"]),

        saveContent() {
            this.editBlock(this.activeSiteId, this.activePageId, this.block.blockId, {
                    text: this.textValue,
                    img: this.activeImage,
                    videoId: this.videoValue,
                    videoUrl: this.activeVideo,
            }),
            this.closeContent();
            this.setActiveVideo(null);
        },

        async uploadVideo(event) {
            const file = event.target.files[0];
            const client = filestack.init(this.apiKey);
            const response = await client.upload(file);
            const videoUrl = response.url;

            this.setActiveVideo(videoUrl);
        },

        cancelSave() {
            this.closeContent();
            this.setActiveVideo(null);
        }
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
        ...mapState(useModalsStore, ["activeImage"]),
        ...mapState(useBlocksStore, ["activeVideo"]),
    },
};
</script>
