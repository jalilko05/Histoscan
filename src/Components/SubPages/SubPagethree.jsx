





function SubPagethree(){
    return(
        <>
            <div className="main-content">
            <div className="container-primary">
                <div className="subscripмеtion-page">
                    <form className="search-bar">
                        <input placeholder="Поиск" className="search-bar__input"/>
                    </form>
                    <h1 className="primary-title">Управление подпиской</h1>
                    <div className="subscription-page__item">
                        <div className="subscription-page__el">
                            <div className="subscription-primary__link">
                                <a className="back-link" href="subscription.html">
                                    <img src="assets/images/icons/back-arrow-icon.png" alt="Назад к предыдущей странице"/>
                                </a>
                                <div className="subscription-primary__bg">
                                    <span className="subscription-primary__mounth">3 месяца</span>
                                    <h3 className="subscription-primary__price">
                                        4489 &#8381;
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="subscription-page__content">
                            <div className="subscription-page__user">
                                Пользователь:
                                <span>Name</span>
                            </div>
                            <div className="subscription-page__tel">
                                Телефон:
                                <span>+7 (915) 685-78-78</span>
                            </div>
                            <div className="card">
                                <form className="card__form" target="_blank" action="accountthreemounth.html">
                                    <div className="card__inner">
                                        <label className="card__label"> Номер карты </label>
                                        <input placeholder="2597 3584 2584 5649"
                                        type="text"
                                        id="card-number-primary"
                                        className="card__input card-number"/>
                                        <div className="card__inner-data data-mounth">
                                            <label className="card__label">Месяц/год</label>
                                            <input
                                            id="card-mounth"
                                            placeholder="** / **"
                                            className="card__input card-number"/>
                                        </div>
                                        <div className="card__inner-data data-cvc">
                                            <label className="card__label">cvc</label>
                                            <input
                                            id="card-cvc"
                                            placeholder="***"
                                            className="card__input card-number"/>
                                        </div>
                                    </div>
                                    <label className="checkbox-wrapper">
                                        <input className="checkbox-wrapper__input registr__checkbox" type="checkbox"
                                            placeholder=""/>
                                        <div className="my-checkbox">
                                            <div className="checkmark"></div>
                                        </div>
                                        <div className="checkbox-wrapper__text"> Запомнить карту </div>
                                    </label>
                                    <div className="safety-label">Безопасность подтверждена сертификатом...</div>
                                    <h2 className="card__title">
                                        Итого к оплате:
                                        <span className="card__subtitle">7494 руб</span>
                                    </h2>
                                    <button className="card__btn primary-btn"> Отправить </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SubPagethree