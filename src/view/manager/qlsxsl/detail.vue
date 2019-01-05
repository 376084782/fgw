<template>
  <div>
    <el-card class="mgTop24">
      <el-collapse v-model="card1">
        <el-collapse-item title="外网申报信息" name="1">
          <table-waiwang></table-waiwang>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="mgTop24">
      <el-collapse v-model="card2">
        <el-collapse-item title="申报材料" name="1">
          <div class="mg24">
            <el-table :data="listSB">
              <el-table-column label="材料名称"></el-table-column>
              <el-table-column label="预览"></el-table-column>
              <el-table-column label="下载"></el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="mgTop24">
      <el-collapse v-model="card3">
        <el-collapse-item title="OA办理过程信息" name="1">
          <div class="mg24">
            <el-table :data="listGC">
              <el-table-column label="序号"></el-table-column>
              <el-table-column label="办理内容"></el-table-column>
              <el-table-column label="办理时间"></el-table-column>
              <el-table-column label="办理人"></el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import tableWaiwang from "./components/tableWaiWang";
export default {
  components: {
    tableWaiwang
  },
  data() {
    return {
      listSB: [{}],
      listGC: [{}],
      card1: "1",
      card2: "1",
      card3: "1",
      card4: "1",
      card5: "1"
    };
  }
};
</script>

