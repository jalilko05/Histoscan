


// логика показа миниатюр загруженных сканов

let scanList = document.querySelector('.case-popup');
let scanElements = document.querySelectorAll('.case-popup__el');

let medicineFilesOld = document.querySelector('.medicine__item');
let medicineFilesScan = document.querySelectorAll('.medicine__item');

console.log(scanElements.length);

function getMiniImage() {
    medicineFilesScan.forEach(element => {
        element.addEventListener('click', (Event) => {

            Event.stopPropagation();

            if (element.classList.contains('item-is-full')) {
                console.log('hide all');
                for (let j = 0; j < scanElements.length; j++) {
                    scanList.classList.remove('case-popup--active');
                    scanList.classList.add('case-popup--hidden');
                    scanElements[j].classList.remove('case-popup--active');
                    scanElements[j].classList.add('case-popup--hidden');
                }

                for (let i = 0; i < scanElements.length; i++) {
                    if (scanElements[element.id].id === element.id) {
                        scanList.classList.add('case-popup--active');
                        scanList.classList.remove('case-popup--hidden');
                        scanElements[i].classList.add('case-popup--active');
                        scanElements[i].style.display = 'block !important';
                    }
                }
            }
        });
    });
}

var target = document.querySelector('.medicine__list');

const config = {
    childList: true,
};

const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
            copyPopup(`${Number(medicineElements[medicineElements.length - 2].id) + count - 1}`);

            let eventCount = new Event("count");
            scanList.dispatchEvent(eventCount);
            scanList.addEventListener('count', () => {
                console.log(scanElements.length);
            });
        }
    }
};

const observer = new MutationObserver(callback);
observer.observe(target, config);

let popupCount = 1;

function copyPopup(id = popupCount) {

    var popupNode = scanElements[0].cloneNode(true);
    popupNode.setAttribute("style", '');
    popupNode.setAttribute("id", id);
    let lastPopup = scanElements[scanElements.length - 1];
    scanList.appendChild(popupNode);
    popupCount++;

}

// логика показа миниатюр загруженных сканов

// создаём логику "Добавить скан"

let medicineList = document.querySelector('.medicine__list');
let medicineElements = document.querySelectorAll('.medicine__item');
let addScan = document.querySelector('.medicine__item-add');

let count = 1;

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

});

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

        copyPopup();

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

// создаём логику "Добавить скан"


//2

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

});

let managerInputsSecond = document.querySelectorAll('.file-input--second');
let medicineItemsSecond = document.querySelectorAll('.medicine__item--second');
let medicineItemFilesSecond = document.querySelectorAll('.medicine__file--second');
let medicineFilesDelSecond = document.querySelectorAll('.medicine__file-del--second');

let labelsSecond = document.querySelectorAll('.add-file--second');

let fileFormat = document.querySelectorAll('.medicine__file--format');

for (let i = 0; i < managerInputsSecond.length; i++) {

    managerInputsSecond[i].addEventListener('change', (e) => {
        medicineItemsSecond[i].classList.add('item-is-full');
        medicineItemsSecond[i].classList.remove('item-is-empty');

        labelsSecond[i].innerHTML = e.target.files[0].name;

        fileFormat[i].innerHTML = e.target.files[0].name.split(".").splice(-1, 1)[0];
        fileFormat[i].classList.add('format-is-active');

        labelsSecond[i].classList.add('input-value-block');

    });

    medicineFilesDelSecond[i].addEventListener('click', (e) => {
        e.preventDefault();
        managerInputsSecond[i].value = '';
        medicineItemsSecond[i].classList.remove('item-is-full');
        medicineItemsSecond[i].classList.add('item-is-empty');

        fileFormat[i].innerHTML = '';
        fileFormat[i].classList.remove('format-is-active');

        labelsSecond[i].innerHTML = 'Добавить';
        labelsSecond[i].classList.remove('input-value-block');
    });

}

// Редактирование информации о пользователе при клике на кнопку

let userCaseBtn = document.querySelector('#user-case-btn');
let arr = Array.from(document.getElementById('case-info').children);
let casesInfo = document.querySelector('.cases__info');

userCaseBtn.addEventListener('click', () => {

    arr.forEach(element => {
        element.setAttribute('contentEditable', true);
        element.classList.add('cases-info--active');
    });

    casesInfo.blur();

});

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.cases__info') && !target.closest('#user-case-btn')) {
        arr.forEach(element => {
            element.setAttribute('contentEditable', false);
            element.classList.remove('cases-info--active');
        });
    }
});

