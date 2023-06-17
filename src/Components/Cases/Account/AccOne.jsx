
import Prof from "../../assets/images/icons/profi-icon.jpg"


function AccOne(){
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
                        <div className="chat-inner" style={{position: 'relative'}}>
                            <button className="user-case__edit" id="user-case-btn">
                               
                            </button>
                            <div className="profi">
                                <div className="profi__img">
                                    <img src={Prof} alt="Сидоров Антон Петрович"/> 
                                </div>
                                <div className="profi__info">
                                    <div className="profi__title" style={{marginBottom: "20px", display: "none", position: "absolute",opacity: "-100"}}>
                                        Имя:
                                        <span className="profi__subtitle" style={{display: "inline", marginLeft: "14px",border: " 1px solid transparent", padding: "4px 8px"}}>  </span>
                                    </div>
                                    <div className="profi__title" style={{marginBottom: "20px"}}>
                                        Имя:
                                        <span className="profi__subtitle title-name" style={{display: "inline",marginLeft: '14px', border: '1px solid transparent', padding: '4px 8px'}}>  </span>
                                    </div>
                                    <div className="profi__title"  style={{marginBottom: "20px"}}>
                                        Фамилия:
                                        <span className="profi__subtitle title-surname" style={{display: 'inline', marginLeft: '14px', border: '1px solid transparent', padding: '4px 8px;'}}>  </span>
                                    </div>
                                    <div className="profi__title"  style={{marginBottom: "20px"}}>
                                        Отчество:
                                        <span className="profi__subtitle title-lastname" style={{display: 'inline', marginLeft: '14px', border: '1px solid transparent', padding: '4px 8px'}}>  </span>
                                    </div>
                               
                                    <div className="profi__title" style={{marginBottom: "20px"}}>
                                        Телефон:
                                        <span className="profi__subtitle title-phone" style={{display: 'inline', marginLeft: '14px', border: '1px solid transparent', padding: '4px 8px'}}>  </span>
                                    </div>
                                    <div className="profi__title" style={{marginBottom: "20px"}}>
                                        Электронная почта:
                                        <span className="profi__subtitle title-email" style={{display: 'inline', marginLeft: '14px', border: '1px solid transparent', padding: '4px 8px'}}>  </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="user-subscription">
                            <h2 className="user-subscription__title"> Ваша подписка: </h2>
                            <div className="subscription-primary__link">
                                <div className="subscription-primary__bg">
                                    <span className="subscription-primary__mounth">1 месяц</span>
                                    <h3 className="subscription-primary__price">
                                        2499 &#8381;
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

export default AccOne