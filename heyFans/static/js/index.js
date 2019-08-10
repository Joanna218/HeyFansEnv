// =====================紛絲比例圖==================================
var ctx = document.getElementById("fansDoughnut").getContext("2d");
var fansDoughnut = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["網粉", "網黑", "假帳號"],
    datasets: [
      {
        data: [50, 20, 30], // 資料比例
        backgroundColor: ["#fe816d", "#89878a", "#d16c5d"],
        borderColor: "#787775",
        borderWidth: 1,
        hoverBackgroundColor: ["red", "blue", "orange"]
      }
    ]
  },
  options: {
    cutoutPercentage: 80
  }
});
// =====================心情比例圖==================================
var ctx = document.getElementById("moodBar").getContext("2d");
var moodBar = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["讚", "大心", "哈", "哇", "嗚", "怒"],
    datasets: [
      {
        label: "心情回應分布狀況",
        data: [50, 20, 30, 12, 34, 25, 10], // 資料比例
        backgroundColor: [
          "#787bf2",
          "#f86260",
          "#fad14c",
          "#64ae7d",
          "#61cef6",
          "#f84c68"
        ],
        borderColor: "#787775",
        borderWidth: 1,
        hoverBackgroundColor: ["red", "blue", "orange"]
      }
    ]
  }
});

//取得d3顏色
var fill = d3.scaleOrdinal(d3.schemeCategory10);
//文字雲/關鍵字，及字型大小
var data = [
  { text: "加里山", size: 21 },
  { text: "文字雲", size: 18 },
  { text: "翠湖 螢火蟲", size: 17 },
  { text: "你好棒", size: 21 },
  { text: "我支持", size: 18 },
  { text: "韓流來襲", size: 28 },
  { text: "支持韓", size: 35 },
  { text: "永遠支持", size: 18 },
  { text: "翠湖 螢火蟲", size: 17 },
  { text: "加里山", size: 21 },
  { text: "文字雲", size: 18 },
  { text: "翠湖 螢火蟲", size: 4 },
  { text: "加里山", size: 11 },
  { text: "文字雲", size: 15 },
  { text: "翠湖 螢火蟲", size: 12 }
];
//取得呈現處的寬、高
var w = parseInt(d3.select("#tag").style("width"), 10);
var h = parseInt(d3.select("#tag").style("height"), 10);

d3.layout
  .cloud()
  .size([w, h])
  .words(data)
  .padding(2)
  .rotate(function() {
    return ~~(Math.random() * 2) * 90;
  })
  .rotate(function() {
    return 0;
  })
  .fontSize(function(d) {
    return d.size;
  })
  .on("end", draw)
  .start();

function draw(words) {
  d3.select("#tag")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g")
    .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")")
    .selectAll("text")
    .data(words)
    .enter()
    .append("text")
    .style("font-size", function(d) {
      return d.size + "px";
    })
    .style("font-family", "Microsoft JhengHei")
    .style("cursor", "pointer")
    .style("fill", function(d, i) {
      return fill(i);
    })
    .attr("text-anchor", "middle")
    .attr("transform", function(d) {
      return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    })
    .text(function(d) {
      return d.text;
    })
    .on("click", function(d) {
      window.open("https://www.google.com/search?q=" + d.text, "_blank");
    });
}
