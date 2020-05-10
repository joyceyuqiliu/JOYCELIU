// defaults for all charts
Chart.defaults.global.responsive = true;
Chart.defaults.global.defaultFontColor = '#E5E5E5';
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 11;
Chart.defaults.global.tooltips.mode = 'label';
//Chart.defaults.global.tooltips.backgroundColor = '#888';
//Chart.defaults.global.tooltips.titleColor = '#888';
//Chart.defaults.global.tooltips.bodyColor = '#999';
Chart.defaults.global.animation.duration = 1500;
Chart.defaults.global.animation.easing = 'easeInOutQuart';
Chart.defaults.global.maintainAspectRatio = true;


var rawexport = $.ajax({
  url:"https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/YearE_AllDetail.json",
  async:false,
  dataType:'json'
}).responseJSON;
var rawimport = $.ajax({
  url:"https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/YearI_AllDetail.json",
  async:false,
  dataType:'json'
}).responseJSON;


//var selection = document.getElementById("selection").value;
var exportobj = rawexport.filter(function(item){
  var selection = document.getElementById("selection").value;
  if(selection == "Albania"){
      return ["Albania"].indexOf(item.Name) !== -1;}
    else if(selection == "Algeria"){
        return ["Algeria"].indexOf(item.Name) !== -1;}
      else if(selection == "Andorra"){
          return ["Andorra"].indexOf(item.Name) !== -1;}
        else if(selection == "Angola"){
            return ["Angola"].indexOf(item.Name) !== -1;}
          else if(selection == "Argentina"){
              return ["Argentina"].indexOf(item.Name) !== -1;}
            else if(selection == "Armenia"){
                return ["Armenia"].indexOf(item.Name) !== -1;}
              else if(selection == "Zimbabwe"){
                  return ["Zimbabwe"].indexOf(item.Name) !== -1;}
                else if(selection == "Austria"){
                    return ["Austria"].indexOf(item.Name) !== -1;}
                  else if(selection == "Azerbaijan"){
                      return ["Azerbaijan"].indexOf(item.Name) !== -1;}
                    else if(selection == "Bahamas"){
                        return ["Bahamas"].indexOf(item.Name) !== -1;}
                      else if(selection == "Bangladesh"){
                          return ["Bangladesh"].indexOf(item.Name) !== -1;}
                        else if(selection == "Belarus"){
                            return ["Belarus"].indexOf(item.Name) !== -1;}
                          else if(selection == "Belgium"){
                              return ["Belgium"].indexOf(item.Name) !== -1;}
                            else if(selection == "Belize"){
                                return ["Belize"].indexOf(item.Name) !== -1;}
                              else if(selection == "Bhutan"){
                                  return ["Bhutan"].indexOf(item.Name) !== -1;}
                                else if(selection == "Bosnia and Herzegovina"){
                                    return ["Bosnia and Herzegovina"].indexOf(item.Name) !== -1;}
                                  else if(selection == "Botswana"){
                                      return ["Botswana"].indexOf(item.Name) !== -1;}
                                    else if(selection == "Brazil"){
                                        return ["Brazil"].indexOf(item.Name) !== -1;}
                                      else if(selection == "Bulgaria"){
                                          return ["Bulgaria"].indexOf(item.Name) !== -1;}
                                        else if(selection == "Burkina Faso"){
                                            return ["Burkina Faso"].indexOf(item.Name) !== -1;}
                                          else if(selection == "Burundi"){
                                              return ["Burundi"].indexOf(item.Name) !== -1;}
                                            else if(selection == "Cabo Verde"){
                                                return ["Cabo Verde"].indexOf(item.Name) !== -1;}
                                              else if(selection == "Cambodia"){
                                                  return ["Cambodia"].indexOf(item.Name) !== -1;}
                                                else if(selection == "Cameroon"){
                                                    return ["Cameroon"].indexOf(item.Name) !== -1;}
                                                  else if(selection == "Chile"){
                                                      return ["Chile"].indexOf(item.Name) !== -1;}
                                                    else if(selection == "China"){
                                                        return ["China"].indexOf(item.Name) !== -1;}
                                                      else if(selection == "Colombia"){
                                                          return ["Colombia"].indexOf(item.Name) !== -1;}
                                                        else if(selection == "Costa Rica"){
                                                            return ["Costa Rica"].indexOf(item.Name) !== -1;}
                                                          else if(selection == "Croatia"){
                                                              return ["Croatia"].indexOf(item.Name) !== -1;}
                                                            else if(selection == "Cuba"){
                                                                return ["Cuba"].indexOf(item.Name) !== -1;}
                                                              else if(selection == "Cyprus"){
                                                                  return ["Cyprus"].indexOf(item.Name) !== -1;}
                                                                else if(selection == "Denmark"){
                                                                    return ["Denmark"].indexOf(item.Name) !== -1;}
                                                                  else if(selection == "Dominica"){
                                                                      return ["Dominica"].indexOf(item.Name) !== -1;}
                                                                    else if(selection == "Ecuador"){
                                                                        return ["Ecuador"].indexOf(item.Name) !== -1;}
                                                                      else if(selection == "Egypt"){
                                                                          return ["Egypt"].indexOf(item.Name) !== -1;}
                                                                        else if(selection == "Estonia"){
                                                                            return ["Estonia"].indexOf(item.Name) !== -1;}
                                                                          else if(selection == "Finland"){
                                                                              return ["Finland"].indexOf(item.Name) !== -1;}
                                                                            else if(selection == "France"){
                                                                                return ["France"].indexOf(item.Name) !== -1;}
                                                                              else if(selection == "French Polynesia"){
                                                                                  return ["French Polynesia"].indexOf(item.Name) !== -1;}
                                                                                else if(selection == "Georgia"){
                                                                                    return ["Georgia"].indexOf(item.Name) !== -1;}
                                                                                  else if(selection == "Germany"){
                                                                                      return ["Germany"].indexOf(item.Name) !== -1;}
                                                                                    else if(selection == "Greece"){
                                                                                        return ["Greece"].indexOf(item.Name) !== -1;}
                                                                                      else if(selection == "Honduras"){
                                                                                          return ["Honduras"].indexOf(item.Name) !== -1;}
                                                                                        else if(selection == "Hungary"){
                                                                                            return ["Hungary"].indexOf(item.Name) !== -1;}
                                                                                          else if(selection == "Iceland"){
                                                                                              return ["Iceland"].indexOf(item.Name) !== -1;}
                                                                                            else if(selection == "Indonesia"){
                                                                                                return ["Indonesia"].indexOf(item.Name) !== -1;}
                                                                                              else if(selection == "Iraq"){
                                                                                                  return ["Iraq"].indexOf(item.Name) !== -1;}
                                                                                                else if(selection == "Ireland"){
                                                                                                    return ["Ireland"].indexOf(item.Name) !== -1;}
                                                                                                  else if(selection == "Israel"){
                                                                                                      return ["Israel"].indexOf(item.Name) !== -1;}
                                                                                                    else if(selection == "Italy"){
                                                                                                        return ["Italy"].indexOf(item.Name) !== -1;}
                                                                                                      else if(selection == "Jamaica"){
                                                                                                          return ["Jamaica"].indexOf(item.Name) !== -1;}
                                                                                                        else if(selection == "Japan"){
                                                                                                            return ["Japan"].indexOf(item.Name) !== -1;}
                                                                                                          else if(selection == "Jordan"){
                                                                                                              return ["Jordan"].indexOf(item.Name) !== -1;}
                                                                                                            else if(selection == "Kazakhstan"){
                                                                                                                return ["Kazakhstan"].indexOf(item.Name) !== -1;}
                                                                                                              else if(selection == "Kuwait"){
                                                                                                                  return ["Kuwait"].indexOf(item.Name) !== -1;}
                                                                                                                else if(selection == "Kyrgyzstan"){
                                                                                                                    return ["Kyrgyzstan"].indexOf(item.Name) !== -1;}
                                                                                                                  else if(selection == "Latvia"){
                                                                                                                      return ["Latvia"].indexOf(item.Name) !== -1;}
                                                                                                                    else if(selection == "Lebanon"){
                                                                                                                        return ["Lebanon"].indexOf(item.Name) !== -1;}
                                                                                                                      else if(selection == "Lithuania"){
                                                                                                                          return ["Lithuania"].indexOf(item.Name) !== -1;}
                                                                                                                        else if(selection == "Luxembourg"){
                                                                                                                            return ["Luxembourg"].indexOf(item.Name) !== -1;}
                                                                                                                          else if(selection == "Madagascar"){
                                                                                                                              return ["Madagascar"].indexOf(item.Name) !== -1;}
                                                                                                                            else if(selection == "Malaysia"){
                                                                                                                                return ["Malaysia"].indexOf(item.Name) !== -1;}
                                                                                                                              else if(selection == "Maldives"){
                                                                                                                                  return ["Maldives"].indexOf(item.Name) !== -1;}
                                                                                                                                else if(selection == "Malta"){
                                                                                                                                    return ["Malta"].indexOf(item.Name) !== -1;}
                                                                                                                                  else if(selection == "Mauritius"){
                                                                                                                                      return ["Mauritius"].indexOf(item.Name) !== -1;}
                                                                                                                                    else if(selection == "Mexico"){
                                                                                                                                        return ["Mexico"].indexOf(item.Name) !== -1;}
                                                                                                                                      else if(selection == "Montenegro"){
                                                                                                                                          return ["Montenegro"].indexOf(item.Name) !== -1;}
                                                                                                                                        else if(selection == "Morocco"){
                                                                                                                                            return ["Morocco"].indexOf(item.Name) !== -1;}
                                                                                                                                          else if(selection == "Nepal"){
                                                                                                                                              return ["Nepal"].indexOf(item.Name) !== -1;}
                                                                                                                                            else if(selection == "Netherlands"){
                                                                                                                                                return ["Netherlands"].indexOf(item.Name) !== -1;}
                                                                                                                                              else if(selection == "New Zealand"){
                                                                                                                                                  return ["New Zealand"].indexOf(item.Name) !== -1;}
                                                                                                                                                else if(selection == "Niger"){
                                                                                                                                                    return ["Niger"].indexOf(item.Name) !== -1;}
                                                                                                                                                  else if(selection == "North Macedonia"){
                                                                                                                                                      return ["North Macedonia"].indexOf(item.Name) !== -1;}
                                                                                                                                                    else if(selection == "Norway"){
                                                                                                                                                        return ["Norway"].indexOf(item.Name) !== -1;}
                                                                                                                                                      else if(selection == "Panama"){
                                                                                                                                                          return ["Panama"].indexOf(item.Name) !== -1;}
                                                                                                                                                        else if(selection == "Peru"){
                                                                                                                                                            return ["Peru"].indexOf(item.Name) !== -1;}
                                                                                                                                                          else if(selection == "Philippines"){
                                                                                                                                                              return ["Philippines"].indexOf(item.Name) !== -1;}
                                                                                                                                                            else if(selection == "Poland"){
                                                                                                                                                                return ["Poland"].indexOf(item.Name) !== -1;}
                                                                                                                                                              else if(selection == "Portugal"){
                                                                                                                                                                  return ["Portugal"].indexOf(item.Name) !== -1;}
                                                                                                                                                                else if(selection == "Qatar"){
                                                                                                                                                                    return ["Qatar"].indexOf(item.Name) !== -1;}
                                                                                                                                                                  else if(selection == "Romania"){
                                                                                                                                                                      return ["Romania"].indexOf(item.Name) !== -1;}
                                                                                                                                                                    else if(selection == "Saint Lucia"){
                                                                                                                                                                        return ["Saint Lucia"].indexOf(item.Name) !== -1;}
                                                                                                                                                                      else if(selection == "Saint Vincent and the Grenadines"){
                                                                                                                                                                          return ["Saint Vincent and the Grenadines"].indexOf(item.Name) !== -1;}
                                                                                                                                                                        else if(selection == "Samoa"){
                                                                                                                                                                            return ["Samoa"].indexOf(item.Name) !== -1;}
                                                                                                                                                                          else if(selection == "Senegal"){
                                                                                                                                                                              return ["Senegal"].indexOf(item.Name) !== -1;}
                                                                                                                                                                            else if(selection == "Serbia"){
                                                                                                                                                                                return ["Serbia"].indexOf(item.Name) !== -1;}
                                                                                                                                                                              else if(selection == "Singapore"){
                                                                                                                                                                                  return ["Singapore"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                else if(selection == "Slovakia"){
                                                                                                                                                                                    return ["Slovakia"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                  else if(selection == "Slovenia"){
                                                                                                                                                                                      return ["Slovenia"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                    else if(selection == "Spain"){
                                                                                                                                                                                        return ["Spain"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                      else if(selection == "Sri Lanka"){
                                                                                                                                                                                          return ["Sri Lanka"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                        else if(selection == "Suriname"){
                                                                                                                                                                                            return ["Suriname"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                          else if(selection == "Sweden"){
                                                                                                                                                                                              return ["Sweden"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                            else if(selection == "Switzerland"){
                                                                                                                                                                                                return ["Switzerland"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                              else if(selection == "Thailand"){
                                                                                                                                                                                                  return ["Thailand"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                else if(selection == "Togo"){
                                                                                                                                                                                                    return ["Togo"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                  else if(selection == "Trinidad and Tobago"){
                                                                                                                                                                                                      return ["Trinidad and Tobago"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                    else if(selection == "Tunisia"){
                                                                                                                                                                                                        return ["Tunisia"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                      else if(selection == "Turkey"){
                                                                                                                                                                                                          return ["Turkey"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                        else if(selection == "Uganda"){
                                                                                                                                                                                                            return ["Uganda"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                          else if(selection == "Ukraine"){
                                                                                                                                                                                                              return ["Ukraine"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                            else if(selection == "United Arab Emirates"){
                                                                                                                                                                                                                return ["United Arab Emirates"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                              else if(selection == "United Kingdom of Great Britain and Northern Ireland"){
                                                                                                                                                                                                                  return ["United Kingdom of Great Britain and Northern Ireland"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                                else if(selection == "United States of America"){
                                                                                                                                                                                                                    return ["United States of America"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                                  else if(selection == "Uruguay"){
                                                                                                                                                                                                                      return ["Uruguay"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                                    else if(selection == "Yemen"){
                                                                                                                                                                                                                        return ["Yemen"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                                      else if(selection == "Zambia"){
                                                                                                                                                                                                                          return ["Zambia"].indexOf(item.Name) !== -1;}
                                                                                                                                                                                                                        else {}
                                                                                                                                                                                                                      });
var countryexport = exportobj.reduce(function(countryexport, exportobj){
    if (exportobj.Name){
    countryexport.push(exportobj.Value);}
    return countryexport;
},[]);

var importobj = rawimport.filter(function(item){
  var selection = document.getElementById("selection").value;
  return selection.indexOf(item.Name) !== -1;
});
var countryimport = importobj.reduce(function(countryimport, importobj){
    if (importobj.Name){
    countryimport.push(importobj.Value);}
    return countryimport;
},[]);



//var countryexport = rawexport.reduce(function(countryexport, rawexport){
//    if (rawexport.Name == selection){
//    countryexport.push(rawexport.Year,rawexport.Name,rawexport.Value);}
//    return countryexport;
//},[]);

//var countryimport = rawimport.reduce(function(countryimport, rawimport){
//  for (i=0; i < rawimport.length; i++){
//    if (rawimport[i].Name == selection){
//    countryimport.push(rawimport[i].Value);
//else{}
//}});


//var countryexport = rawexport.filter(function(rawexport){
//  for (var i = 0; i<rawexport.length; i++){
//    if (selection == rawexport[i].Name){
//      return rawexport[i].Value;
//}}});

//var countryexport = rawexport.filter(e => e.Value).map(e => e.Value).reduce((a,b) => a.concat(b),[]);

//var countryimport=[];

  //if (selection == rawexport[i].Name ){
  //  e = rawexport[i];
  //  countryexport = rawexport.filter(e => e.Value).map(e => e.Value).reduce((a,b) => a.concat(b),[]);
    //countryexport = rawexport.filter(e => e.Value).map(e => e.Value).reduce((a,b) => a.concat(b),[]);
    //var yearexport = rawexport[i].Year;







var data = {
  labels: ["1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015", "2016","2017"],
  datasets: [
    {
      label: "Export",
      fill: false,
      fontColor: "#E5E5E5",
      backgroundColor: '#A7C6FA',
      borderColor: '#A7C6FA',
      data: countryexport
    },{
      label:"Import",
      lineTension: 0.2,
      fill: false,
      backgroundColor: '#FFDBC9',
      borderColor: '#FFDBC9',
      data: countryimport
    }]
};

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
          gridLines: false,
          tooltips: {
            mode: 'single',
          },
          legend: {
            labels: {
              boxWidth: 123,
              padding: 10,
            },
            position: 'bottom',
            align: 'center'},
          scales: {
            xAxes: [{
              gridLines:{
                drawBorder: true,
              },
              //gridLines: false,
              display: true,
              padding: 4,
              scaleLabel:{
                display: true,
                labelString: 'Year',
                align:'center'
              }
            }],
            yAxes: [{
              gridLines: false,
              display: true,
              scaleLabel:{
                display: true,
                labelString: 'Million USD',
              }
            }]
          }
        }
      });

//datatable = $.ajax("https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/YearEI_AllDetail.csv").done()

//$(document).ready( function () {
//          $('#myTable').DataTable(datatable);
//      } );

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
