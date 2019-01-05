<template>
  <div class="pagination">
    <span class="pull-left tip">
      总数:{{total}}条 每页:{{size}}条 页次:
      <span class="font-blue">{{currentPage}}</span>
      /{{Math.ceil(total/size)}}
    </span>
    <el-pagination
      background
      class="pull-right mgTop10 mgBottom10"
      @current-change="onPageChange"
      :current-page="currentPage"
      :page-size="size"
      layout="prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: ["total", "currentPage", "size"],
  methods: {
    onPageChange() {
      this.$emit("update:currentPage", this.currentPage);
      this.$emit("onPageChange", this.currentPage);
    }
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tip {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    opacity: 0.85;
  }
}
</style>

