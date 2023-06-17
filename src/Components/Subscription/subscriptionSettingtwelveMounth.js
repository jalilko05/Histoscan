import { useNavigate } from "react-router-dom"
function SubscriptionSettingtwelveMounth(){
    const navigate = useNavigate()
    function Send(event){
        fetch('',{
            method: 'POST',
            headers:{
                "content-type": "aplication/json"
            },
            body: JSON.stringify({
                first_name: event.target.first_name.value,
                middle_name:  event.target.middle_name.value,
                last_name: event.target.last_name.value,
                position: event.target.position.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
                password: event.target.password.value,
            })
        }).then(response => response.json())
           .then(data=>{
            console.log(data)
           })
           navigate('/loginPage');
    }

    return(
        <>
            <div className="main-content">
            <div className="container-primary">
                <div className="setting">
                    <form className="search-bar">
                        <input placeholder="Поиск" className="search-bar__input"/>
                    </form>
                    <h1 className="primary-title loginPrimary__title"> Управление подпиской </h1>
                    <div className="setting-wrapper">
                        <div className="subscription-page__el">
                            <div className="subscription-primary__link">
                                <a className="back-link" href="subscription.html">
                                    <img src="assets/images/icons/back-arrow-icon.png"
                                        alt="Назад к предыдущей странице"/>
                                </a>
                                <div className="subscription-primary__bg">
                                    <span className="subscription-primary__mounth">12 месяц</span>
                                    <h3 className="subscription-primary__price">
                                        11989 &#8381;
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <form className="card__form" id="registr-form" action="subscriptionPageonemounth.html" onSubmit={Send}>
                                <div className="card__inner">
                                    <div className="setting-wrapper__label">
                                        Зарегистрируйтесь или <a className="setting-wrapper__link" href="loginPage.html">
                                            выполните вход </a>, <br/>
                                        чтобы продолжить
                                    </div>
                                    <label className="card__label"> Фамилия </label>
                                    <input
                                    placeholder="Сидоров"
                                    name="middle_name"
                                    type="text"
                                
                                
                                    className="card__input card__input-surname"/>
                                    <label className="card__label"> Имя </label>
                                    <input
                                
                                    placeholder="Антон"
                                    name="first_name"
                                    type="text"
                                    className="card__input card__input-name"/>
                                    <label className="card__label"> Отчество </label>
                                    <input
                                
                                    placeholder="Петрович"
                                    name="last_name"
                                    type="text"
                                    className="card__input card__input-secondName"/>
                                    <label className="card__label"> Должность </label>
                                    <input
                                
                                    placeholder="Специалист"
                                    name="position"
                                    type="text"
                                   
                                    className="card__input card__input-position"/>
                                    <label className="card__label"> Телефон </label>
                                    <input
                                
                                    placeholder="+7 () - -"
                                    name="phone"
                                    required
                                    type="tel"
                                    id="tel"
                                    className="card__input card__input-phone"/>
                                    <label className="card__label"> Email </label>
                                    <input
                                
                                    placeholder="name@domain.com"
                                    name="email"
                                    required
                                    type="email"
                                  
                                    className="card__input card__input-email"/>
                                    <label className="card__label"> Пароль </label>
                                    <input
                                
                                    placeholder="......"
                                    name="password"
                                    pattern="[0-9a-fA-F]{6,10}"
                                    title="Введите пароль состоящий минимум из 6 символов, но не более 10" required
                                    type="password"
                                    minLength="6"
                                    maxLength="10"
                                    id="pass-primary"
                                    className="card__input card__input-pass"/>
                                    <label className="card__label"> Повторите пароль </label>
                                    <input
                                    placeholder="......" required type="password" pattern="[0-9a-fA-F]{6,10}"
                                        title="Повторите пароль" minLength="6" maxLength="10" id="pass-secondary"
                                        className="card__input "/>
                                </div>
                                <button className="card__btn primary-btn setting-wrapper__btn"> Зарегистрироваться </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SubscriptionSettingtwelveMounth