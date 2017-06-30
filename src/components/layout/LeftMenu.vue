<template>
  <div class="left">
    <div class="logo logo-bg-color">
      <a class="non-decoration" href="/">
        <span class="logo-text">LOGO</span>
      </a>
    </div>
    <ul class="nav">
      <li class="nav-item" :class="module==='apps' ? 'active' : ''">
        <a class="non-decoration text" href="/apps">
          <span class="nav-text">应用管理</span>
        </a>
      </li>
      <li class="nav-item" :class="module==='roles' ? 'active' : ''">
        <a class="non-decoration text" href="/roles">
          <span class="nav-text">权限管理</span>
        </a>
      </li>
      <li class="nav-item" :class="module==='users' ? 'active' : ''">
        <a class="non-decoration text" href="/users">
          <span class="nav-text">用户管理</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftMenu',
  props: { module },
  data() {
    return {
    };
  },
};
</script>

<style>
.left {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 100%;
  background-color: #F7F7F7;
  border-right: 1px solid #e5e5e5;
  z-index: 1;
}

.logo {
  height: 50px;
  vertical-align: middle;
  text-align: center;
  line-height: 50px;
  width: 201px;
}

.logo .logo-text {
  font-size: 20px;
  color: #fff;
}

.nav {
  width: 100%;
  margin: 0px;
  padding: 0px;
}

.nav .nav-item {
  display: block;
  position: relative;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #e5e5e5;
  line-height: 40px;
  color: #2c3e50;
}

.nav .nav-item:hover,
.nav .nav-item a:hover {
  background-color: #00B2EE;
  color: #fff;
}

.nav .active,
.nav .active a {
  background-color: #00B2EE;
  color: #fff;
}

.nav .nav-item>a {
  position: relative;
  width: 200px;
  display: table;
  border-collapse: collapse;
  font-size: 14px;
  text-decoration: none;
  transition: all .14s linear;
  font-family: 'Strait', sans-serif;
}

.nav .nav-item>a>i {
  width: 50px;
}

.nav .nav-item>a>.nav-text {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  font-family: 'Titillium Web', sans-serif;
  width: 150px;
}
</style>
