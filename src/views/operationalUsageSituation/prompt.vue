<template>
  <div>
    <el-table :data="List" stripe style="width:95%;margin-left:7px" height="100%"  align="center" size="mini" :row-style="tableRowStyle" :header-row-style="headerStyle">
      <el-table-column prop="content" label="提示内容" align="center"> </el-table-column>
      <el-table-column prop="date" label="时间" align="center"> </el-table-column>
      <el-table-column prop="other" label="待补充" align="center"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [
        { id: 1, content: "内容1", date: "11/21 16:45:45", other: "11.1" },
        { id: 2, content: "内容2", date: "11/21 16:45:45", other: "11.1" },
        { id: 3, content: "内容3", date: "11/21 16:45:45", other: "11.1" },
      
        
      ],
    };
  },
  methods:{
    tableRowStyle(){
        return{
            color:"red",
           
        }
    },
    headerStyle(){
        return{
            color:"#409EFF",
     
            
        }
    }
  }
};
</script>

<style lang="scss" scoped>
 
</style>