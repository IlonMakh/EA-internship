<template>
<div class="sites__item" @click="goToProject">
    <div class="sites__item-content">
        <h5 class="sites__item-title">{{ site.title }}</h5>
        <button class="sites__item-menu-btn" @click.stop="openPopup">
            <svg>
                <use xlink:href="#dots" />
            </svg>
        </button>
        <sites-card-menu :class="isPopupOpen ? 'open' : ''" :index="index" :key="index" v-click-out-side="closePopup" @remove="removeItem"></sites-card-menu>
    </div>
    <div class="sites__item-footer">
        <router-link :to="{ name: 'project', params: { id: site.id } }" class="sites__item-edit-btn">Редактировать сайт</router-link>
        <button class="sites__item-open-btn" @click.stop>
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
    components: {
        SitesCardMenu
    },
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
