"use strict";

// логика показа миниатюр загруженных сканов
var scanList = document.querySelector('.case-popup');
var scanElements = document.querySelectorAll('.case-popup__el');
var medicineFilesOld = document.querySelector('.medicine__item');
var medicineFilesScan = document.querySelectorAll('.medicine__item');
console.log(scanElements.length);

// function getMiniImage() {
//   medicineFilesScan.forEach(function (element) {
//     element.addEventListener('click', function (Event) {
//       Event.stopPropagation();

//       if (element.classList.contains('item-is-full')) {
//         console.log('hide all');

//         for (var j = 0; j < scanElements.length; j++) {
//           scanList.classList.remove('case-popup--active');
//           scanList.classList.add('case-popup--hidden');
//           scanElements[j].classList.remove('case-popup--active');
//           scanElements[j].classList.add('case-popup--hidden');
//         }

//         for (var i = 0; i < scanElements.length; i++) {
//           if (scanElements[element.id].id === element.id) {
//             scanList.classList.add('case-popup--active');
//             scanList.classList.remove('case-popup--hidden');
//             scanElements[i].classList.add('case-popup--active');
//             scanElements[i].style.display = 'block !important';
//           }
//         }
//       }
//     });
//   });
// }

var target = document.querySelector('.medicine__list');
var config = {
  childList: true
}; // const callback = function (mutationsList, observer) {
//     for (let mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//             copyPopup(`${Number(medicineElements[medicineElements.length - 2].id) + count - 1}`);
//             let eventCount = new Event("count");
//             scanList.dispatchEvent(eventCount);
//             scanList.addEventListener('count', () => {
//                 console.log(scanElements.length);
//             });
//         }
//     }
// };
// const observer = new MutationObserver(callback);
// observer.observe(target, config);

var popupCount = 1;

function copyPopup() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : popupCount;
  var popupNode = scanElements[0].cloneNode(true);
  popupNode.setAttribute("style", '');
  popupNode.setAttribute("id", id);
  var lastPopup = scanElements[scanElements.length - 1];
  scanList.appendChild(popupNode);
  popupCount++;
} // логика показа миниатюр загруженных сканов
// создаём логику "Добавить скан"


var medicineList = document.querySelector('.medicine__list');
var medicineElements = document.querySelectorAll('.medicine__item');
var addScan = document.querySelector('.medicine__item-add');
var count = 1;
/*
addScan.addEventListener('click', (e) => {
    e.preventDefault();

    let newMedicineEl = document.createElement("li");
    newMedicineEl.className = "medicine__item item-is-empty";

    var dupNode = medicineElements[4].cloneNode(true);
    dupNode.style.display = 'block';
    dupNode.setAttribute("id", `${Number(medicineElements[medicineElements.length - 2].id) + count}`);
    let lastEl = medicineElements[medicineElements.length - 1];
    let insetredEl = medicineList.insertBefore(dupNode, lastEl);

    count++;

    // копируем список миниатюр

    // копируем список миниатюр

    let managerInputs = document.querySelectorAll('.file-input');
    let changeLabel = document.querySelectorAll('.add-file');
    let medicineItems = document.querySelectorAll('.medicine__item');
    let medicineItemFiles = document.querySelectorAll('.medicine__file');
    let medicineFilesDel = document.querySelectorAll('.medicine__file-del');

    let labels = document.querySelectorAll('.add-file');

    for (let i = 0; i < managerInputs.length; i++) {

        managerInputs[i].addEventListener('change', (e) => {
            medicineItems[i].classList.add('item-is-full');
            medicineItems[i].classList.remove('item-is-empty');

            labels[i].innerHTML = e.target.files[0].name;
            labels[i].classList.add('input-value-block');

        });

        medicineFilesDel[i].addEventListener('click', (e) => {
            e.preventDefault();
            managerInputs[i].value = ''
            medicineItems[i].classList.remove('item-is-full');
            medicineItems[i].classList.add('item-is-empty');

            labels[i].innerHTML = 'Добавить';
            labels[i].classList.remove('input-value-block');
        });

    }

});*/

