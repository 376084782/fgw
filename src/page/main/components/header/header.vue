<template>
  <header class="app-header">
    <span class="title">{{date}} 欢迎您：jicy</span>
    <span class="btn">
      <i class="anticon icon-question-circle"></i> 帮助
    </span>
    <span class="btn">
      <i class="anticon icon-poweroff"></i> 退出
    </span>
  </header>
</template>
<script>
import moment from "moment";
moment.locale("zh-cn");
export default {
  data() {
    return {
      date: moment().format("YYYY年MM月DD日 dddd HH:mm:ss")
    };
  },
  mounted() {
    setInterval(() => {
      this.date = moment().format("YYYY年MM月DD日 dddd HH:mm:ss");
    }, 1000);
  },
  components: {}
};
</script>
