<template>
  <!-- <div class="all">
    <div class="left">
      <div class="left-left">
        <el-radio v-model="leftbox.radio1" label="1" style="margin-top: 5px"
          >型号名称</el-radio
        ><br />
        <el-radio v-model="leftbox.radio2" label="0" style="margin-top: 5px"
          >型号名称</el-radio
        ><br />
        <el-radio v-model="leftbox.radio3" label="3" style="margin-top: 5px"
          >型号名称</el-radio
        ><br />
        <el-radio v-model="leftbox.radio4" label="0" style="margin-top: 5px"
          >型号名称</el-radio
        ><br />
        <el-radio v-model="leftbox.radio5" label="5" style="margin-top: 5px"
          >型号名称</el-radio
        ><br />
      </div>
      <div class="left-middle">
        <div><el-button size="mini">》</el-button></div>
        <div><el-button size="mini">《</el-button></div>
      </div>
      <div class="left-right">
        <el-radio v-model="rightbox.radio1" label="1" style="margin-top: 5px"
          >型号名称</el-radio
        ><br />
        <el-radio v-model="rightbox.radio2" label="0" style="margin-top: 5px"
          >型号名称</el-radio
        ><br />
        <el-radio v-model="rightbox.radio3" label="3" style="margin-top: 5px"
          >型号名称</el-radio
        ><br />
        <el-radio v-model="rightbox.radio4" label="0" style="margin-top: 5px"
          >型号名称</el-radio
        ><br />
        <el-radio v-model="rightbox.radio5" label="5" style="margin-top: 5px"
          >型号名称</el-radio
        ><br />
      </div>
    </div>

    <div class="right">
      <div class="right-left">
        <div >
          <div>匹配维修</div>
          <div class="btn">手动输入</div>
        </div>
       <div class="right-left-top">
          <div>选择数量</div>
          <div class="btn">手动输入</div>
        </div>

       <div class="right-left-top">
          <div>选择型号</div>
          <div class="btn">手动输入</div>
        </div>
      </div>
      <div class="right-right">
       
      <el-button type="primary" size="mini" style="width:80px">生成</el-button>
      <el-button type="success" size="mini" style="width:80px;margin-right:13px">保存</el-button>
 
      </div>
    </div>
  </div> -->
  <div class="box">
    <div class="top">
      <div class="top-left">
        <span class="top-left-left">任务编号：</span>5678
      </div>
      <div class="top-right">任务起始时间：2022.9.10</div>
    </div>

    <div class="bottom">
      <div class="bottom-left">
        <span> 任务持续时长：</span>
        <div class="btn1"></div>
        <div class="btn2"></div>
      </div>
      <div class="bottom-left">
        <span> 任务持续时长：</span>
        <div class="btn1"></div>
        <div class="btn2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskDetail",
  data() {
    return {
      leftbox: {
        radio1: "1",
        radio2: "6",
        radio3: "3",
        radio4: "6",
        radio5: "5",
      },
      rightbox: {
        radio1: "6",
        radio2: "6",
        radio3: "6",
        radio4: "6",
        radio5: "6",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  color: #fff;

  .top {
    display: flex;
    justify-content: space-around;
     
  }
  .bottom {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    .bottom-left {
      display: flex;
      .btn1 {
        width: 50px;
        height: 20px;
        background-color: #fff;
      }
      .btn2 {
        width: 50px;
        height: 20px;
        background-color: #fff;
        opacity: 0.5;
      }
    }
  }
}
// .all {
//   display: flex;
//   height: 100%;

//   justify-content: space-between;
//   .left {
//     display: flex;

//     justify-content: space-between;
//     width: 60%;
//     height: 100%;
//     // background-color: red;
//     .left-left {
//       width: 40%;
//       height: 100%;
//       border-radius: 10%;
//       border: 1px solid #fff;
//       box-sizing: border-box;
//     }
//     .left-middle {
//       width: 15%;
//       height: 100%;

//       display: flex;
//       flex-direction: column;
//       justify-content: space-around;
//     }
//     .left-right {
//       width: 40%;
//       height: 100%;
//       border-radius: 10%;
//       border: 1px solid #fff;
//       box-sizing: border-box;
//     }
//   }
//   .right {
//     width: 35%;
//     height: 100%;
//     font-size: 10px;
//       color: #fff;
//     display: flex;
//     justify-content: space-between;
//     .right-left {
//       width: 55%;
//       height: 100%;
//     //   border: 1px solid #fff;
//       .right-left-top{
//         margin-top: 5px;
//       }
//     }
//     .right-right {
//       width: 40%;
//       height: 100%;
//     //   border: 1px solid #fff;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-around;
//       align-items: center;
//     }
//   }
// }

// .btn {
//   width: 100%;
//   height: 18px;
//   color: #fff;
//   border: 1px solid #07dbff;
//   text-align: center;
//   box-shadow: 0 0 10px 2px #07dbff inset;
//   line-height: 18px;
//   box-sizing: border-box;
// }
</style>