<template>
  <el-dialog title="受理" :visible="visible" @update:visible="toggle">
    <div class="common-table">
      <table>
        <tr>
          <td style="width:118px;text-align:center;">操作</td>
          <td style="line-height:24px;">当前操作步骤：
            <span class="text-danger">受理</span>&nbsp;&nbsp;&nbsp;&nbsp;当前步骤：
            <span class="text-danger">开始运行</span>
            <br>受理后开始计算时间
            <br>开始进行此环节后，可以选择以短信的形式告知申报者
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <el-checkbox v-model="data.a" disabled>是否发送受理短信通知给申报者</el-checkbox>
            <br>
            <el-checkbox v-model="data.b">打印受理通知单</el-checkbox>
          </td>
        </tr>
      </table>
    </div>
    <template slot="footer">
      <el-button size="small">接受</el-button>
      <el-button size="small" type="primary" @click="toggle(false)">受理</el-button>
    </template>
  </el-dialog>
</template>
<script>
export default {
  props: ["visible"],
  data() {
    return {
      data: {}
    };
  },
  methods: {
    toggle(flag) {
      this.$emit("update:visible", flag);
    }
  }
};
</script>
