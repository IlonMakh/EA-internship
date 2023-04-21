<template>
<header class="header-edit">
    <div class="container">
        <page-edit-header-breadcrumps></page-edit-header-breadcrumps>
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
        <page-edit-header-menu :class="isDropdownOpen ? 'open' : ''" v-click-out-side="closeDropdown" @openSettings="openSettings"></page-edit-header-menu>
        <settings-modal :page="page" v-show="isSettingsOpen" @closeSettings="closeSettings"></settings-modal>
    </div>
</header>
</template>

<script>
import PageEditHeaderBreadcrumps from "./PageEditHeader/PageEditHeaderBreadcrumps.vue";
import PageEditHeaderMenu from "./PageEditHeader/PageEditHeaderMenu.vue";
import clickOutSide from "@mahdikhashan/vue3-click-outside";
import SettingsModal from "@/components/Modal/SettingsModal.vue";

export default {
    name: "edit-page-header",
    components: {
        PageEditHeaderBreadcrumps,
        PageEditHeaderMenu,
        SettingsModal,
    },
    data() {
        return {
            isDropdownOpen: false,
            isSettingsOpen: false,
            page: {
                title: "page 0",
                id: this.$route.params.id,
                img: "../images/cat.jpg",
            },
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
