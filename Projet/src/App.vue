<template>
  <div id="app">
    <v-app>
    <img right src="./assets/infobec.png" alt="infobec" style="width:500px;height:100px;margin-left:40px;margin-top:40px"> 
    <Component1/>
    <Component2/>
    <Component3/>
    <img right src="./assets/infobec.png" alt="infobec" style="width:500px;height:100px;margin-left:1380px;margin-top:50px">
    </v-app>
  </div>
</template>

<script>
import Component1 from './components/Component1.vue';
import Component2 from './components/Component2.vue';
import Component3 from './components/Component3.vue';


export default {
  name: 'app',
  components: {
    Component1,
    Component2,
    Component3,

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
