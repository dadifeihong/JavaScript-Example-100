/**
 * Created by key on 2017/5/6.
 */
window.onload = function () {
    var oCourse = document.getElementsByClassName('item-course')[0]
    var oDown = document.getElementsByClassName('item-download')[0];
    var oMenu = document.querySelectorAll('.menu a');
    oMenu[1].onmouseover = function () {
        show(oCourse)
    }
    oMenu[1].onmouseout = function () {
        hide(oCourse)
    }
    oMenu[3].onmouseover = function () {
        show(oDown);
    }
    oMenu[3].onmouseout = function () {
        hide(oDown);
    }
    function show(obj) {
        obj.style.display = "block";
    }
    function hide(obj) {
        obj.style.display = "none";
    }
}