<template>
    <div class="slide-edit__modal" @click.self="closeModal">
        <div class="slide-edit__modal-content">
            <div class="wrapper">
                <div class="slide-edit__modal-order">
                    <label class="slide-edit__modal-label" for="order">Очередность в слайдере (от 1 до 4)</label>
                    <input v-model="orderValue" class="slide-edit__modal-input" id="order" name="order" type="number" min="1" max="4"/>
                </div>
                <div class="slide-edit__modal-img">
                    <div class="slide-image">
                        <p class="slide-edit__modal-label">Изображение на слайде</p>
                        <div class="slide-edit__modal-change">
                            <img :src="activeImage" />
                            <button class="slide-edit__modal-change-btn" @click="openGlobalModal('image')">
                                Изменить изображение
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block-edit__modal-buttons">
                <button class="block-edit__modal-save" @click="saveSlide">
                    Сохранить
                </button>
                <button class="block-edit__modal-cancel" @click="closeModal">
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
    import { useModalsStore } from "@/store/modules/modals";
    import { mapActions, mapState } from "pinia";
    
    export default {
        name: "block-content",
        props: {
            block: Object,
            index: Number,
        },
    
        data() {
            return {
                orderValue: this.index + 1,
            };
        },
    
        methods: {
            ...mapActions(useBlocksStore, [
                "getActiveBlock",
                "closeContent",
                "editBlock",
            ]),
    
            ...mapActions(useModalsStore, ["openGlobalModal"]),
    
            saveSlide() {
                this.editBlock(this.activeSiteId, this.activePageId, this.block.blockId, {
                        index: this.index,
                        changeIndex: this.orderValue - 1,
                        img: this.activeImage,
                }),
                this.closeModal();
            },

            closeModal() {
                this.$emit('closeModal');
            }
        },
    
        computed: {
            ...mapState(useSitesStore, ["activeSiteId"]),
            ...mapState(usePagesStore, ["activePageId"]),
            ...mapState(useModalsStore, ["activeImage"]),
        },
    };
    </script>