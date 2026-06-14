$(document).ready(function () {
    $(".forms .input").focusin(function () {
        $(this).find("span").animate({"opacity": "0"}, 200);
    });
    $(".forms .input").focusout(function () {
        $(this).find("span").animate({"opacity": "1"}, 300);
    });
    
    _cancel_keys = false;
});
function CheckPassWordLanguage(that) {
    var UserText = /^[a-zA-Z0-9\~\!\@\#\$\%\^\&\*\-\=\+\)\(\|\}\{\]\[\'\"\;\:\?\/\\\.\>\<\,]*$/;
    var UserValue = $(that).val();
    if (!UserText.test(UserValue))
        $('#DS_Persin_Lanquage').show();//css({"display": "block"});
    else
        $('#DS_Persin_Lanquage').hide();//css({"display": "none"});
}
function GetTimerString(RemainSessionTime) {
    var seconds = Math.floor(RemainSessionTime % 60);
    var minutes = Math.floor((RemainSessionTime / 60) % 60) + (seconds >= 30 ? 1 : 0);
    var hours = Math.floor((RemainSessionTime / (3600)) % 24);
    if (minutes >= 60) {
        hours++;
        minutes -= 60;
    }
    var days = Math.floor(RemainSessionTime / 86400);
    if (hours >= 24) {
        days++;
        hours -= 24;
    }
    return "<span style='color:blue'>" + (days > 0 ? (days + " Day ") : "") + (hours > 0 ? hours + " Hour " : "") + (minutes > 0 ? minutes + " Min" : "") + "</span>";
}
/*function DS_Abbreviation(text,maxLength){
 if(text.length > maxLength){
 return text.substring(0,maxLength-3) + "...";
 }
 return text;
 }*/
function ByteToR(P_Byte) {
    if (TrUnitArray == undefined)
        TrUnitArray = ['Byte', 'K', 'M', 'G'];
    if ((P_Byte == 0) || (P_Byte == ''))
        return 0;
    P_Byte = Math.round(parseFloat(P_Byte));
    var BSign = "";
    if (P_Byte < 0) {
        P_Byte = -P_Byte;
        BSign = "-";
    }
    var Result = "";
    var Res = Math.floor(P_Byte / 1024);
    var Byte = P_Byte - Res * 1024;
    if (Byte > 0)
        Result = " " + Byte + TrUnitArray[0];
    P_Byte = Res;
    Res = Math.floor(P_Byte / 1024);
    Byte = P_Byte - Res * 1024;
    if (Byte > 0)
        Result = " " + Byte + TrUnitArray[1] + Result;
    P_Byte = Res;
    Res = Math.floor(P_Byte / 1024);
    Byte = P_Byte - Res * 1024;
    if (Byte > 0)
        Result = " " + Byte + TrUnitArray[2] + Result;
    if (Res > 0)
        Result = " " + Res + TrUnitArray[3] + Result;
    return BSign + Result.trim();
}

function FormatMoney(n, c, d, t) {
    c = isNaN(c = Math.abs(c)) ? 0 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "")
}
;

var _popup_cfg = [];
if (parent._popup_cfg != undefined)
    _popup_cfg = parent._popup_cfg;
var _cancel_keys = false;

function DSProgressOn() {
    var cover = document.createElement("DIV");
    cover.className = "DS_ModalCover";
    cover.id = "DS_ModalCover";
    document.body.appendChild(cover);
    var p = document.createElement("DIV");
    p.className = "loader-ring";
    p.id = "DS_Progress";
    document.body.appendChild(p);
    var x = Math.abs(Math.floor(((window.innerWidth || document.documentElement.offsetWidth) - p.offsetWidth) / 2));
    var y = Math.abs(Math.floor(((window.innerHeight || document.documentElement.offsetHeight) - p.offsetHeight) / 2));
    p.style.top = y + 'px';
    p.style.left = x + 'px';
    _cancel_keys = true;
}

