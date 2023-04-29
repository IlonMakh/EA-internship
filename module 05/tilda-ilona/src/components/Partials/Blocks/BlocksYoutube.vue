<template>
<section class="block__youtube">
    <div class="container">
        <Youtube class="youtube-player" :src="`https://www.youtube.com/watch?v=${videoId}`" />
    </div>
    <blocks-menu :blockId="blockId"></blocks-menu>
</section>
</template>

<script>
import BlocksMenu from "./BlocksMenu.vue";
import Youtube from 'vue3-youtube';

export default {
    name: "youtube-block",
    props: {
        blockId: Number,
        videoId: String,
    },
    components: {
        Youtube,
        BlocksMenu,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>