var managerInputs = document.querySelectorAll('.file-input');
var changeLabel = document.querySelectorAll('.add-file');
var medicineItems = document.querySelectorAll('.medicine__item');
var medicineItemFiles = document.querySelectorAll('.medicine__file');
var medicineFilesDel = document.querySelectorAll('.medicine__file-del');
var labels = document.querySelectorAll('.add-file');

// var _loop = function _loop(i) {
//   managerInputs[i].addEventListener('change', function (e) {
//     medicineItems[i].classList.add('item-is-full');
//     medicineItems[i].classList.remove('item-is-empty');
//     labels[i].innerHTML = e.target.files[0].name;
//     labels[i].classList.add('input-value-block');
//     copyPopup();
//   });
//   medicineFilesDel[i].addEventListener('click', function (e) {
//     e.preventDefault();
//     managerInputs[i].value = '';
//     medicineItems[i].classList.remove('item-is-full');
//     medicineItems[i].classList.add('item-is-empty');
//     labels[i].innerHTML = 'Добавить';
//     labels[i].classList.remove('input-value-block');
//   });
// };

// for (var i = 0; i < managerInputs.length; i++) {
//   _loop(i);
// } // создаём логику "Добавить скан"
//2

/*
let medicineListSecond = document.querySelector('.medicine__list--second');
let medicineElementsSecond = document.querySelectorAll('.medicine__item--second');
let addScanSecond = document.querySelector('.medicine__item-add--second');

addScanSecond.addEventListener('click', (e) => {
    e.preventDefault();

    let newMedicineElSecond = document.createElement("li");
    newMedicineElSecond.className = "medicine__item--second item-is-empty";

    var dupNodeSecond = medicineElementsSecond[6].cloneNode(true);
    dupNodeSecond.style.display = 'block';
    let lastElSecond = medicineElementsSecond[medicineElementsSecond.length - 1];
    let insetredElSecond = medicineListSecond.insertBefore(dupNodeSecond, lastElSecond);


    let managerInputsSecond = document.querySelectorAll('.file-input--second');
    let changeLabelSecond = document.querySelectorAll('.add-file--second');
    let medicineItemsSecond = document.querySelectorAll('.medicine__item--second');
    let medicineItemFilesSecond = document.querySelectorAll('.medicine__file--second');
    let medicineFilesDelSecond = document.querySelectorAll('.medicine__file-del--second');

    let labelsSecond = document.querySelectorAll('.add-file--second');

    let fileFormat = document.querySelectorAll('.medicine__file--format');

    for (let i = 0; i < managerInputsSecond.length; i++) {

        managerInputsSecond[i].addEventListener('change', (e) => {
            medicineItemsSecond[i].classList.add('item-is-full');
            medicineItemsSecond[i].classList.remove('item-is-empty');


            fileFormat[i].innerHTML = e.target.files[0].name.split(".").splice(-1, 1)[0];
            fileFormat[i].classList.add('format-is-active');

            labelsSecond[i].innerHTML = e.target.files[0].name;
            labelsSecond[i].classList.add('input-value-block');

        });

        medicineFilesDelSecond[i].addEventListener('click', (e) => {
            e.preventDefault();
            managerInputsSecond[i].value = ''
            medicineItemsSecond[i].classList.remove('item-is-full');
            medicineItemsSecond[i].classList.add('item-is-empty');

            fileFormat[i].innerHTML = '';
            fileFormat[i].classList.remove('format-is-active');

            labelsSecond[i].innerHTML = 'Добавить';
            labelsSecond[i].classList.remove('input-value-block');
        });

    }

});*/


