<template>
    <main>
        <section class="sites">
            <div class="container">
                <div class="sites__header">
                    <h3 class="sites__title">Мои сайты:</h3>
                    <button class="sites__add-btn" @click="createSite">
                        <svg><use xlink:href="#plus"></use></svg>
                        <span>Создать новый сайт</span>
                    </button>
                </div>
                <sites-list
                    v-if="sites.length"
                    :sites="sites"
                    @remove="deleteSite"
                ></sites-list>
                <div v-else class="sites__message">
                    У вас еще нет сайтов. Создайте новый!
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import SitesList from "@/components/Sites/SitesList.vue";

export default {
    name: "sites-page",
    components: { SitesList },
    data() {
        return {
            sites: [
                {
                    id: 0,
                    title: "My project 0",
                },
                {
                    id: 1,
                    title: "My project 1",
                },
                {
                    id: 2,
                    title: "My project 2",
                },
                {
                    id: 3,
                    title: "My project 3",
                },
            ],
        };
    },
    methods: {
        createSite() {
            const length = this.sites.length;
            this.sites.push({
                id: length ? this.sites[length - 1].id + 1 : 0,
                title: `My project ${length ? length : 0}`,
            });
        },

        deleteSite(index) {
            this.sites.splice(index, 1);
        },
    },
};
</script>