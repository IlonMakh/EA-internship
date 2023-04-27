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
import { useBlocksStore } from "@/store/modules/blocks";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { mapActions, mapState } from "pinia";

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
        ...mapActions(useBlocksStore, ["editBlock"]),

        checkContent($event) {
            this.textContent = $event.target.innerText;
            this.editBlock(this.activeSiteId, this.activePageId, this.blockId, {
                text: this.textContent,
                img: this.image,
            });
        }
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
    },
};
</script>
