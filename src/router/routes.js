import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

import Browse from '../components/Browse.vue'
import InfoPage from '../components/InfoPages/InfoPage.vue'

import Opportunity from '../components/InfoPages/Opportunity.vue'
import Post from '../components/InfoPages/Post.vue'
import About from '../components/InfoPages/About.vue' 
import Partners from '../components/InfoPages/Partners.vue'
import FAQs from '../components/InfoPages/FAQs.vue'
import Join from '../components/InfoPages/Join.vue'
import Local from '../components/InfoPages/Local.vue'
import Press from '../components/InfoPages/Press.vue'
import Promote from '../components/InfoPages/Promote.vue'
import Contact from '../components/InfoPages/Contact.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/Home', 
        name: 'Home',
        component: Home
    },
    {
        path: '/Browse', 
        name: 'Browse',
        component: Browse,
        meta: 'Browse Opportunities'
    },
    {
        path: '/InfoPage',
        redirect: '/About', 
        name: 'InfoPage',
        component: InfoPage,
        children: [
            {
                path: '/Post',
                name: 'Post',
                component: Post, 
                meta: 'Post an Opportunity',
            },
            {
                path: '/Opportunity',
                name: 'Opportunity',
                component: Opportunity, 
                meta: '',
            },
            {
                path: '/About',
                name: 'About',
                component: About, 
                meta: 'About',
            },
            {
                path: '/About/Partners',
                name: 'Partners',
                component: Partners, 
                meta: 'Partners',
            },
            {
                path: '/About/FAQs',
                name: 'FAQs',
                component: FAQs, 
                meta: 'FAQs',
            },
            {
                path: '/About/Join',
                name: 'Join',
                component: Join, 
                meta: 'Join'
            },
            {
                path: '/About/Local',
                name: 'Local',
                component: Local, 
                meta: 'Local Network'
            }, 
            {
                path: '/About/Press',
                name: 'Press',
                component: Press, 
                meta: 'Press',
            },
            {
                path: '/About/Promote',
                name: 'Promote',
                component: Promote, 
                meta: 'Promote',
            },
            {
                path: '/About/Contact',
                name: 'Contact',
                component: Contact, 
                meta: 'Contact',
            }
        ],
    },

];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router