<template>
    <div class="sites__item-menu">
        <button class="site-menu__btn">Переименовать</button>
        <button class="site-menu__btn" @click="removeItem">Удалить</button>
    </div>
</template>

<script>
export default {
    name: "sites-card-menu",
    props: {
        index: Number,
    },
    data() {},
    methods: {
        removeItem() {
            this.$emit("remove", this.index);
        },
    },
};
</script>