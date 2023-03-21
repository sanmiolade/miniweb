// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>bar</div>' }
const TimeView =  {
    template: 
    /*html*/ 
    `<h1 id="theclock">The time is {{theTime}}</h1>`,


    data() {
        return {
                theTime : 'Vue is active'
            }
    },
    //------- Code to run when the Page loads
    mounted() {
        setInterval(() => {
            this.theTime = new Date().toLocaleString();
        }, 1000)
    },





}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/timev', component:  TimeView },
  { path: '/home', component:  Home }

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!