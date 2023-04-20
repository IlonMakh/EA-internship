import { createRouter, createWebHistory } from "vue-router";
import SitesView from "@/views/SitesView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ProjectView from "@/views/ProjectView.vue";
import PageEditView from "@/views/PageEditView.vue";
import PagePreviewView from "@/views/PagePreviewView.vue";

const routes = [
    {
        path: "/",
        component: SitesView,
        name: 'sites',
    },
    {
        path: "/profile",
        component: ProfileView,
    },
    {
        path: "/project/:id",
        component: ProjectView,
        name: "project",
        props: true,
    },
    {
        path: "/project/:projectId/page-edit/:id",
        component: PageEditView,
        name: "page-edit",
        props: true,
    },
    {
        path: "/project/:projectId/page-preview/:id",
        component: PagePreviewView,
        name: "page-preview",
        props: true,
    },
];

export const Router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

