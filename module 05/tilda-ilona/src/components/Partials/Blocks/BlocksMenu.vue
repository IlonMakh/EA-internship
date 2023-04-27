<template>
<div class="block__menu">
    <button class="block__menu-btn" @click="raiseBlock(activeSiteId, activePageId, blockId)">
        <svg>
            <use xlink:href="#up"></use>
        </svg>
    </button>
    <button class="block__menu-btn" @click="copyBlock(activeSiteId, activePageId, blockId)">
        <svg>
            <use xlink:href="#copy"></use>
        </svg>
    </button>
    <button class="block__menu-btn" @click="deleteBlock(activeSiteId, activePageId, blockId)">
        <svg>
            <use xlink:href="#delete2"></use>
        </svg>
    </button>
    <button class="block__menu-btn" @click="lowerBlock(activeSiteId, activePageId, blockId)">
        <svg>
            <use xlink:href="#down"></use>
        </svg>
    </button>
</div>
<button class="block__menu-content" @click="setActiveBlock(blockId), setActiveImage(activeBlock.img), openContent($event)">Контент</button>
</template>

<script>
import { useBlocksStore } from "@/store/modules/blocks";
import { useModalsStore } from "@/store/modules/modals";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { mapActions, mapState } from "pinia";

export default {
    name: "block-menu",
    props: {
        blockId: Number,
    },

    methods: {
        ...mapActions(useBlocksStore, [
            "deleteBlock",
            "copyBlock",
            "raiseBlock",
            "lowerBlock",
            "setActiveBlock",
            "getActiveBlock",
            "openContent"
        ]),

        ...mapActions(useModalsStore, ['setActiveImage']),
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
        ...mapState(useBlocksStore, ["activeBlockId"]),
        activeBlock() {
            return this.getActiveBlock(this.activeSiteId, this.activePageId, this.activeBlockId);
        }
    },
};
</script>
