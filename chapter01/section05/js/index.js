/**
 * Created by key on 2017/5/6.
 */
window.onload = function () {
    var oCourse = document.getElementsByClassName('item-course')[0]
    var oDown = document.getElementsByClassName('item-download')[0];
    var courseWrap = document.getElementsByClassName("course-wrap")[0];
	var downloadWrap = document.getElementsByClassName("download-wrap")[0];
	courseWrap.onmouseover = function(){
		courseWrap.getElementsByTagName('a')[0].className = "active";
		show(oCourse);
	}
	courseWrap.onmouseout = function(){
		courseWrap.getElementsByTagName('a')[0].className = "";
		hide(oCourse);
	}
	downloadWrap.onmouseover = function(){
		downloadWrap.getElementsByTagName('a')[0].className = "active";
		show(oDown);
	}
	downloadWrap.onmouseout = function(){
		downloadWrap.getElementsByTagName('a')[0].className = "";
		hide(oDown);
	}
    function show(obj) {
        obj.style.display = "block";
    }
    function hide(obj) {
        obj.style.display = "none";
    }
}