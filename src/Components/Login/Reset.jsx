import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../url";



function Reset(){
    const navigate = useNavigate()
    const [info, setInfo] = useState('')

    

    const handleClick = () => {
      window.scrollTo(0, 0);
    };

    const [formData, setFormData] = useState({
        email: "",
      });
    
      function handleInputChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
     

      function Send(event) {
        event.preventDefault();
  
        fetch( url + `user/ClearPassword/${formData.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'aplication/json',
          },
          body: JSON.stringify(formData)

        }).then(function (response) {
          if (response.ok === false) {
            setInfo('Такой email не зарегистрирован');
            return;
          }
          else if(response.status >= 500) {
            alert('Ошибка сервера')
            return;
          }
          else if(response.ok === true) {
             navigate('/newWord');
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
                    <h1 className="primary-title loginPrimary__title"> Сброс пароля</h1>
                    <form className="loginPrimary__form" id="authorization" onSubmit={Send} >
                        <div className="card">
                            <div className="card__inner">
                                <label className="card__label"> Почта </label>
                                <label className="card__label">{info}</label>
                                <input
                                 value={formData.email}
                                 onChange={handleInputChange}
                                required type="email" name="email" placeholder="name@domain.com" id="email"
                                className="card__input card-tel loginPrimary__input card__auth-email"/>
                              <div style={{display: 'flex'}}> 
                              </div>
                            </div>
                            <button className="primary-btn" id="login-btn"> Сбросить </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Reset