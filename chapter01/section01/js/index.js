/**
 * Created by key on 2017/5/4.
 */
window.onload = function () {
    //获取到span元素
    var aSpan = document.getElementsByTagName('span');
    //用一个数组来装图片的路径
    var imgArr = ['./img/01.jpg','./img/02.jpg','./img/03.jpg',
        './img/04.jpg','./img/05.jpg','./img/06.jpg','./img/07.jpg'];
    //获取到图片元素
    var oImg = document.getElementsByTagName('img')[0];
    //记录当前的是第几张图片 表示数组的索引值
    var nowIndex = 0;
    //上一张span
    aSpan[0].onclick = function () {
        nowIndex--;
        if(nowIndex<=0){
            nowIndex = 0;
        }
        oImg.src = imgArr[nowIndex];
        if(nowIndex==0){
            alert('已经是第一张了');
        }
    }
    //下一张span
    aSpan[1].onclick = function () {
        nowIndex++;
        if(nowIndex>=imgArr.length-1){
            nowIndex = imgArr.length-1;
        }
        oImg.src = imgArr[nowIndex];
        if(nowIndex==imgArr.length-1){
            alert('已经是最后一张了')
        }
    }
}