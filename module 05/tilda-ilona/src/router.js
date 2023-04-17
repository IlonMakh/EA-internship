import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import Profile from "@/views/Profile.vue";

export const Router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: Home,
		},
		{
			path: "/projects",
			component: Projects,
		},
		{
			path: "/profile",
			component: Profile,
		},
	],
});
