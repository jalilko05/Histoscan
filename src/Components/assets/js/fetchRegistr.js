"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var form = document.querySelector('#registr-form');
form.addEventListener('submit', function (e) {
  var data = new FormData(form);
  var first_name_reg = data.get('first_name');
  var middle_name_reg = data.get('middle_name');
  var last_name_reg = data.get('last_name');
  var position_reg = data.get('position');
  var email_reg = data.get('email');
  var phone_reg = data.get('phone');
  var password_reg = data.get('password');
  e.preventDefault();
  var userRegistrData = {
    first_name: first_name_reg,
    middle_name: middle_name_reg,
    last_name: last_name_reg,
    position: position_reg,
    email: email_reg,
    phone: phone_reg,
    password: password_reg
  };
  fetch('http://localhost/api/user/SignUp', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userRegistrData)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return console.log(data);
  });
  document.location.href = "../../loginPage.html";
  console.log(_typeof(userRegistrData));
});