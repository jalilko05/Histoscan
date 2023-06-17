import { Link, NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
function Subscription(){
    return(
        <>
            <Outlet/>
            <div className="main-content">
            <div className="container-primary">
                <div className="subscription-primary">
          
                    <form className="search-bar">
                        <input placeholder="Поиск" className="search-bar__input"/>
                    </form>
                    <h1 className="primary-title">Управление подпиской</h1>
                    <h2 className="subscription-primary__title">Выберите ваш план:</h2>
                    <ul className="subscription-primary__list">
                        <li className="subscription-primary__item">
                            <Link className="subscription-primary__link"  to="/loginPage">
                                <div className="subscription-primary__bg">
                                    <span className="subscription-primary__mounth">1 месяц</span>
                                    <h3 className="subscription-primary__price">
                                        2499 &#8381;
                                    </h3>
                                </div>
                            </Link>
                        </li>
                        <li className="subscription-primary__item">
                            <Link className="subscription-primary__link"  to='/subscription/subscriptionSettingThreeMounth'>
                                <div className="subscription-primary__bg">
                                    <span className="subscription-primary__mounth">3 месяца</span>
                                    <h3 className="subscription-primary__price">
                                        4499 &#8381;
                                    </h3>
                                </div>
                            </Link>
                        </li>
                        <li className="subscription-primary__item">
                            <Link className="subscription-primary__link"  to='/subscription/subscriptionSettingSixMounth'>
                                <div className="subscription-primary__bg">
                                    <span className="subscription-primary__mounth">6 месяцев</span>
                                    <h3 className="subscription-primary__price">
                                        7497 &#8381;
                                    </h3>
                                </div>
                            </Link>
                        </li>
                        <li className="subscription-primary__item">
                            <Link className="subscription-primary__link"   to='/subscription/subscriptionSettinTwelveMounth'>
                                <div className="subscription-primary__bg">
                                    <span className="subscription-primary__mounth">12 месяцев</span>
                                    <h3 className="subscription-primary__price">
                                        11989 &#8381;
                                    </h3>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <h3 className="subscription-primary__title primary__title-second">
                        Или введите промокод <br/> <br/> на 1 месяц бесплатной подписки:
                    </h3>
                    <div className="promo">
                        <form className="promo__form" action="">
                            <input type="text" placeholder="" className="promo__field"/>
                            <button type="submit" className="promo__btn primary-btn"> Применить </button>
                        </form>
                    </div>
                </div>
            </div>
    
        </div>

     
        </>
    )
}

export default Subscription