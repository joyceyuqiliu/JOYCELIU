var allData = [];
//ajax call to get and store dataset
$.ajax({
  type: "GET",
  url:"https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/YearEIandBig.csv",
  dataType: "text",
  success: function(data){
  allData = processData(data);
    $('#go').show();
  }});

  //process the data into an array
  function processData(allText) {
    var allTextLines = allText.split(/\r/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    for(i = 1; i< allTextLines.length; i++){
      var data = allTextLines[i].split(',');
      if(data.length == headers.length){
        lines.push($.map(data, function(field, j){
          return headers[j] + ':' + field;
        }));
      }
    }
  return lines;}


// search in the same position of all arrays, return the value that matches textinput
function checkallData (data){
  for (i = 1; i < allData.length; i++){
    if (document.getElementById("input").value = allData[i][2]){
    console.log (data)}
    }
}

function myFunction() {
  document.getElementById("s1n").innerHTML = allData.find(checkallData);
}

//var weight = allData.map(el => el.Year);
//console.log(weight.includes(1996))
