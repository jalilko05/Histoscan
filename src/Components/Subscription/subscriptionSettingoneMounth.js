import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { url } from "../url";

function SubscriptionSettingoneMounth(){
    const [inp, setInp] = useState('')
    const [info, setInfo] = useState('')

    const handleClick = () => {
      window.scrollTo(0, 0);
    };

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      first_name: "",
      middle_name: "",
      last_name: "",
      position: "",
      email: "",
      phone: "",
      password: "",
    });
  
    function handleInputChange(event) {
        event.preventDefault()
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }



    function Send(event) {
        event.preventDefault();

        if(formData.password !== inp){
          setInfo('Введенные пароли не совпадают!')
        }
        else{
          fetch(url + "user/SignUp", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(formData),
          })
          .then(response=>{
            if(response.status === 400){
              response.json().then(data =>{
                alert(data.msg)
              })
            }
            else if(response.status === 201){
              navigate('/loginPage')
            }
            else{
              return response.json()
            }
          })
          .then(data=>{
            if(data.detail[0].loc[1] === 'phone'){
                alert('Телефон введён некорректно')
            }
           else if(data.detail[0].loc[1] === 'email'){
              alert('Email введён некорректно')
           }    
          })
        }
      
      }
    return(
        <>
          <div className="main-content">
            <div className="container-primary">
                <div className="setting">
                    
                    <div className="setting-wrapper">                      
                        <div className="card">
                            <form className="card__form" id="registr-form"  onSubmit={Send}>
                                <div className="card__inner">
                                    <div className="setting-wrapper__label">
                                        Зарегистрируйтесь или <Link onClick={handleClick} className="setting-wrapper__link" to='/loginPage'> выполните вход,</Link><br/>
                                        чтобы продолжить
                                    </div>
                                    <label className="card__label"> Фамилия </label>
                                    <input
                                    placeholder="Сидоров"
                                    name="middle_name"
                                    type="text"
                                    maxLength="100"
                                    value={formData.middle_name}
                                    onChange={handleInputChange}
                                    className="card__input card__input-surname"/>
                                    <label className="card__label"> Имя </label>
                                    <input  maxLength="100"
                                         value={formData.first_name}
                                         onChange={handleInputChange}
                                    placeholder="Антон"
                                    name="first_name"
                                    type="text"
                                     className="card__input card__input-name"/>
                                    <label className="card__label"> Отчество </label>
                                    <input  maxLength="100"
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    placeholder="Петрович"
                                    name="last_name"
                                    type="text"
                                    className="card__input card__input-secondName"/>
                                    <label className="card__label"> Должность </label>
                                    <input   maxLength="100"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    placeholder="Специалист"
                                    name="position"
                                    type="text"
                                    className="card__input card__input-position"/>
                               
                                    <label className="card__label"> Телефон </label>
                                    <input   maxLength="12"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+7 () - -"
                                    name="phone"
                                    required
                                    type="tel"
                                    minLength='12'
                                    className="card__input card__input-phone"/>
                                    <label className="card__label"> Email </label>
                                    <input
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="name@domain.com"
                                    name="email"
                                    required
                                    type="email"
                                    minLength='5'   maxLength="100"
                                    className="card__input card__input-email"/>
                                    <label className="card__label"> Пароль </label>
                                    <input
                                           value={formData.password}
                                           onChange={handleInputChange}
                                    placeholder="......"
                                    name="password"
                                    
                                    title="Введите пароль состоящий минимум из 8 символов, но не более 30" required
                                    type="password"
                                    minLength="8"
                                    maxLength="30"
                                    id="pass-primary"
                                    className="card__input card__input-pass"/>
                                    <label className="card__label"> Повторите пароль </label>
                                    <input
                                    placeholder="......" required type="password" 
                                        title="Повторите пароль" minLength="8" maxLength="30" id="pass-secondary"
                                        value={inp}
                                        className="card__input " onChange={(e) => setInp(e.target.value)}/>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                 <button className="card__btn primary-btn setting-wrapper__btn" onClick={handleClick}> Зарегистрироваться </button>
                                 <span style={{color: 'red', fontFamily: 'verdana'}}>{info}</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SubscriptionSettingoneMounth