// TleP2zyEhRDoLypLe8S7DDF2P8UdRF3FACO6p9Jb
var apiKey="TleP2zyEhRDoLypLe8S7DDF2P8UdRF3FACO6p9Jb" ;
var apiLink = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
var apiLink2= `https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-04-01&end_date=2022-04-04&api_key=${apiKey}`;
var datas = new XMLHttpRequest();
var json;
datas.open("GET",apiLink,true);
datas.onload = function(){
	if(this.status===200){
		json = JSON.parse(this.response); 
		document.getElementById("image").style.backgroundImage = `url(${json.hdurl})`;
		document.getElementById("card-text").innerHTML= json.explanation;

		console.log(json);
	}
	else {
		console.log("some error");
	}
	return ;
}
datas.send();
// console.log(json.hdurl);
console.log("ravi you are great");