
document.getElementById("siteName").style.display='none';
document.getElementsByClassName("space-unit")[0].style.width='60px';
document.getElementsByClassName("space-unit")[0].style.height='60px';
document.getElementsByClassName("space-unit")[0].style.marginTop='10px';
document.getElementsByClassName("space-unit")[0].style.marginLeft='20px';
document.getElementsByClassName("space-unit")[0].style.backgroundImage='url(https://xinguanbang.github.io/images/web/desktop/images1/icon1/applogo1.webp)';
document.getElementsByClassName("space-unit")[0].style.backgroundSize='100% 100%';
setInterval(function(){
	document.getElementsByClassName("space-con")[0].style.background="red";
	document.getElementsByClassName("appCode")[0].style.color="#dfff00";
	document.getElementsByClassName("user")[0].style.color="#dfff00";
	setTimeout(function(){
		document.getElementsByClassName("space-con")[0].style.background="#dfff00";
		document.getElementsByClassName("appCode")[0].style.color="red";
		document.getElementsByClassName("user")[0].style.color="red"
	},300)
},600);
