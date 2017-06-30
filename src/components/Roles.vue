<template>
  <div class="roles">
    <div v-title>权限管理</div>
    <my-nav></my-nav>
    <my-left-menu module='roles'></my-left-menu>
    <my-right-content inline-template>
      <div class="right">roles</div>
    </my-right-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'roles',
  data() {
    return {
    };
  },
};
</script>
