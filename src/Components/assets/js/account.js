
let userCaseBtn = document.querySelector('.user-case__edit');
let caseInfo = document.querySelector('.profi__info');

let divEl = caseInfo.querySelectorAll('div');
let spanEl = caseInfo.querySelectorAll('span');

let child = Array.from(caseInfo.children);

fetch('http://localhost/api/user/GetSelf', {
  method: 'GET'
}).then(function (res) {
  return res.json();
}).then(function (data) {

  let user_name = document.querySelector('.title-name');
  let user_surname = document.querySelector('.title-surname');
  let user_lastname = document.querySelector('.title-lastname');
  let user_phone = document.querySelector('.title-phone');
  let user_email = document.querySelector('.title-email');

  user_name.innerHTML = data.data.first_name;
  user_surname.innerHTML = data.data.middle_name;
  user_lastname.innerHTML = data.data.last_name;
  user_phone.innerHTML = data.data.phone;
  user_email.innerHTML = data.data.email;

});

userCaseBtn.addEventListener('click', () => {

  divEl.forEach((element) => {
    element.setAttribute('contentEditable', false);
  });

  spanEl.forEach((element) => {
    element.setAttribute('contentEditable', true);
    element.style.border = "1px solid grey";
  });

});

window.addEventListener('click', e => {
  const target = e.target

  let userName = document.querySelector('.title-name');
  let userSurname = document.querySelector('.title-surname');
  let userLastname = document.querySelector('.title-lastname');
  // let userPosition = document.querySelector('.title-position');
  let userPhone = document.querySelector('.title-phone');
  let userEmail = document.querySelector('.title-email');

  if (!target.closest('.profi__info') && !target.closest('.user-case__edit')) {

    spanEl.forEach(element => {
      element.setAttribute('contentEditable', false);
      element.style.border = "1px solid transparent";
    });

    console.log(userName.innerHTML);
    console.log(userSurname.innerHTML);
    console.log(userLastname.innerHTML);
    console.log(userPhone.innerHTML);
    console.log(userEmail.innerHTML);
    // console.log(userPosition.innerHTML);

    var changeData = {
      first_name: userName.innerHTML,
      middle_name: userSurname.innerHTML,
      last_name: userLastname.innerHTML,
      // position: userPosition.innerHTML,
      email: userEmail.innerHTML,
      phone: userPhone.innerHTML,
    };

    fetch(`http://localhost/api/user/UpdateSelf`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(changeData)
    })
      .then(data => {
        if (data.ok === true) {
          fetch('http://localhost/api/user/GetSelf', {
            method: 'GET'
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            console.log(data.data);

            let user_name = document.querySelector('.title-name');
            let user_surname = document.querySelector('.title-surname');
            let user_lastname = document.querySelector('.title-lastname');
            // let user_position = document.querySelector('.title-position');
            let user_phone = document.querySelector('.title-phone');
            let user_email = document.querySelector('.title-email');

            user_name.innerHTML = data.data.first_name;
            user_surname.innerHTML = data.data.middle_name;
            user_lastname.innerHTML = data.data.last_name;
            // user_position.innerHTML = data.data.position;
            user_phone.innerHTML = data.data.phone;
            user_email.innerHTML = data.data.email;

          })
        }
      })

  }
});