<template>
    <section class="block__popup-vimeo">
        <div class="container">
            <div class="block__popup-vimeo-text">
                Для открытия окна c Vimeo видео <span class="block__popup-vimeo-btn"  @click="openPopup">кликните здесь</span>
            </div>
        </div>
        <blocks-menu :blockId="blockId"></blocks-menu>
        <div v-if="isPopupOpen" class="popup-vimeo" @click.self="closePopup">
            <div class="popup-vimeo__content">
                <vue-vimeo-player class="vimeo-player" :video-id='videoId'></vue-vimeo-player>
            </div>
        </div>
    </section>
</template>

<script>
import BlocksMenu from "./BlocksMenu.vue";
import { vueVimeoPlayer } from 'vue-vimeo-player';

export default {
    name: "vimeo-popup",
    props: {
        blockId: Number,
        videoId: String,
    },
    components: {
        vueVimeoPlayer,
        BlocksMenu,
    },
    data() {
        return {
            isPopupOpen: false,
        };
    },
    methods: {
        openPopup() {
            this.isPopupOpen = true;
        },

        closePopup() {
            this.isPopupOpen = false;
        },
    },
};
</script>