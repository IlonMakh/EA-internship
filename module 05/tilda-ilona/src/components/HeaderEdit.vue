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
    </div>
</header>
</template>

<script>
import clickOutSide from "@mahdikhashan/vue3-click-outside";
import { useModalsStore } from "@/store/modules/modals";
import { mapActions} from "pinia";

export default {
    name: "edit-page-header",
    data() {
        return {
            isDropdownOpen: false,
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
        ...mapActions(useModalsStore, ['openSettings']),

        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },

        closeDropdown() {
            this.isDropdownOpen = false;
        },
    },

    directives: {
        clickOutSide,
    },
};
</script>
