<template>
<div class="settings-modal" @click.self="closeGlobalModal('settings')">
    <div class="settings-modal__content">
        <div class="settings-modal__header">
            <h5 class="settings-modal__title">Настройки страницы</h5>
            <button class="settings-modal__close" @click="closeGlobalModal('settings')">
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
        <component :is="activeTab" :page="page"></component>
    </div>
</div>
</template>

<script>
import ProjectSettingsMain from "../Sections/ProjectView/ProjectSettings/ProjectSettingsMain.vue";
import ProjectSettingsBadge from "../Sections/ProjectView/ProjectSettings/ProjectSettingsBadge.vue";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";
import { useModalsStore } from "@/store/modules/modals";
import { mapActions, mapState } from "pinia";

export default {
    name: "settings-modal",
    components: {
        ProjectSettingsMain,
        ProjectSettingsBadge
    },

    data() {
        return {
            activeTab: "ProjectSettingsMain",
        };
    },

    methods: {
        ...mapActions(usePagesStore, ['getActivePage']),
        ...mapActions(useModalsStore, ['closeGlobalModal']),
    },

    computed: {
        ...mapState(useSitesStore, ["activeSiteId"]),
        ...mapState(usePagesStore, ["activePageId"]),
        page() {
            return this.getActivePage(this.activeSiteId, this.activePageId);
        }
    },
};
</script>