function DSProgressOff() {
    _cancel_keys = false;
    var p = document.getElementById("DS_Progress");
    if (p)
        document.body.removeChild(p);
    p = document.getElementById("DS_ModalCover");
    if (p)
        document.body.removeChild(p);
}

function DSMessage(Arg) {
    if (typeof Arg != 'object')
        return MsgBoxStructure({
            text: Arg,
            type: "message"
        });
    else {
        Arg.type = "message";
        Arg.title = null;
        return MsgBoxStructure(Arg);
    }
}

function DSAlert(Arg) {
    if (typeof Arg != 'object')
        return MsgBoxStructure({
            text: Arg,
            type: "alert",
            ok: "OK"
        });
    else {
        if (!Arg.type)
            Arg.type = "alert";
        if (!Arg.ok)
            Arg.ok = "OK";
        return MsgBoxStructure(Arg);
    }
}

function DSConfirm(Arg) {
    if (!Arg.type)
        Arg.type = "confirm";
    if (!Arg.ok)
        Arg.ok = "OK";
    if (!Arg.cancel)
        Arg.cancel = "Cancel";
    return MsgBoxStructure(Arg);
}

function button(text, result) {
    return "<button class='btn btn-orange btn-border-o' style='line-height:0;padding:12px 10px;line-height:0' result='" + result + "' >" + text + "</button>";
}

function MsgBoxStructure(config) {
    var box = document.createElement("DIV");
    if (!config.hidden) {
        config.cover = document.createElement("DIV");
        config.cover.className = "DS_ModalCover";
        document.body.appendChild(config.cover);
    }
    box.className = "DS_Popup DS-" + config.type + " DS_computer_Dir DS_Dir";
    var inner = '';
    if (config.width)
        box.style.width = config.width;
    if (config.height)
        box.style.height = config.height;
    if (config.title) {
        inner += '<div class="DS_Popup_Title">' + config.title;
        if (config.close)
            inner += '<div  class="DS_Popup_CloseBtn" style="font-family:tahoma;color:inherit">X</div>';
        inner += '</div>';
    }
    inner += '<div class="DS_Popup_Text"><span>' + config.text + '</span></div>';
    if (config.ok) {
        inner += '<div class="DS_Popup_controls">';
        inner += button(config.ok, !0);
        if (config.cancel)
            inner += button(config.cancel, !1);
        if (config.buttons)
            for (var i = 0; i < config.buttons.length; i++)
                inner += button(config.buttons[i], i);
        inner += '</div>';
        box.onclick = function (e) {
            e = e || event;
            var source = e.target || e.srcElement;
            if (!source.className)
                source = source.parentNode;
            if (source.className == 'DS_Popup_CloseBtn')
                callbacktop(0);
            else if (source.className.indexOf('btn') != -1) {
                var result = source.getAttribute("result");
                result = (result == "true") || (result == "false" ? !1 : result);
                callbacktop(result);
            }

        }
    } else {
        var Timeout_Id = setTimeout(function () {
            destroy_popup(config, !0)
        }, config.expire || 5000);
        box.onclick = function (e) {
            clearTimeout(Timeout_Id);
            destroy_popup(config, !0);
        };
        _cancel_keys = true;
    }
    box.innerHTML = inner;
    config.box = box;
    if (config.ok)
        _popup_cfg.push(config);
    document.body.appendChild(box);
    var x = Math.abs(Math.floor(((window.innerWidth || document.documentElement.offsetWidth) - box.offsetWidth) / 2));
    var y = Math.abs(Math.floor(((window.innerHeight || document.documentElement.offsetHeight) - box.offsetHeight) / 2));
    box.style.top = y + 'px';
    box.style.left = x + 'px';
    box.focus();
}

function destroy_popup(config, result) {
    _cancel_keys = false;
    var usercall = config.callback;
    if (config.cover) {
        config.box.parentNode.removeChild(config.cover);
        config.cover = null;
    }
    config.box.parentNode.removeChild(config.box);
    config.box = null;
    if (usercall)
        usercall(result);
}

