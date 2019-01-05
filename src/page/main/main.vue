<template>
  <div class="app">
    <!-- 侧边栏 -->
    <tur-side></tur-side>
    <!-- 插槽，里面是具体内容 -->
    <div class="app-content">
      <!-- 头部用户栏 -->
      <tur-header></tur-header>
      <!-- 路由页面 -->
      <breadcurmb></breadcurmb>
      <div class="app-inner-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import breadcurmb from "./components/breadcurmb";
import turSide from "./components/aside/index";
import turHeader from "./components/header/header";
export default {
  components: { turSide, turHeader, breadcurmb }
};
</script>
