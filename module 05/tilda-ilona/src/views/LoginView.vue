<template>
    <main>
        <section class="login">
            <div class="container">
                <form class="login__form" @submit.prevent="signIn">
                    <h4 class="login__form-title">Авторизация</h4>
                    <div class="login__form-item">
                        <input v-model="mailValue" type="email" placeholder="Email" />
                        <p class="login__form-message" v-if="!isMailValid">Некорректный e-mail</p>
                    </div>
                    <div class="login__form-item">
                        <input v-model="passwordValue" type="password" placeholder="Пароль" autocomplete="current-password"/>
                        <p class="login__form-message" v-if="!isPasswordValid">Неверный пароль</p>
                    </div>
                    <button class="login__form-btn" type="submit">Войти</button>
                </form>
            </div>
        </section>
    </main>
</template>

<script>
import { useUserStore } from "@/store/modules/user";
import { mapActions } from "pinia";
import { decryptString } from "@/helpers/crypto";

export default {
    name: "login-view",

    data() {
        return {
            isMailValid: true,
            isPasswordValid: true,
            mailValue: '',
            passwordValue: '',
        };
    },

    methods: {
        ...mapActions(useUserStore, ["checkPassword", "tokenRequest", "setToken"]),

        validation() {
            const templateMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.isMailValid = templateMail.test(this.mailValue.toLowerCase());
            this.isPasswordValid = this.checkPassword(this.passwordValue);
        },

        async signIn() {
            this.validation();

            if (this.isMailValid && this.isPasswordValid) {
                const response = await this.tokenRequest();

                this.setToken(response.token);
                this.$router.push(this.$route.query.redirectTo || '/');
                console.log('decrypt response token',decryptString(response.token));
            }
        }

    },

};
</script>