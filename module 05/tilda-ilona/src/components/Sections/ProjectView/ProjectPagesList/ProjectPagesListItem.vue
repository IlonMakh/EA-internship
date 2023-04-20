<template>
<div class="project__list-item">
    <div class="project__list-item-info">
        <router-link :to="{
                    name: 'page-edit',
                    params: {
                        projectId: this.$route.params.id,
                        id: this.page.id,
                    },
                }" class="item-info__img">
            <img :src="page.img" />
        </router-link>
        <router-link :to="{
                    name: 'page-edit',
                    params: {
                        projectId: this.$route.params.id,
                        id: this.page.id,
                    },
                }" class="item-info__title">{{ page.title }}</router-link>
    </div>
    <div class="project__list-item-menu">
        <button class="item-menu__settings" @click="openSettings">
            <svg>
                <use xlink:href="#settings"></use>
            </svg>
            <span>Настройки</span>
        </button>
        <button class="item-menu__delete" @click="removeItem">
            <svg>
                <use xlink:href="#delete"></use>
            </svg>
            <span>Удалить</span>
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: "project-pages-list-item",
    props: {
        page: Object,
        index: Number,
    },
    methods: {
        removeItem() {
            this.$emit("remove", this.index);
        },

        openSettings() {
            this.$emit("openSettings", this.index);
        },
    },
};
</script>
