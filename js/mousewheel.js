$(function(){
	var warp = document.getElementById("warp");
	var divHeight = window.innerHeight;
    var width = window.innerWidth;
    if (divHeight) {
        warp.style.height = divHeight +"px";
    }
	
	var content = $('.content');
	content.height(divHeight);
    
    var startTime = 0, 
        endTime = 0,  
        now = 0;  //全局变量

    if ((navigator.userAgent.toLowerCase().indexOf("firefox")!=-1)){
    	document.addEventListener("DOMMouseScroll",scrollFun,false);
    }
    else if(document.addEventListener){
    	document.addEventListener("mousewheel",scrollFun,false);
    }
    else if(document.attachEvent){
    	document.attachEvent("onmousewheel",scrollFun);
    }
    else{
    	document.onmousewheel = scrollFun;
    };

    function scrollFun(event){
    	startTime = new Date().getTime(); 
    	var delta = event.detail || (-event.wheelDelta);

    	if ((endTime - startTime) < -1000) {
            if (delta >0) {
                now += divHeight;
                if (width > 768) {
                    if (now > 4*divHeight) {
                        now = 4*divHeight;
                        return false;
                    }
                }else{
                    if (now > 6*divHeight) {
                        now = 6*divHeight;
                        return false;
                    }
                }
                turnPage(now);
            }else if (delta < 0) {
                now -= divHeight ;
                turnPage(now);
            }
    		endTime = new Date().getTime();
    	}
    }

    //翻页函数
    function turnPage(now){
    	$("#main").animate({top:(-now+'px')},1000);
    }
})