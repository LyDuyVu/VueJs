import Vue from "vue";
import Router from "vue-router";
import ListToDo from "../componentsVuex/listTodo.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "listToDo",
            components:ListToDo
        }
    ]
})