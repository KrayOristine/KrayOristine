/*:
* @author Lu,fer
* @plugindesc Thơi gian hơi thực, có thể tuỳ chỉnh theo ý thích.
* 
* @help
* v1.0 Lu,fer Clock
* Sử dụng các biến trong game để tạo thành thời gian giống như thời gian thực.
* Có thể tuỳ chỉnh thời gian, ngày, tháng, năm và mùa tuỳ thích.
*
* Hướng dẫn sử dụng:
* Lệnh(Plugins Command): Clock (lệnh)
* Các lệnh: show, hide, start, pause
* show/hide: Hiện và ẩn đồng hồ
* start/pause: Bắt đầu và tạm ngưng thời gian.
* 
* Lưu ý khi sử dụng:
* - Yêu cầu chỉnh var của tháng và ngày lớn hơn 1.
* - Đây là plugins miễn phí, nếu phát hành game miễn phí thì chỉ yêu cầu có Credit.
* - Nếu có ý định sử dụng plugins trong thương mại, xin hãy cho chúng tôi biết.
* - Vì tay nghề của người code còn kém nên plugins có thể có lỗi hay đại loại. 
* Nếu có bug hay gì đó thì hãy thông báo cho chúng tôi.
* 
* Cảm ơn vì đã sử dụng plugins.
* Cảm ơn Quang Trần đã hổ trợ trong quy trình code <(")
* @param Tuỳ chỉnh window
*
* @param Vị trí
* @parent Tuỳ chỉnh window
*
* @param Kích cở khung
* @parent Tuỳ chỉnh window
*
* @param Vị trí chữ
* @parent Tuỳ chỉnh window
*
* @param Ngang(X)
* @parent Vị trí
* @desc Vị trí nằm ngang của window hiển thị
* @type number
* @default 0
* @min 0
* @max 1000
*
* @param Dọc(Y)
* @parent Vị trí
* @desc Vị trí nằm dọc của window hiển thị
* @type number
* @default 555
* @min 0
* @max 1000
*
*
* @param Kích cở ngang(Width)
* @parent Kích cở khung
* @desc Kích cở ngang của window hiển thị
* @type number
* @default 350
* @min 0
* @max 1000

* @param Kích cở dọc(Height)
* @parent Kích cở khung
* @desc Kích cở dọc của window hiển thị
* @type number
* @default 70
* @min 0
* @max 1000
*
*
* @param Vị trí ngang(X)
* @parent Vị trí chữ
* @desc Vị trí chữ nằm ngang
* @type number
* @default 0
*
* @param Vị trí dọc(Y)
* @parent Vị trí chữ
* @desc Vị trí chữ nằm dọc
* @type number
* @default 0
*
* @param Thời gian
*
* @param Tên mùa
* @parent Cài đặt
*
* @param Xuân
* @parent Tên mùa
* @desc Tuỳ chỉnh tên mùa cho mùa
* @type text
* @default Spr
*
* @param Hạ
* @parent Tên mùa
* @desc Tuỳ chỉnh tên mùa cho mùa
* @type text
* @default Sum
*
* @param Thu
* @parent Tên mùa
* @desc Tuỳ chỉnh tên mùa cho mùa
* @type text
* @default Fall
*
* @param Đông
* @parent Tên mùa
* @desc Tuỳ chỉnh tên mùa cho mùa
* @type text
* @default Winter
* 
* @param Cài đặt
* 
* @param Icon
* @parent Cài đặt
* @desc Dùng Icon thay thế
* @type boolean
* @default false
*
* @param Icon Mùa Xuân
* @parent Icon
* @desc Icon của mùa xuân
* @type number
* @default 1
*
* @param Icon Mùa Hạ
* @parent Icon
* @desc Icon của mùa hạ
* @type number
* @default 2
*
* @param Icon Mùa Thu
* @parent Icon
* @desc Icon của mùa Thu
* @type number
* @default 3
*
* @param Icon Mùa Đông
* @parent Icon
* @desc Icon của mùa Đông
* @type number
* @default 4
*
* @param Thời gian trên ms
* @parent Cài đặt
* @desc Thời gian của 1 phút trong game. 1000 = 1 giây (1000ms = 1 Second)
* @type number
* @default 2000
* @min 100
* 
* @param Variables của thời gian
*
* @param Var của giờ
* @parent Variables của thời gian
* @desc Variables của giờ
* @type number
* @default 1
*
* @param Var của phút
* @parent Variables của thời gian
* @desc Variables của phút
* @type number
* @default 2
*
* @param Var của ngày
* @parent Variables của thời gian
* @desc Variables của ngày
* @type number
* @default 3
*
* @param Var của tháng
* @parent Variables của thời gian
* @desc Variables của tháng
* @type number
* @default 4
*
* @param Var của năm
* @parent Variables của thời gian
* @desc Variables của tháng
* @type number
* @default 5
*
* @param Var của mùa
* @parent Variables của thời gian
* @desc Variables của mùa
* @type number
* @default 6
*
* @param Tuỳ chỉnh thời gian
*
* @param Giờ và phút
* @parent Tuỳ chỉnh thời gian
*
* @param Giờ trong ngày
* @parent Giờ và phút
* @type number
* @default 24
* @min 1
*
* @param Phút trong giờ
* @parent Giờ và phút
* @type number
* @default 60
* @min 1
*
* @param Ngày trong tháng
* @parent Tuỳ chỉnh thời gian
* @desc Tuỳ chỉnh số ngày trong 1 tháng
*
* @param Tháng 1
* @parent Ngày trong tháng
* @desc Số ngày của tháng 1, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 2
* @parent Ngày trong tháng
* @desc Số ngày của tháng 2, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 3
* @parent Ngày trong tháng
* @desc Số ngày của tháng 3, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 4
* @parent Ngày trong tháng
* @desc Số ngày của tháng 4, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 5
* @parent Ngày trong tháng
* @desc Số ngày của tháng 5, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 6
* @parent Ngày trong tháng
* @desc Số ngày của tháng 6, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 7
* @parent Ngày trong tháng
* @desc Số ngày của tháng 7, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 8
* @parent Ngày trong tháng
* @desc Số ngày của tháng 8, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 9
* @parent Ngày trong tháng
* @desc Số ngày của tháng 9, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 10
* @parent Ngày trong tháng
* @desc Số ngày của tháng 10, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 11
* @parent Ngày trong tháng
* @desc Số ngày của tháng 11, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 12
* @parent Ngày trong tháng
* @desc Số ngày của tháng 12, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 13
* @parent Ngày trong tháng
* @desc Số ngày của tháng 13, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 14
* @parent Ngày trong tháng
* @desc Số ngày của tháng 14, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Tháng 15
* @parent Ngày trong tháng
* @desc Số ngày của tháng 15, tối đa 35 ngày.
* @type number
* @default 30
* @min 1
* @max 35
*
* @param Năm
* @parent Tuỳ chỉnh số ngày trong 1 tháng
*
* @param Tháng của 1 năm
* @parent Năm
* @desc Tuỳ chỉnh số tháng trong 1 năm
* @type number
* @default 12
* @min 1
* @max 15
*
* @param Mùa của tháng
* @parent Tuỳ chỉnh số ngày trong 1 tháng
*
* @param Tháng Xuân
* @parent Mùa của tháng
* @type number
* @default 1
* @min 1
* @max 15
*
* @param Tháng Hạ
* @parent Mùa của tháng
* @type number
* @default 4
* @min 1
* @max 15
*
* @param Tháng Thu
* @parent Mùa của tháng
* @type number
* @default 7
* @min 1
* @max 15
*
* @param Tháng Đông
* @parent Mùa của tháng
* @type number
* @default 10
* @min 1
* @max 15
*
* @param Total Month
* @type number
* @default 12
* 
* @param Day of Month
* @type string
* @default 30
* @desc 30,31 (odd and even); 30,33,20,30,22,21,35,65,77,99,11,12 (for different day every month, total amount must same as total month)
*/




