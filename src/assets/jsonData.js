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