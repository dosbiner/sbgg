/* AJAX jin */
function jin_ajax_form(f,targetnya){

//bagian untuk mengenali browser
if (window.XMLHttpRequest){
	var xmlReq = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	var xmlReq = new ActiveXObject('Microsoft.XMLHTTP'); 
} else {
	alert('Browser not supported for AJAX');
}
//------------------------------

//Memanggil parameter/value dari input box dari form
var formData = '', elem = '';
for(var s=0; s<f.elements.length; s++){
	elem = f.elements[s];
	if(formData != ''){
		formData += '&';
	}
	formData += elem.name+"="+elem.value;
}
//-------------------------

//Mengeluarkan Proses dari server
xmlReq.onreadystatechange = function(){
	if(xmlReq.readyState == 4){
		document.getElementById(targetnya).innerHTML = xmlReq.responseText;
	} else {
		document.getElementById(targetnya).innerHTML = "<center><br><br>Loading...<br><img src=\"" + jin_path + "/inc/indicator.gif\"><br><br></center>";
	}
}
//-------------------------------

//Mengirim data ke server xmlReq.open("post", "ajax_output.php", true)
xmlReq.open(f.method, f.action, true);
xmlReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlReq.send(formData);
return false;
//-----------------------
}

// AJAX konten Jin 
var http_request = false;
function jin_ajax_req(url,target) {
 
        http_request = false;
 
        if (window.XMLHttpRequest) { // Mozilla, Safari,...
            http_request = new XMLHttpRequest();
            if (http_request.overrideMimeType) {
                http_request.overrideMimeType('text/xml');
				//http_request.overrideMimeType('multipart/form-data');
                // zu dieser Zeile siehe weiter unten
            }
        } else if (window.ActiveXObject) { // IE
            try {
                http_request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }
 
        if (!http_request) {
            alert('Ende :(');
            return false;
        }
        http_request.onreadystatechange = alertInhalt;
        http_request.open('GET', url, true);
        http_request.send(null);
 
 function alertInhalt() {
        if (http_request.readyState == 4) {
              var answer = http_request.responseText;
              if(document.getElementById(target).innerHTML != answer){
                document.getElementById(target).innerHTML = answer;
              }
              else{
                document.getElementById(target).innerHTML = "";
              }
        } else {
         document.getElementById(target).innerHTML = "<img src=\"" + jin_path + "/inc/indicator.gif\"> Loading...";
		}
 }

}
// end


// ALERT CONFIRM
function tanya(TheLink, text) {
    if (confirm(text)) {
      window.location = TheLink;
    }
}

function tanya2(text){
	var res = confirm(text);
	if(res)
		return true;
	else
		return false;
}

// Buka Popup
function bukaWin(mypage,myname,w,h,scroll){
    LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
    TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
    settings ='height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
win = window.open(mypage,myname,settings)
}

// ALERT CONFIRM + EFFECT
function jin_confirm(text) {
  // You can change 30 and 0.3 to suit your 'tastes' :)
  bo = document.getElementsByTagName('body');
  bo[0].style.filter = 'Alpha(opacity="10")';
  bo[0].style.filter = 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)';
  bo[0].style.MozOpacity = '0.5';
  bo[0].style.opacity = '0.5';

  if (confirm(text))
  {
    return true;
  }
  else
  {
    bo[0].style.filter = 'Alpha(opacity="100")';
    bo[0].style.MozOpacity = '1';
    bo[0].style.opacity = '1';

    return false;
  }
}

/* SIMPLE TOGGLE */
function toggleIt(obj) {
	var el = document.getElementById(obj);
	if (el.style.display != 'none') {
		el.style.display = 'none';
	} else {
		el.style.display = '';
	}
}

/*  HANDLE ENTER  */
function h_enter (field, event) {
		var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
		if (keyCode == 13) {
			var i;
			for (i = 0; i < field.form.elements.length; i++)
				if (field == field.form.elements[i])
					break;
			i = (i + 1) % field.form.elements.length;
			field.form.elements[i].focus();
			return false;
		} 
		else
		return true;
}

/* FORMAT ANGKA */
function angka(objek) {
   a = objek.value;
   b = a.replace(/[^\d]/g,"");
   c = "";
   panjang = b.length;
   j = 0;
   for (i = panjang; i > 0; i--) {
     j = j + 1;
     if (((j % 3) == 1) && (j != 1)) {
       c = b.substr(i-1,1) + "." + c;
     } else {
       c = b.substr(i-1,1) + c;
     }
   }
   objek.value = c;
}
// <input type=button name="CheckAll"   value="Check All"
//onClick="checkAll(document.myform.list)">
// <input type=button name="UnCheckAll" value="Uncheck All"
//onClick="uncheckAll(document.myform.list)">
function checkAll(field)
{
for (i = 0; i < field.length; i++)
	field[i].checked = true ;
}

function uncheckAll(field)
{
for (i = 0; i < field.length; i++)
	field[i].checked = false ;
}

function Check(chk) {
	if(document.myform.Check_ctr.checked==true){
		for (i = 0; i < chk.length; i++)
		chk[i].checked = true ;
	}else{
		for (i = 0; i < chk.length; i++)
		chk[i].checked = false ;
	}
}

function cekUncek(a, nama_field, nama_form) {
    var theForm = nama_form;
    for (i=0; i< document.nama_form.elements.length; i++) {
        if (document.nama_form.elements[i].name==nama_field)
            document.nama_form.elements[i].checked = a;
    }
}


function checkAll2(ref) {
  var chkAll = document.getElementById('checkAll');
  var checks = document.getElementsByName('delcheckbox[]');
  var removeButton = document.getElementById('removeChecked');
  var boxLength = checks.length;
  var allChecked = false;
  var totalChecked = 0;
  if ( ref == 1 ) {
    if ( chkAll.checked == true ) {
      for ( i=0; i < boxLength; i++ ) {
        checks[i].checked = true;
      }
    }
    else {
      for ( i=0; i < boxLength; i++ ) {
        checks[i].checked = false;
      }
    }
  }
  else {
    for ( i=0; i < boxLength; i++ ) {
      if ( checks[i].checked == true ) {
        allChecked = true;
        continue;
      }
      else {
        allChecked = false;
        break;
      }
    }
    if ( allChecked == true ) {
      chkAll.checked = true;
    }
    else {
      chkAll.checked = false;
    }
  }
  for ( j=0; j < boxLength; j++ ) {
    if ( checks[j].checked == true ) {
      totalChecked++;
	}
  }
  removeButton.innerHTML = "Remove ["+totalChecked+"] Selected";
}