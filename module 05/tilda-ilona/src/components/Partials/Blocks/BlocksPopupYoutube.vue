<template>
    <section class="block__popup-youtube">
        <div class="container">
            <div class="block__popup-youtube-text">
                Для открытия окна c Youtube видео <span class="block__popup-youtube-btn"  @click="openPopup">кликните здесь</span>
            </div>
        </div>
        <blocks-menu :blockId="blockId"></blocks-menu>
        <div v-if="isPopupOpen" class="popup-youtube" @click.self="closePopup">
            <div class="popup-youtube__content">
                <Youtube
            class="youtube-player"
            :src="`https://www.youtube.com/watch?v=${videoId}`"
        />
            </div>
        </div>
    </section>
</template>

<script>
import BlocksMenu from "./BlocksMenu.vue";
import Youtube from 'vue3-youtube';

export default {
    name: "youtube-popup",
    props: {
        blockId: Number,
        videoId: String,
    },
    components: {
        Youtube,
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