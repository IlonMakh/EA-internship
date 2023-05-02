<template>
<header class="header">
    <div class="container">
        <a class="header__logo" href="javascript:void(0);">
            <img src="@/assets/icons/logo.svg" alt="logo" />
        </a>
        <nav class="header__nav">
            <ul>
                <li v-for="(link, index) in links" :key="link.text" class="header__nav-item">
                    <router-link :class="link.isActive ? 'active' : ''" :to="link.path" class="header__nav-link" @click="changeActive(index)">{{ link.text }}</router-link>
                </li>
            </ul>
        </nav>
        <div class="header__login">
            <button class="header__login-btn" @click="signOut">
                Выйти
            </button>
        </div>
    </div>
</header>
</template>

<script>
import { useUserStore } from "@/store/modules/user";
import { mapActions } from "pinia";

export default {
    name: "app-header",
    data() {
        return {
            links: [{
                    path: "/",
                    text: "Мои сайты",
                    isActive: true,
                },
                {
                    path: "/profile",
                    text: "Профиль",
                    isActive: false,
                },
            ],
        };
    },
    methods: {
        ...mapActions(useUserStore, ["deleteToken"]),

        changeActive(index) {
            this.links
                .filter((link) => link.isActive)
                .forEach((link) => (link.isActive = false));
            this.links[index].isActive = true;
        },

        signOut() {
            this.deleteToken();
            this.$router.push('/login');
        }
    },
};
</script>
