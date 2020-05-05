var data = $.ajax({
  url:"https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/YearEIandBig.json",
  async:false,
  dataType:'json'
}).responseJSON

// DISPLAY RESULT IN HIGHLIGHT SECTION 1
myFunction(data)


function myFunction(arr){
  var out = "";
  for ( i = 0; i < arr.length; i++){
    if(document.getElementById("input").value == "1996"){
      out1 = arr[0].WorldexpValue;
      out2 = arr[0].WorldimpValue;
      out3 = arr[0].BiggestExporter;
      out4 = arr[0].BiggestImporter;
    }else if(document.getElementById("input").value == "1997"){
      out1 = arr[1].WorldexpValue;
      out2 = arr[1].WorldimpValue;
      out3 = arr[1].BiggestExporter;
      out4 = arr[1].BiggestImporter;
    }else if(document.getElementById("input").value == "1998"){
      out1 = arr[2].WorldexpValue;
      out2 = arr[2].WorldimpValue;
      out3 = arr[2].BiggestExporter;
      out4 = arr[2].BiggestImporter;
    }else if(document.getElementById("input").value == "1999"){
      out1 = arr[3].WorldexpValue;
      out2 = arr[3].WorldimpValue;
      out3 = arr[3].BiggestExporter;
      out4 = arr[3].BiggestImporter;
    }else if(document.getElementById("input").value == "2000"){
      out1 = arr[4].WorldexpValue;
      out2 = arr[4].WorldimpValue;
      out3 = arr[4].BiggestExporter;
      out4 = arr[4].BiggestImporter;
    }else if(document.getElementById("input").value == "2001"){
      out1 = arr[5].WorldexpValue;
      out2 = arr[5].WorldimpValue;
      out3 = arr[5].BiggestExporter;
      out4 = arr[5].BiggestImporter;
    }else if(document.getElementById("input").value == "2002"){
      out1 = arr[6].WorldexpValue;
      out2 = arr[6].WorldimpValue;
      out3 = arr[6].BiggestExporter;
      out4 = arr[6].BiggestImporter;
    }else if(document.getElementById("input").value == "2003"){
      out1 = arr[7].WorldexpValue;
      out2 = arr[7].WorldimpValue;
      out3 = arr[7].BiggestExporter;
      out4 = arr[7].BiggestImporter;
    }else if(document.getElementById("input").value == "2004"){
      out1 = arr[8].WorldexpValue;
      out2 = arr[8].WorldimpValue;
      out3 = arr[8].BiggestExporter;
      out4 = arr[8].BiggestImporter;
    }else if(document.getElementById("input").value == "2005"){
      out1 = arr[9].WorldexpValue;
      out2 = arr[9].WorldimpValue;
      out3 = arr[9].BiggestExporter;
      out4 = arr[9].BiggestImporter;
    }else if(document.getElementById("input").value == "2006"){
      out1 = arr[10].WorldexpValue;
      out2 = arr[10].WorldimpValue;
      out3 = arr[10].BiggestExporter;
      out4 = arr[10].BiggestImporter;
    }else if(document.getElementById("input").value == "2007"){
      out1 = arr[11].WorldexpValue;
      out2 = arr[11].WorldimpValue;
      out3 = arr[11].BiggestExporter;
      out4 = arr[11].BiggestImporter;
    }else if(document.getElementById("input").value == "2008"){
      out1 = arr[12].WorldexpValue;
      out2 = arr[12].WorldimpValue;
      out3 = arr[12].BiggestExporter;
      out4 = arr[12].BiggestImporter;
    }else if(document.getElementById("input").value == "2009"){
      out1 = arr[13].WorldexpValue;
      out2 = arr[13].WorldimpValue;
      out3 = arr[13].BiggestExporter;
      out4 = arr[13].BiggestImporter;
    }else if(document.getElementById("input").value == "2010"){
      out1 = arr[14].WorldexpValue;
      out2 = arr[14].WorldimpValue;
      out3 = arr[14].BiggestExporter;
      out4 = arr[14].BiggestImporter;
    }else if(document.getElementById("input").value == "2011"){
      out1 = arr[15].WorldexpValue;
      out2 = arr[15].WorldimpValue;
      out3 = arr[15].BiggestExporter;
      out4 = arr[15].BiggestImporter;
    }else if(document.getElementById("input").value == "2012"){
      out1 = arr[16].WorldexpValue;
      out2 = arr[16].WorldimpValue;
      out3 = arr[16].BiggestExporter;
      out4 = arr[16].BiggestImporter;
    }else if(document.getElementById("input").value == "2013"){
      out1 = arr[17].WorldexpValue;
      out2 = arr[17].WorldimpValue;
      out3 = arr[17].BiggestExporter;
      out4 = arr[17].BiggestImporter;
    }else if(document.getElementById("input").value == "2014"){
      out1 = arr[18].WorldexpValue;
      out2 = arr[18].WorldimpValue;
      out3 = arr[18].BiggestExporter;
      out4 = arr[18].BiggestImporter;
    }else if(document.getElementById("input").value == "2015"){
      out1 = arr[19].WorldexpValue;
      out2 = arr[19].WorldimpValue;
      out3 = arr[19].BiggestExporter;
      out4 = arr[19].BiggestImporter;
    }else if(document.getElementById("input").value == "2016"){
      out1 = arr[20].WorldexpValue;
      out2 = arr[20].WorldimpValue;
      out3 = arr[20].BiggestExporter;
      out4 = arr[20].BiggestImporter;
    }else if(document.getElementById("input").value == "2017"){
      out1 = arr[21].WorldexpValue;
      out2 = arr[21].WorldimpValue;
      out3 = arr[21].BiggestExporter;
      out4 = arr[21].BiggestImporter;
    }};
  //  if (arr[i].Year = document.getElementById("input").value){
  //  out += arr[i].WorldexpValue;}
  //}
  document.getElementById("s1n").innerHTML = out1;
  document.getElementById("s2n").innerHTML = out2;
  document.getElementById("s3n").innerHTML = out3;
  document.getElementById("s4n").innerHTML = out4;
}




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
