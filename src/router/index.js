import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Home from '../components/HelloWorld.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/CompositionAPICommonly',
		name: '常用组合API',
		component: () => import('../components/CompositionAPICommonly.vue')
	},
	{
		path: '/CompositionAPIOther',
		name: '组合API其他部分',
		component: () => import('../components/CompositionAPIOther.vue')
	},
	{
		path: '/Child',
		name: 'Child',
		component: () => import('../components/Child.vue')
	},
	{
		path: '/LifeCycle',
		name: 'LifeCycle',
		component: () => import('../components/LifeCycle.vue')
	},
	{
		path: '/UseHook',
		name: 'UseHook',
		component: () => import('../components/UseHook.vue')
	},
	{
		path: '/toRefsAndRef',
		name: 'toRefsAndRef',
		component: () => import('../components/toRefsAndRef.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
