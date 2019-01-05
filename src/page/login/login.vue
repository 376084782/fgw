<template>
  <div class="wrap-login">
    <div class="box-login">
      <div class="menu-tab">
        <div
          v-for="(item,index) in menuList"
          :key="index"
          @click="activeIndex = index"
          :class="{active:activeIndex==index}"
        >{{item.name}}</div>
      </div>
      <el-form class="form">
        <el-form-item>
          <el-input placeholder="账号" v-model="loginData.loginName">
            <i slot="prefix" class="anticon icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="密码" v-model="loginData.password">
            <i slot="prefix" class="anticon icon-key"></i>
          </el-input>
        </el-form-item>
        <el-button type="primary" size="large" class="btn-submit" @click="submit">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import "./login.scss";
import { login } from "@/api/user";
export default {
  data() {
    return {
      menuList: [
        {
          name: "投资项目管理系统",
          url: "/"
        },
        {
          name: "文件中心",
          url: "/"
        },
        {
          name: "运行监控",
          url: "/"
        }
      ],
      activeIndex: 1,
      loginData: {}
    };
  },
  mounted() {},
  methods: {
    submit() {
      login(this.loginData)
        .then(e => {
          this.$router.push(this.menuList[this.activeIndex].url);
        })
        .catch(({ message }) => {
          this.$alert(message);
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {}
};
</script>