var managerInputsSecond = document.querySelectorAll('.file-input--second');
var medicineItemsSecond = document.querySelectorAll('.medicine__item--second');
var medicineItemFilesSecond = document.querySelectorAll('.medicine__file--second');
var medicineFilesDelSecond = document.querySelectorAll('.medicine__file-del--second');
var labelsSecond = document.querySelectorAll('.add-file--second');
var fileFormat = document.querySelectorAll('.medicine__file--format');

// var _loop2 = function _loop2(_i) {
//   managerInputsSecond[_i].addEventListener('change', function (e) {
//     medicineItemsSecond[_i].classList.add('item-is-full');

//     medicineItemsSecond[_i].classList.remove('item-is-empty');

//     labelsSecond[_i].innerHTML = e.target.files[0].name;
//     fileFormat[_i].innerHTML = e.target.files[0].name.split(".").splice(-1, 1)[0];

//     fileFormat[_i].classList.add('format-is-active');

//     labelsSecond[_i].classList.add('input-value-block');
//   });

//   medicineFilesDelSecond[_i].addEventListener('click', function (e) {
//     e.preventDefault();
//     managerInputsSecond[_i].value = '';

//     medicineItemsSecond[_i].classList.remove('item-is-full');

//     medicineItemsSecond[_i].classList.add('item-is-empty');

//     fileFormat[_i].innerHTML = '';

//     fileFormat[_i].classList.remove('format-is-active');

//     labelsSecond[_i].innerHTML = 'Добавить';

//     labelsSecond[_i].classList.remove('input-value-block');
//   });
// };

// for (var _i = 0; _i < managerInputsSecond.length; _i++) {
//   _loop2(_i);
// } // Редактирование информации о пользователе при клике на кнопку
// let userCaseBtn = document.querySelector('#user-case-btn');
// let arr = Array.from(document.getElementById('case-info').children);
// let casesInfo = document.querySelector('.cases__info');
// userCaseBtn.addEventListener('click', () => {
//     arr.forEach(element => {
//         element.setAttribute('contentEditable', true);
//         element.classList.add('cases-info--active');
//     });
//     casesInfo.blur();
// });
// window.addEventListener('click', e => {
//     const target = e.target
//     if (!target.closest('.cases__info') && !target.closest('#user-case-btn')) {
//         arr.forEach(element => {
//             element.setAttribute('contentEditable', false);
//             element.classList.remove('cases-info--active');
//         });
//     }
// });
// Редактирование информации о пользователе при клике на кнопку


var profiBtn = document.querySelector('#profi-btn');
var profiTitle = document.querySelector('.profi__title');
var profiInfo = document.querySelector('.profi__info');
var profiSubtitle = document.querySelector('.profi__subtitle');
profiBtn.addEventListener('click', function () {
  profiInfo.style.border = '1px solid #F9AE00';
  profiTitle.setAttribute('contentEditable', true);
  profiSubtitle.setAttribute('contentEditable', true);
}); // проверка клика вне области

window.addEventListener('click', function (e) {
  var target = e.target;

  if (!target.closest('.profi__info') && !target.closest('#profi-btn')) {
    profiInfo.style.border = '1px solid transparent';
    profiTitle.setAttribute('contentEditable', false);
    profiSubtitle.setAttribute('contentEditable', false);
  }
}); // загрузка данных .svs

var form = document.querySelector('.case-load');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let gettedData = localStorage.getItem("case_id");
  console.log(gettedData);

  let fileName = document.querySelector("#load-title");
  let fileValue = document.querySelector("#load-img");
  let fileDescription = document.querySelector('#load-description');

  const data = new FormData();
  data.append("case_id", gettedData);
  data.append("filename", fileName.value);
  data.append("file", fileValue.files[0]);
  data.append("description", fileDescription.value)

  fetch('http://localhost/api/case/AddMaterial/?', {
    method: 'POST',
    body: data
  },
  )
    .then(response => {
      console.log(response.ok);
          // document.location.href = "../../workPlaceOneMounth.html"
    })
    .then(data => console.log(data));
});
