import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";
// import Brazil from "../views/Brazil.vue";
// import Hawaii from "../views/Hawaii.vue";
// import Jamaica from "../views/Jamaica.vue";
// import Panama from "../views/Panama.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
    // IMPORTANT, to add, so it can be used more then on certain urls
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(/* webpackChunkName: "DestinationDetails"*/ "../views/DestinationDetails"),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(/*webpackChunkName: "ExperienceDetails"*/ "../views/ExperienceDetails")
      }
    ],
    beforeEnter: (to, from, next) => {
        const exists = store.destinations.find(
          destination => destination.slug === to.params.slug
        );
        if (exists) {
          next();
        } else {
          next({ name: "notFound" });
        }
      }
  },
  {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () =>
          import(/*webpackChunkName: "NotFound"*/ "../views/NotFound")
  }
];

const router = new VueRouter({
    mode: "history",

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        } else {
          const position = {};
          if (to.hash) {
            position.selector = to.hash;
            if (to.hash === "#experience") {
              position.offset = { y: 140 };
            }
            if (document.querySelector(to.hash)) {
              return position;
            }

            return false;
          }
        }
      },

    routes
});

export default router;
