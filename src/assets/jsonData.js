/**
 * 数据说明
 *  leftCollapse: 溯源管理 表格数据
 * rightCollapse: 操作提示 表格数据
 */
const list1 = [];
const list2 = [];
for (let i = 0; i < 20; i++) {
  list1.push({
    user: i + 1,
    name: "系统维护",
    code: "XXX"
  });
  list2.push({
    taskName: i + 1,
    suggest: "系统维护",
    supplement: "XXX"
  });
}
export const leftCollapse = {
  unitOutList: list1,
}
export const rightCollapse = {
  unitOutList: list2,
}


/**
 * 数据说明
 *  taskFlowPlan: 任务流程计划页面
 *    processPlan: 任务流程 数据
 *    flowData: 使用分布 数据
 */
export const taskFlowPlan = {
  processPlan: {
    baseLine: [4, 1.5, 2, 3, 4],
    one: [3.5, 4.2, 5, "-", "-"],
    two: ["-", "-", "-", 6, 7],
    yAxis: ["流程1", "流程2", "流程3", "流程4", "流程5"],
  },
  flowData: {
    riskFactor: 86.4,
    operationTime: {
      xAxis: ["工作1", "工作2", "工作3", "工作4", "工作5", "工作6", "工作7"],
      yAxis: [3, 5, 20, 15, 25, 10, 15]
    },
    personnelDistribution: {
      xAxis: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      yAxis: ["55", "47", "42", "42", "50", "33", "50", "48", "45", "45", "50", "35", ]
    }
  },
}

/**
 * 数据说明
 *  taskPlanMag: 任务规划管理页面
 *    taskOverview: 任务规划 数据
 *    useDistribution: 使用分布 数据
 */
 export const taskPlanMag = {
  taskOverview: {
    baseLine: [4, 1.5, 2, 3, 4],
    one: [3.5, 4.2, 5, "-", "-"],
    two: ["-", "-", "-", 6, 7],
    yAxis: [1234, 2345, 3456, 4567, 5678],
  },
  useDistribution: {
    optionZ: [
      { value: 20, name: "不能用" },
      { value: 18, name: "战备" },
      { value: 49, name: "值班" },
      { value: 13, name: "未用" },
    ],
    optionS: [
      { value: 1048, name: "维修" },
      { value: 735, name: "贮存" },
      { value: 580, name: "值班" },
      { value: 484, name: "战备" },
    ]
  }
 }

 /**
 * 数据说明
 *  operationalUsageSituation: 作战使用态势页面
 *    middleBar: 作战使用态势柱状图 数据 沿用 taskOverview
 *    productDetail: 产品详情 数据
 *    taskDetail: 任务详情 数据
 *    useDistribution :使用分布 数据 沿用taskPlanMag
 */
const productDetailList= []
const taskDetailList= []
for (let i = 0; i < 5; i++) {
  const obj = {
    code: "12345",
    productName: "文字可修改",
    productClass: "文字可修改",
    productPosition: "文字可修改",
    startTime: "2021/03/06",
    endTime: "2021/03/06",
    useProduct: "文字可修改",
    useTime: "2021/03/06",
  };
  productDetailList.push(obj);
  taskDetailList.push(obj)
}

 export const operationalUsageSituation={
  productDetailList,
  taskDetailList,
 }

  /**
 * 数据说明
 *  comprehensiveAssessment: 综合效能评估 页面
 *    middleBar: 雷达图 数据  
 *    taskDetail: 分析强度 数据
 *    taskTime1: 风险系数 数据
 *    taskTime2 :使用时域 数据  
 *    useDistribution：使用分布 数据
 */

   export const comprehensiveAssessment={
    middleBar:{
      legendData: ["2016", "2017", "2018"],
      indicatorData: [
        { name: "战备效能", max: 70 },
        { name: "值班效能", max: 50 },
        { name: "反击效能", max: 50 },
        { name: "保障效益", max: 1 },
        { name: "任务饱和度", max: 100 },
      ],
      value1:[15.821, 11.454, 8.210, 0.762, 71.25],
      value2: [24.362, 15.372, 11.864, 0.821, 85.36],
      value3:[31.234, 24.537, 16.722, 0.751, 91.35],
    },
    taskDetail:{
      xAxisData:["1", "2", "3", "4", "5", "6","7","8","9","10"],
      series1: [65,49, 4,84,55,81,36,32,59,3, ],
      series2: [150, 232, 201, 154, 190, 330, 410,54,69,78]
    },
    taskTime1:{
      xAxisData: ["5月份", "6月份", "7月份", "8月份", "9月份", "10月份"],
      value1: [320, 332, 301, 334, 390, 330, 320, 110, 150, 250, 210, 100],
      value2: [150, 232, 201, 154, 190, 330, 410, 510, 450, 750, 910, 600],
      value3: [
        862, 1018, 964, 1026, 1679, 1600, 1570, 1110, 1250, 2250, 2110,
        1000,
      ]
    },
    taskTime2:{
      xAxisData:  ["1", "2", "3", "4", "5", "6", "7"],
      value1:[120, 132, 101, 134, 90, 230, 210],
      value2:  [220, 182, 191, 234, 290, 330, 310],
      value3: [150, 232, 201, 154, 190, 330, 410],
    },
    useDistribution:{
      Zdata:89,
      Sdata:65,
    }
    
   }