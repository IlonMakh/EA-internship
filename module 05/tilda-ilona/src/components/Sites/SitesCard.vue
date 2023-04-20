<template>
    <div @click="goToProject" class="sites__item">
        <div class="sites__item-content">
            <h5 class="sites__item-title">{{ site.title }}</h5>
            <button class="sites__item-menu-btn" @click.stop="openPopup">
                <svg>
                    <use xlink:href="#dots"></use>
                </svg>
            </button>
            <sites-card-menu
                v-click-out-side="closePopup"
                :class="isPopupOpen ? 'open' : ''"
                :index="index"
                @remove="removeItem"
                :key="index"
            ></sites-card-menu>
        </div>
        <div class="sites__item-footer">
            <button @click="goToProject" class="sites__item-edit-btn">
                Редактировать сайт
            </button>
            <button @click.stop class="sites__item-open-btn">
                Открыть сайт
            </button>
        </div>
    </div>
</template>

<script>
import SitesCardMenu from "./SitesCardMenu.vue";
import clickOutSide from "@mahdikhashan/vue3-click-outside";

export default {
    name: "sites-item",
    components: { SitesCardMenu },
    props: {
        site: Object,
        index: Number,
    },

    data() {
        return {
            isPopupOpen: false,
        };
    },

    methods: {
        openPopup() {
            this.isPopupOpen = true;
        },

        closePopup() {
            this.isPopupOpen = false;
        },

        removeItem(index) {
            this.$emit("remove", index);
        },

        goToProject() {
            this.$router.push({
                name: "project",
                params: {
                    id: this.site.id,
                },
            });
        },
    },

    directives: {
        clickOutSide,
    },
};
</script>