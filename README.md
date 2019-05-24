### plateKeyboard jQuery H5 车牌输入组件

plateKeyboard是一个基于jQuery的移动端插件，支持5类颜色的车牌录入，自带车牌规则校验，调用时一行代码轻松搞定。

### 功能特点
* 车牌中没有I和O，所以在键盘上永久禁用这两个按钮；
* “收起”按键只有当车牌输入完整的情况下才会启用，否则处于禁用状态；
* 点击指定车牌号码指定位置可以直接修改该位置的字符；
* 车辆输入完整自动收起键盘；

### 设计规则
* 蓝牌白字：共7位，第1位是省份简称，第2位是英文，其他位可以是英文或数字，没有特殊的汉字；
* 黄牌黑字：共7位，第1位是省份简称，第2位是英文，最后一位可以是“学”或“挂”，其他位可以是英文或数字；
* 白牌黑字：共7位，第1位是省份简称，第2位是英文，最后1位可以是“警”或“应急”，其他位可以是英文或数字；
* 黑牌白字：共7位，第1位是省份简称或“使”，最后1位可以是“港”、“澳”或“领”，如果第1位是“使”则第2位和最后1位只可以是数字或字母；如果最后1位是“领”，则第一位只能是省份简称第2位只能是字母；其他位可以是英文或数字；
* 绿牌黑字：共8位，第1位是省份简称，第2位是英文，其他位可以是英文或数字。

### 调用示例
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
## 效果演示
![image](https://github.com/devrecole/plateKeyboard/blob/master/example/demo-province.png)
![image](https://github.com/devrecole/plateKeyboard/blob/master/example/demo-char-1.png)

![image](https://github.com/devrecole/plateKeyboard/blob/master/example/demo-char-2.png)
