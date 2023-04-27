<template>
<main>
    <section class="sites">
        <div class="container">
            <div class="sites__header">
                <h3 class="sites__title">Мои сайты:</h3>
                <button class="sites__add-btn" @click="createSite">
                    <svg>
                        <use xlink:href="#plus"></use>
                    </svg>
                    <span>Создать новый сайт</span>
                </button>
            </div>
            <sites-list v-if="sites.length"></sites-list>
            <div v-else class="sites__message">
                У вас еще нет сайтов. Создайте новый!
            </div>
        </div>
    </section>
</main>
</template>

<script>
import SitesList from "@/components/Sections/SitesView/SitesList.vue";
import { useSitesStore } from "@/store/modules/sites";
import { mapState, mapActions } from "pinia";


export default {
    name: "sites-page",
    components: {
        SitesList
    },
    data() {
        return {
        };
    },
    methods: {
        ...mapActions(useSitesStore, ["createSite"]),
    },

    computed: {
        ...mapState(useSitesStore, ["sites"]),
    },
};
</script>
