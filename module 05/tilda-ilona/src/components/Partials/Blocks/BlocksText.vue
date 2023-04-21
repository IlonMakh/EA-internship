<template>
<section class="block__text">
    <div class="container">
        <p class="block__text-content" contenteditable @input="checkContent($event)">
            {{ text }}
        </p>
    </div>
    <blocks-menu :blockId="blockId"></blocks-menu>
</section>
</template>

<script>
import BlocksMenu from './BlocksMenu.vue';

export default {
    name: "text-block",
    components: {
        BlocksMenu
    },
    props: {
        text: String,
        blockId: Number,
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
