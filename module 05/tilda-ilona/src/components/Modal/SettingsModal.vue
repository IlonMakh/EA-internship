<template>
    <div class="settings-modal" @click.self="closeSettings">
        <div class="settings-modal__content">
            <div class="settings-modal__header">
                <h5 class="settings-modal__title">Настройки страницы</h5>
                <button class="settings-modal__close" @click="closeSettings">
                    <svg><use xlink:href="#close"></use></svg>
                </button>
            </div>
            <div class="settings-modal__menu">
                <button
                    :class="activeTab === 'Main' ? 'active' : ''"
                    class="settings-modal__tab"
                    @click="activeTab = 'Main'"
                >
                    Главное
                </button>
                <button
                    :class="activeTab === 'Badge' ? 'active' : ''"
                    class="settings-modal__tab"
                    @click="activeTab = 'Badge'"
                >
                    Бейдж
                </button>
            </div>
            <component :is="activeTab"></component>
        </div>
    </div>
</template>

<script>
import Main from "../Project/ProjectSettingsMain.vue";
import Badge from "../Project/ProjectSettingsBadge.vue";

export default {
    name: "settings-modal",
    components: { Main, Badge },

    data() {
        return {
            activeTab: "Main",
        };
    },

    methods: {
        closeSettings() {
            this.$emit("closeSettings");
        },
    },
};
</script>
