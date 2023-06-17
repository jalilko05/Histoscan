

let form = document.querySelector('#registr-form');

form.addEventListener('submit', (e) => {

    const data = new FormData(form);

    const first_name_reg = data.get('first_name');
    const middle_name_reg = data.get('middle_name');
    const last_name_reg = data.get('last_name');
    const position_reg = data.get('position');
    const email_reg = data.get('email');
    const phone_reg = data.get('phone');
    const password_reg = data.get('password');

    e.preventDefault();
    let userRegistrData = {
        first_name: first_name_reg,
        middle_name: middle_name_reg,
        last_name: last_name_reg,
        position: position_reg,
        email: email_reg,
        phone: phone_reg,
        password: password_reg
    }

    fetch('http://localhost/api/user/SignUp', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
          },
        body: JSON.stringify(userRegistrData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    console.log(typeof(userRegistrData));

});