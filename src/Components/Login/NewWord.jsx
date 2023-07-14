import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../url";



function NewWord(){



  

    const navigate = useNavigate()
    const [info, setInfo] = useState('')

    // const [code, setCode] = useState('')
    // const [password, setPassword] = useState('')

    // const handleClick = () => {
    //   window.scrollTo(0, 0);
    // };

    // const [formData, setFormData] = useState({
    //     code: "",
    //     password: "",
    //   });
    
    //   function handleInputChange(event) {
    //     setFormData({
    //       ...formData,
    //       [event.target.name]: event.target.value,
    //     });
    //   }
    //   const data = {}; 
    //   data.code = code
    //   data.password = password
      
      
    //   function Send(event) {
    //     event.preventDefault();
        
    //     fetch('http://localhost/api/user/NewPassword', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'aplication/json',
    //       },
    //       body: JSON.stringify(data)

    //     }).then(function (response) {
    //       if (response.ok === false) {
    //         setInfo('Ошибка!');
    //         return;
    //       }
    //       if (response.ok === true) {
    //          navigate('/loginPage');
    //          alert("Пароль успешно изменён!")
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    //   }
    const [formData, setFormData] = useState({});

    const DOMAIN = url;

  const fisher = {
  async fetch(path, options = {}, method) {
    let headers = new Headers({});
    // if (options.hasOwnProperty("auth"))
    headers.set(
      "Authorization",
      "Bearer " + document.cookie.replace("access_token=", "")
    );
    for (let h in options.headers) headers.set(h, options.headers[h]);
    try {
      const response = await fetch(DOMAIN + "/" + path, {
        //credentials: "include",
        method: method,
        headers: headers,
        body: options.body,
      });
      const data = await response.json();
      return { data, status: response.status };
    } catch (e) {
      console.log(e.headers);
    }
  },

  async get(path, options) {
    return await this.fetch(path, options, "GET");
  },

  async post(path, options) {
    return await this.fetch(path, options, "POST");
  },

  async put(path, options) {
    return await this.fetch(path, options, "PUT");
  },

  async delete(path, options) {
    return await this.fetch(path, options, "DELETE");
  },
};

    const handleSubmit = async (event) => {
      event.preventDefault();
      await fisher.post("user/NewPassword", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(formData),
      }).then(({ data }) => {
        if(data.msg === 'Неверный токен сброса или токен просрочен'){
          setInfo(data.msg)
        }
        else (
          navigate('/loginPage') 
        )
      });
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    return(
        <>  
        <div className="main-content">
            <div className="container-primary">
                <div className="loginPrimary">
                    <h1 className="primary-title loginPrimary__title"> Сброс пароля</h1>
                    <form className="loginPrimary__form" onSubmit={handleSubmit} id="new_password">
                        <div className="card">
                            <div className="card__inner">
                                <label className="card__label"> Код </label>
                                <label className="card__label">{info}</label>
                                <input
                                 type="text" name="code" onChange={handleChange}
                                required  placeholder="........." id="code"
                                className="card__input card-tel loginPrimary__input card__auth-email"/>
                                <label className="card__label"> Новый пароль </label>
                                <input type="password" name="password" onChange={handleChange} 
                                required placeholder="........." id="email"
                                className="card__input card-tel loginPrimary__input card__auth-email"/> 
                              <div style={{display: 'flex'}}> 
                              </div>
                            </div>
                            <button type="submit" className="primary-btn" id="login-btn"> Изменить </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewWord