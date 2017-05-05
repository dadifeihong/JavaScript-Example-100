/**
 * Created by key on 2017/5/5.
 */
window.onload = function () {
    var oBtn = document.getElementById('btn');
    var oImg = document.getElementById('img1');
    //定义一个标识
    var flag = true;
    oBtn.onclick = function () {
        //改变自己的值
        this.value = flag?'开灯起床了':'关灯睡觉了';
        flag=!flag;
        oImg.src = flag?'img/on.jpg':'img/off.jpg';
    }
}