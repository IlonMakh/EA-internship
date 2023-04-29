<template>
    <div class="page-edit__modal-blocks">
        <div class="blocks__item" @click="addBlock(activeSiteId, activePageId, 'youtube')">
            <h6 class="blocks__item-title">Видео с Youtube</h6>
            <p class="blocks__item-description">Блок с видео с Youtube</p>
        </div>
        <div class="blocks__item" @click="addBlock(activeSiteId, activePageId, 'youtube-p')">
            <h6 class="blocks__item-title">Popup с Youtube видео</h6>
            <p class="blocks__item-description">Popup с видео с Youtube</p>
        </div>
        <div class="blocks__item" @click="addBlock(activeSiteId, activePageId, 'vimeo')">
            <h6 class="blocks__item-title">Видео с Vimeo</h6>
            <p class="blocks__item-description">Блок с видео с Vimeo</p>
        </div>
        <div class="blocks__item" @click="addBlock(activeSiteId, activePageId, 'vimeo-p')">
            <h6 class="blocks__item-title">Popup с Vimeo видео</h6>
            <p class="blocks__item-description">Popup с видео с Vimeo</p>
        </div>
    </div>
    </template>
    
    <script>
    import { useBlocksStore } from "@/store/modules/blocks";
    import { useSitesStore } from "@/store/modules/sites";
    import { usePagesStore } from "@/store/modules/pages";
    import { mapState, mapActions } from "pinia";
    
    export default {
        name: "edit-video-tab",
    
        data() {
            return {};
        },
    
        methods: {
            ...mapActions(useBlocksStore, ["addBlock"]),
        },
    
        computed: {
            ...mapState(useSitesStore, ["activeSiteId"]),
            ...mapState(usePagesStore, ["activePageId"]),
        },
    };
    </script>
    