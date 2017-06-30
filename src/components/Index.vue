<template>
  <div class="index">
    <div v-title>首页</div>
    <my-nav></my-nav>
    <my-left-menu></my-left-menu>
    <my-right-content></my-right-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to Your Vue.js Index111',
    };
  },
};
</script>
