import axios from "axios"

const baseUrl = "https://jsonplaceholder.typicode.com/todos";
const todoModules = {
    state: {
        tasks: [],
        errors: '',
  
    },
     getters: {
        tasks:state=>state.tasks,
        tasksDone : state => state.tasks.filter(task => task.is_done)
    },
    actions: {
        async getTask({commit}) {
            try {
                const response = await axios.get(`${baseUrl}?_limit=10`)
                commit("GET_TASK",response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async createTask({commit},action){
            console.log("🚀 ~ file: todo.js ~ line 24 ~ createTask ~ action", action.title)
            try {
                const response = await axios.post(`${baseUrl}`, action)
                commit("POST_TASK",response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async deleteTask({commit},action){
            try {
                const response = await axios.delete(`${baseUrl}/id=${action.id}`)
                commit("DELETE_TASK",response.data)
            } catch (error) {
                console.log(error)
            }
        },
    },
    mutations: {
        GET_TASK(state,payload) {
            state.tasks = payload
        },
        POST_TASK(state, payload) {
          state.tasks.unshift(payload)
        },
        DELETE_TASK(state, payload) {
            console.log("🚀 ~ file: todo.js ~ line 49 ~ DELETE_TASK ~ payload", payload)
            console.log("🚀 ~ file: todo.js ~ line 49 ~ DELETE_TASK ~ state", state)
            let index = state.tasks.indexOf(payload.id)
            console.log("🚀 ~ file: todo.js ~ line 52 ~ DELETE_TASK ~ index", index)
            if(index !== -1)
            state.tasks.splice(index,1)
        }
    }
}
export default todoModules;