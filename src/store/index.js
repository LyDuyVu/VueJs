import Vue from "vue";
import Vuex from "vuex";
import  todoModules  from "./module/todo";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        todoModules
    }
})
export default store