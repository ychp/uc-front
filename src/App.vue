<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  width: 100%;
}

.logo-bg-color {
  background-color: #009ACD;
}

.header-color {
  background-color: #00B2EE;
}

a.non-decoration {
  text-decoration: none;
}

a.text {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
}

a {
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
