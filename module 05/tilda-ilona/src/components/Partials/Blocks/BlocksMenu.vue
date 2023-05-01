<template>
<div class="block__menu">
    <button v-for="btn in buttons" :key="btn.action" class="block__menu-btn" @click="btn.action(activeSiteId, activePageId, blockId)">
        <svg>
            <use :xlink:href="btn.icon"></use>
        </svg>
    </button>
</div>
<button class="block__menu-content" @click="setContent">
    Контент
</button>
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

    data() {
        return {
            buttons: [{
                    action: this.raiseBlock,
                    icon: "#up",
                },
                {
                    action: this.copyBlock,
                    icon: "#copy",
                },
                {
                    action: this.deleteBlock,
                    icon: "#delete2",
                },
                {
                    action: this.lowerBlock,
                    icon: "#down",
                },
            ],
        };
    },

    methods: {
        ...mapActions(useBlocksStore, [
            "deleteBlock",
            "copyBlock",
            "raiseBlock",
            "lowerBlock",
            "setActiveBlock",
            "getActiveBlock",
            "openContent",
        ]),

        ...mapActions(useModalsStore, ["setActiveImage"]),

        setContent() {
            this.setActiveBlock(this.blockId),
                this.setActiveImage(this.activeBlock.img),
                this.openContent()
        }
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
        ...mapState(useBlocksStore, ["activeBlockId"]),
        activeBlock() {
            return this.getActiveBlock(
                this.activeSiteId,
                this.activePageId,
                this.activeBlockId
            );
        },
    },
};
</script>
