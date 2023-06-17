// create text-label for "Загрузить файл"

let managerInput = document.querySelector('.manager-input');

let customField = document.querySelector('.custom-field');

// managerInput.addEventListener('change', () => {

//     let imagesValues = Object.values(managerInput.files);
//     for (let i = 0; i < imagesValues.length; i++) {
//         customField.innerHTML = imagesValues[i].name;
//     }

// });

// create text-label for "Загрузить файл"

// создаём логику "Добавить скан"

let medicineList = document.querySelector('.medicine__list');
let medicineElements = document.querySelectorAll('.medicine__item');
let addScan = document.querySelector('.medicine__item-add');

// addScan.addEventListener('click', (e) => {
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

// создаём логику "Добавить скан"

let loadInputFile = document.querySelector('#load-input-file');
let dropArea = document.querySelector('.drop-area');;

// loadInputFile.addEventListener('click', (e) => {
//     e.preventDefault();
//     dropArea.classList.add('drop-area--active');
//     dropArea.style.top = window.scrollY + 'px';
//     dropArea.scrollIntoView({
//         block: 'center',
//     });
//     document.body.classList.add('drop-body--active');
// });

// window.addEventListener('click', (e) => {
//     if(!e.target.closest('#drop-area') && !e.target.closest('#load-input-file')){
//         dropArea.classList.remove('drop-area--active');
//         document.body.classList.remove('drop-body--active');
//     }
// });

let form = document.querySelector('#add-form');

form.addEventListener('submit', (e) => {

    const data = new FormData(form);
    const patient_fullname_reg = data.get('patient_fullname');
    const localization_reg = data.get('localization');
    const patient_gender_reg = data.get('patient_gender');
    const description_reg = data.get('description');
    const material_taking_date_reg = data.get('material_taking_date');

    e.preventDefault();

    // var params = new FormData();
    // params.set('patient_fullname', patient_fullname_reg);
    // params.set('localization', localization_reg);
    // params.set('patient_gender', patient_gender_reg);
    // params.set('description', description_reg);
    // params.set('material_taking_date', material_taking_date_reg);
 
    let userNewData = {
        patient_fullname: patient_fullname_reg,
        localization: localization_reg,
        patient_gender: patient_gender_reg,
        description: description_reg,
        material_taking_date: material_taking_date_reg,
    }

    fetch('http://127.0.0.1:8880/case/New', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
          },
        body: JSON.stringify(userNewData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    console.log(typeof(userNewData));

});

    // let userNewData = {
    //     patient_fullname: patient_fullname_reg,
    //     localization: localization_reg,
    //     patient_gender: patient_gender_reg,
    //     description: description_reg,
    //     material_taking_date: material_taking_date_reg,
    // }