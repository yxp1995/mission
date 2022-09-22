import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/taskFlowPlan'
  },
  {
    path: '/taskFlowPlan',
    name: 'taskFlowPlan',
    component: () => import('../views/taskFlowPlan/index.vue')
  },
  {
    path: '/taskPlanMag',
    name: 'taskPlanMag',
    component: () => import('../views/taskPlanMag/index.vue')
  },
  {
    path: '/operationalUsageSituation',
    name: 'operationalUsageSituation',
    component: () => import('../views/operationalUsageSituation/index.vue')
  },
  {
    path: '/comprehensiveAssessment',
    name: 'comprehensiveAssessment',
    component: () => import('../views/comprehensiveAssessment/index.vue')
  },
  {
    path: '/dataMag',
    name: 'dataMag',
    component: () => import('../views/dataMag/index.vue')
  },
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router