// Редактирование информации о пользователе при клике на кнопку

let profiBtn = document.querySelector('#profi-btn');
let profiTitle = document.querySelector('.profi__title');
let profiInfo = document.querySelector('.profi__info');
let profiSubtitle = document.querySelector('.profi__subtitle');

profiBtn.addEventListener('click', () => {
    profiInfo.style.border = '1px solid #F9AE00';
    profiTitle.setAttribute('contentEditable', true);
    profiSubtitle.setAttribute('contentEditable', true);
});

// проверка клика вне области

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.profi__info') && !target.closest('#profi-btn')) {
        profiInfo.style.border = '1px solid transparent';
        profiTitle.setAttribute('contentEditable', false);
        profiSubtitle.setAttribute('contentEditable', false);
    }
});

// let firstFormScan = document.querySelector('.medicine-form-first');

// let fileInput = document.querySelectorAll('.file-input');

// firstFormScan.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let nameFile = prompt("Введите название файла сюда");

//     var params = new URLSearchParams();
//     params.set('filename', nameFile);
//     params.set('file', fileInput[0].value);

//     console.log(fileInput[0].value);
//     console.log(nameFile);

//     fetch('http://127.0.0.1:8880/image/Add/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'multipart/form-data'
//           },
//         body: params
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))

// })

// multipart/form-data

// undefined

// params.set('description', description);
// let description = prompt("Введите описание файла сюда");

// document.querySelectorAll('.medicine__item.item-is-full');
// console.log(e.target.files[0].name.split(".").splice(-1,1)[0]);
// console.log( typeof( Array.from( document.getElementById('case-info').children ) ) );

// medicineFilesScan.forEach(element => {
//     element.addEventListener('click', () => {

//         if (element.classList.contains('item-is-full')) {
//             for (let j = 0; j < scanElements.length; j++) {
//                 scanList.classList.remove('case-popup--active');
//                 scanList.classList.add('case-popup--hidden');
//                 scanElements[j].classList.remove('case-popup--active');
//                 scanElements[j].classList.add('case-popup--hidden');
//             }

//             for (let i = 0; i < scanElements.length; i++) {
//                 if (scanElements[i].id === element.id) {
//                     scanList.classList.add('case-popup--active');
//                     scanList.classList.remove('case-popup--hidden');
//                     scanElements[i].classList.add('case-popup--active');
//                 }
//             }
//         }
//     });
// });

// function showCoppiedPopup () {
//     scanList.classList.add('case-popup--active');
//     scanList.classList.remove('case-popup--hidden');

//     scanElements[0].classList.add('case-popup--active');
//     scanElements[0].classList.remove('case-popup--hidden');

//     var popupNode = scanElements[0].cloneNode(true);
//     popupNode.classList.add('case-popup--active');
//     popupNode.classList.remove('case-popup--hidden');
//     popupNode.setAttribute("style", 'initial');
//     popupNode.setAttribute("id", popupCount);
//     let lastPopup = scanElements[scanElements.length - 1];
//     scanList.appendChild(popupNode);
//     popupCount++;
// }

                // scanElements.forEach(el => {
                //     console.log(el);
                //     if( el.id === element.id ) {
                //         console.log('hih_@ _@ _2');
                //         scanList.classList.add('case-popup--active');
                //         scanList.classList.remove('case-popup--hidden');
                //         el.classList.add('case-popup--active');
                //         el.style.display = 'block !important';
                //     }
                // });

                // scanElements[element.id].classList.add('case-popup--active');
                // scanElements[element.id].classList.remove('case-popup--hidden');

                // var targetPopup = document.querySelector('.case-popup');

// const configPopup = {
//     childList: true,
// };

// const callbacPopup = function (mutationsList, observer) {
//     for (let mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             console.log('A child ggggggggg.');
//             getMiniImage();
//         }
//     }
// };

// const observerPopup = new MutationObserver(callbacPopup);
// observerPopup.observe(targetPopup, configPopup);

// var targetEl = document.querySelectorAll('.medicine__item');

// const configEl = {
//     attributes: true,
//     subtree: true,
//     attributeOldValue: true
// };

// const callbackEl = function (mutationsList, observer) {
//     for (let mutation of mutationsList) {
//         if (mutation.type === 'attributes') {
//             console.log('attributes');
//             // getMiniImage();
//         }
//     }
// };

// const observerEl = new MutationObserver(callbackEl);
// targetEl.forEach(element => {
//     observerEl.observe(element, configEl);
// });