<template>
  <el-dialog class="pd24" title width="1136px" :visible="visible" @update:visible="toggle">
    <template slot="title">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item v-for="(item,index) in listHis" :key="index">
          <span @click="jumpHandler(item)">{{item.name}}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <content-list @jump="jumpHandler" v-if="activeName=='list'" @clickCombine="toggle(false)"></content-list>
    <content-other @jump="jumpHandler" v-if="activeName=='other'"></content-other>
    <content-detail @jump="jumpHandler" v-if="activeName=='detail'"></content-detail>
  </el-dialog>
</template>
<script>
import contentList from "./modalContent/combineList";
import contentOther from "./modalContent/contentOther";
import contentDetail from "./modalContent/contentDetail";
export default {
  components: { contentList, contentOther, contentDetail },
  props: ["visible"],
  data() {
    return {
      activeName: "list",
      listHis: [
        {
          name: "关联老项目",
          key: "list"
        }
      ],
      list: [{}]
    };
  },
  methods: {
    jumpHandler(data) {
      if (data.key == this.activeName) {
        return;
      }
      let sameIndex = -1;
      this.listHis.forEach((item, index) => {
        if (item.key == data.key) {
          sameIndex = index;
        }
      });
      if (sameIndex > -1) {
        this.listHis = this.listHis.slice(0, sameIndex + 1);
      } else {
        this.listHis.push(data);
      }
      this.activeName = data.key;
      console.log("jump", data);
    },
    toggle(flag) {
      this.$emit("update:visible", flag);
    }
  }
};
</script>
