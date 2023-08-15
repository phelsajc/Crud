
let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default
let forget = require('./components/auth/forget.vue').default
let logout = require('./components/auth/logout.vue').default

//End Aithetication
let home = require('./components/home.vue').default

//User
let user_list = require('./components/users/index.vue').default
let user_add = require('./components/users/create.vue').default

//Store
let store_list = require('./components/stores/index.vue').default
let store_add = require('./components/stores/create.vue').default

export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/register', component: register, name: 'register' },
    { path: '/forget', component: forget, name: 'logout' },
    { path: '/logout', component: logout, name: 'forget' },
    { path: '/home', component: home, name: 'home' },

    //Users
    { path: '/user_list', component: user_list, name: 'user_list' },
    { path: '/user_add/:id', component: user_add, name: 'user_add' },
    
    //Stores
    { path: '/store_list', component: store_list, name: 'store_list' },
    { path: '/store_add/:id', component: store_add, name: 'store_add' },
]


