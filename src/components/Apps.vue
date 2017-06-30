<template>
  <div class="apps">
    <div v-title>应用管理</div>
    <my-nav></my-nav>
    <my-left-menu module='apps'></my-left-menu>
    <my-right-content inline-template>
      <div class="right">apps</div>
    </my-right-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'apps',
  data() {
    return {
    };
  },
};
</script>
