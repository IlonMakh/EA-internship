<template>
    <section class="block__vimeo">
        <div class="container">
            <vue-vimeo-player class="vimeo-player" :video-id='videoId'></vue-vimeo-player>
        </div>
        <blocks-menu :blockId="blockId"></blocks-menu>
    </section>
</template>

<script>
import BlocksMenu from "./BlocksMenu.vue";
import { vueVimeoPlayer } from 'vue-vimeo-player';

export default {
    name: "vimeo-block",
    components: {
        vueVimeoPlayer,
        BlocksMenu,
    },
    props: {
        blockId: Number,
        videoId: String,
    },
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>