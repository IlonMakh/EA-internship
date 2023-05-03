<template>
    <section class="block__video">
        <div class="container">
            <div v-if="!videoUrl && $route.name !== 'page-preview'"  class="block__video-upload">
                <label class="block__video-upload-btn" for="video">Загрузить видео</label>
                <input class="block__video-upload-input" type="file" id="video" accept="video/*" @change="uploadVideo"/>
            </div>
            <video class="block__video-player" v-else :src="videoUrl" controls></video>
        </div>
        <blocks-menu :blockId="blockId"></blocks-menu>
    </section>
</template>

<script>
import * as filestack from "filestack-js";
import BlocksMenu from "./BlocksMenu.vue";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { useBlocksStore } from "@/store/modules/blocks";
import { mapActions, mapState } from "pinia";

export default {
    name: "video-block",
    components: {
        BlocksMenu,
    },
    props: {
        blockId: Number,
        videoUrl: String,
    },
    data() {
        return {
            apiKey: "AGbSKHPyQeCvCdadnnIEkz",
        };
    },
    methods: {
        ...mapActions(useBlocksStore, ["editBlock"]),

        async uploadVideo(event) {
            const file = event.target.files[0];
            const client = filestack.init(this.apiKey);
            const response = await client.upload(file);
            const videoUrl = response.url;

            this.editBlock(this.activeSiteId, this.activePageId, this.blockId, { videoUrl })
        },
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
    },
};
</script>