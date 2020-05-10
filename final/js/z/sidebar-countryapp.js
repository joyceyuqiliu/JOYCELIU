//
var datacountry = $.ajax({
  url:"https://raw.githubusercontent.com/joyceyuqiliu/JOYCELIU/master/final/dataset/CountryEI_H.json",
  async:false,
  dataType:'json'
}).responseJSON;

// DISPLAY RESULT IN HIGHLIGHT SECTION 1
myFunction2(datacountry);


////For Searby by country
function myFunction2(arr){
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

//DISPLAY country search panel when switch to country
function myCountry(){
  var x = document.querySelectorAll(".highlight2,.search2,.switch2");
  if(x.style.display === "none"){
    x.style.display="block";
  }else{
    x.style.display = "none";
  }
}

function myYear(){
  var x = document.querySelectorAll(".highlight,.search,.switch,");
  if(x.style.display === "none"){
    x.style.display="block";
  }else{
    x.style.display = "none";
  }
}


//DISPLAY table
function myFunctionTable(){
  if (document.getElementById("selection").value == "Albania"){
    $("p").empty().hide();
    $("#tablecontain").hide();
    $("#E-Albania").clone().appendTo('p.pE');
    $("#I-Albania").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "Algeria"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Algeria").clone().appendTo('p.pE');
  $("#I-Algeria").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "Andorra"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Andorra").clone().appendTo('p.pE');
  $("#I-Andorra").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "Angola"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Angola").clone().appendTo('p.pE');
  $("#I-Angola").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "Argentina"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Argentina").clone().appendTo('p.pE');
  $("#I-Argentina").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "Armenia"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Armenia").clone().appendTo('p.pE');
  $("#I-Armenia").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "Australia"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Australia").clone().appendTo('p.pE');
  $("#I-Australia").clone().appendTo('p.pI');
}else if (document.getElementById("selection").value == "Austria"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Austria").clone().appendTo('p.pE');
  $("#I-Austria").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "Azerbaijan"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Azerbaijan").clone().appendTo('p.pE');
  $("#I-Azerbaijan").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "Bahamas"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Bahamas").clone().appendTo('p.pE');
  $("#I-Bahamas").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "Bahrain"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Bahrain").clone().appendTo('p.pE');
  $("#I-Bahrain").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2007"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Bangladesh").clone().appendTo('p.pE');
  $("#I-Bangladesh").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2008"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Barbados").clone().appendTo('p.pE');
  $("#I-2008").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2009"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Belarus").clone().appendTo('p.pE');
  $("#I-2009").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2010"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Belgium").clone().appendTo('p.pE');
  $("#I-2010").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2011"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Belize").clone().appendTo('p.pE');
  $("#I-2011").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2012"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Benin").clone().appendTo('p.pE');
  $("#I-2012").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2013"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Bhutan").clone().appendTo('p.pE');
  $("#I-2013").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2014"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Bolivia").clone().appendTo('p.pE');
  $("#I-2014").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2015"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Bosnia").clone().appendTo('p.pE');
  $("#I-2015").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2016"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Botswana").clone().appendTo('p.pE');
  $("#I-2016").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Brazil").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Brunei").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Bulgaria").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Burkina").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("E-Burundi").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Cote").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("E-Cabo").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Cambodia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Cameroon").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Canada").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-CAR").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Chile").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-China").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("E-HK").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Macao").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Colombia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Congo").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Costa Rica").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Cuba").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Croatia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Cyprus").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Czechia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Denmark").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Dominican").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Ecuador").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Egypt").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-El Salvador").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Estonia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Eswatini").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Ethiopia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-FI").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Fiji").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Finland").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-France").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-French Polynesia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Gabon").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Gambia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Georgia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Germany").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Ghana").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Greece").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Greenland").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Grenada").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Guatemala").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Guinea").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Guyana").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Brazil").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Honduras").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Hungary").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Iceland").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-India").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Indonesia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Iran").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Iraq").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Ireland").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Israel").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Italy").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Jamaica").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Japan").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Jordan").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Kazakhstan").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Kenya").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Kiribati").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Kuwait").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Kyrgyzstan").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Lao").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Latvia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Lebanon").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Lesotho").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Libya").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Lithuania").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Luxembourg").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Madagascar").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Malawi").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Malaysia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Maldives").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Mali").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Malta").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Mauritania").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Mauritius").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Mexico").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Mongolia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Montenegro").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Morocco").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Mozambique").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Myanmar").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Namibia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Nepal").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Netherlands").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-NC").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-NZ").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Nicaragua").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Niger").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Nigeria").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-NM").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Norway").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Oman").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Pakistan").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("E-Panama").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-PNG").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Paraguay").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Peru").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Philippines").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Poland").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Portugal").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Qatar").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Korea").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Moldova").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Romania").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Russian").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Rwanda").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-SKN").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-SL").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-SVG").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Samoa").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-SA").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Senegal").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Serbia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-SierraL").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Singapore").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Slovakia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Slovenia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-SI").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-SA").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Spain").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-SL").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Palestine").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Sudan").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Suriname").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Sweden").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Switzerland").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-SAR").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Thaiand").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-TL").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Togo").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-TT").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Tunisia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Turkey").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Uganda").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Ukraine").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-UAE").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-UK").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Tanzania").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-USA").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Uruguay").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Uzbekistan").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Venezuela").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-VN").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Yemen").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Zambia").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else if (document.getElementById("selection").value == "2017"){
  $("p").empty().hide();
  $("#tablecontain").hide();
  $("#E-Zimbabwe").clone().appendTo('p.pE');
  $("#I-2017").clone().appendTo('p.pI');
} else {
  $("p").empty().hide();
  $("#tablecontain").hide();
}
$('table').tablesorter().trigger("update");
$('table').tablesorter().trigger("appendCache");
}



function myFunctionTableE(){
 $("p.pE").show();
 $("p.pI").hide();}

 function myFunctionTableI(){
  $("p.pI").show();
  $("p.pE").hide();}





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
//  if (data[i].Year = document.getElementById("selection").value)
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
//  if (data[i].Year = document.getElementById("selection").value)
//    {
//      console.log (data.WorldexpValue)
//  };
//}}

//function myFunction() {
//  document.getElementById("s1n").innerHTML = YearEIandBig.filter(checkYear);
//}


//  $('#go').click(function(){
//    var sec1Value = $('selection[type=number]').map(function(_, element){
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

//  return result = document.getElementById("selection").value}

//function myFunction(data) {
//  document.getElementById("s1n").innerHTML =
//  data.find(processData);
//  }
