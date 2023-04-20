<template>
    <div class="domain-modal" @click.self="closeDomain">
        <div class="domain-modal__content">
            <button class="domain-modal__close" @click="closeDomain">
                <svg><use xlink:href="#close"></use></svg>
            </button>
            <form class="domain-modal__form">
                <div class="domain-modal__item">
                    <div class="domain-modal__error" v-show="!isValid">
                        Некорректное имя домена
                    </div>
                    <input
                        class="domain-modal__input"
                        type="text"
                        placeholder="Имя домена"
                        v-model="domainValue"
                    />
                </div>
                <button
                    class="domain-modal__save"
                    @click.self.prevent="saveAndClose"
                >
                    Сохранить
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "domain-modal",

    data() {
        return {
            isValid: true,
            domainValue: "",
        };
    },

    methods: {
        closeDomain() {
            this.$emit("closeDomain");
        },

        saveAndClose() {
            this.checkDomain();
            if (this.isValid) {
                this.$emit("closeDomain");
            }
        },

        checkDomain() {
            const regExp = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
            this.isValid = this.domainValue.match(regExp);
        },
    },
};
</script>