function callbacktop(result) {
    if (_popup_cfg.length > 0) {
        var config = _popup_cfg.pop();
        destroy_popup(config, result)
    }
}

function modal_key(e) {
    if (_popup_cfg.length > 0) {
        e = e || event;
        var code = e.which || event.keyCode;
        if (code == 13 || code == 32)
            callbacktop(!0);
        if (code == 27)
            callbacktop(!1);
        if (e.preventDefault)
            e.preventDefault();
        return !(e.cancelBubble = !0);
    } else if (_cancel_keys)
        if (e.preventDefault)
            e.preventDefault();
}
if (document.attachEvent)
    document.attachEvent("onkeydown", modal_key);
else
    document.addEventListener("keydown", modal_key, !0);

function paramters(form) {
    var params = "";
    var names = [];
    var values = [];
    var valid = !1;
    var cnt = 0;
    var is_checkBox = !1;
    for (var i = 0; i < form.length; i++) {
        if (form.elements[i].getAttribute("type") == 'submit')
            continue;
        if (form.elements[i].getAttribute("type") == 'checkbox') {
            names[cnt] = form.elements[i].getAttribute("name");
            if (document.getElementById(form.elements[i].getAttribute("id")).checked)
                values[cnt] = 1;
            else {
                values[cnt] = 0;
            }
            cnt += 1;
        } else if (form.elements[i].getAttribute("type") == 'radio') {
            if (form.elements[i].checked) {
                names[cnt] = form.elements[i].getAttribute("name");
                values[cnt] = form.elements[i].value;
                cnt += 1;
            }
        } else {
            names[cnt] = form.elements[i].getAttribute("name");
            values[cnt] = form.elements[i].value;
            cnt += 1;
        }
    }
    for (m = 0; m < names.length; m++) {
        //params += names[m] + "=" + values[m];
		params += names[m] + "=" + encodeURIComponent(values[m]);
		
        if (m < names.length - 1)
            params += "&";
    }
    return params;
}

function DoAjax(form, url, param, Func) {
    DSProgressOn();
    if (form != '') {
        DoLock(form, !0);
        page_param = paramters(form);
        if (param != '')
            page_param += param
    } else {
        page_param = param
    }
    url += "&User_Id=" + User_Id;
    $.ajax({
        type: "POST",
        data: page_param,
        url: url,
        success: function (data) {
            DSProgressOff();
            if (form != '')
                DoLock(form, !1);
            dataText = CleanError((typeof data == 'string') ? data : data.documentElement.outerHTML);
            Func(dataText);
        }
    })
}

function DoLock(frm, state) {
    for (i = 0; i < frm.length; i++)
        $(frm[i]).attr("disabled", state);
}

function CleanError(s) {
    n = s.indexOf("<data><Error><![CDATA[");
    if (n >= 0) {
        return s.slice(n + 22, s.length - 18);
    }
    return s;
}

function setCookie(cname, cvalue, exdays) {
    var extra = "";
    if (exdays > 0) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        extra = "expires=" + d.toUTCString();
    }
    document.cookie = cname + "=" + cvalue + "; " + extra + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length)
    }
    return "";
}

function setElementInMiddle(Parent, child) {
    elm = ElementWidth = $('.' + child);
    ElementWidth = Math.floor(elm.width() / 2);
    ScreenWidth = ($('.' + Parent).width() / 2);
    elm.css({
        "marginRight": (ScreenWidth - ElementWidth)
    });
}

function MenuMouseOver(ID) {
    var OverID = '#' + ID;
    $(OverID).addClass("SetScaleElement");
}

function MenuMouseOut(ID) {
    var OutID = '#' + ID;
    $(OutID).removeClass("SetScaleElement");
}

function ToggleElement(ShowElementID, hideClass) {
    $('.' + hideClass).css({
        "display": "none"
    });
    $('#' + ShowElementID).css({
        "display": "block"
    });
}