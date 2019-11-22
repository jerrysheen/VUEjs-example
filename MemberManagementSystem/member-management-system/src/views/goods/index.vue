<template>
  <div>
    <!--  search bar-->
    <el-form
      :inline="true"
      :model="formInline"
      ref="formInline"
      class="demo-form-inline"
      style="margin-top:20px; margin-left:10px;"
    >
      <!--需要指定字段名prop才会可以重置 -->
      <el-form-item prop="id">
        <el-input v-model="formInline.id" placeholder="ID"></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          :readonly="true"
          v-model="formInline.name"
          placeholder="姓名"
          @click.native="inputClick"
        ></el-input>
      </el-form-item>
      <el-form-item prop="payType">
        <el-select v-model="formInline.payType" placeholder="支付类型">
          <el-option label="现金" value="cash"></el-option>
          <el-option label="微信" value="wechat"></el-option>
          <el-option label="支付宝" value="alipay"></el-option>
          <el-option label="银行卡" value="card"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchSubmit">查询</el-button>
        <el-button type="primary" @click="serachReset('formInline')"
          >重置</el-button
        >
        <el-button type="primary" @click="addNewMember('newMember')"
          >新增</el-button
        >
      </el-form-item>
    </el-form>

    <!--bumping dialog-->
    <!-- Form -->
      <el-dialog title="新增会员" :visible.sync="dialogFormVisible">
         <member :isShowOnFatherComponent="true"></member>
      </el-dialog>
  </div>
</template>

<script>
import Member from '@/views/member'
export default {
   components:{Member},
   data() {
      return {
         formInline: {
         id: "",
         name: "",
         payType: ""
         },
         dialogFormVisible: false,
    };
  },
   methods: {
      inputClick() {
         this.dialogFormVisible = true
         console.log("input event");
      },
      searchSubmit() {},
      searchReset(text) {},
      addNewMember(text) {}
   }
};
</script>

<style scoped></style>
