<template>
<div class="domain-modal" @click.self="closeDomain">
    <div class="domain-modal__content">
        <button class="domain-modal__close" @click="closeDomain">
            <svg>
                <use xlink:href="#close"></use>
            </svg>
        </button>
        <form class="domain-modal__form">
            <div class="domain-modal__item">
                <div v-show="!isValid" class="domain-modal__error">
                    Некорректное имя домена
                </div>
                <input v-model="domainValue" class="domain-modal__input" type="text" placeholder="Имя домена" />
            </div>
            <button class="domain-modal__save" @click.self.prevent="saveAndClose">
                Сохранить
            </button>
        </form>
    </div>
</div>
</template>

<script>
import { useSitesStore } from "@/store/modules/sites";
import { useModalsStore } from "@/store/modules/modals";
import { mapActions, mapState } from "pinia";

export default {
    name: "domain-modal",

    data() {
        return {
            isValid: true,
            domainValue: "",
        };
    },

    methods: {
        ...mapActions(useSitesStore, ["changeDomain"]),
        ...mapActions(useModalsStore, ["closeDomain"]),

        saveAndClose() {
            this.checkDomain();
            if (this.isValid) {
                this.changeDomain(this.activeSiteId, this.domainValue);
                this.closeDomain();
            }
        },

        checkDomain() {
            const regExp = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
            this.isValid = this.domainValue.match(regExp);
        },
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
    },
};
</script>