/*////////
// Var & Params
*/ ///////
var params = PluginManager.parameters("Lufer_Clock");

var dayOfMonth = params["Day of Month"];
var totalMonth = params["Total Month"]

//Convert into array
dayOfMonth = dayOfMonth.split(',')
if (dayOfMonth.length < totalMonth && (dayOfMonth.length != 1 || dayOfMonth.length != 2)) {
    for (let i = dayOfMonth.length; i < totalMonth; i++) {
        if (i % 2 === 0) {
            dayOfMonth.push('30')
        } else {
            dayOfMonth.push('31')
        }
    }
}
// Mùa
var _sss = [params["Xuân"], params["Hạ"], params["Thu"], params["Đông"]]
    // Box
var poix = params["Ngang(X)"];
var poiy = params["Dọc(Y)"];
var boxw = params["Kích cở ngang(Width)"];
var boxh = params["Kích cở dọc(Height)"];
var tx = params["Vị trí ngang(X)"];
var ty = params["Vị trí dọc(Y)"];
// Variables
var _hourv = params["Var của giờ"]
var _minv = params["Var của phút"]
var _dayv = params["Var của ngày"]
var _monthv = params["Var của tháng"]
var _yearv = params["Var của năm"]
var _sesv = params["Var của mùa"]
    // Month Days
