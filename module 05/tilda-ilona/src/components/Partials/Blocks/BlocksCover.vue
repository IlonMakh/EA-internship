<template>
<section class="block__cover">
    <img class="block__cover-img" :src="image" />
    <div class="container">
        <p class="block__cover-content" contenteditable @input="checkContent($event)">
            {{ text }}
        </p>
    </div>
    <blocks-menu :blockId="blockId"></blocks-menu>
</section>
</template>

<script>
import BlocksMenu from './BlocksMenu.vue';

export default {
    name: "cover-block",
    props: {
        text: String,
        image: String,
        blockId: Number,
    },
    components: {
        BlocksMenu
    },

    data() {
        return {
            textContent: "",
        };
    },

    methods: {
        checkContent($event) {
            this.textContent = $event.target.innerText;
        }
    },
};
</script>
