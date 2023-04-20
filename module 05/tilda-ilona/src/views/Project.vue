<template>
    <main>
        <section class="project">
            <div class="container">
                <div class="project__header">
                    <div class="project__header-top">
                        <button class="project__domain-btn" @click="openDomain">
                            <svg><use xlink:href="#domain"></use></svg>
                            <span>Подключить домен</span>
                        </button>
                        <button class="project__preview-btn">
                            <svg><use xlink:href="#link"></use></svg>
                            <span>Адрес сайта</span>
                        </button>
                    </div>
                    <div class="project__header-bottom">
                        <h3 class="project__title">Project Test</h3>
                        <button class="project__add-btn" @click="createPage">
                            <svg><use xlink:href="#plus2"></use></svg>
                            <span>Создать новую страницу</span>
                        </button>
                    </div>
                </div>
                <h5 class="project__pages-title">Страницы сайта:</h5>
                <project-pages-list
                    :pages="pages"
                    @remove="deletePage"
                    @openSettings="openSettings"
                ></project-pages-list>
            </div>
            <domain-modal
                v-if="isDomainOpen"
                @closeDomain="closeDomain"
            ></domain-modal>
            <settings-modal
                v-if="isSettingsOpen"
                @closeSettings="closeSettings"
                @saveTitle="saveTitle"
                @saveBadge="saveBadge"
            ></settings-modal>
        </section>
    </main>
</template>

<script>
import ProjectPagesList from "@/components/Project/ProjectPagesList.vue";
import DomainModal from "@/components/Modal/DomainModal.vue";
import SettingsModal from "@/components/Modal/SettingsModal.vue";

export default {
    name: "project-page",
    components: { ProjectPagesList, DomainModal, SettingsModal },
    props: {
        site: Object,
    },

    data() {
        return {
            isDomainOpen: false,
            isSettingsOpen: false,
            activeIndex: 0,
            pages: [
                {
                    title: "page 0",
                    id: 0,
                    img: "../images/cat.jpg",
                },
                {
                    title: "page 1",
                    id: 1,
                    img: "../images/cat.jpg",
                },
            ],
        };
    },

    methods: {
        openDomain() {
            this.isDomainOpen = true;
        },

        closeDomain() {
            this.isDomainOpen = false;
        },

        openSettings(index) {
            this.isSettingsOpen = true;
            this.activeIndex = index;
        },

        closeSettings() {
            this.isSettingsOpen = false;
        },

        createPage() {
            const length = this.pages.length;
            this.pages.push({
                id: length ? this.pages[length - 1].id + 1 : 0,
                title: `page ${length ? length : 0}`,
                img: "../images/cat.jpg",
            });
        },

        deletePage(index) {
            this.pages.splice(index, 1);
        },

        saveBadge(img) {
            this.pages[this.activeIndex].img = img;
        },

        saveTitle(title) {
            this.pages[this.activeIndex].title = title;
        },
    },
};
</script>