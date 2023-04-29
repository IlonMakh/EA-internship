<template>
<section class="block__slider">
    <div class="container">
        <swiper :slides-per-view="$route.name === 'page-edit' ? 4 : 3" :space-between="space" :centered-slide="true">
            <swiper-slide v-for="(image, index) in activeBlock.images" :key="index"><img :src="image" @click="openSlide(image, index)" /></swiper-slide>
        </swiper>
    </div>
    <blocks-menu :blockId="blockId"></blocks-menu>
    <blocks-slider-settings v-if="isModalOpen" :block="activeBlock" :index="activeIndex" @closeModal="closeModal"></blocks-slider-settings>
</section>
</template>

<script>
import BlocksMenu from "./BlocksMenu.vue";
import BlocksSliderSettings from "./BlocksSlider/BlocksSliderSettings.vue";
import { useBlocksStore } from "@/store/modules/blocks";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { useModalsStore } from "@/store/modules/modals";
import { mapActions, mapState } from "pinia";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
    name: "slider-block",
    props: {
        blockId: Number,
    },
    components: {
        Swiper,
        SwiperSlide,
        BlocksMenu,
        BlocksSliderSettings,
    },

    data() {
        return {
            space: 30,
            activeIndex: 0,
            isModalOpen: false,
        };
    },

    methods: {
        ...mapActions(useBlocksStore, ["getActiveBlock"]),
        ...mapActions(useModalsStore, ["setActiveImage"]),

        slideSpace() {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1280) {
                return 30;
            } else if (screenWidth >= 768) {
                return 20;
            } else {
                return 10;
            }
        },

        openSlide(img, index) {
            if (this.$route.name !== "page-preview") {
                this.setActiveImage(img);
                this.activeIndex = index;
                this.openModal();
            }
        },

        openModal() {
            this.isModalOpen = true;
        },

        closeModal() {
            this.isModalOpen = false;
        },
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
        activeBlock() {
            return this.getActiveBlock(
                this.activeSiteId,
                this.activePageId,
                this.blockId
            );
        },
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.space = this.slideSpace();
        });
    },
};
</script>
