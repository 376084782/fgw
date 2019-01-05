<template>
  <div>
    <el-card class="mgTop24">
      <el-collapse v-model="card1">
        <el-collapse-item title="基本信息" name="1">
          <table-basic></table-basic>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="mgTop24">
      <el-collapse v-model="card2">
        <el-collapse-item title="2.0 登记信息" name="1">
          <table-login></table-login>
          <el-tabs class="small mg24 noline" v-model="activeName">
            <el-tab-pane label="项目投资情况" name="xm">
              <table-touzi></table-touzi>
            </el-tab-pane>
            <el-tab-pane label="项目单位基本情况" name="dw">
              <table-danwei></table-danwei>
            </el-tab-pane>
            <el-tab-pane label="其他信息" name="qt">
              <table-qita></table-qita>
            </el-tab-pane>
          </el-tabs>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="mgTop24">
      <el-collapse v-model="card3">
        <el-collapse-item title="外网申报信息" name="1">
          <table-waiwang></table-waiwang>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="mgTop24">
      <el-collapse v-model="card4">
        <el-collapse-item title="信用信息" name="1">
          <table-xinyong></table-xinyong>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="mgTop24">
      <el-collapse v-model="card5">
        <el-collapse-item title="权力事项办理过程" name="1">
          <div class="mg24">
            <el-table :data="list" class="list-table">
              <el-table-column label="事项名称"></el-table-column>
              <el-table-column label="办理人"></el-table-column>
              <el-table-column label="签批人"></el-table-column>
              <el-table-column label="办理时间"></el-table-column>
              <el-table-column label="办截时间"></el-table-column>
              <el-table-column label="批文">
                <template>
                  <span>查看pdf测试</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button type="text" @click="seeDetail(scope.row)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="mgTop24">
      <el-collapse v-model="card5">
        <el-collapse-item title="关联项目" name="1">
          <div class="mg24">
            <el-table :data="listGL" class="list-table">
              <el-table-column label="关联项目"></el-table-column>
              <el-table-column prop="a" label="操作">
                <template slot-scope="scope">
                  <el-button type="text">查看</el-button>
                  <i class="grey">|</i>
                  <el-button type="text" @click="cancelCombine(scope.row)">取消关联</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="mgTop24 card-combine">
      <span>关联老项目</span>
      <el-button type="primary" @click="showModalOld=true">关联老项目</el-button>
    </el-card>

    <!-- 关联老项目弹窗 -->
    <modal-combine-old :visible.sync="showModalOld"></modal-combine-old>
  </div>
</template>
<script>
import tableBasic from "./components/tableBasic";
import tableLogin from "./components/tableLogin";
import tableTouzi from "./components/tableTouzi";
import tableDanwei from "./components/tableDanwei";
import tableQita from "./components/tableQita";
import tableWaiwang from "./components/tableWaiWang";
import tableXinyong from "./components/tableXinYong";
import modalCombineOld from "./components/modalCombineOld";

export default {
  components: {
    tableBasic,
    tableLogin,
    tableTouzi,
    tableWaiwang,
    tableXinyong,
    modalCombineOld,
    tableDanwei,
    tableQita
  },
  data() {
    return {
      showModalOld: false,
      activeName: "xm",
      list: [{}],
      listGL: [{}],
      card1: "1",
      card2: "1",
      card3: "1",
      card4: "1",
      card5: "1"
    };
  },
  methods: {
    cancelCombine(data) {},
    seeDetail(data) {
      let routeData = {
        name: "权力事项详情",
        url: "/QLSXDetail",
        query: {
          id: data.id
        }
      };
      this.$store.dispatch("addBreadCurmbList", routeData);
      this.$router.push({
        path: "/QLSXDetail",
        query: {
          id: data.id
        }
      });
    },
    handleChange() {}
  }
};
</script>

<style lang="scss">
.card-combine {
  height: 64px;
  margin-bottom: 24px;
  padding: 0 24px;
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  .el-card__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
}
</style>
