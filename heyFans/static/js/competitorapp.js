/* ============= 粉絲比例圖-圓餅圖-Pie Special Label ===============*/
// var weatherIcons = {
//   'Sunny': './data/asset/img/weather/sunny_128.png',
//   'Cloudy': './data/asset/img/weather/cloudy_128.png',
//   'Showers': './data/asset/img/weather/showers_128.png'
// };

var fanPie = {
  title: {
      text: '粉絲概觀',
      //subtext: '虚构数据',
      left: 'center'
  },
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      bottom: 10,
      left: 'center',
      data: ['網黑', '網粉','xxx']
  },
  series : [
      {
          type: 'pie',
          radius : '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data:[
              {
                  value:1548,
                  name: '網黑',
                  label: {
                      normal: {
                          formatter: [
                              '{title|{b}}{abg|}',
                              '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                              '{hr|}',
                              '  {Sunny|}{value|202}{rate|55.3%}',
                              '  {Cloudy|}{value|142}{rate|38.9%}',
                              '  {Showers|}{value|21}{rate|5.8%}'
                          ].join('\n'),
                          backgroundColor: '#eee',
                          borderColor: '#777',
                          borderWidth: 1,
                          borderRadius: 4,
                          rich: {
                              title: {
                                  color: '#eee',
                                  align: 'center'
                              },
                              abg: {
                                  backgroundColor: '#333',
                                  width: '100%',
                                  align: 'right',
                                  height: 25,
                                  borderRadius: [4, 4, 0, 0]
                              },
                              Sunny: {
                                  height: 30,
                                  align: 'left',
                                  backgroundColor: {
                                      //image: weatherIcons.Sunny
                                  }
                              },
                              Cloudy: {
                                  height: 30,
                                  align: 'left',
                                  backgroundColor: {
                                     // image: weatherIcons.Cloudy
                                  }
                              },
                              Showers: {
                                  height: 30,
                                  align: 'left',
                                  backgroundColor: {
                                      //image: weatherIcons.Showers
                                  }
                              },
                              weatherHead: {
                                  color: '#333',
                                  height: 24,
                                  align: 'left'
                              },
                              hr: {
                                  borderColor: '#777',
                                  width: '100%',
                                  borderWidth: 0.5,
                                  height: 0
                              },
                              value: {
                                  width: 20,
                                  padding: [0, 20, 0, 30],
                                  align: 'left'
                              },
                              valueHead: {
                                  color: '#333',
                                  width: 20,
                                  padding: [0, 20, 0, 30],
                                  align: 'center'
                              },
                              rate: {
                                  width: 40,
                                  align: 'right',
                                  padding: [0, 10, 0, 0]
                              },
                              rateHead: {
                                  color: '#333',
                                  width: 40,
                                  align: 'center',
                                  padding: [0, 10, 0, 0]
                              }
                          }
                      }
                  }
              },
              {value:535, name: '網粉',label: {
                      normal: {
                          formatter: [
                              '{title|{b}}{abg|}',
                              '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                              '{hr|}',
                              '  {Sunny|}{value|202}{rate|55.3%}',
                              '  {Cloudy|}{value|142}{rate|38.9%}',
                              '  {Showers|}{value|21}{rate|5.8%}'
                          ].join('\n'),
                          backgroundColor: '#eee',
                          borderColor: '#777',
                          borderWidth: 1,
                          borderRadius: 4,
                          rich: {
                              title: {
                                  color: '#eee',
                                  align: 'center'
                              },
                              abg: {
                                  backgroundColor: '#333',
                                  width: '100%',
                                  align: 'right',
                                  height: 25,
                                  borderRadius: [4, 4, 0, 0]
                              },
                              Sunny: {
                                  height: 30,
                                  align: 'left',
                                  backgroundColor: {
                                      //image: weatherIcons.Sunny
                                  }
                              },
                              Cloudy: {
                                  height: 30,
                                  align: 'left',
                                  backgroundColor: {
                                      //image: weatherIcons.Cloudy
                                  }
                              },
                              Showers: {
                                  height: 30,
                                  align: 'left',
                                  backgroundColor: {
                                      //image: weatherIcons.Showers
                                  }
                              },
                              weatherHead: {
                                  color: '#333',
                                  height: 24,
                                  align: 'left'
                              },
                              hr: {
                                  borderColor: '#777',
                                  width: '100%',
                                  borderWidth: 0.5,
                                  height: 0
                              },
                              value: {
                                  width: 20,
                                  padding: [0, 20, 0, 30],
                                  align: 'left'
                              },
                              valueHead: {
                                  color: '#333',
                                  width: 20,
                                  padding: [0, 20, 0, 30],
                                  align: 'center'
                              },
                              rate: {
                                  width: 40,
                                  align: 'right',
                                  padding: [0, 10, 0, 0]
                              },
                              rateHead: {
                                  color: '#333',
                                  width: 40,
                                  align: 'center',
                                  padding: [0, 10, 0, 0]
                              }
                          }
                      }
                  }},
              {value:510, name: 'xxx',
                  label: {
                      normal: {
                          formatter: [
                              '{title|{b}}{abg|}',
                              '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                              '{hr|}',
                              '  {Sunny|}{value|202}{rate|55.3%}',
                              '  {Cloudy|}{value|142}{rate|38.9%}',
                              '  {Showers|}{value|21}{rate|5.8%}'
                          ].join('\n'),
                          backgroundColor: '#eee',
                          borderColor: '#777',
                          borderWidth: 1,
                          borderRadius: 4,
                          rich: {
                              title: {
                                  color: '#eee',
                                  align: 'center'
                              },
                              abg: {
                                  backgroundColor: '#333',
                                  width: '100%',
                                  align: 'right',
                                  height: 25,
                                  borderRadius: [4, 4, 0, 0]
                              },
                              Sunny: {
                                  height: 30,
                                  align: 'left',
                                  backgroundColor: {
                                      //image: weatherIcons.Sunny
                                  }
                              },
                              Cloudy: {
                                  height: 30,
                                  align: 'left',
                                  backgroundColor: {
                                      //image: weatherIcons.Cloudy
                                  }
                              },
                              Showers: {
                                  height: 30,
                                  align: 'left',
                                  backgroundColor: {
                                      //image: weatherIcons.Showers
                                  }
                              },
                              weatherHead: {
                                  color: '#333',
                                  height: 24,
                                  align: 'left'
                              },
                              hr: {
                                  borderColor: '#777',
                                  width: '100%',
                                  borderWidth: 0.5,
                                  height: 0
                              },
                              value: {
                                  width: 20,
                                  padding: [0, 20, 0, 30],
                                  align: 'left'
                              },
                              valueHead: {
                                  color: '#333',
                                  width: 20,
                                  padding: [0, 20, 0, 30],
                                  align: 'center'
                              },
                              rate: {
                                  width: 40,
                                  align: 'right',
                                  padding: [0, 10, 0, 0]
                              },
                              rateHead: {
                                  color: '#333',
                                  width: 40,
                                  align: 'center',
                                  padding: [0, 10, 0, 0]
                              }
                          }
                      }
                  }
              },
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
};

/* ============= 粉絲影響力-堆疊圖-堆疊柱狀圖 ===============*/

fanInfluence.title = '粉專影響力';

fanInfluence = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['讚','留言','分享數']
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
            data : ['粉專A','粉專B']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'讚',
            type:'bar',
            stack: '讚',
            data:[320, 332, 301]
        },
        {
            name:'留言',
            type:'bar',
            stack: '讚',
            data:[120, 132, 101]
        },
        {
            name:'分享數',
            type:'bar',
            stack: '讚',
            data:[220, 182, 191]
        }
    ]
};

