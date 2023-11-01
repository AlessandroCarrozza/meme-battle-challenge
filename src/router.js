import { createRouter, createWebHistory } from "vue-router";
import AppMain from "./pages/AppMain.vue";
import AppLeaderboard from "./pages/AppLeaderboard.vue";

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: "/",
                name: "home",
                component: AppMain
            },
            {
                path: "/leaderboard",
                name: "leaderboard",
                component: AppLeaderboard
            },
        ]
    }
);

export { router };