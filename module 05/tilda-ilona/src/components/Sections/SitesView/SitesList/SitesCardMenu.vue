<template>
<div class="sites__item-menu">
    <button class="site-menu__btn">Переименовать</button>
    <button class="site-menu__btn" @click.stop="deleteSite(index)">Удалить</button>
</div>
</template>

<script>
import { useSitesStore } from "@/store/modules/sites";
import { mapActions } from "pinia";

export default {
    name: "sites-card-menu",
    props: {
        index: Number,
    },
    methods: {
        ...mapActions(useSitesStore, ["deleteSite"]),
    },
};
</script>
