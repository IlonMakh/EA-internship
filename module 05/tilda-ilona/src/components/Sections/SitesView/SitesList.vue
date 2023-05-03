<template>
    <div class="sites__list">
        <sites-card
            v-for="(site, index) in sites"
            :site="site"
            :index="index"
            :key="site.title"
        ></sites-card>
    </div>
</template>

<script>
import SitesCard from "./SitesList/SitesCard.vue";
import { useSitesStore } from "@/store/modules/sites";
import { mapState } from "pinia";

export default {
    name: "sites-list",
    components: {
        SitesCard,
    },

    computed: {
        ...mapState(useSitesStore, ["sites"]),
    },
};
</script>
