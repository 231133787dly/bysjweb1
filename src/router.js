import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import EssentialData from "./components/EssentialData.vue";
import Evidence11H from "./components/Evidence11H.vue";
import Evidence12H from "./components/Evidence12H.vue";
import Evidence14H from "./components/Evidence14H.vue";
import Evidence18H from "./components/Evidence18H.vue";
import Phenomenon from "./components/Phenomenon.vue";
import Fault from "./components/Fault.vue";
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/essentialData",
        component: EssentialData
    },
    {
        path:"/evidence11H",
        component: Evidence11H
    },
    {
        path:"/evidence12H",
        component: Evidence12H
    },
    {
        path:"/evidence14H",
        component: Evidence14H
    },
    {
        path:"/evidence18H",
        component: Evidence18H
    },
    {
        path:"/phenomenon",
        component: Phenomenon
    },
    {
        path:"/fault",
        component: Fault
    },
]

var router =  new VueRouter({
    routes
})
export default router;