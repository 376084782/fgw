<template>
  <el-container style="height:100%;" id="app">
    <router-view></router-view>
  </el-container>
</template>

<script>
  import "./App.scss";
  export default {
    name: "app",
    components: {
    },
    data() {
      return {
      };
    },
    created() {
    },
    watch: {
      $route() {
      }
    },
    methods: {
    },
    computed: {
    },
    mounted(){
    }
  };
</script>