var _dtm = [params["Tháng 1"], params["Tháng 2"], params["Tháng 3"], params["Tháng 4"], params["Tháng 5"], params["Tháng 6"], params["Tháng 7"], params["Tháng 8"], params["Tháng 9"], params["Tháng 10"], params["Tháng 11"], params["Tháng 12"], params["Tháng 13"], params["Tháng 14"], params["Tháng 15"]];

var _mty = params["Tháng của 1 năm"]

var _sspr = params["Tháng Xuân"]
var _ssum = params["Tháng Hạ"]
var _sfal = params["Tháng Thu"]
var _swin = params["Tháng Đông"]
    // Other
var _msts = params["Thời gian trên ms"]
var _htd = params["Giờ trong ngày"]
var _mth = params["Phút trong giờ"]
    // Command
var Category = ['run', 'stop'];
var _time1 = "0";
var _time2 = "0";
var _time3 = "0";
var _time4 = "0";
var _time5 = "000";
// 
var _showi = params['Icon'] || true;
var _seai = [params["Icon Mùa Xuân"], params["Icon Mùa Hạ"], params["Icon Mùa Thu"], params["Icon Mùa Đông"]]
    /*////////
    // Call
    */ ///////
var _Game_Ordered__pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Ordered__pluginCommand.call(this, command, args);
    if (command === 'Clock') {
        switch (args[0]) {
            case 'show':
                isLuferTimeShow = true;
                break;
            case 'hide':
                isLuferTimeShow = false;
                break;
            case 'pause':
                isLuferTimePause = true;
                break;
            case 'start':
                isLuferTimePause = false;
                break;

        }
    }
};


//Code
/*////////
// Hud
*/ ///////
var isLuferTimeShow = false;
var isLuferTimeRun = false;
var isLuferTimePause = true;
var isLuferTimeOut
    // Window
function My_Window() {
    this.initialize.apply(this, arguments);

}

My_Window.prototype = Object.create(Window_Base.prototype);
My_Window.prototype.constructor = My_Window;

My_Window.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this, 0 + poix, 0 + poiy, 0 + boxw, 0 + boxh);
    this.refresh();
}

// Window Create
const smstart = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
        smstart.apply(this, arguments);
        this.my_window = new My_Window();
        this.addChild(this.my_window);
    }
    // Window Hide/Show & Text
My_Window.prototype.refresh = function() {
    this.contents.clear();
    if (isLuferTimeShow) {
        if (_showi == "true") {
            this.drawIcon(_seai[$gameVariables.value(_sesv)], 0, 0);
            this.drawText(_time1 + $gameVariables.value(_hourv) + ':' + _time2 + $gameVariables.value(_minv) + '-' + _time3 +
                $gameVariables.value(_dayv) + "/" + _time4 + $gameVariables.value(_monthv) + "/" + _time5 +
                $gameVariables.value(_yearv), 4 + tx, ty / 1);
        } else {
            this.drawText(_time1 + $gameVariables.value(_hourv) + ':' + _time2 + $gameVariables.value(_minv) + '-' + _time3 +
                $gameVariables.value(_dayv) + "/" + _time4 + $gameVariables.value(_monthv) + "/" + _time5 +
                $gameVariables.value(_yearv) + " " + _sss[$gameVariables.value(_sesv)], tx, ty / 1);
        }
        this.show();
    } else {
        this.hide();
    }
}
My_Window.prototype.update = function() {
    Lufer_Call();
    this.refresh();
};
/*///////////////////////////////////////////////////////////
// Time Run
*/ //////////////////////////////////////////////////////////
function Lufer_Call() {
    Lufer_Time();
    Lufer_Change();
    Lufer_Month();
    Lufer_Year();
    Lufer_SeasonChange();
    Lufer_TimeZero();
}

