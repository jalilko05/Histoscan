

let caseList = document.querySelector('.cases');
let caseListExample = document.querySelector('.cases__item');

fetch('http://localhost/api/case/GetList', {
  method: 'GET'
}).then(function (res) {
  return res.json();
}).then(function (data) {

  console.log(data.data);

  let arrId = [];

  for (let f = 0; f <= data.data.length - 1; f++) {

    var dupNode = caseListExample.cloneNode(true);
    dupNode.classList.remove('case__item-first');
    dupNode.setAttribute('case_id', data.data[f].case_id);
    arrId.push(data.data[f].case_id);
    caseList.append(dupNode);
  }

  let oldCaseParrent = document.querySelector('.my-cases__secondary');
  let oldCase = document.querySelector('.case__item-first');

  oldCaseParrent.removeChild(oldCase);

  let userName = document.querySelectorAll('.cases__name-user');
  let userData = document.querySelectorAll('.cases__data-user');
  let local = document.querySelectorAll('.cases__localization-info');
  let userDescription = document.querySelectorAll('.cases__description-info');
  let caseLink = document.querySelectorAll('.cases__control-link');

  for (let i = 0; i < data.data.length; i++) {

    var str = data.data[i].material_taking_date;
    str = str.replace(/T00:00:00/g, '');

    userName[i].innerHTML = data.data[i].patient_fullname;
    userData[i].innerHTML = str;
    local[i].innerHTML = data.data[i].localization;
    userDescription[i].innerHTML = data.data[i].description;
    caseLink[i].setAttribute('case_id', data.data[i].case_id);
  }

  for (let i = 0; i < caseLink.length; i++) {
    caseLink[i].addEventListener('click', (e) => {
      let case_id = e.target.getAttribute("case_id");
      localStorage.setItem("case_id", case_id);
    })
  }

  let userCaseBtn = document.querySelectorAll('.user-case__edit');
  let casesInfo = document.querySelectorAll('.cases__info');

  for (let j = 0; j <= userCaseBtn.length - 1; j++) {

    // let child = Array.from(casesInfo[j].children);
    let spans = Array.from(casesInfo[j].getElementsByTagName("span"));

    userCaseBtn[j].addEventListener('click', () => {

      spans.forEach(element => {
        element.setAttribute('contentEditable', true);
        element.style.border = "1px solid grey";
      });

      window.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.cases__info') && !target.closest('.user-case__edit')) {
          spans.forEach(element => {
            element.setAttribute('contentEditable', false);
            element.style.border = "1px solid transparent";
          });
        }
      });

    });

  }

  let saveChangesBtn = document.querySelectorAll('.save-changes');

  for (let g = 0; g <= saveChangesBtn.length; g++) {

    saveChangesBtn[g].addEventListener('click', () => {

      var changeData = {
        patient_fullname: userName[g].innerHTML,
        localization: local[g].innerHTML,
        description: userDescription[g].innerHTML,
        material_taking_date: userData[g].innerHTML,
      };

      fetch(`http://localhost/api/case/Update?case_id=${arrId[g]}`, {
        method: 'PUT',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(changeData)
      })
        .then(el => {
          console.log(el.ok);

          if (el.ok === true) {

            fetch('http://localhost/api/case/GetList', {
              method: 'GET'
            }).then(function (res) {
              return res.json();
            }).then(function (data) {
              console.log(data.data);

              for (let i = 0; i < data.data.length; i++) {

                var str = data.data[i].material_taking_date;
                str = str.replace(/T00:00:00/g, '');

                userName[i].innerHTML = data.data[i].patient_fullname;
                userData[i].innerHTML = str;
                local[i].innerHTML = data.data[i].localization;
                userDescription[i].innerHTML = data.data[i].description;
                caseLink[i].setAttribute('case_id', data.data[i].case_id);
              }

            })
          }

        })

    });

  }

});