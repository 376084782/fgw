<template>
  <div class="common-table search">
    <table>
      <tr>
        <td width="177" class="title">年 份</td>
        <td width="368">
          <el-date-picker size="small"></el-date-picker>
        </td>
        <td width="177" class="title">审批类型</td>
        <td width="368">
          <el-select size="small"></el-select>
        </td>
      </tr>
      <tr>
        <td class="title">编 号</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">项目代码</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
      <tr>
        <td class="title">原项目代码</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">中心受理号</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
      <tr>
        <td class="title">地区分类</td>
        <td>
          <el-select size="small"></el-select>
        </td>
        <td class="title">产业分类</td>
        <td>
          <el-select size="small"></el-select>
        </td>
      </tr>
      <tr>
        <td class="title">投资类型</td>
        <td>
          <el-select size="small"></el-select>
        </td>
        <td class="title">投资类型</td>
        <td>
          <el-select size="small"></el-select>
        </td>
      </tr>
      <tr>
        <td class="title">项目名称</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">项目统一代码</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
      <tr>
        <td class="title">建设单位</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">申报(计划管理)单位</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
    </table>

    <table v-if="isExpend" style="border-top:none;">
      <tr>
        <td width="177" class="title">登记时间</td>
        <td width="368">
          <el-date-picker size="small"></el-date-picker>
        </td>
        <td width="177" class="title">撤 销</td>
        <td width="368">
          <el-select size="small"></el-select>
        </td>
      </tr>
      <tr>
        <td class="title">前 期</td>
        <td>
          <el-select size="small"></el-select>
        </td>
        <td class="title">建设性质</td>
        <td>
          <el-select size="small"></el-select>
        </td>
      </tr>
      <tr>
        <td class="title">项目标记</td>
        <td>
          <el-select size="small"></el-select>
        </td>
        <td class="title">项目所属区域</td>
        <td>
          <el-select size="small"></el-select>
        </td>
      </tr>
      <tr>
        <td class="title">重 点</td>
        <td>
          <el-select size="small"></el-select>
        </td>
        <td class="title">保 密</td>
        <td>
          <el-select size="small"></el-select>
        </td>
      </tr>
      <tr>
        <td class="title">拟建地址</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">村 名</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
      <tr>
        <td class="title">资金来源</td>
        <td>
          <el-select size="small"></el-select>
        </td>
        <td class="title">三项指标</td>
        <td>
          <el-select size="small"></el-select>
        </td>
      </tr>
      <tr>
        <td class="title">建设内容</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">建设周期</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
      <tr>
        <td class="title">总 投 资</td>
        <td class="search-column">
          <div>
            <el-input class="w60" size="small"></el-input>&nbsp;-
            <el-input class="w60 mgRight10" size="small"></el-input>
            <el-radio v-model="searchData.a" label="1">万元</el-radio>
            <el-radio v-model="searchData.a" label="2">万美元</el-radio>
          </div>
        </td>
        <td class="title">其中:地价</td>
        <td class="search-column">
          <div>
            <el-input style="width:60px" size="small"></el-input>&nbsp;-
            <el-input style="width:60px;margin-right:8px;" size="small"></el-input>万元
          </div>
        </td>
      </tr>
      <tr>
        <td class="title">项目用地</td>
        <td class="search-column">
          <div>
            <el-input style="width:60px" size="small"></el-input>&nbsp;-
            <el-input style="width:60px;margin-right:8px;" size="small"></el-input>平方米
          </div>
        </td>
        <td class="title">新征用地</td>
        <td class="search-column">
          <div>
            <el-input style="width:60px" size="small"></el-input>&nbsp;-
            <el-input style="width:60px;margin-right:8px;" size="small"></el-input>平方米
          </div>
        </td>
      </tr>
      <tr>
        <td class="title">建筑面积</td>
        <td class="search-column">
          <div>
            <el-input style="width:60px" size="small"></el-input>&nbsp;-
            <el-input style="width:60px;margin-right:8px;" size="small"></el-input>平方米
          </div>
        </td>
        <td class="title">受理时间</td>
        <td class="search-column">
          <div>
            <el-date-picker style="width:250px;" type="daterange" size="small"></el-date-picker>
          </div>
        </td>
      </tr>
      <tr>
        <td class="title">法定代表人</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">联系电话</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
      <tr>
        <td class="title">项目联系人</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">联系电话</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
      <tr>
        <td class="title">经办人</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">处(科室负责人)</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
      <tr>
        <td class="title">部门主管领导</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">文号</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
      <tr>
        <td class="title">来文字号</td>
        <td>
          <el-input size="small"></el-input>
        </td>
        <td class="title">备注</td>
        <td>
          <el-input size="small"></el-input>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchData: {}
    };
  },
  props: ["isExpend"]
};
</script>
