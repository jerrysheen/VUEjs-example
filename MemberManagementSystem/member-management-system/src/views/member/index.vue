<template>
  <div>
    <el-table :data="list" height="350" border style="width: 100%">
      <el-table-column prop="cardNum" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column label="支付类型" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{payType|payTypeTrans}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import memberApi from "@/api/member.js";

export default {
  created() {
    //初始化获取列表数据
    this.fetchData();
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    fetchData() {
      memberApi.getList().then(response => {
        const resp = response.data.data;
        console.log(resp);
        this.list = resp;
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.list.splice(index, 1);
      console.log(index, row);
    }
  },
  filters: {
    payTypeTrans: function(value) {
      const typeList = ["现金", "微信", "支付宝", "银行卡"];
      return typeList[parseInt(value)];
    }
  }
};
</script>

<style scoped></style>
