

import Prof from '../assets/images/icons/profi-icon.jpg'
function WorkSix(){
    return(
        <>
                   <div class="main-content">
            <div class="container-primary">
                <div class="work-place">
                    <form class="search-bar">
                        <input placeholder="Поиск" class="search-bar__input"/>
                    </form>
                    <h1 class="primary-title loginPrimary__title"> Рабочее место </h1>
                    <div class="work-place__inner">
                        <div class="work-place__primary">
                            <div class="work-place__user">
                                <div class="profi">
                                    <div class="profi__img">
                                        <img src={Prof} alt="Сидоров Антон Петрович"/>
                                        <button class="profi__btn" id="profi-btn"> Править данные </button>
                                    </div>
                                    <div class="profi__info">
                                        <h2 class="profi__title">
                                            Сидоров Антон Петрович
                                            <span class="profi__subtitle"> Специалист </span>
                                        </h2>
                                    </div>
                                </div>
                                <div class="controls-btns">
                                    <a class="primary-btn" target="_blank" href="myCasesSixMounth.html"> Мои случаи </a>
                                    <a class="primary-btn" target="_blank" href="addCase.html"> Новый случай </a>
                                </div>
                            </div>
                            <div class="work-place__details">
                                <div class="work-place__subscriprion">
                                    <h2 class="work-place__title"> Ваша подписка: </h2>
                                    <div class="subscription-block">
                                        <div class="subscription-block__title">
                                            6 месяцев
                                        </div>
                                        <div class="subscription-block__price"> 7497 &#8381; </div>
                                    </div>
                                    <div class="subscription-block__counter">
                                        Истекает через: <span class="subscription-block__number"> 15 дней </span>
                                    </div>
                                </div>
                                <div class="work-place__chat">
                                    <div class="chat-item">
                                        <div class="chat-item__inner">
                                            <a class="back-link chat-item__link" href="subscription.html">
                                                <img src="assets/images/icons/back-arrow-icon.png"
                                                    alt="Назад к предыдущей странице"/>
                                            </a>
                                            <div class="chat-item__elements">
                                                <div class="chat-item__element user-el">
                                                    <div class="user-el__icon">
                                                        <img src="assets/images/icons/user-icon.jpg"
                                                            alt="Пользователь"/>
                                                    </div>
                                                    <div class="user-el__info">
                                                        Aenean eget accumsan dui, vel tincidunt orci. In dignissim lacus
                                                        sit
                                                        amet finibus finibus. Proin quis tincidunt quam, vel molestie
                                                        erat.
                                                        Nullam auctor congue arcu nec dignissim.
                                                        <span class="user-el__time"> Вчера 13:30 </span>
                                                    </div>
                                                </div>
                                                <div class="chat-item__element profi-el">
                                                    <div class="profi-el__info">
                                                        Aenean eget accumsan dui, vel tincidunt orci. In dignissim lacus
                                                        sit
                                                        amet finibus finibus. Proin quis tincidunt quam, vel molestie
                                                        erat.
                                                        Nullam auctor congue arcu nec dignissim. Aenean eget accumsan
                                                        dui, vel
                                                        tincidunt orci. In dignissim lacus sit
                                                        amet finibus finibus. Proin quis tincidunt quam, vel molestie
                                                        erat.
                                                        Nullam auctor congue arcu nec dignissim.
                                                        <span class="profi-el__time">
                                                            Вчера 13:30
                                                            <div class="viewed-icon">
                                                         
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div class="profi-el__icon">
                                                        <img src="assets/images/icons/profi-icon.jpg"
                                                            alt="Пользователь "/>
                                                    </div>
                                                </div>
                                                <div class="user-el__load">
                                                    <div class="user-el__icon">
                                                        <img src="assets/images/icons/user-icon.jpg"
                                                            alt="Пользователь "/>
                                                    </div>
                                                    <div class="user-el__info">
                                                        ...
                                                        <span class="user-el__time"> Вчера 13:30 </span>
                                                    </div>
                                                </div>
                                                <div class="profi-el__load">
                                                    <div class="profi-el__info">
                                                        ...
                                                        <span class="profi-el__time"> Вчера 13:30 </span>
                                                    </div>
                                                    <div class="profi-el__icon">
                                                        <img src="assets/images/icons/profi-icon.jpg"
                                                            alt="Пользователь "/>
                                                    </div>
                                                </div>
                                            </div>
                                            <form class="type-message">
                                                <textarea class="type-message__text"></textarea>
                                                <button class="type-message__btn" type="submit">
                                                                          
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="work-place__secondary">
                            <div class="add-case">
                                <a class="add-case__link" target="_blank" href="addCase.html">
                                    Добавить <br/> случай
                                </a>
                                <a class="add-case__link" href="#">
                                    Архив <br/> случаев
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default WorkSix