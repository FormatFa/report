import Vue from 'vue'
import VueRouter from 'vue-router'
import Reports from '../page/reports.vue'
import DataSources from '../page/datasources.vue'

Vue.use(VueRouter)

const routes=[
    {
        path:'/reports',
        component:Reports
    },
    {
        path:'/datasources',
        component:DataSources
    }
];
const router=new VueRouter({
    routes:routes
})
export default router
