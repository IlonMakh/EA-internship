import { deleteCookie, getCookie, isCookieExpired, isCookieValid, setCookie } from "@/helpers/cookie";
import { decryptString, encryptString, setToken, token } from "@/helpers/crypto";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        password: encryptString("Я_обожаю_стажировку_в_E2!"),
        token: localStorage.getItem("userToken") || '',
    }),

    actions: {
        checkPassword(str) {
            return str === decryptString(this.password);
        },

        setToken(token) {
            this.token = token;
            localStorage.setItem("userToken", token);
            setCookie("userToken", token, 3);
        },

        async tokenRequest() {
            const token = setToken("Илона", "Махнач", "19.11.1998");

            await new Promise((resolve) => setTimeout(resolve, 500));
            return { token };
        },

        async checkTokenRequest() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const cookieToken = getCookie("userToken");
                    const isTokenValid = !isCookieExpired("userToken");

                    if (this.token === cookieToken && isTokenValid) {
                        resolve({ success: true });
                    } else {
                        reject({ error: "invalid token" });
                    }
                }, 500);
            });
        },

        deleteToken() {
            localStorage.removeItem("userToken");
            deleteCookie("userToken");
            this.token = "";
        }
    },
});
