/* ============= 粉絲比例圖-圓餅圖-Pie Special Label ===============*/
var colors = ['#9b92fe', '#7ba5c6', '#1f62ea', '#1990e9', '#49ddfc', '#6bdafe', '#39f381', '#e9e37c'];
var fanPie = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    // legend: {
    //     orient: 'horizontal',
    //     right: '10%',
    //     x: 'left',
    //     y: 'top',
    //     data: ['一芳','頂新','萊爾富','Nike','肉多多火鍋','全聯','Toyata汽車','美聯社','四海遊龍']
    // },
    series: [
        {
            name: '類別来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '45%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            //color: colors,
            data: [
                { value: 660, name: '網粉', selected:true },
                { value: 210, name: '網黑' },
                { value: 300, name: '中立' }
            ]
        },
        {
            name: '數據来源',
            type: 'pie',
            radius: ['64%', '85%'],
            //color: colors,
            label: {
                normal: {
                formatter: '{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                    hr: {
                        //borderColor: '#aaa',
                        //width: '100%',
                        //borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 14,
                        lineHeight: 25
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            }
        },
        data: [
                { value: 220, name: '一芳' },
                { value: 220, name: '頂新' },
                { value: 220, name: '萊爾富' },
                { value: 70, name: 'Nike' },
                { value: 70, name: '肉多多火鍋' },
                { value: 70, name: '全聯' },
                { value: 100, name: 'Toyata汽車' },
                { value: 100, name: '美聯社' },
                { value: 100, name: '四海遊龍' }
            ]
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
    var color = ['black', 'pink'];
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
        color: color[0]
    };
}






/* ============= init charts ===============*/
echarts.init(document.getElementById('fanPie')).setOption(fanPie);
echarts.init(document.getElementById('fanInfluence')).setOption(fanInfluence);
echarts.init(document.getElementById('fanScatter')).setOption(fanScatter);