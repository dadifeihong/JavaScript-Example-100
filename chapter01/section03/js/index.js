
window.onload = function () {
    //.content下 找到所有的h4元素
    var oH4 = document.querySelectorAll('.content h4');
    // .content下 找到所有的ul
    var oUl = document.querySelectorAll('.content ul')
    //定义一个开关
    var flag = true;
    //给所有的h4元素绑定点击事件
    for(var i=0;i<oH4.length;i++){
        oH4[i].index = i;
        oH4[i].onclick = function () {
            var pic = flag?'on':'off';
            this.style.background = 'url("./img/'+pic+'.png") no-repeat left center';
            this.style.backgroundSize="20px 20px";
            oUl[this.index].style.display = flag?"block":"none";
            flag=!flag;
        }
    }
}