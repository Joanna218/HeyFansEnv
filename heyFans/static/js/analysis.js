// =====================紛絲比例圖==================================
var ctx = document.getElementById("fansDoughnut").getContext("2d");
var fansDoughnut = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["蔡英文", "韓國瑜"],
    datasets: [
      {
        x: "2016-12-25",
        y: 20,
        label: "網粉",
        data: [67.8],
        backgroundColor: "#fe816d" // green
      },
      {
        label: "網黑",
        data: [20.7],
        backgroundColor: "#89878a" // yellow
      },
      {
        label: "假帳號",
        data: [11.4],
        backgroundColor: "#d16c5d" // red
      }
    ]
  },
  options: {
    // cutoutPercentage: 80
    scales: {
      xAxes: [
        {
          stacked: true
        }
      ],
      yAxes: [
        {
          stacked: true
        }
      ]
    }
  }
});

// var myConfig = {
//   type: "ring",
//   plot: {
//     slice: "70%",
//     borderWidth: 0,
//     backgroundColor: "#FBFCFE",
//     valueBox: [
//       {
//         type: "all",
//         text: "%t",
//         placement: "out"
//       },
//       {
//         type: "all",
//         text: "%npv%",
//         placement: "out"
//       }
//     ]
//   },
//   plotarea: {
//     backgroundColor: "transparent",
//     //  borderWidth: 0,
//     // borderRadius: "0 0 0 10",
//     margin: "0 0 0 0"
//   },
//   legend: {
//     toggleAction: "remove",
//     // backgroundColor: "#FBFCFE",
//     borderWidth: 0,
//     adjustLayout: true,
//     // align: "center",
//     // verticalAlign: "bottom",
//     item: {
//       fontColor: "#777",
//       cursor: "pointer",
//       offsetX: -6,
//       fontSize: 12
//     },
//     mediaRules: [
//       {
//         // maxWidth: 500,
//         visible: false
//       }
//     ]
//   },
//   scaleR: {
//     refAngle: 270
//   },
//   series: [
//     {
//       text: "Docs",
//       values: [106541],
//       lineColor: "#00BAF2",
//       backgroundColor: "#00BAF2",
//       lineWidth: 1,
//       marker: {
//         backgroundColor: "#00BAF2"
//       }
//     },
//     {
//       text: "Gallery",
//       values: [56711],
//       lineColor: "#E80C60",
//       backgroundColor: "#E80C60",
//       lineWidth: 1,
//       marker: {
//         backgroundColor: "#E80C60"
//       }
//     }
//   ]
// };

// zingchart.render({
//   id: "myChart",
//   data: {
//     // gui: {
//     //   contextMenu: {
//     //     button: {
//     //       visible: false,
//     //       lineColor: "#2D66A4",
//     //       backgroundColor: "#2D66A4"
//     //     },
//     //     gear: {
//     //       alpha: 1,
//     //       backgroundColor: "#2D66A4"
//     //     },
//     //     // position: "right",
//     //     backgroundColor: "#306EAA" /*sets background for entire contextMenu*/,
//     //     docked: true,
//     //     item: {
//     //       backgroundColor: "#306EAA",
//     //       borderColor: "#306EAA",
//     //       borderWidth: 0,
//     //       fontFamily: "Lato",
//     //       color: "#fff"
//     //     }
//     //   }
//     // },
//     graphset: [myConfig]
//   },
//   height: "300px",
//   width: "99%"
// });
