<template>
  <div>
    <page-search :from-modal="true" @jump="jump"></page-search>
  </div>
</template>
<script>
import pageSearch from "@/view/manager/xmxx/index";
export default {
  components: { pageSearch },
  methods: {
    jump(e) {
      this.$emit("jump", e);
    }
  }
};
</script>

