function FrmValidate(frm){for(i=0;i<frm.length;i++){if($(frm[i]).attr("pt")&&$(frm[i]).is(':visible')&&!$(frm[i]).is(':disabled')){pattern=$(frm[i]).attr("pt");switch(pattern){case 'NE':if(!DS_IsEmpty(frm[i]))
return!1;break;case 'MN':if(!DS_checkMobile(frm[i]))
return!1;break;case 'NCOrE':if(($(frm[i]).val()!='')&&(!DS_national_code(frm[i])))
return!1;break;case 'NC':if(!DS_national_code(frm[i]))
return!1;break;case 'EA':if(!DS_CheckEmail(frm[i]))
return!1;break;case 'UCH':if(!DS_UserChoose(frm[i]))
return!1;break;case 'Number':if(!DS_CheckNumber(frm[i]))
return!1;break}}}
return!0}
function DS_UserChoose(element){if($(element).val()=='DS_user_choose'){DS_tooltip(element,1);$(element).focus();return!1}
DS_tooltip(element,0);return!0}
function DS_national_code(element){meli_code=$(element).val();if(meli_code=="0000000000"||meli_code=="1111111111"||meli_code=="2222222222"||meli_code=="3333333333"||meli_code=="4444444444"||meli_code=="5555555555"||meli_code=="6666666666"||meli_code=="7777777777"||meli_code=="8888888888"||meli_code=="9999999999"||meli_code=="0123456789"||meli_code=="9876543210"){DS_tooltip(element,1);$(element).focus();return!1}
n=parseInt(meli_code.charAt(0))*10+parseInt(meli_code.charAt(1))*9+parseInt(meli_code.charAt(2))*8+parseInt(meli_code.charAt(3))*7+parseInt(meli_code.charAt(4))*6+parseInt(meli_code.charAt(5))*5+parseInt(meli_code.charAt(6))*4+parseInt(meli_code.charAt(7))*3+parseInt(meli_code.charAt(8))*2;c=parseInt(meli_code.charAt(9));r=n%11;if((r>1&&c==11-r)||(r<=1&&c==r)){DS_tooltip(element,0);return!0}else{DS_tooltip(element,1);$(element).focus();return!1}}
function DS_IsEmpty(element){if($(element).val()==''){DS_tooltip(element,1);$(element).focus();return!1}
DS_tooltip(element,0);return!0}
function DS_CheckNumber(element){var regex=/^[0-9\b]+$/;if(!regex.test($(element).val())){DS_tooltip(element,1);$(element).focus();return!1}else{DS_tooltip(element,0)}
return!0}
function DS_checkMobile(element){var PT=/^([+0-9]{1,3})?([0-9]{11})$/i;if(!PT.test($(element).val())){DS_tooltip(element,1);$(element).focus();return!1}else{DS_tooltip(element,0)}
return!0}
function DS_CheckEmail(element){var EAP=/^[a-z0-9._-]+@[a-z]+.[a-z.]{2,5}$/i;if(!EAP.test($(element).val())){DS_tooltip(element,1);$(element).focus();return!1}else{DS_tooltip(element,0)}
return!0}
function DS_tooltip(element,type){if(type==1){$(element).tooltip()}else{$(element).tooltip('destroy')}}