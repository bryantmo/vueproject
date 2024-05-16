// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";
import About from "@/components/About.vue";

// 第二步：创建路由器（传入配置对象 配置器）
const router = createRouter({
    routes: [ // 一个一个的路由规则
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        }
    ],
    history: createWebHistory() // 工作模式：可以设置为其他模式或者哈希模式
})

export default router // 暴露出去

