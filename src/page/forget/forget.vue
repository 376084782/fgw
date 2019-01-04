<template>
  <div class="page-forget">
    <div v-if="step==1">
      <el-form :model="form1" status-icon ref="form1" label-width="100px" class="demo-ruleForm">
        <p class="title">杭州美中宜和妇儿医院</p>
        <p class="sub-title">
          <span>找回密码</span>
        </p>
        <mu-text-field
          @blur="valiPhone()"
          :error-text="errMsg.phone"
          v-model="form1.phone"
          label="手机号"
          label-float
          style="width:200px;height:.84rem;margin-bottom:.1rem;"
        ></mu-text-field>
        <el-button
          class="btn-code"
          @click="getCode"
          type="primary"
          style="margin-left:30px;width:150px;height:.5rem;"
          :disabled="!!getCodeLeftSec"
        >获取验证码{{getCodeLeftSec?`(${getCodeLeftSec}s)`:''}}</el-button>
        <br>
        <mu-text-field
          @blur="valiCode()"
          :error-text="errMsg.code"
          v-model="form1.code"
          label="短信验证码"
          label-float
          style="width:380px;height:.84rem;margin-bottom:.1rem;"
        ></mu-text-field>
        <br>
        <br>
        <el-button
          style="width:380px;height:.5rem;"
          class="btn-submit"
          type="primary"
          @click="submitForm1()"
        >确认</el-button>
        <br>
        <p @click="backHandler" class="btn-link">返回登录</p>
      </el-form>
    </div>
    <div v-else>
      <el-form :model="form2" status-icon ref="form2" label-width="100px" class="demo-ruleForm">
        <p class="title">杭州美中宜和妇儿医院</p>
        <p class="sub-title">
          <span>更新密码</span>
        </p>
        <mu-text-field
          @blur="valiPsw1()"
          :error-text="errMsg.psw1"
          v-model="form2.psw1"
          type="password"
          label="新密码"
          label-float
          style="width:380px;height:.84rem;margin-bottom:.1rem;"
        ></mu-text-field>
        <br>
        <mu-text-field
          @blur="valiPsw2()"
          :error-text="errMsg.psw2"
          v-model="form2.psw2"
          label="再次输入新密码"
          type="password"
          label-float
          style="width:380px;height:.84rem;margin-bottom:.1rem;"
        ></mu-text-field>
        <br>
        <el-button
          style="width:380px;height:.5rem;"
          class="btn-submit"
          type="primary"
          @click="submitForm2('phone')"
        >完成</el-button>
        <br>
      </el-form>
    </div>
  </div>
</template>

<script>
import "./forget.scss";
import { getCodePic } from "@/api/user";
import { mapActions } from "vuex";
import { getForgetPhoneCode, resetPsw } from "@/api/user";
const time = 60;
export default {
  data() {
    return {
      timer: null,
      getCodeLeftSec: 0,
      step: 1,
      form1: {
        phone: "",
        code: ""
      },
      form2: {
        psw1: "",
        psw2: ""
      },
      errMsg: {
        psw1: "",
        psw2: "",
        phone: "",
        code: ""
      }
    };
  },
  mounted() {},
  methods: {
    startTicker() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.getCodeLeftSec--;
        if (this.getCodeLeftSec <= 0) {
          clearInterval(this.timer);
        }
      }, 1000);
    },
    getCode() {
      this.valiPhone();
      if (this.errMsg.phone) {
        return;
      }
      if (this.getCodeLeftSec > 0) {
        return;
      }
      getForgetPhoneCode(this.form1.phone)
        .then(e => {
          // 进入验证码60s倒计时
          this.getCodeLeftSec = time;
          this.startTicker();
        })
        .catch(({ message }) => {
          this.$alert(message, "错误");
        });
    },
    submitForm1() {
      this.valiPhone();
      this.valiCode();
      if (this.errMsg.phone || this.errMsg.code) {
        return;
      }
      this.step = 2;
    },
    submitForm2() {
      this.valiPsw1();
      this.valiPsw2();
      if (this.errMsg.psw1 || this.errMsg.psw2) {
        return;
      }
      resetPsw({
        phoneNum: this.form1.phone,
        verificationCode: this.form1.code,
        pwd: this.form2.psw2
      })
        .then(e => {
          this.$router.push({
            path: "/login",
            title: "登录"
          });
        })
        .catch(({ message }) => {
          this.$alert(message, "错误");
        });
    },
    valiPsw1() {
      let psw1 = this.form2.psw1;
      if (!psw1) {
        this.errMsg.psw1 = "请输入新密码";
      } else {
        this.errMsg.psw1 = "";
      }
    },
    valiPsw2() {
      let psw2 = this.form2.psw2;
      if (!psw2) {
        this.errMsg.psw2 = "请输入新密码";
      } else if (psw2 != this.form2.psw1) {
        this.errMsg.psw2 = "两次输入新密码不一致";
      } else {
        this.errMsg.psw2 = "";
      }
    },
    valiPhone() {
      let phone = this.form1.phone;
      if (!phone) {
        this.errMsg.phone = "请输入手机号码";
      } else if (!/^1[34578]\d{9}$/.test(phone)) {
        this.errMsg.phone = "手机号码输入有误";
      } else {
        this.errMsg.phone = "";
      }
    },
    valiCode() {
      let code = this.form1.code;
      if (!code) {
        this.errMsg.code = "请输入验证码";
      } else if (code.length != 4) {
        this.errMsg.code = "验证码输入有误";
      } else {
        this.errMsg.code = "";
      }
    },
    backHandler() {
      this.$router.push({
        path: "/login",
        title: "登录"
      });
    }
  },
  components: {}
};
</script>