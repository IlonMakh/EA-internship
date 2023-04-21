<template>
    <div class="block__menu">
        <button class="block__menu-btn" @click="raiseBlock(blockId)">
            <svg>
                <use xlink:href="#up"></use>
            </svg>
        </button>
        <button class="block__menu-btn" @click="copyBlock(blockId)">
            <svg>
                <use xlink:href="#copy"></use>
            </svg>
        </button>
        <button class="block__menu-btn" @click="deleteBlock(blockId)">
            <svg>
                <use xlink:href="#delete2"></use>
            </svg>
        </button>
        <button class="block__menu-btn" @click="lowerBlock(blockId)">
            <svg>
                <use xlink:href="#down"></use>
            </svg>
        </button>
    </div>
</template>

<script>
import { useEditViewStore } from "@/store/modules/pageEditView";
import { mapActions } from "pinia";

export default {
    name: "block-menu",
    props: {
        blockId: Number,
    },

    methods: {
        ...mapActions(useEditViewStore, [
            "deleteBlock",
            "copyBlock",
            "raiseBlock",
            "lowerBlock",
        ]),
    },
};
</script>
