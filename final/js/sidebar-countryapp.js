//
var datacountry = $.ajax({
  url:"https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/CountryEI_H.json",
  async:false,
  dataType:'json'
}).responseJSON;

// DISPLAY RESULT IN HIGHLIGHT SECTION 1
myFunction(datacountry);


////For Searby by country
function myFunction(arr){
  var out5 = "";
  var out6 = "";
  var out7 = "";
  var out8 = "";
  for ( i = 0; i < arr.length; i++){
    if(document.getElementById("selection").value === arr[i].Name){
      out5 = arr[i].ExportValue;
      out6 = arr[i].ImportValue;
      out7 = arr[i].ExportWeight;
      out8 = arr[i].ImportWeight;
    }else{}
  $("#s5n").text(out5).fadeIn(1000);
  $("#s6n").text(out6).fadeIn(1000);
  $("#s7n").text(out7).fadeIn(1000);
  $("#s8n").text(out8).fadeIn(1000);
}}

//DISPLAY table





//  $("#E-1996").appendTo("p");}
 //var x = document.getElementById("#E-place-table");
// var y = document.getElementByTagName("p");
 //if (x.style.display === "none" ) {
  //  x.style.display = "block";
//    document.get("E-1996").style.display = "none";
 //} else {
//  x.style.display = "none";}  }






//var txt = function(){
  //filter, clean, and store data
  //$.ajax("https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/YearEIandBig.json")
  //.done(function(data) {
//  return JSON.stringify(txt).replace(/"/g, '').parse(data);
//  })}

//function checkYear(data) {
//  for (i = 0; i< data.length; i++){}}
//  if (data[i].Year = document.getElementById("input").value)
//    {
//      console.log (data.WorldexpValue)
//  };
//}}
//function myFunction(){
//  document.getElementById("sn1").innerHTML = yearEIandBig.find(checkYear);
//}

//function processData(data){
//  return JSON.stringify(data).replace(/"/g, '')
//}

//function checkYear(data) {
//  for (i = 0; i< data.length; i++){
//  if (data[i].Year = document.getElementById("input").value)
//    {
//      console.log (data.WorldexpValue)
//  };
//}}

//function myFunction() {
//  document.getElementById("s1n").innerHTML = YearEIandBig.filter(checkYear);
//}


//  $('#go').click(function(){
//    var sec1Value = $('input[type=number]').map(function(_, element){
//      return $(element).prop('')
//    })
//  })
//console.log(YearEIandBig.length)




//var YearEBdata = YearEIandBig.replace(/["]+/g,'')
//var FinalData = $.csv.toObjects(csv)




//ajax call to get and store dataset
//var desiredData = []
//$.ajax(
//  type: "GET",
//  url:"https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/YearEIandBig.json",
//  dataType: "json",
//  success: function(data){
//  desiredData = myFunction(data);
//  $('#go').show();
//};)

//  return result = document.getElementById("input").value}

//function myFunction(data) {
//  document.getElementById("s1n").innerHTML =
//  data.find(processData);
//  }
