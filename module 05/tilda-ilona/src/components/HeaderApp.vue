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
            <button v-if="!isLogin" class="header__login-btn" @click="isLogin = !isLogin">
                Войти
            </button>
            <button v-else class="header__login-btn" @click="isLogin = !isLogin">
                Выйти
            </button>
        </div>
    </div>
</header>
</template>

<script>
export default {
    name: "app-header",
    data() {
        return {
            isLogin: true,
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
        changeActive(index) {
            this.links
                .filter((link) => link.isActive)
                .forEach((link) => (link.isActive = false));
            this.links[index].isActive = true;
        },
    },
};
</script>
