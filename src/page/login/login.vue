<template>
  <div class="wrap-login">
    <div class="box-login">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="投资项目管理系统" name="first">
          <el-form>
            <el-form-item>
              <el-input placeholder="账号" v-model="loginData.id"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="密码" v-model="loginData.psw"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="文件中心" name="second">文件中心</el-tab-pane>
        <el-tab-pane label="运行监控" name="third">运行监控</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import "./login.scss";
export default {
  data() {
    return {
      activeName: "second",
      loginData: {
        ID: "",
        psw: ""
      }
    };
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {}
};
</script>