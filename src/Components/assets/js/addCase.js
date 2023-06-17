"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// create text-label for "Загрузить файл"
var managerInput = document.querySelector('.manager-input');
var customField = document.querySelector('.custom-field'); // managerInput.addEventListener('change', () => {
//     let imagesValues = Object.values(managerInput.files);
//     for (let i = 0; i < imagesValues.length; i++) {
//         customField.innerHTML = imagesValues[i].name;
//     }
// });
// create text-label for "Загрузить файл"
// создаём логику "Добавить скан"

var medicineList = document.querySelector('.medicine__list');
var medicineElements = document.querySelectorAll('.medicine__item');
var addScan = document.querySelector('.medicine__item-add'); // addScan.addEventListener('click', (e) => {
//     e.preventDefault();
//     let newMedicineEl = document.createElement("li");
//     newMedicineEl.className = "medicine__item item-is-empty";
//     var dupNode = medicineElements[6].cloneNode(true);
//     dupNode.style.display = 'block';
//     let lastEl = medicineElements[medicineElements.length - 1];
//     let insetredEl = medicineList.insertBefore(dupNode, lastEl);
//     let managerInputs = document.querySelectorAll('.file-input');
//     let changeLabel = document.querySelectorAll('.add-file');
//     let medicineItems = document.querySelectorAll('.medicine__item');
//     let medicineItemFiles = document.querySelectorAll('.medicine__file');
//     let medicineFilesDel = document.querySelectorAll('.medicine__file-del');
//     let labels = document.querySelectorAll('.add-file');
//     for (let i = 0; i < managerInputs.length; i++) {
//         managerInputs[i].addEventListener('change', (e) => {
//             medicineItems[i].classList.add('item-is-full');
//             medicineItems[i].classList.remove('item-is-empty');
//             labels[i].innerHTML = e.target.files[0].name;
//             labels[i].classList.add('input-value-block');
//         });
//         medicineFilesDel[i].addEventListener('click', (e) => {
//             e.preventDefault();
//             managerInputs[i].value = ''
//             medicineItems[i].classList.remove('item-is-full');
//             medicineItems[i].classList.add('item-is-empty');
//             labels[i].innerHTML = 'Добавить';
//             labels[i].classList.remove('input-value-block');
//         });
//     }
// });

var managerInputs = document.querySelectorAll('.file-input');
var changeLabel = document.querySelectorAll('.add-file');
var medicineItems = document.querySelectorAll('.medicine__item');
var medicineItemFiles = document.querySelectorAll('.medicine__file');
var medicineFilesDel = document.querySelectorAll('.medicine__file-del');
var labels = document.querySelectorAll('.add-file');

var _loop = function _loop(i) {
  managerInputs[i].addEventListener('change', function (e) {
    medicineItems[i].classList.add('item-is-full');
    medicineItems[i].classList.remove('item-is-empty');
    labels[i].innerHTML = e.target.files[0].name;
    labels[i].classList.add('input-value-block');
  });
  medicineFilesDel[i].addEventListener('click', function (e) {
    e.preventDefault();
    managerInputs[i].value = '';
    medicineItems[i].classList.remove('item-is-full');
    medicineItems[i].classList.add('item-is-empty');
    labels[i].innerHTML = 'Добавить';
    labels[i].classList.remove('input-value-block');
  });
};

for (var i = 0; i < managerInputs.length; i++) {
  _loop(i);
} // создаём логику "Добавить скан"


var loadInputFile = document.querySelector('#load-input-file');
var dropArea = document.querySelector('.drop-area');
;

var form = document.querySelector('#add-form');

form.addEventListener('submit', function (e) {
  var data = new FormData(form);
  var patient_fullname_reg = data.get('patient_fullname');
  var localization_reg = data.get('localization');
  var patient_gender_reg = data.get('patient_gender');
  var description_reg = data.get('description');
  var material_taking_date_reg = data.get('material_taking_date');

  e.preventDefault(); // var params = new FormData();
  var userNewData = {
    patient_fullname: patient_fullname_reg,
    localization: localization_reg,
    patient_gender: patient_gender_reg,
    description: description_reg,
    material_taking_date: material_taking_date_reg
  };

  console.log(userNewData);

  fetch('http://localhost/api/case/New', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userNewData)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return console.log(data);
  });

  document.location.href = "../../myCasesOneMounth.html";
});