/* ============= 離散圖分析-離散圖-Process of Clustering ===============*/

var data = [
    //中立(2,2)
    //A粉B粉
    [3.275154, 2.957587],
    [2.852435, 3.547351],
    [2.682252, 4.007573],
    [2.17768, 2.387793],
    [2.441611, 3.444826],
    [3.625746, 2.119041],

    //A粉B黑
    [4.078973, -2.552013],
    [3.920969, -2.917485],

    // A黑B粉
    [-3.912363, 4.325108],
    [-3.087776, 3.878713],
    [-3.578973, 3.552013],
    [-3.720969, 4.917485],

    // A黑B黑
    [-5.565978, -3.256985],
    [-3.344465, -2.603513],


];

var clusterNumber = 4;
// See https://github.com/ecomfe/echarts-stat
var step = ecStat.clustering.hierarchicalKMeans(data, clusterNumber, true);
var result;

var fanScatter = {
    timeline: {
        top: 'center',
        right: 35,
        height: 300,
        width: 10,
        inverse: true,
        playInterval: 2500,
        symbol: 'none',
        orient: 'vertical',
        axisType: 'category',
        //autoPlay: true,
        label: {
            normal: {
                show: false
            }
        },
        data: []
    },
    baseOption: {
        title: {
            //text: 'Process of Clustering',
            //subtext: 'By ecStat.hierarchicalKMeans',
            //sublink: 'https://github.com/ecomfe/echarts-stat',
            //left: 'center'
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            type: 'scatter'
        }]
    },
    options: []
};

for (var i = 0; !(result = step.next()).isEnd; i++) {

    fanScatter.options.push(getOption(result, clusterNumber));
    fanScatter.timeline.data.push(i + '');

}

function getOption(result, k) {
    var clusterAssment = result.clusterAssment;
    var centroids = result.centroids;
    var ptsInCluster = result.pointsInCluster;
    var color = ['blcak'];
    var series = [];
    var name ='';
    for (i = 0; i < k; i++) {
        if (i === 0 ) {
            name = '網粉'
        }else {
            name = '網黑'
        }
        series.push({
            name: name,
            type: 'scatter',
            //animation: false,
            data: ptsInCluster[i],
            markPoint: {
                symbolSize: 29,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        position: 'top',
                        formatter: function (params) {
                        //   return Math.round(params.data.coord[0] * 100) / 100 + '  ' +
                        //         Math.round(params.data.coord[1] * 100) / 100 + ' ';
                        },
                        textStyle: {
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.7
                    }
                },
                data: [{
                   // coord: centroids[i]
                }]
            }
        });
    }

    return {
        tooltip: {
           trigger: 'axis',
            axisPointer: {
               type: 'cross'
            }
        },
        series: series,
        color: color
    };
}






/* ============= init charts ===============*/
echarts.init(document.getElementById('fanPie')).setOption(fanPie);
echarts.init(document.getElementById('fanInfluence')).setOption(fanInfluence);
echarts.init(document.getElementById('fanScatter')).setOption(fanScatter);