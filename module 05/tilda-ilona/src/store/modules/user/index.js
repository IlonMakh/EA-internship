import { deleteCookie, getCookie, isCookieExpired, setCookie } from "@/helpers/cookie";
import { decryptString, encryptString } from "@/helpers/crypto";
import { defineStore } from "pinia";
import { getLocalStorageValue } from "@/helpers/localStorageCheck";

const TOKEN = getLocalStorageValue('token');

export const useUserStore = defineStore("user", {
    state: () => ({
        password: encryptString("Я_обожаю_стажировку_в_E2!"),
        token: TOKEN,
    }),

    actions: {
        updateUserState() {
            this.token = getLocalStorageValue('token');
        },

        checkPassword(str) {
            return str === decryptString(this.password);
        },

        setToken(token) {
            this.token = token;
            localStorage.setItem("token", token);
            setCookie("token", token, 3);
        },

        async tokenRequest() {
            const token = this.getToken("Илона", "Махнач", "19.11.1998");

            await new Promise((resolve) => setTimeout(resolve, 500));
            return { token };
        },

        async checkTokenRequest() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const cookieToken = getCookie("token");
                    const isTokenValid = !isCookieExpired("token");

                    if (this.token === cookieToken && isTokenValid) {
                        resolve({ success: true });
                    } else {
                        reject({ error: "invalid token" });
                    }
                }, 500);
            });
        },

        getToken(name, surname, birthdate) {
            const data = {
                name,
                surname,
                birthdate,
                id: Date.now(),
            };
            const string = JSON.stringify(data);
            const cipherString = encryptString(string);
        
            return cipherString;
        },

        deleteToken() {
            localStorage.removeItem("token");
            deleteCookie("token");
            this.token = "";
        }
    },
});
