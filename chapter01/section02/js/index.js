window.onload = function () {
    //获取到input元素
    var oInput = document.getElementById('btn');
    var oImg = document.getElementsByTagName('img')[0];
    oInput.onchange= function () {
        //拿到输入框的值 并且做出判断
        var inputValue = this.value;
        if(!inputValue){
            alert('请选择文件');
            return;
        }
        //得到当前上传文件的后缀
        var fileType = inputValue.substr(inputValue.lastIndexOf('.'));
        //判断当前文件是否可以上传 如果可以就显示图片
        if(checkType(fileType)){
            oImg.src ='./img/'+inputValue.substr(inputValue.lastIndexOf('\\')+1);
        }else{
            alert('只允许上传 jpg、png、bmp格式的图片')
        }
    }

    function checkType(fileType) {
        //允许上传的文件后缀
        var allowFile = ['.jpg','.png','gif','.bmp','.jpeg']
        for(var i=0;i<allowFile.length;i++){
            if(allowFile[i] == fileType){
                return true;
            }
        }
        return false;
    }

}