<template>
  <div>
    <table-base></table-base>
    <div class="bar-expand" @click="toggleExpand(0)">项目投资情况（{{expand[0]?'点击关闭':'点击展开'}}）</div>
    <table-touzi v-if="expand[0]"></table-touzi>
    <div class="bar-expand" @click="toggleExpand(1)">项目单位情况（{{expand[1]?'点击关闭':'点击展开'}}）</div>
    <table-danwei v-if="expand[1]"></table-danwei>
    <div class="bar-expand" @click="toggleExpand(2)">项目办理信息（{{expand[2]?'点击关闭':'点击展开'}}）</div>
    <table-banli v-if="expand[2]"></table-banli>
  </div>
</template>
<script>
import tableBase from "./table/tableBase";
import tableTouzi from "./table/tableTouzi";
import tableDanwei from "./table/tableDanwei";
import tableBanli from "./table/tableBanli";
export default {
  data() {
    return {
      expand: []
    };
  },
  components: { tableBase, tableTouzi, tableDanwei, tableBanli },
  methods: {
    toggleExpand(index) {
      this.$set(this.expand, index, !this.expand[index]);
    }
  }
};
</script>
