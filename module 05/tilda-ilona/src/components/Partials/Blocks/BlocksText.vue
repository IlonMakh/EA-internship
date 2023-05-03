<template>
<section class="block__text">
    <div class="container">
        <p class="block__text-content" :contenteditable="$route.name === 'page-edit'" @input="checkContent($event)">
            {{ text }}
        </p>
    </div>
    <blocks-menu :blockId="blockId"></blocks-menu>
</section>
</template>

<script>
import BlocksMenu from "./BlocksMenu.vue";
import { useBlocksStore } from "@/store/modules/blocks";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { mapActions, mapState } from "pinia";

export default {
    name: "text-block",
    components: {
        BlocksMenu,
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
        ...mapActions(useBlocksStore, ["editBlock"]),

        checkContent($event) {
            this.textContent = $event.target.innerText;
            this.editBlock(this.activeSiteId, this.activePageId, this.blockId, {
                text: this.textContent,
            });
        },
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
    },
};
</script>
