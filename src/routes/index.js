import {createRouter, createWebHistory} from "vue-router";

const MainPage = () => import("../pages/Main.vue");

const notFound = () => import ("../pages/notFound.vue");

const TentangPage = () => import ("../pages/views/Tentang.vue");

const KegiatanPage = () => import("../pages/views/Kegiatan.vue");

const GaleriPage = () => import("../pages/views/Galeri.vue");

const KontakPage = () => import("../pages/views/Kontak.vue");

const routes = [
    {
        path: '/',
        name: "Main",
        component: MainPage,
        alias: '/Beranda'
    },
    {
        path: '/tentang',
        name: "Tentang",
        component: TentangPage,
        alias: '/Tentang-Kami'
    },
    {
        path: '/program',
        name: "Kegiatan",
        component: KegiatanPage,
        alias: '/Kegiatan'
    },
    {
        path: '/galeri',
        name: "Galeri",
        component: GaleriPage,
        alias: '/Galeri'
    },
    {
        path: '/kontak',
        name: "Kontak",
        component: KontakPage,
        alias: '/Kontak'
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: notFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
})

export default router