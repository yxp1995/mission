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
      { value: 20, name: "贮存" },
      { value: 18, name: "战备" },
      { value: 49, name: "值班" },
      { value: 13, name: "缺套" },
      { value: 23, name: "维修" },
      { value: 33, name: "返厂" },
    ],
    optionS: [
      { value: 20, name: "贮存" },
      { value: 18, name: "战备" },
      { value: 49, name: "值班" },
      { value: 13, name: "缺套" },
      { value: 23, name: "维修" },
      { value: 33, name: "返厂" },
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
    code: "220403",
    productName: "X枚X型试验",
    productClass: "实战实用",
    productPosition: "飞行实验",
    startTime: "20220422",
    endTime: "20220515",
    useProduct: "文字可修改",
    useTime: "2021/03/06",
    des:"拟打击X目标"
  };

 

  taskDetailList.push(obj)
}

for (let i = 0; i < 5; i++) {
  const obj2 = {
    code: "220403",
    productType: "E型",
    position1: "X舰",
    time1: "2022-04-03",
    time2: "2022-04-03",
    time3: "2022-04-03",
    position2: "ZBW",
    use: "0.864",
    des:"已中修"

  };
  productDetailList.push(obj2);
}

 export const operationalUsageSituation={
  productDetailList,
  taskDetailList,
  middleBar:{
    baseLine: [4, 1.5, 2, 3, 4],
    one: [3.5, 4.2, 5, "-", "-"],
    two: ["-", "-", "-", 6, 7],
    yAxis: ["实战实用1", "巡逻值班2", "接送产品3", "贮存保障4", "考核训练5"],
  }
 }

  /**
 * 数据说明
 *  comprehensiveAssessment: 综合效能评估 页面
 *    middleBar: 雷达图 数据  
 *    taskDetail: 任务强度分析 数据
 *    taskTime1: 动用频次 数据
 *    taskTime2 :风险系数 数据  
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
      xAxisData:["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15"],
      series1: [65,49, 4,84,55,81,36,32,59,3, 54,39,4,0,1],
      series2: [150, 232, 201, 154, 190, 330, 410,54,69,78]
    },
    taskTime1:{
      xAxisData:  ["01", "02", "03", "04", "05", "06", "07","08","09","10","11","12"],
      value1:[10, 16, 6, 8, 6, 5, 2,10,10,7,20,19],
      value2:  [7, 20, 19, 1, 3, 14, 18,8,11,10,3,11],
      value3: [8, 6, 5, 2, 10, 10, 7,20,19,1,3,14],
    },
    taskTime2:{
      xAxisData: ["190102", "190302", "190401", "190503", "190602", "190704","190802","191005","191104"],
      value1: [15.23, 31.34, 25.26, 9.73, 10.83, 19.23, 34.32, 29.43, 23.83 ],
    },
    useDistribution:{
      Zdata:89,
      Sdata:65,
    }
    
   }