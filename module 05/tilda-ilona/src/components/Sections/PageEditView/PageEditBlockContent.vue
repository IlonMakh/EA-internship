<template>
<div class="block-edit__modal" @click.self="closeContent">
    <div class="block-edit__modal-content">
        <div class="wrapper">
            <div class="block-edit__modal-text">
                <label class="block-edit__modal-label" for="text">Текст</label>
                <textarea v-model="textValue" class="block-edit__modal-textarea" id="text" name="text"></textarea>
            </div>
            <div v-if="block.type === 'cover'" class="block-edit__modal-cover">
                <div class="block-image">
                    <p class="block-edit__modal-label">Фоновая картинка</p>
                    <img :src="activeImg" />
                </div>
                <div class="img-buttons">
                    <button class="img-buttons__item" @click="activeImg = '/images/cat.jpg'">
                        <img src="@/assets/images/cat.jpg" alt="cat1" />
                    </button>
                    <button class="img-buttons__item" @click="activeImg = '/images/cat2.jpeg'">
                        <img src="@/assets/images/cat2.jpeg" alt="cat2" />
                    </button>
                    <button class="img-buttons__item" @click="activeImg = '/images/cat3.jpg'">
                        <img src="@/assets/images/cat3.jpg" alt="cat3" />
                    </button>
                    <button class="img-buttons__item" @click="activeImg = '/images/cat4.jpg'">
                        <img src="@/assets/images/cat4.jpg" alt="cat4" />
                    </button>
                    <button class="img-buttons__item" @click="activeImg = '/images/cat5.jpg'">
                        <img src="@/assets/images/cat5.jpg" alt="cat5" />
                    </button>
                </div>
            </div>
        </div>
        <div class="block-edit__modal-buttons">
            <button class="block-edit__modal-save" @click="
                    editBlock(activeSiteId, activePageId, block.blockId, {
                        text: textValue,
                        img: activeImg,
                    }),
                        closeContent($event)
                ">
            Сохранить
        </button>
        <button class="block-edit__modal-cancel" @click="closeContent">
            Отмена
        </button>
        </div>
    </div>
</div>
</template>

<script>
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { useBlocksStore } from "@/store/modules/blocks";
import { mapActions, mapState } from "pinia";

export default {
    name: "block-content",
    props: {
        block: Object,
    },

    data() {
        return {
            textValue: this.block.text,
            activeImg: this.block.img || "",
        };
    },

    methods: {
        ...mapActions(useBlocksStore, [
            "getActiveBlock",
            "closeContent",
            "editBlock",
        ]),
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
    },
};
</script>
