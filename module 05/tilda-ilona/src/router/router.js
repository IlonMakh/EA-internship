import { createRouter, createWebHistory } from "vue-router";
import Sites from "@/views/Sites.vue";
import Profile from "@/views/Profile.vue";
import Project from "@/views/Project.vue";
import PageEdit from "@/views/PageEdit.vue";
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
        path: "/project/:id",
        component: Project,
        name: 'project',
        props: true,
    },
    {
        path: "/project/:projectId/page-edit/:id",
        component: PageEdit,
        name: 'page-edit',
        props: true,
    },
    {
        path: "/project-preview/:id",
        component: ProjectPreview,
        name: 'preview',
        props: true,
    },
];

export const Router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
