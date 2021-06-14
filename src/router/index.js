import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Home from '../page/HelloWorld.vue'

const routes = [
	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: Home
	// },

	{
		path: '/RefAndReactive',
		name: 'RefAndReactive',
		component: () => import('../page/CompositionAPICommonly/RefAndReactive.vue')
	},
	{
		path: '/ProxyAndReflect',
		name: 'ProxyAndReflect',
		component: () => import('../page/CompositionAPICommonly/ProxyAndReflect.vue')
	},
	{
		path: '/ComputAndwatch',
		name: 'ComputAndwatch',
		component: () => import('../page/CompositionAPICommonly/ComputAndwatch.vue')
	},
	{
		path: '/Child',
		name: 'Child',
		component: () => import('../page/CompositionAPICommonly/Child.vue')
	},
	{
		path: '/LifeCycle',
		name: 'LifeCycle',
		component: () => import('../page/CompositionAPICommonly/LifeCycle.vue')
	},
	{
		path: '/UseHook',
		name: 'UseHook',
		component: () => import('../page/CompositionAPICommonly/UseHook.vue')
	},
	{
		path: '/toRefsAndRef',
		name: 'toRefsAndRef',
		component: () => import('../page/CompositionAPICommonly/toRefsAndRef.vue')
	},



	{
		path: '/shallowReactiveAndshallowRef',
		name: 'shallowReactiveAndshallowRef',
		component: () => import('../page/CompositionAPIOther/shallowReactiveAndshallowRef.vue')
	},
	{
		path: '/readonlyAndshallowReadonly',
		name: 'readonlyAndshallowReadonly',
		component: () => import('../page/CompositionAPIOther/readonlyAndshallowReadonly.vue')
	},
	{
		path: '/toRawAndMarkRaw',
		name: 'toRawAndMarkRaw',
		component: () => import('../page/CompositionAPIOther/toRawAndMarkRaw.vue')
	},
	{
		path: '/toRef',
		name: 'toRef',
		component: () => import('../page/CompositionAPIOther/toRef.vue')
	},
	{
		path: '/customRef',
		name: 'customRef',
		component: () => import('../page/CompositionAPIOther/customRef.vue')
	},
	{
		path: '/ProvideAndInject',
		name: 'ProvideAndInject',
		component: () => import('../page/CompositionAPIOther/ProvideAndInject.vue')
	},
	{
		path: '/Check',
		name: 'Check',
		component: () => import('../page/CompositionAPIOther/Check.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