function Lufer_Time() {
    if (!isLuferTimePause) {
        if (!isLuferTimeRun) {
            isLuferTimeRun = true;
            isLuferTimeOut = setTimeout(function() {
                isLuferTimeRun = false;
                $gameVariables.setValue(_minv, $gameVariables.value(_minv) + 1);
            }, _msts);
        };
    } else {

        clearTimeout(isLuferTimeOut);
        isLuferTimeRun = false;
    }
};

function Lufer_Change() {
    if ($gameVariables.value(_minv) == _mth) {
        $gameVariables.setValue(_minv, 0);
        $gameVariables.setValue(_hourv, $gameVariables.value(_hourv) + 1);
    }
    if ($gameVariables.value(_hourv) == _htd) {
        $gameVariables.setValue(_hourv, 0);
        $gameVariables.setValue(_dayv, $gameVariables.value(_dayv) + 1);

    }
};

function Lufer_Month() {
    let cm = $gameVariables.value(_monthv);
    switch (dayOfMonth.length) {
        case 1:
            if ($gameVariables.value(_dayv) > Number(dayOfMonth[0])) {
                $gameVariables.setValue(_dayv, 1);
                $gameVariables.setValue(_monthv, cm++);
            }
        case 2:
            if (cm % 2 === 0 && $gameVariables.value(_dayv) > Number(dayOfMonth[0])) {
                $gameVariables.setValue(_dayv, 1);
                $gameVariables.setValue(_monthv, cm++);
            } else if ($gameVariables.value(_dayv) > Number(dayOfMonth[1])) {
                $gameVariables.setValue(_dayv, 1);
                $gameVariables.setValue(_monthv, cm++);
            }
        default:
            if ($gameVariables.value(_dayv) > Number(dayOfMonth[cm])) {
                $gameVariables.setValue(_dayv, 1);
                $gameVariables.setValue(_monthv, cm++);
            }
            break;
    }
};

function Lufer_Year() {
    if ($gameVariables.value(_monthv) > _mty) {
        $gameVariables.setValue(_monthv, 1)
        $gameVariables.setValue(_yearv, $gameVariables.value(_yearv) + 1);
    }
};

function Lufer_SeasonChange() {
    if ($gameVariables.value(_monthv) == _sspr) {
        $gameVariables.setValue(_sesv, 0)
    }
    if ($gameVariables.value(_monthv) == _ssum) {
        $gameVariables.setValue(_sesv, 1)
    }
    if ($gameVariables.value(_monthv) == _sfal) {
        $gameVariables.setValue(_sesv, 2)
    }
    if ($gameVariables.value(_monthv) == _swin) {
        $gameVariables.setValue(_sesv, 3)
    }
};

function Lufer_TimeZero() {
    if ($gameVariables.value(_hourv) > 9) {
        _time1 = "";
    } else {
        _time1 = "0";
    }
    if ($gameVariables.value(_minv) > 9) {
        _time2 = "";
    } else {
        _time2 = "0";
    }
    if ($gameVariables.value(_dayv) > 9) {
        _time3 = "";
    } else {
        _time3 = "0";
    }
    if ($gameVariables.value(_monthv) > 9) {
        _time4 = "";
    } else {
        _time4 = "0";
    }
    if ($gameVariables.value(_yearv) > 999) {
        _time5 = "";
    } else {
        if ($gameVariables.value(_yearv) > 99) {
            _time5 = "0";
        } else {
            if ($gameVariables.value(_yearv) > 9) {
                _time5 = "00";
            } else {
                _time5 = "000";
            }
        }
    }
}
