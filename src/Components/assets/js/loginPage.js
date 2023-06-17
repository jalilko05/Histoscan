"use strict";

// window.addEventListener("DOMContentLoaded", function () {
//     [].forEach.call(document.querySelectorAll('#tel'), function (input) {
//         var keyCode;
//         function mask(event) {
//             event.keyCode && (keyCode = event.keyCode);
//             var pos = this.selectionStart;
//             if (pos < 3) event.preventDefault();
//             var matrix = "+7 (___)-___-__-__",
//                 i = 0,
//                 def = matrix.replace(/\D/g, ""),
//                 val = this.value.replace(/\D/g, ""),
//                 new_value = matrix.replace(/[_\d]/g, function (a) {
//                     return i < val.length ? val.charAt(i++) || def.charAt(i) : a
//                 });
//             i = new_value.indexOf("_");
//             if (i != -1) {
//                 i < 5 && (i = 3);
//                 new_value = new_value.slice(0, i)
//             }
//             var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//                 function (a) {
//                     return "\\d{1," + a.length + "}"
//                 }).replace(/[+()]/g, "\\$&");
//             reg = new RegExp("^" + reg + "$");
//             if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
//             if (event.type == "blur" && this.value.length < 5) this.value = ""
//         }
//         input.addEventListener("input", mask, false);
//         input.addEventListener("focus", mask, false);
//         input.addEventListener("blur", mask, false);
//         input.addEventListener("keydown", mask, false)
//     });
// });
// document.addEventListener('keyup', function (e) {
//   if (e.code === 'Enter') {
//     console.log('clicked to enter');
//     document.location.href = "../../subscription.html";
//   }
// });
var form = document.querySelector('#authorization');
form.addEventListener('submit', function (e) {

  e.preventDefault();
  var data = new FormData(form);
  var username_auth = data.get('username');
  var password_auth = data.get('password');
  var params = new FormData();
  params.set('username', username_auth);
  params.set('password', password_auth);
  // var userRegistrData = {
  //   username: username_auth,
  //   password: password_auth
  // };

  fetch('http://localhost/api/user/SignIn', {
    method: 'POST',
    body: params
  }).then(function (data) {
    console.log(data.ok)
    if (data.ok === false) {
      alert('Введён невеный логин или пароль');
      return document.location.href = "../../loginPage.html";
    }
    if (data.ok === true) {
      return document.location.href = "../../addCase.html";
      // return data.json();
    }
  })
  // .then(function (res) {
  //   console.log(res);
  //   return document.location.href = "../../addCase.html";
  // });
});