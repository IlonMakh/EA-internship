import { createRouter, createWebHistory } from "vue-router";
import Sites from "@/views/Sites.vue";
import Profile from "@/views/Profile.vue";
import Project from "@/views/Project.vue";
import ProjectEdit from "@/views/ProjectEdit.vue";
import ProjectPreview from "@/views/ProjectPreview.vue";

const routes = [
    {
        path: "/",
        component: Sites,
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/project:id",
        component: Project,
    },
    {
        path: "/project-edit:id",
        component: ProjectEdit,
    },
    {
        path: "/project-preview:id",
        component: ProjectPreview,
    },
];

export const Router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
