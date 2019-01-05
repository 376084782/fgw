<template>
  <el-card class="mgTop24 pd24">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="权力事项待受理" name="ql">
        <el-table class="list-table" :data="tableData">
          <el-table-column prop="date" label="编号"></el-table-column>
          <el-table-column prop="date" label="办件名称"></el-table-column>
          <el-table-column prop="date" label="申报号"></el-table-column>
          <el-table-column prop="date" label="申请对象"></el-table-column>
          <el-table-column prop="date" label="申报来源"></el-table-column>
          <el-table-column prop="date" label="整体倒计时"></el-table-column>
          <el-table-column prop="date" label="操作">
            <template slot-scope="scope">
              <el-button @click.native.prevent="seeDetail(scope.row)" type="text" size="small">查看</el-button>
              <i class="grey">|</i>
              <el-button @click.native.prevent="goBanli(scope.row)" type="text" size="small">受理</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已受理" name="ybl">
        <el-table class="list-table" :data="tableData">
          <el-table-column prop="date" label="编号"></el-table-column>
          <el-table-column prop="date" label="办件名称"></el-table-column>
          <el-table-column prop="date" label="申报号"></el-table-column>
          <el-table-column prop="date" label="申请对象"></el-table-column>
          <el-table-column prop="date" label="申报来源"></el-table-column>
          <el-table-column prop="date" label="整体倒计时"></el-table-column>
          <el-table-column prop="date" label="内部倒计时"></el-table-column>
          <el-table-column prop="date" label="操作"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已办结" name="ybj">
        <el-table class="list-table" :data="tableData">
          <el-table-column prop="date" label="编号"></el-table-column>
          <el-table-column prop="date" label="办件名称"></el-table-column>
          <el-table-column prop="date" label="申报号"></el-table-column>
          <el-table-column prop="date" label="申请对象"></el-table-column>
          <el-table-column prop="date" label="申报来源"></el-table-column>
          <el-table-column prop="date" label="办结时间"></el-table-column>
          <el-table-column prop="date" label="操作"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <pagination :total="200" :current-page="1" :size="40"></pagination>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      activeName: "ql",
      tableData: [{}]
    };
  },
  methods: {
    goBanli(data) {
      let routeData = {
        name: "受理",
        url: "/QLSXBLEdit",
        query: {
          id: data.id
        }
      };
      this.$store.dispatch("addBreadCurmbList", routeData);
      this.$router.push({
        path: "/QLSXBLEdit",
        query: {
          id: data.id
        }
      });
    },
    seeDetail(data) {
      let routeData = {
        name: "权力事项受理信息详情",
        url: "/QLSXBLDetail",
        query: {
          id: data.id
        }
      };
      this.$store.dispatch("addBreadCurmbList", routeData);
      this.$router.push({
        path: "/QLSXBLDetail",
        query: {
          id: data.id
        }
      });
    },
    handleClick() {}
  },
  mounted() {
    this.$store.dispatch("updateBreadCurmbList", [
      {
        name: "项目管理",
        url: this.$route.path
      },
      {
        name: "权力事项受理",
        url: this.$route.path
      }
    ]);
  }
};
</script>

