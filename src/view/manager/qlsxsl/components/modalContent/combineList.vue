<template>
  <div>
    <el-button type="text" @click="seeOther">关联其他老项目</el-button>
    <el-table class="list-table" :data="list">
      <el-table-column label="编号"></el-table-column>
      <el-table-column label="项目代码"></el-table-column>
      <el-table-column label="项目名称"></el-table-column>
      <el-table-column label="建设单位"></el-table-column>
      <el-table-column label="登记时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="seeDetail(scope.row)" type="text">查看</el-button>
          <i class="grey">|</i>
          <el-button type="text" @click="combine(scope.row)">关联</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{}]
    };
  },
  methods: {
    seeOther() {
      this.$emit("jump", {
        name: "关联其他项目",
        key: "other"
      });
    },
    seeDetail() {
      this.$emit("jump", {
        name: "查看",
        key: "detail"
      });
    },
    combine(data) {
      this.$emit('clickCombine',data);
    }
  }
};
</script>

