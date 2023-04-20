<template>
<div class="settings-modal" @click.self="closeSettings">
    <div class="settings-modal__content">
        <div class="settings-modal__header">
            <h5 class="settings-modal__title">Настройки страницы</h5>
            <button class="settings-modal__close" @click="closeSettings">
                <svg>
                    <use xlink:href="#close"></use>
                </svg>
            </button>
        </div>
        <div class="settings-modal__menu">
            <button :class="activeTab === 'ProjectSettingsMain' ? 'active' : ''" class="settings-modal__tab" @click="activeTab = 'ProjectSettingsMain'">
                Главное
            </button>
            <button :class="
                        activeTab === 'ProjectSettingsBadge' ? 'active' : ''
                    " class="settings-modal__tab" @click="activeTab = 'ProjectSettingsBadge'">
                Бейдж
            </button>
        </div>
        <component :is="activeTab" :page="page" @saveBadge="saveBadge" @saveTitle="saveTitle" @closeSettings="closeSettings"></component>
    </div>
</div>
</template>

<script>
import ProjectSettingsMain from "../Sections/ProjectView/ProjectSettings/ProjectSettingsMain.vue";
import ProjectSettingsBadge from "../Sections/ProjectView/ProjectSettings/ProjectSettingsBadge.vue";

export default {
    name: "settings-modal",
    components: {
        ProjectSettingsMain,
        ProjectSettingsBadge
    },
    props: {
        page: Object,
    },

    data() {
        return {
            activeTab: "ProjectSettingsMain",
        };
    },

    methods: {
        closeSettings() {
            this.$emit("closeSettings");
        },

        saveBadge(img) {
            this.$emit("saveBadge", img);
        },

        saveTitle(title) {
            this.$emit("saveTitle", title);
        },
    },
};
</script>
