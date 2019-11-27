<template>
  <div>
      <!--  search bar-->
    <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline" 
      style="margin-top:20px; margin-left:10px;"
    >
      <!--需要指定字段名prop才会可以重置 -->
      <el-form-item prop= "id" v-if="!isShowOnFatherComponent"> 
        <el-input v-model="formInline.id" placeholder="ID"></el-input>
      </el-form-item>
      <el-form-item prop= "name">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item prop= "payType" v-if="!isShowOnFatherComponent">
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
          v-if="!isShowOnFatherComponent"
        >重置</el-button>
        <el-button type="primary" @click="addNewMember('newMember')"
          v-if="!isShowOnFatherComponent"
        >新增</el-button>
      </el-form-item>
    </el-form >
    <!--  main table-->
          <el-table :data="list" height="350" border style="width: 100%"
            highlight-current-row
            @current-change="handleTableColumnClick"
          >
            <el-table-column prop="cardNum" label="ID" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column label="支付类型" width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{
                  scope.row.payType | payTypeTrans
                }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="地址"
            v-if="!isShowOnFatherComponent"> </el-table-column>
            <el-table-column label="操作"
            v-if="!isShowOnFatherComponent">
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
          <div class="block">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pageSize"
              :layout="!isShowOnFatherComponent?'prev, pager, next':'total, prev, pager, next'"
              :total="total"
            >
            </el-pagination>
          </div>

          <!--bumping dialog-->
          <!-- Form -->
          <el-dialog title="新增会员" :visible.sync="dialogFormVisible" >
            <el-form :rules="rules" ref="newMember" :model="formInline" style="label-position:right;">
              <el-form-item prop="id" label="会员账号" :label-width="formLabelWidth">
                <el-input v-model="formInline.id" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="name" label="会员姓名" :label-width="formLabelWidth">
                <el-input v-model="formInline.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="payType" label="支付方式" :label-width="formLabelWidth">
                <el-select v-model="formInline.payType" placeholder="支付方式">
                  <el-option label="现金" value="cash"></el-option>
                  <el-option label="微信" value="wechat"></el-option>
                  <el-option label="支付宝" value="alipay"></el-option>
                  <el-option label="银行卡" value="card"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="action === 'add'?submitNewMember('newMember'):updateMemberData('newMember')">确 定</el-button>
            </div>
          </el-dialog>

        </div>
      </template>

<script>
      import memberApi from "@/api/member.js";

      const typeList = ["现金", "微信", "支付宝", "银行卡"]
      const typeValue = ["cash","wechat","alipay","card"]

      export default {
        props:{isShowOnFatherComponent:Boolean},
        created() {
          //初始化获取列表数据
          this.fetchData();
        },
        data() {
          return {
            formInline: {
              id:'',
              name: '',
              payType: '',
            },
            list: [],
            total: 0, // total data number
            currentPage: 1,
            pageSize: 10,
            searchMap: {}, // search by certain requirement
            // param for the dialog form used for add new member
            dialogFormVisible: false,
            formLabelWidth: '120px',
            typeValue : typeValue,
            action: "", // define which action currently processed for eg.(update/ add new)
            rules: {
                id: [
                    { required: true, message: "please enter your id", trigger: 'blur'  }
                ],
                name: [
                    { required: true, message: "please enter your name", trigger: 'blur'  }
                ],
                payType: [
                    { required: true, message: "please select your paytype", trigger: 'blur'  }
                ],    
            },

          };
        },
        methods: {
          fetchData() {
            memberApi
              .search(this.currentPage, this.pageSize, this.searchMap)
              .then(response => {
                const resp = response.data.data;
                this.list = resp.rows
                this.total = resp.total
                console.log(resp);
              });
          },
          // button method for search
          searchSubmit() {
            this.searchMap = this.formInline
            this.fetchData()
            console.log('submit!', this.formInline.payType);
            console.log('searchMap',this.formInline)
          },
          serachReset(formName) {
            console.log("reset!")
            this.$refs[formName].resetFields();
          },
          // button method for delete user data
          handleEdit(index, row) {
            this.action = "edit"
            this.dialogFormVisible = true
            const editTargetID = this.list[index].id
            console.log(editTargetID)
            memberApi.getMemberById(editTargetID)
            .then((response=>{
              //console.log(response.data.data[0])
              const data = response.data.data[0]
              const {id , name , payType} = data
              const payTypeTrans = this.typeValue[payType-1]
              console.log("type",payTypeTrans)
              this.formInline = { id, name ,payTypeTrans}
              this.formInline.payType = payTypeTrans

            }))
            //console.log(index, row);
          },
          handleDelete(index, row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.list.splice(index, 1);
                // Api send delete method
                console.log(index, row);
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });  
            })
          },
          // pagination function
          handleCurrentChange(val) {
            this.pagination = this.val
            this.fetchData()
          },
          //main page add new member button, once you clicked this, the form will be reset
          addNewMember(formName){
            this.dialogFormVisible = true
            this.action = "add"
            // asysn operation
            this.$nextTick(()=>{
              //console.log(typeof(this.$refs))
              this.$refs[formName].resetFields();
            })
            
          },
          // dialog button for add new member
          submitNewMember(formName){
            console.log("submit!|")           
            this.$refs[formName].validate((valid) => {
                if (valid) {
                  // send http request to server
                  this.dialogFormVisible = false
                } else {
                  this.$message("please fill all the blank")
                  console.log("wrong")
                }
            })
          },
          updateMemberData(formName){
            console.log("submit!|")           
            this.$refs[formName].validate((valid) => {
                if (valid) {
                  // send http request to server
                  memberApi.updateEdit(this.formInline)
                    .then((response)=>{
                        console.log(response.data.message)
                    })
                  this.dialogFormVisible = false
                } else {
                  this.$message("please fill all the blank")
                  console.log("wrong")
                }
            })
          },
          handleTableColumnClick(val){
            console.log(val.id)
            this.$emit('itemSelect', val)
          }
        },
        filters: {
          payTypeTrans: function(value) {
            return typeList[parseInt(value) - 1];
          }
        }
      };
</script>

<style scoped></style></div
></template>
