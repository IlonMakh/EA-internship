<template>
<header class="header-edit">
    <div class="container">
        <div class="header-edit__breadcrumps">
            <svg>
                <use xlink:href="#home"></use>
            </svg>
            <router-link v-for="link in links" :to="link.path" :key="link.text" class="header-edit__breadcrumps">
                {{ link.text }}
            </router-link>
        </div>
        <div class="header-edit__controls">
            <router-link :to="{
                        name: 'page-preview',
                        params: {
                            projectId: this.$route.params.projectId,
                            id: this.$route.params.id,
                        },
                    }" class="header-edit__preview">Предпросмотр</router-link>
            <button class="header-edit__menu" @click.stop="toggleDropdown">
                Ещё &#9660;
            </button>
        </div>
        <div :class="isDropdownOpen ? 'open' : ''" class="header-edit__dropdown" v-click-out-side="closeDropdown">
            <button class="header-edit__dropdown-link" @click="openSettings">
                Настройки сайта
            </button>
            <router-link to="/" class="header-edit__dropdown-link">Мои сайты</router-link>
            <router-link to="/profile" class="header-edit__dropdown-link">Профиль</router-link>
        </div>
        <settings-modal :page="page" v-show="isSettingsOpen" @closeSettings="closeSettings"></settings-modal>
    </div>
</header>
</template>

<script>
import clickOutSide from "@mahdikhashan/vue3-click-outside";
import SettingsModal from "@/components/Modal/SettingsModal.vue";

export default {
    name: "edit-page-header",
    components: {
        SettingsModal,
    },
    data() {
        return {
            isDropdownOpen: false,
            isSettingsOpen: false,
            page: {
                title: "page 0",
                id: this.$route.params.id,
                img: "/images/cat.jpg",
            },

            links: [{
                    path: "/",
                    text: "Мои сайты",
                },
                {
                    path: `/project/${this.$route.params.projectId}`,
                    text: "Проект",
                },
                {
                    path: `/project/${this.$route.params.projectId}/page-edit/${this.$route.params.id}`,
                    text: "Страница",
                },
            ],
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },

        closeDropdown() {
            this.isDropdownOpen = false;
        },

        openSettings() {
            this.isSettingsOpen = true;
        },

        closeSettings() {
            this.isSettingsOpen = false;
        },
    },

    directives: {
        clickOutSide,
    },
};
</script>
