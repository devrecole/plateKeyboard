(function ($) {
    bensie = jQuery;
    var api = {
        plateKeyboard: {
            init: function (options) {
                var defaults = { id: '', plateColor: '', plateNo: '' };
                var ps = $.extend(defaults, options);
                var container = $('#' + ps.id);
                api.config.defaultValue.plateColor = ps.plateColor;
                api.config.defaultValue.plateNo = ps.plateNo;

                var plateColorHtml = ['<ul id="' + api.config.id.plateColor + '">',
                            '        <li t="蓝牌白字" class="active blue">蓝牌</li>',
                            '        <li t="黄牌黑字">黄牌</li>',
                            '        <li t="白牌黑字">白牌</li>',
                            '        <li t="黑牌白字">黑牌</li>',
                            '        <li t="绿牌黑字">绿牌</li>',
                            '    </ul>'].join("");
                $(plateColorHtml).appendTo(container);

                var plateHtml = ['<ul id="' + api.config.id.plateInput + '">',
                            '        <li class="bse-kb-plate-item bse-kb-plate-cur"></li>',
                            '        <li class="bse-kb-plate-item"></li>',
                            '        <li style="width:15px;border:0">·</li>',
                            '        <li class="bse-kb-plate-item" style="border-left:1px solid grey"></li>',
                            '        <li class="bse-kb-plate-item"></li>',
                            '        <li class="bse-kb-plate-item"></li>',
                            '        <li class="bse-kb-plate-item"></li>',
                            '        <li class="bse-kb-plate-item"></li>',
                            '        <li class="bse-kb-plate-item bse-kb-plate-last" style="display:none"></li>',
                            '    </ul>'].join("");
                $(plateHtml).appendTo(container);

                var provinceHtml = ['<div class="bse-keyboard" id="' + api.config.id.province + '">',
                            '        <div>',
                            '            <a href="javascript:">京</a>',
                            '            <a href="javascript:">沪</a>',
                            '            <a href="javascript:">粤</a>',
                            '            <a href="javascript:">津</a>',
                            '            <a href="javascript:">浙</a>',
                            '            <a href="javascript:">苏</a>',
                            '            <a href="javascript:">湘</a>',
                            '        </div>',
                            '        <div>',
                            '            <a href="javascript:">渝</a>',
                            '            <a href="javascript:">云</a>',
                            '            <a href="javascript:">豫</a>',
                            '            <a href="javascript:">皖</a>',
                            '            <a href="javascript:">陕</a>',
                            '            <a href="javascript:">桂</a>',
                            '            <a href="javascript:">新</a>',
                            '        </div>',
                            '        <div>',
                            '            <a href="javascript:">青</a>',
                            '            <a href="javascript:">琼</a>',
                            '            <a href="javascript:">闽</a>',
                            '            <a href="javascript:">蒙</a>',
                            '            <a href="javascript:">辽</a>',
                            '            <a href="javascript:">宁</a>',
                            '            <a href="javascript:">鲁</a>',
                            '        </div>',
                            '        <div>',
                            '            <a href="javascript:">晋</a>',
                            '            <a href="javascript:">吉</a>',
                            '            <a href="javascript:">冀</a>',
                            '            <a href="javascript:">黑</a>',
                            '            <a href="javascript:">甘</a>',
                            '            <a href="javascript:">鄂</a>',
                            '            <a href="javascript:">赣</a>',
                            '        </div>',
                            '        <div>',
                            '            <a href="javascript:">贵</a>',
                            '            <a href="javascript:">川</a>',
                            '            <a href="javascript:">藏</a>',
                            '            <a href="javascript:" class="bse-kb-key-red bse-kb-key-disabled" key="使">使</a>',
                            '            <a href="javascript:" ctrl="space" style="visibility:hidden">&nbsp;</a>',
                            '            <a href="javascript:" ctrl="fold" key="fold" class="iconfont icon-kbfold" style="background:#B1B8C2"></a>',
                            '            <a href="javascript:" ctrl="del" key="del" class="iconfont icon-kbdel" style="background:#B1B8C2"></a>',
                            '        </div>',
                            '    </div>'].join("");
                $(provinceHtml).appendTo($(document.body));

                var keyboardHtml = ['<div class="bse-keyboard" id="' + api.config.id.keyboard + '" style="display:none">',
                            '        <div>',
                            '            <a href="javascript:" key="港">港</a>',
                            '            <a href="javascript:" key="澳">澳</a>',
                            '            <a href="javascript:" class="bse-kb-key-red" key="警">警</a>',
                            '            <a href="javascript:" class="bse-kb-key-red" key="领">领</a>',
                            '            <a href="javascript:" key="学">学</a>',
                            '            <a href="javascript:" key="挂">挂</a>',
                            '            <a href="javascript:" class="bse-kb-key-red" style="width:60px" key="应急">应急</a>',
                            '        </div>',
                            '        <div>',
                            '            <a href="javascript:">1</a>',
                            '            <a href="javascript:">2</a>',
                            '            <a href="javascript:">3</a>',
                            '            <a href="javascript:">4</a>',
                            '            <a href="javascript:">5</a>',
                            '            <a href="javascript:">6</a>',
                            '            <a href="javascript:">7</a>',
                            '            <a href="javascript:">8</a>',
                            '            <a href="javascript:">9</a>',
                            '            <a href="javascript:">0</a>',
                            '        </div>',
                            '        <div>',
                            '            <a href="javascript:">Q</a>',
                            '            <a href="javascript:">W</a>',
                            '            <a href="javascript:">E</a>',
                            '            <a href="javascript:">R</a>',
                            '            <a href="javascript:">T</a>',
                            '            <a href="javascript:">Y</a>',
                            '            <a href="javascript:">U</a>',
                            '            <a href="javascript:" class="bse-kb-key-disabled">I</a>',
                            '            <a href="javascript:" class="bse-kb-key-disabled">O</a>',
                            '            <a href="javascript:">P</a>',
                            '        </div>',
                            '        <div>',
                            '            <a href="javascript:">A</a>',
                            '            <a href="javascript:">S</a>',
                            '            <a href="javascript:">D</a>',
                            '            <a href="javascript:">F</a>',
                            '            <a href="javascript:">G</a>',
                            '            <a href="javascript:">H</a>',
                            '            <a href="javascript:">J</a>',
                            '            <a href="javascript:">K</a>',
                            '            <a href="javascript:">L</a>',
                            '        </div>',
                            '        <div>',
                            '            <a href="javascript:">Z</a>',
                            '            <a href="javascript:">X</a>',
                            '            <a href="javascript:">C</a>',
                            '            <a href="javascript:">V</a>',
                            '            <a href="javascript:">B</a>',
                            '            <a href="javascript:">N</a>',
                            '            <a href="javascript:">M</a>',
                            //'            <a href="javascript:" ctrl="fold" key="fold" class="iconfont icon-kbfold" style="width:38px;background:#B1B8C2"></a>',
                            '            <a href="javascript:" ctrl="del" key="del" class="iconfont icon-kbdel" style="width:38px;background:#B1B8C2"></a>',
                            '        </div>',
                            '    </div>'].join("");
                $(keyboardHtml).appendTo($(document.body));

                api.plateColor.init();
                api.plateInput.init();
                api.provinceKeyboard.init();
                api.charKeyboard.init();

                api.setFoldKeyEnable();
            }
        },

        plateColor: {//车牌颜色
            init: function () {
                $('#' + api.config.id.plateColor + ' li').each(function (i) {
                    var me = $(this);
                    me.click(function () {
                        var beforeColor = api.plateInput.result.plateColor();//切换之前选择的颜色
                        $('#' + api.config.id.plateColor + ' li').attr('class', '');
                        $('.bse-kb-plate-last').hide();
                        api.setKeyEnable('使', false);
                        me.addClass('active');
                        switch (i) {
                            case 0: me.addClass('blue'); break;
                            case 1: me.addClass('yellow'); break;
                            case 2: me.addClass('white'); break;
                            case 3: me.addClass('black'); api.setKeyEnable('使', true); break;
                            case 4: me.addClass('green'); $('.bse-kb-plate-last').show(); break;
                            case 5: me.addClass('fly'); break;
                        }
                        var curColor = me.attr('t');
                        if (beforeColor == '绿牌黑字' && curColor != '绿牌黑字') {
                            api.plateInput.reset();
                        }
                        else if (curColor == '绿牌黑字' && beforeColor != '绿牌黑字') {
                            api.plateInput.reset();
                        }
                        if (curColor != '黑牌白字' && api.plateInput.getItemText(0) == '使') {
                            api.plateInput.reset();
                        }

                        if (curColor != '绿牌黑字') {
                            var sixChar = api.plateInput.getItemText(6);
                            if (sixChar != '') {
                                switch (curColor) {
                                    case '蓝牌白字':
                                        if ('港澳警领学挂应急'.indexOf(sixChar) != -1) {
                                            api.plateInput.getItems().eq(6).text('');
                                        }
                                        break;
                                    case '黄牌黑字'://允许：学挂
                                        if ('港澳警领应急'.indexOf(sixChar) != -1) {
                                            api.plateInput.getItems().eq(6).text('');
                                        }
                                        break;
                                    case '白牌黑字'://允许：警应急
                                        if ('港澳领学挂'.indexOf(sixChar) != -1) {
                                            api.plateInput.getItems().eq(6).text('');
                                        }
                                        break;
                                    case '黑牌白字'://允许：港澳领
                                        if (api.plateInput.getItemText(0) == '使') {
                                            api.plateInput.getItems().eq(6).text('');
                                        }
                                        else if ('警学挂应急'.indexOf(sixChar) != -1) {
                                            api.plateInput.getItems().eq(6).text('');
                                        }
                                        break;
                                }
                            }
                        }

                        api.plateInput.setLayout();
                        api.setFoldKeyEnable();
                        api.plateInput.setCurrent(0);
                        api.changeKeyboard('省份');
                    });
                });
                api.plateInput.setLayout();

                //初始化车牌颜色                
                var defaultPlateColor = api.config.defaultValue.plateColor;
                $('#' + api.config.id.plateColor + ' li').each(function () {
                    if ($(this).attr('t') == defaultPlateColor) {
                        $(this).click();
                        return;
                    }
                });
            }
        },

        plateInput: {//车牌输入框
            init: function () {
                $('#' + api.config.id.plateInput + ' .bse-kb-plate-item').each(function (i) {
                    var me = $(this);
                    me.click(function () {
                        api.config.plateNoCharIndex = i;
                        api.plateInput.setCurrent(i);
                        if (i == 0) { api.changeKeyboard('省份'); } else { api.changeKeyboard('ABC'); }
                    });
                });

                //初始化车牌
                var defaultPlateNo = api.config.defaultValue.plateNo;
                var array = new Array();
                if (defaultPlateNo != '') {
                    for (var i = 0; i < defaultPlateNo.length; i++) {
                        var item = defaultPlateNo[i];
                        if (item == '急') { continue; }
                        if (item == '应') {
                            array.push(item + '急');
                        }
                        else {
                            array.push(item);
                        }
                    }
                    var items = api.plateInput.getItems();
                    for (var j = 0; j < array.length; j++) {
                        items.eq(j).text(array[j]);
                    }
                    //给车牌上色
                    if (api.plateInput.getItemText(0) == '使') {
                        api.plateInput.getItems().eq(0).addClass('bse-kb-key-red');
                        $('#' + api.config.id.province + ' li[key="使"]').removeClass('bse-kb-key-disabled');
                    }
                    var sixChar = api.plateInput.getItemText(6);
                    if ('警领应急'.indexOf(sixChar) != -1) {
                        api.plateInput.getItems().eq(6).addClass('bse-kb-key-red');
                    }
                }
                api.plateInput.fixFontSize();
            },
            setLayout: function () {
                var selectedColor = api.plateInput.result.plateColor();
                var kbPlateItemCount = selectedColor == '绿牌黑字' ? 8 : 7;
                var plateInputItems = api.plateInput.getItems();
                var kbPlateInputWidth = $('#' + api.config.id.plateInput).width();
                var kbPlaInputItemWidth = (kbPlateInputWidth - 15 - (kbPlateItemCount + 3)) / kbPlateItemCount;//15:圆点宽度；9:边框宽度
                plateInputItems.css({ width: kbPlaInputItemWidth + 'px' });
            },
            setCurrent: function (i) {
                var items = api.plateInput.getItems().removeClass('bse-kb-plate-cur');
                if (i > -1) { items.eq(i).addClass('bse-kb-plate-cur'); }
                var numberKeyboard = $('#' + api.config.id.keyboard + ' div').eq(1);
                if (api.config.plateNoCharIndex == 1) {
                    numberKeyboard.hide();
                }
                else {
                    numberKeyboard.show();
                }
                if ($.trim(items.eq(0).text()) == '使') {//使馆车无论如何都有数字键盘
                    numberKeyboard.show();
                    if ('港澳警领学挂应急'.indexOf(api.plateInput.getItemText(6)) != -1) {
                        api.plateInput.getItems().eq(6).text('');
                    }
                }

                var specialKeyboard = $('#' + api.config.id.keyboard + ' div').eq(0);
                var selectedPlateColor = api.plateInput.result.plateColor();
                if (api.config.plateNoCharIndex == 6) {
                    if (selectedPlateColor != '蓝牌白字' && selectedPlateColor != '绿牌黑字' && api.plateInput.getItemText(0) != '使') {
                        specialKeyboard.show();
                    }
                }
                else {
                    specialKeyboard.hide();
                }

                specialKeyboard.find('a').addClass('bse-kb-key-disabled');
                switch (selectedPlateColor) {
                    case '白牌黑字':
                        api.setKeyEnable('警', true);
                        api.setKeyEnable('应急', true);
                        break;
                    case '黑牌白字':
                        api.setKeyEnable('澳', true);
                        api.setKeyEnable('港', true);
                        api.setKeyEnable('领', true);
                        break;
                    case '黄牌黑字':
                        api.setKeyEnable('挂', true);
                        api.setKeyEnable('学', true);
                        break;
                }
            },
            fillChar: function (index, chr) {
                var plateItems = api.plateInput.getItems();
                plateItems.eq(index).text(chr);
                var selectedPlateColor = api.plateInput.result.plateColor();
                var maxPlateLength = selectedPlateColor == '绿牌黑字' ? 8 : 7;

                //光标后移
                if (index < maxPlateLength) {
                    api.config.plateNoCharIndex++;
                    api.plateInput.setCurrent(api.config.plateNoCharIndex);
                }

                //如果录入完整，则自动隐藏键盘
                if (api.config.plateNoCharIndex == maxPlateLength) {
                    api.hideKeyboard();
                }

                //禁用某些键
                api.setFoldKeyEnable();

                //设置车牌字段颜色
                if (index == 6 && selectedPlateColor != '蓝牌白字' && selectedPlateColor != '绿牌黑字' && '警领应急'.indexOf(api.plateInput.getItemText(6)) != -1) {
                    api.plateInput.getItems().eq(6).addClass('bse-kb-key-red');
                }
                else {
                    api.plateInput.getItems().eq(6).removeClass('bse-kb-key-red');
                }
                if (api.plateInput.getItemText(0) == '使') {
                    api.plateInput.getItems().eq(0).addClass('bse-kb-key-red');
                }
                else {
                    api.plateInput.getItems().eq(0).removeClass('bse-kb-key-red');
                }
                api.plateInput.fixFontSize();
            },
            reset: function () {
                api.plateInput.getItems().text('');
                api.config.plateNoCharIndex = 0;
                api.plateInput.setCurrent(0);
                api.changeKeyboard('省份');
            },
            getItems: function () {
                return $('#' + api.config.id.plateInput + ' .bse-kb-plate-item');
            },
            getItemText: function (index) {
                var items = api.plateInput.getItems();
                if (items.size() == 0) { return ''; }
                return $.trim(items.eq(index).text());
            },
            fixFontSize: function () {
                if (api.plateInput.getItemText(6) == '应急') {
                    api.plateInput.getItems().eq(6).addClass('bse-kb-input-sfont');
                }
                else {
                    api.plateInput.getItems().eq(6).removeClass('bse-kb-input-sfont');
                }
            },
            result: {
                plateColor: function () {
                    return $.trim($('#' + api.config.id.plateColor + ' .active').attr('t'));
                },
                color: function () {
                    return $.trim($('#' + api.config.id.plateColor + ' .active').text());
                },
                plateNo: function () {
                    var items = api.plateInput.getItems();
                    var rs = '';
                    items.each(function () { rs += $.trim($(this).text()); });
                    return rs;
                },
                selectedIndex: function () {
                    var selectedIndex = 0;
                    api.plateInput.getItems().each(function (i) {
                        if ($(this).hasClass('bse-kb-plate-cur')) {
                            selectedIndex = i;
                            return;
                        }
                    });
                    return selectedIndex;
                }
            }
        },

        provinceKeyboard: {//省份键盘
            init: function () {
                var keyboardWidth = $('.bse-keyboard').width();
                var pItemWidth = (keyboardWidth / 7 * 0.7).toFixed(2);
                var pItemMargin = (keyboardWidth / 7 * 0.1 / 2).toFixed(2);

                $('#' + api.config.id.province + ' a').each(function () {//选择省份
                    var me = $(this);
                    if (me.attr('t') == undefined) {
                        me.css({ width: pItemWidth + 'px', 'margin-left': pItemMargin + 'px', 'margin-right': pItemMargin + 'px' });
                    }
                    me.click(function () {//省份键盘点击                    
                        var ctrlKey = me.attr('ctrl');
                        switch (ctrlKey) {
                            case undefined://说明是输入框，填入指定的位置
                                if (me.hasClass('bse-kb-key-disabled')) { return; }
                                var v = $.trim(me.text());
                                api.plateInput.fillChar(0, v);
                                api.config.plateNoCharIndex = 1;
                                api.plateInput.setCurrent(api.config.plateNoCharIndex);
                                api.changeKeyboard('ABC');
                                break;
                            case 'fold':
                                api.hideKeyboard();
                                return;
                            case 'del':
                                api.backspace();
                                return;
                        }
                    });
                });
            }
        },

        charKeyboard: {//字符键盘
            init: function () {
                var keyboardWidth = $('.bse-keyboard').width();
                var charItemWidth = (keyboardWidth / 10 * 0.74).toFixed(2);
                var charItemMargin = (keyboardWidth / 10 * 0.1 / 2).toFixed(2) - 1;
                $('#' + api.config.id.keyboard + ' a').each(function () {//ABC键盘
                    var me = $(this);
                    if (me.attr('t') == undefined && $.trim(me.text()).length == 1) {
                        me.css({ width: charItemWidth + 'px', 'margin-left': charItemMargin + 'px', 'margin-right': charItemMargin + 'px' });
                    }
                    me.click(function () {
                        var ctrlKey = me.attr('ctrl');
                        switch (ctrlKey) {
                            case undefined://说明是输入框，填入指定的位置
                                if (me.hasClass('bse-kb-key-disabled')) { return; }
                                var v = $.trim(me.text());
                                api.plateInput.fillChar(api.config.plateNoCharIndex, v);
                                break;
                            case 'fold':
                                api.hideKeyboard();
                                return;
                            case 'del':
                                api.backspace();
                                return;
                        }
                    });
                });
            }
        },
        backspace: function () {
            var selectedIndex = api.plateInput.result.selectedIndex();
            api.plateInput.getItems().eq(selectedIndex).text('');
            if (selectedIndex > 0) {
                var curIndex = api.config.plateNoCharIndex;
                curIndex--;
                api.plateInput.setCurrent(curIndex);
                if (curIndex == 0) {
                    api.changeKeyboard('省份');
                }
                api.config.plateNoCharIndex = curIndex;
            }

            api.setFoldKeyEnable();
        },
        setFoldKeyEnable: function () {
            if (api.isWholePlate()) {
                api.setKeyEnable('fold', true);
            }
            else {
                api.setKeyEnable('fold', false);
            }
        },
        setKeyEnable: function (key, enable) {
            var ctrls = $('.bse-keyboard a[key="' + key + '"]');
            if (enable) {
                ctrls.removeClass('bse-kb-key-disabled');
            }
            else {
                ctrls.addClass('bse-kb-key-disabled');
            }
        },
        isWholePlate: function () {//判断是否是完整的车牌
            var selectedPlateColor = api.plateInput.result.plateColor();
            var maxPlateLength = selectedPlateColor == '绿牌黑字' ? 8 : 7;
            //录入了多少位车牌
            var inputCount = 0;
            var plateItems = api.plateInput.getItems();
            plateItems.each(function () {
                if ($.trim($(this).text()).length > 0) { inputCount++; }
            });
            return inputCount == maxPlateLength;
        },
        hideKeyboard: function () {
            if (api.isWholePlate()) {
                api.changeKeyboard('hide');
            }
        },
        changeKeyboard: function (t) {
            var provinceKeyboard = $('#' + api.config.id.province);
            var charKeyboard = $('#' + api.config.id.keyboard);
            if (t == 'ABC') {
                provinceKeyboard.hide();
                charKeyboard.show();
            }
            else if (t == '省份') {
                provinceKeyboard.show();
                charKeyboard.hide();
            }
            else {
                provinceKeyboard.hide();
                charKeyboard.hide();
            }
        },
        config: {
            plateNoCharIndex: 0,
            id: {
                plateColor: 'bse-kb-plate-color', plateInput: 'bse-kb-plate-input', province: 'bse-kb-keys-province', keyboard: 'bse-kb-keyboard'
            },
            defaultValue: { plateColor: '', plateNo: '' }
        }
    }
    bensie.plateKeyboard = { init: api.plateKeyboard.init, selectedData: api.plateInput.result }
})($);