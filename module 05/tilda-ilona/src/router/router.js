import { createRouter, createWebHistory } from "vue-router";
import SitesView from "@/views/SitesView.vue";
import ProfileView from "@/views/ProfileView.vue";
import LoginView from "@/views/LoginView.vue";
import ProjectView from "@/views/ProjectView.vue";
import PageEditView from "@/views/PageEditView.vue";
import PagePreviewView from "@/views/PagePreviewView.vue";
import { useUserStore } from "@/store/modules/user";
import { useSitesStore } from "@/store/modules/sites";
import { usePagesStore } from "@/store/modules/pages";

const isPageExists = (to, from, next) => {
    const siteId = +to.params.projectId;
    const pageId = +to.params.id;
    const sitesStore = useSitesStore();
    const pagesStore = usePagesStore();
    const siteExists = sitesStore.hasSite(siteId);

    if (to.name === "project") {
        if (siteExists) {
            sitesStore.setActiveSite(siteId);
            next();
        } else {
            next({ path: "/" });
        }
    } else {
        const pageExists = pagesStore.hasPage(siteId, pageId);
        
        if (pageExists && siteExists) {
            sitesStore.setActiveSite(siteId);
            pagesStore.setActivePage(pageId);
            next();
        } else {
            next({ path: "/" });
        }
    }
};

const requireAuth = async (to, from, next) => {
    const store = useUserStore();

    try {
        await store.checkTokenRequest();
        next();
    } catch (error) {
        console.error(error);
        next({
            path: "/login",
            query: { redirectTo: to.fullPath },
        });
    }
};

const requireNoAuth = async (to, from, next) => {
    const store = useUserStore();

    try {
        await store.checkTokenRequest();
        next({ path: "/" });
    } catch (error) {
        console.error(error);
        next();
    }
};

const routes = [
    {
        path: "/",
        component: SitesView,
        name: "sites",
        beforeEnter: requireAuth,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
        beforeEnter: requireNoAuth,
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfileView,
        beforeEnter: requireAuth,
    },
    {
        path: "/project/:projectId",
        component: ProjectView,
        name: "project",
        props: true,
        beforeEnter: [requireAuth, isPageExists],
    },
    {
        path: "/project/:projectId/page-edit/:id",
        component: PageEditView,
        name: "page-edit",
        props: true,
        beforeEnter: [requireAuth, isPageExists],
    },
    {
        path: "/project/:projectId/page-preview/:id",
        component: PagePreviewView,
        name: "page-preview",
        props: true,
        beforeEnter: [requireAuth, isPageExists],
    },

    {
        path: "/:catchAll(.*)",
        redirect: "/",
    },
];

export const Router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
