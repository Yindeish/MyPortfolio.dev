export { default as Logo } from '../..\\components\\Logo.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as SocialLink } from '../..\\components\\SocialLink.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo'}" */).then(c => c.default || c)
export const LazyNavBar = import('../..\\components\\NavBar.vue' /* webpackChunkName: "components_NavBar'}" */).then(c => c.default || c)
export const LazySocialLink = import('../..\\components\\SocialLink.vue' /* webpackChunkName: "components_SocialLink'}" */).then(c => c.default || c)
