<template>
  <div>
    <el-card class="mgTop24 pd24">
      <div class="top-flex-area">
        <span>基本信息</span>
      </div>
      <el-form style="min-width:1150px;" :inline="true" label-width="150px" class="form-half">
        <el-form-item label="申报者：">
          <el-radio v-model="data.shen" label="1">个人</el-radio>
          <el-radio v-model="data.shen" label="2">企业</el-radio>
          <el-radio v-model="data.shen" label="3">非企业</el-radio>
        </el-form-item>
        <br>
        <el-form-item label="所属部门：">
          <span>市发改委</span>
        </el-form-item>
        <el-form-item label="申报来源：">
          <span>市发改委</span>
        </el-form-item>
        <el-form-item label="事项名称：">
          <span>市发改委</span>
        </el-form-item>
        <el-form-item label="审批类型：">
          <span>市发改委</span>
        </el-form-item>
        <el-form-item label="承诺时间：">
          <el-date-picker style="width:240px;" size="small"></el-date-picker>
        </el-form-item>
        <el-form-item label="申报数量：">
          <el-input style="width:240px;" size="small"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;" label="申报项目名称：">
          <el-input style="width:740px;" size="small"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;" label="申报单位：">
          <el-input style="width:740px;" size="small"></el-input>
        </el-form-item>
        <el-form-item class="w400" label="组织机构代码证号/营业执照号/统一社会信用代码：">
          <el-input style="width:490px;" size="small"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人：">
          <el-input style="width:240px;" size="small"></el-input>
        </el-form-item>
        <el-form-item label="联系人姓名：">
          <el-input style="width:240px;" size="small"></el-input>
        </el-form-item>
        <el-form-item label="联系人手机：">
          <el-input style="width:240px;" size="small"></el-input>
        </el-form-item>
        <el-form-item label="联系人身份证：">
          <el-input style="width:240px;" size="small"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话：">
          <el-input style="width:240px;" size="small"></el-input>
        </el-form-item>
        <el-form-item label="邮编：">
          <el-input style="width:240px;" size="small"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;" label="电子邮箱：">
          <el-input style="width:240px;" size="small"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;" label="通讯地址：">
          <el-input style="width:240px;" size="small"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;" label="企业/项目地址：">
          <el-select style="width:240px;" size="small"></el-select>
        </el-form-item>
        <el-form-item label="是否固定资产投资项目：">
          <el-select style="width:240px;" size="small"></el-select>
        </el-form-item>
        <el-form-item label="投资项目代码：">
          <el-input size="small" style="width:150px;"></el-input>&nbsp;
          <el-button type="info" plain size="small">验证项目代码</el-button>&nbsp;
          <el-select size="small" style="width:100px;"></el-select>
        </el-form-item>
        <el-form-item style="width:100%;" label="中心编码：">
          <el-input size="small" style="width:150px;"></el-input>&nbsp;
          <el-button type="info" plain size="small">中心编码选择</el-button>
        </el-form-item>
        <el-form-item style="width:100%;" label="备注：">
          <el-input style="width:240px;" size="small" type="textarea" :rows="5"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;" label="通知书：">
          <el-checkbox v-model="data.a">打印收件凭证</el-checkbox>
        </el-form-item>
        <el-form-item style="width:100%;" label="短信发送：">
          <el-checkbox disabled v-model="data.b">是否发送受理短信通知给申报者</el-checkbox>
        </el-form-item>
        <br>
      </el-form>
    </el-card>
    <el-card class="mgTop24 pd24">
      <div class="top-flex-area">
        <span>匹配共享库材料</span>
      </div>
      <div class="mg24">
        <el-table class="list-table">
          <el-table-column label="序号"></el-table-column>
          <el-table-column label="材料名称"></el-table-column>
          <el-table-column label="材料形式"></el-table-column>
          <el-table-column label="份数"></el-table-column>
          <el-table-column label="备注"></el-table-column>
          <el-table-column label="收取方式"></el-table-column>
          <el-table-column label="文件操作"></el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-card class="mgTop24">
      <div class="top-flex-area pd24" style="padding-bottom:0;">
        <span></span>
        <div>
          <el-button size="small">取消</el-button>
          <el-button size="small" type="primary" @click="showShouLi=true">受理</el-button>
        </div>
      </div>
    </el-card>
    <modal-showli :visible.sync="showShouLi"></modal-showli>
  </div>
</template>
<script>
import modalShowli from './components/modalShowli'
export default {
  components:{modalShowli},
  data() {
    return {
      showShouLi: false,
      data: {}
    };
  }
};
</script>

