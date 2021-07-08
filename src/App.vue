<template>
  <div id="app">
    <ListTodo />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Home from "./components/home.vue";
import ListTodo from "./components/listToDoVuex.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // Home,
    ListTodo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
