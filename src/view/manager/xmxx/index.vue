<template>
  <el-card class="mgTop24 pd24">
    <div class="top-flex-area">
      <span>项目信息</span>
      <div>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
        <el-button type="text" @click="isExpend=!isExpend">
          {{isExpend?'收起':'展开'}}
          <i :class="`anticon icon-${isExpend?'up':'down'}`"></i>
        </el-button>
      </div>
    </div>
    <search :is-expend="isExpend"></search>
    <div class="table-ques-tip mgTop24">
      项目代码颜色说明；正常结转为黑色；
      <span class="text-danger">不接转为红色；</span>
      <span class="text-success">撤销为绿色；</span>
      <span class="text-warn">删除为橙色</span>
    </div>
    <el-table class="list-table" :data="tableData">
      <el-table-column prop="date" label="编号"></el-table-column>
      <el-table-column prop="date" label="项目代码"></el-table-column>
      <el-table-column prop="date" label="项目名称"></el-table-column>
      <el-table-column prop="date" label="建设单位"></el-table-column>
      <el-table-column prop="date" label="登记时间"></el-table-column>
      <el-table-column prop="date" label="操作">
        <template slot-scope="scope">
          <div v-if="fromModal">
            <el-button type="text" @click="seeModalDetail(scope.row)">查看</el-button>
            <i class="grey">|</i>
            <el-button type="text" @click="modalCombine(scope.row)">关联</el-button>
          </div>
          <div v-else>
            <el-button type="text" @click="seeDetail(scope.row)">查看</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <pagination :total="200" :current-page="1" :size="40"></pagination>
  </el-card>
</template>
<script>
import search from "./components/search";
export default {
  props: ["fromModal"],
  components: { search },
  data() {
    return {
      isExpend: false,
      card: "1",
      tableData: [{}]
    };
  },
  mounted() {
    if (!this.fromModal) {
      this.$store.dispatch("updateBreadCurmbList", [
        {
          name: "项目管理",
          url: this.$route.path
        },
        {
          name: "项目信息查询",
          url: this.$route.path
        }
      ]);
    }
  },
  methods: {
    seeModalDetail(data) {
      this.$emit("jump", {
        name: "查看",
        key: "detail"
      });
    },
    modalCombine(data) {},
    seeDetail(data) {}
  }
};
</script>
