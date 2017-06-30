<template>
  <div class="users">
    <div v-title>用户管理</div>
    <my-nav></my-nav>
    <my-left-menu module='users'></my-left-menu>
    <my-right-content inline-template>
      <div class="right">users</div>
    </my-right-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'users',
  data() {
    return {
    };
  },
};
</script>
