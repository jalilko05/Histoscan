import Prof from "../../assets/images/icons/profi-icon.jpg"
import Arrow from '../../assets/images/icons/back-arrow-icon.png'
import User from '../../assets/images/icons/user-icon.jpg'



function AccThree(){
    return(
        <>
        
        <div className="main-content">
            <div className="container-primary">
                <div className="setting">
                    <form className="search-bar">
                        <input placeholder="Поиск" className="search-bar__input"/>
                    </form>
                    <h1 className="primary-title loginPrimary__title"> Аккаунт </h1>
                    <div className="account">
                        <div className="chat-inner">
                            <div className="profi">
                                <div className="profi__img">
                                    <img src={Prof} alt="Сидоров Антон Петрович"/>
                                    <button className="profi__btn" id="profi-btn"> Править данные </button>
                                </div>
                                <div className="profi__info">
                                    <h2 className="profi__title">
                                        Сидоров Антон Петрович
                                        <span className="profi__subtitle"> Специалист </span>
                                    </h2>
                                </div>
                            </div>
                            <div className="chat-item">
                                <div className="chat-item__inner">
                                    <a className="back-link chat-item__link" href="subscription.html">
                                        <img src={Arrow}
                                            alt="Назад к предыдущей странице"/>
                                    </a>
                                    <div className="chat-item__elements">
                                        <div className="chat-item__element user-el">
                                            <div className="user-el__icon">
                                                <img src={User} alt="Пользователь "/>
                                            </div>
                                            <div className="user-el__info">
                                                Aenean eget accumsan dui, vel tincidunt orci. In dignissim lacus sit
                                                amet finibus finibus. Proin quis tincidunt quam, vel molestie erat.
                                                Nullam auctor congue arcu nec dignissim.
                                                <span className="user-el__time"> Вчера 13:30 </span>
                                            </div>
                                        </div>
                                        <div className="chat-item__element profi-el">
                                            <div className="profi-el__info">
                                                Aenean eget accumsan dui, vel tincidunt orci. In dignissim lacus sit
                                                amet finibus finibus. Proin quis tincidunt quam, vel molestie erat.
                                                Nullam auctor congue arcu nec dignissim. Aenean eget accumsan dui, vel
                                                tincidunt orci. In dignissim lacus sit
                                                amet finibus finibus. Proin quis tincidunt quam, vel molestie erat.
                                                Nullam auctor congue arcu nec dignissim.
                                                <span className="profi-el__time">
                                                    Вчера 13:30
                                                    <div className="viewed-icon">
                                                      
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="profi-el__icon">
                                                <img src={Prof} alt="Пользователь "/>
                                            </div>
                                        </div>
                                        <div className="user-el__load">
                                            <div className="user-el__icon">
                                                <img src={User} alt="Пользователь "/>
                                            </div>
                                            <div className="user-el__info">
                                                ...
                                                <span className="user-el__time"> Вчера 13:30 </span>
                                            </div>
                                        </div>
                                        <div className="profi-el__load">
                                            <div className="profi-el__info">
                                                ...
                                                <span className="profi-el__time"> Вчера 13:30 </span>
                                            </div>
                                            <div className="profi-el__icon">
                                                <img src={Prof} alt="Пользователь "/>
                                            </div>
                                        </div>
                                    </div>
                                    <form className="type-message">
                                        <textarea className="type-message__text"></textarea>
                                        <button className="type-message__btn" type="submit">
                                            
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="user-subscription">
                            <h2 className="user-subscription__title"> Ваша подписка: </h2>
                            <div className="subscription-primary__link">
                                <div className="subscription-primary__bg">
                                    <span className="subscription-primary__mounth">3 месяца</span>
                                    <h3 className="subscription-primary__price">
                                        4489 &#8381;
                                    </h3>
                                </div>
                            </div>
                            <div className="user-subscription__time">
                                Истекает через: <span className="countdown"> 15 дней </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default AccThree