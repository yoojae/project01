parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"I3vY":[function(require,module,exports) {
$(function(){var e=["greencomputer","redcomputer","bluecomputer","yellowcomputer","blackcomputer"],t="";$("#btn_idchk").click(function(){for(var n in t=$("#user_id").val(),e){if(t==e[n]){alert("사용할 수 없는 아이디입니다"),$("#user_id").val("").focus();break}4==n&&(alert("사용가능한 아이디입니다"),$("#user_pw").focus())}});var n=document.getElementById("user_pw"),c=document.getElementById("user_pwchk"),d=document.getElementById("id_message"),u=document.getElementById("pw_message"),l=document.getElementById("btn_pwchk"),r=document.getElementById("user_name"),o=document.getElementById("tel_first"),m=document.getElementById("tel_last"),s=document.getElementById("birth_start");$("#user_id").keypress(function(){(t=$("#user_id").val()).length<8||t.length>=15?d.textContent="아이디 입력 수는 8자리 이상 15자리 이하입니다":d.textContent=""}),$("#user_pw").keypress(function(){n.value.length<8?u.textContent="비밀번호 입력 수는 8자리 이상입니다":u.textContent=""}),l.addEventListener("click",function(){n.value!=c.value?(alert("비밀번호가 일치하지 않습니다!"),n.value="",c.value="",n.focus()):(alert("비밀번호가 일치합니다!"),r.focus())}),o.addEventListener("keyup",function(){o.value.length>=4&&m.focus()}),m.addEventListener("keyup",function(){m.value.length>=4&&s.focus()});var a=document.getElementById("total_terms"),i=document.querySelectorAll(".terms_el"),k=document.getElementById("terms01"),g=document.getElementById("terms02"),v=document.getElementById("terms03");function E(){k.checked&&g.checked&&v.checked?a.checked=!0:a.checked=!1}a.addEventListener("click",function(){1==a.checked?i.forEach(function(e){e.checked=!0}):(k.checked=!1,g.checked=!1,v.checked=!1)}),k.addEventListener("click",E),g.addEventListener("click",E),v.addEventListener("click",E)});
},{}]},{},["I3vY"], null)
//# sourceMappingURL=/join.85857cdd.js.map