import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../url";


function LoginPage(){
    const navigate = useNavigate()
    const [info, setInfo] = useState('')

    const handleClick = () => {
      window.scrollTo(0, 0);
    };

    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
    
      function handleInputChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    
      function Send(event) {
        event.preventDefault();
        const params = new FormData();
        params.set('username', formData.username);
        params.set('password', formData.password);
    
        fetch( url + 'user/SignIn', {
          method: 'POST',
          body: params
        }).then(function (response) {
          if (response.status >= 500) {
            alert('Ошибка сервера')
            return;
          }
          if (response.ok === false) {
            setInfo('Введён неверный логин или пароль');
            return;
          }
          if (response.ok === true) {
             navigate('/caseOne');
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    
    return(
        <>
          <div className="main-content">
            <div className="container-primary">
                <div className="loginPrimary">
                    <h1 className="primary-title loginPrimary__title"> Вход в аккаунт </h1>
                    <form className="loginPrimary__form" id="authorization" onSubmit={Send} >
                        <div className="card">
                            <div className="card__inner">
                                <label className="card__label"> Почта </label>
                                <label className="card__label">{info}</label> 
                                <input
                                 value={formData.username}
                                 onChange={handleInputChange}
                                required type="email" name="username" placeholder="name@domain.com" id="email"
                                className="card__input card-tel loginPrimary__input card__auth-email"/>
                                <div className="card__inner-data data-pass">
                                    <label className="card__label"> Пароль </label>
                                    <input
                                      value={formData.password}
                                      onChange={handleInputChange}
                                        title="Введите пароль состоящий минимум из 6 символов, но не более 10"
                                        minLength="6" maxLength="10" id="pass" required name="password" type="password"
                                        placeholder=".........." className="card__input card-pass"/>
                                </div>
                              <div className="logLinks">
                              <Link onClick={handleClick} className="card__label" to='/subscription/subscriptionSettingOneMounth'><h4>Зарегистрироваться</h4></Link>
                              <Link className="card__label" to='/Reset'><h4>Сбросить пароль</h4></Link>
                              </div>
                            </div>
                            <button className="primary-btn" id="login-btn"> Войти </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage