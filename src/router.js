import Vue from "vue";
import Router from "vue-router";
import SearchByName from "./components/SearchByName.vue";
import Matches from "./components/Matches.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/players",
      component: SearchByName
    },
    {
      path: "/matches",
      component: Matches
    }
  ]
});

export default router;
