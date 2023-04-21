<template>
<div class="header-edit__dropdown">
    <button class="header-edit__dropdown-link" @click="openSettings">Настройки сайта</button>
    <router-link to="/" class="header-edit__dropdown-link">Мои сайты</router-link>
    <router-link to="/profile" class="header-edit__dropdown-link">Профиль</router-link>
</div>
</template>

<script>
export default {
    name: "header-edit-dropdown",
    props: {
    },
    data() {},
    methods: {
        openSettings() {
            this.$emit("openSettings");
        },
    },
};
</script>
