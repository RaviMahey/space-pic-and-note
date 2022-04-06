// TleP2zyEhRDoLypLe8S7DDF2P8UdRF3FACO6p9Jb
var apiKey="8mEXZHRN04XiOKzh8Xht1g5yk3MwaBXnOGCcA7mo" ;
var apiLink = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
var apiLink2= `https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-04-01&end_date=2022-04-04&api_key=${apiKey}`;
var datas = new XMLHttpRequest();
var json;
datas.open("GET",apiLink,true);
datas.onload = function(){
	if(this.status===200){
		json = JSON.parse(this.response); 
		document.getElementById("one").innerHTML=`Today's space picture (${json.date})`;

		document.getElementById("image").src = json.hdurl;
		document.getElementById("card-text").innerHTML= json.explanation;
		// document.getElementById("date").innerHTML= json.date;
		document.getElementById("title").innerHTML= json.title;

		
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