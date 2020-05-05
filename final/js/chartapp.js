// defaults for all charts
Chart.defaults.global.responsive = true;
Chart.defaults.global.defaultFontColor = '#E5E5E5';
Chart.defaults.global.tooltips.mode = 'label';
//Chart.defaults.global.tooltips.backgroundColor = '#888';
//Chart.defaults.global.tooltips.titleColor = '#888';
//Chart.defaults.global.tooltips.bodyColor = '#999';
Chart.defaults.global.animation.duration = 1500;
Chart.defaults.global.animation.easing = 'easeInOutQuart';
Chart.defaults.global.maintainAspectRatio = true;

var data = {
  labels:["1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015", "2016","2017"],
  datasets: [
    {
      label: "Export",
      fill: false,
      fontColor: "#E5E5E5",
      backgroundColor: '#BC2946',
      borderColor: '#BC2946',
      data: [499.33,484.41,578.63,698.24,901.51,974.81,1000.75,1244.69,1776.77,2390.24,3001.51,3766.89,4265.01,3633.59,4559.01,5551.29,5501.87,5304.87,5417.36,4260.1,3733.68,3381.74]
    },{
      label: "Import",
      lineTension: 0.2,
      fill: false,
      backgroundColor: '#BCA4D9',
      borderColor: '#BCA4D9',
      data: [432.65,484.47,508.78,666.82,927.76,947.27,974.16,1260.15,1993.93,2804.43,3630.36,4468.03,5528.55,4438.21,6342.22,7920.75,8120.16,7977.96,8030.45,5762.62,4951.41,4816.98]
    }]
}

var ctx = $("#myChart");
//var data = $.ajax({
//  url:"https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/YearEIandBig_chartexpV.json",
//  async:false,
//  dataType:'json'
//}).responseJSON
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          gridLines: {
            display: false,
          },
          tooltips: {
            mode: 'single',
          },
          legend: {
            labels: {
              boxWidth: 123,
              padding: 8,
            },
            position: 'bottom',
            align: 'start'},
          scales: {
            xAxes: [{
              gridLines:{
                drawBorder: false,
              },
              display: true,
              scaleLabel:{
                display: true,
                labelString: 'Year',
              }
            }],
            yAxes: [{
              gridLines:{
                drawBorder: false,
              },
              display: true,
              scaleLable: {
                display: true,
                labelString: 'Value mUSD',
                padding: 2
              }
            }]
          }
        }
      });



//    type: 'line',
//    data: {
//        labels: ['Red'],
//        datasets: [{
//            label: '# of Votes',
//            data: data,
//            backgroundColor: [
//                'rgba(255, 99, 132, 0.2)',
            //    'rgba(54, 162, 235, 0.2)',
            //    'rgba(255, 206, 86, 0.2)',
          //      'rgba(75, 192, 192, 0.2)',
          //      'rgba(153, 102, 255, 0.2)',
          //      'rgba(255, 159, 64, 0.2)'
//            ],
//            borderColor: [
//                'rgba(255, 99, 132, 1)',
            //    'rgba(54, 162, 235, 1)',
            //    'rgba(255, 206, 86, 1)',
            //    'rgba(75, 192, 192, 1)',
            //    'rgba(153, 102, 255, 1)',
            //    'rgba(255, 159, 64, 1)'
//            ],
//            borderWidth: 1
//        }]
//    },
//    options: {
//      events: ['click'],
//        scales: {
//            yAxes: [{
//                ticks: {
//                    beginAtZero: true
//                }
//            }]
//        }
//    }
//});
