# plateKeyboard
H5 jquery 车牌输入组件


## 介绍

支持5类车牌的录入，自带车牌规则校验，调用时一行代码轻松搞定。


## 调用示例
``` html
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<link href="bensie.plateKeyboard.css?v=30" rel="stylesheet" />
<script src="bensie.plateKeyboard.js?v=30"></script>
<div id="kb" style="margin-top:30px;"></div>
<script>
    //初始化
    $(function () {
        bensie.plateKeyboard.init({ id: 'kb', plateColor:'蓝牌白字', plateNo:'粤XGM789' });
    });
    
    //演示获取录入的内容
    function showPlateColor() {//获取车牌颜色(如：蓝牌白字)
        var color = bensie.plateKeyboard.selectedData.plateColor();
        alert(color);
    }

    function showPlateNo() {//获取车牌号码
        var no = bensie.plateKeyboard.selectedData.plateNo();
        alert(no);
    }

</script>
```
## 效果
![image](https://github.com/devrecole/plateKeyboard/blob/master/example/plateinput.png)
![image](https://github.com/devrecole/plateKeyboard/blob/master/example/p2.png)
