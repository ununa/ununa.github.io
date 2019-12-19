/**
 * 휴대전화번호 유효성 체크
 */
function isValidCellNo(input) {
	var format = /^\d{3}-\d{3,4}-\d{4}$/;
	
	if (format.test(input)) {
		return true;
	}
	
	return false;	
}

/**
 * 이메일 유효성 체크
 */
function isValidEmail(input) {
   var format = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
   
   if (format.test(input)) {
      return true;
   }
   
   return false;  
}

/***********************************************
 * 상세URL 유효성 체크
 * ---------------------------------------------
 * 정상적인 URL인지 체크
 * 정상 예1) http://www.naver.com
 * 정상 예2) http://www.naver.com/index.html
 * 정상 예3) http://naver.co.kr
 * 정상 예4) www.naver.com
 * 정상 예5) naver.com
 * 정상 예6) http://blog.naver.com/
 * 비정상 예1) http:/www.naver.com
 * 비정상 예2) http://www.naver.com2
 * 비정상 예3) mailto://www.naver.com
 **********************************************/
function checkDetailUrl(strUrl) {
    var expUrl = /^(http\:\/\/)?((\w+)[.])+(asia|biz|cc|cn|com|de|eu|in|info|jobs|jp|kr|mobi|mx|name|net|nz|org|travel|tv|tw|uk|us)(\/(\w*))*$/i;
    return expUrl.test(strUrl);
}

/***********************************************
 * IP 유효성 체크
 * ---------------------------------------------
 * 정상적인 IP인지 체크
 * 정상 예1) 222.107.254.169
 * 정상 예2) 222.7.54.69
 * 비정상 예1) 022.107.254.169
 * 비정상 예2) 222107.254.169
 * 비정상 예3) 222.107.254.1699
 * 비정상 예4) 222.107.254.
 * 비정상 예5) 222.107.254
 * 비정상 예6) 222.107.254.169:80
 **********************************************/
function checkIP(strIP) {
    var expUrl = /^(1|2)?\d?\d([.](1|2)?\d?\d){3}$/;
    return expUrl.test(strIP);
}

/**
 * 암호화된 값으로 리턴한다.
 */
function getAesVal(plainText, enc_key) {
	
	var iv = "F27D5C9927726BCEFE7510B1BDD3D147";
	var salt = "3FF2EC019C627B945225DEBAD71A01B6985FE84C95A70EB132882F88C0A59A65";
	var keySize = 128;
	var iterations = iterationCount = 10;
	
	if (plainText == null || plainText == "") {
		return "";
	}
	var aesUtil = new AesUtil(keySize, iterationCount);
	var encrypt = aesUtil.encrypt(salt, iv, enc_key, plainText);

	return encrypt;
}

/**
 * 숫자만 입력받게 체크
 */
function onlyNumber(event) {
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 9 || keyID == 116) 
		return;
	else
		return false;
}
function removeChar(event) {
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
		return;
	else
		event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

/**
 * split
 */
function stringSplit(strData, strIndex) { 
   var stringList = new Array(); 
   while(strData.indexOf(strIndex) != -1){
    stringList[stringList.length] = strData.substring(0, strData.indexOf(strIndex)); 
      strData = strData.substring(strData.indexOf(strIndex)+(strIndex.length), strData.length); 
   } 
   stringList[stringList.length] = strData; 
   return stringList; 
}

/**
 * Map 
 */
function newMap() {
   var map = {};
   map.value = {};
   map.getKey = function(id) {
     return "k_"+id;
   };
   map.put = function(id, value) {
     var key = map.getKey(id);
     map.value[key] = value;
   };
   map.contains = function(id) {
     var key = map.getKey(id);
     if(map.value[key]) {
       return true;
     } else {
       return false;
     }
   };
   map.get = function(id) {
     var key = map.getKey(id);
     if(map.value[key]) {
       return map.value[key];
     }
     return null;
   };
   map.remove = function(id) {
     var key = map.getKey(id);
     if(map.contains(id)){
       map.value[key] = undefined;
     }
   };
  
   return map;
}

// textarea 최대글자수 제한
function textarea_maxlength(obj) {
   var message;
   var tempMessage = "";
   var totalString= obj.value;
   var maxlengthAttr = obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : "";
   maxlength = maxlengthAttr * 2; 
   var textareaLength = obj.value.length;
    
   if (textareaLength == 0) {
      totalString = maxlengthAttr * 2;
   } else {
      for (var i=0; i<textareaLength; i++) {
         message = totalString.charAt(i);
         if (escape(message).length > 4) {
            maxlength -= 2;
         } else {
            maxlength--;
         }
      
         if (maxlength < 0) {
            alert("최대허용 글자수를 초과했습니다.(MAX:"+(maxlengthAttr*2)+"Byte)")
            obj.value= tempMessage;
            break;
         } else {
            tempMessage += message;
         }
      }//end for
   }
}

// 검색 엔터키
function search_EnterKey(e) {
   if (e.keyCode == 13) {
      search();
   } else {
      e.keyCode == 0;
      return;
   }
} 
function searchView_EnterKey(e) {
   if (e.keyCode == 13) {
      searchView();
   } else {
      e.keyCode == 0;
      return;
   }
} 

// 쿠키 저장
function setCookie(name,value,expiredays) {
   var todayDate= new Date();
   todayDate.setDate(todayDate.getDate() + expiredays);
   document.cookie = name + "=" + escape(value)+"; path=/; expires=" + todayDate.toUTCString()+";"
}

// 쿠키 삭제
function removeCookie(name) {
   try {
      setCookie(name, "", -1);
   }
   catch (exception) { }
}
  
// 쿠키 불러오기
function getCookie(theCookie) {
   var myCookie=document.cookie;
   var startNum=myCookie.indexOf(theCookie);
   if(startNum<0) return false;
   var myString=myCookie.substring(startNum,myCookie.length);
   var lastNum=myString.indexOf(";");
   if(lastNum<0) lastNum=myString.length;
   return result=myString.substring(0,lastNum).split("=")[1];
};