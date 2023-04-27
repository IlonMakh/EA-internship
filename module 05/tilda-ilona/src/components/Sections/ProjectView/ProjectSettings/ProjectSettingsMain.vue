<template>
<form class="settings-modal__form">
    <div class="settings-modal__form-item">
        <label class="settings-modal__label" for="title">Заголовок</label>
        <input v-model="titleValue" class="settings-modal__input" type="text" id="title" name="title" />
    </div>
    <div class="settings-modal__form-item">
        <label class="settings-modal__label" for="description">Описание</label>
        <input v-model="descriptionValue" class="settings-modal__input" type="text" id="description" name="description" />
    </div>
    <div class="settings-modal__form-item">
        <label class="settings-modal__label" for="address">Адрес страницы</label>
        <input v-model="adressValue" class="settings-modal__input" type="text" id="address" name="address" />
    </div>
    <button class="settings-modal__save" @click.prevent="saveInfo">
        Сохранить изменения
    </button>
</form>
</template>

<script>
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { useModalsStore } from "@/store/modules/modals";
import { mapActions, mapState } from "pinia";

export default {
    name: "settings-main-tab",
    props: {
        page: Object,
    },

    data() {
        return {
            titleValue: this.page.title,
            descriptionValue: this.page.description,
            adressValue: this.page.adress,
        };
    },

    methods: {
        ...mapActions(usePagesStore, ['changeInfo']),
        ...mapActions(useModalsStore, ['closeSettings']),

        saveInfo() {
            this.changeInfo(this.activeSiteId, this.activePageId, {title: this.titleValue, description: this.descriptionValue, adress: this.adressValue});
            this.closeSettings();
        },
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
    },
};
</script>
