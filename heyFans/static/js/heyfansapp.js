/* ============= 粉絲輪廓-長條圖-坐標軸刻度 ===============*/

var fanProfile = {
  color: ['#fe816d','#f89878a'],
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
          data : ['網粉','網黑'],
          axisTick: {
            alignWithLabel: true
          }
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
  ],
  series : [
      {
        name:'直接访问',
          type:'bar',
          barWidth: '60%',
          data:[54, 8]
      }
    ]
}

/* ============= 粉專成長-長條圖-坐標軸刻度 ===============*/
var fanPageGrowth = {
  title: {
    text: '粉黑變化圖',
    subtext: '數量'
},
tooltip: {
    trigger: 'axis'
},
legend: {
    data:['網粉','網黑']
},
toolbox: {
    show: false,
    feature: {
        dataZoom: {
            yAxisIndex: 'none'
        },
        dataView: {readOnly: false},
        magicType: {type: ['line', 'bar']},
        restore: {},
        saveAsImage: {}
    }
},
xAxis:  {
    type: 'category',
    boundaryGap: false,
    data: ['一月','二月','二月','三月','四月','五月','六月']
},
yAxis: {
    type: 'value',
    axisLabel: {
        formatter: '{value}'
    }
},
series: [
    {
        name:'網粉',
        type:'line',
        data:[11, 11, 15, 13, 10, 13, 12],
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    },
    {
        name:'網黑',
        type:'line',
        data:[3, 1.5, 2, 1, 3, 2, 5],
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    }
]
}

/* ============= init charts ===============*/
$(function () {
    $("#featureListsUl li:first-child").addClass("isActive");
    echarts.init(document.getElementById('fanProfile')).setOption(fanProfile);
    echarts.init(document.getElementById('fanPageGrowth')).setOption(fanPageGrowth);
});
