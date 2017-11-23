$(document).ready(
function ran_col(){
    var color = '';
    var letters = ['#7dcc93', '#f76160', '#31355b', '#21364b', '#E29470', '#66A7D5', '#FA6D68', '#679895'];
    color += letters[Math.floor(Math.random() * letters.length)];
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type != 'button')
        if (elements[i].type != 'text')
            elements[i].style.background = color;
    }
});
function gotowiki(){
    window.location.href = 'https://en.wikipedia.org/wiki/Special:Random';
}
var url="https://en.wikipedia.org/w/api.php?action=opensearch&search=";
var urlend="&limit=20&namespace=0&format=json&callback=?";
var search="";
function getresults(){
search=$('#search').val();
$("#results").text("");
if(search===""){
	var element="<p>enter search term</p>";
    $( "#results" ).append(element);
}
else{
var query=url+search+urlend;
$.getJSON(query, APICallback);
}
}
function APICallback(data)
{
var element="<p>no results found</p>";
      if(data[1].length==0){
          $( "#results" ).append(element);
      }
      else
      for(var i=0;i<data[1].length;i++){
          element="<a href='"+data[3][i]+"' ><div class='result'><h2>"+data[1][i]+"</h2><p>"+data[2][i]+"</p></div></a><br>";
          $( "#results" ).append(element);
      }
}
