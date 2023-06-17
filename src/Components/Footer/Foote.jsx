import Logo from '../assets/images/logo.png'
import About from '../assets/images/icons/about-project-icon.png'
import News from '../assets/images/icons/news-icon.png'
import Study from '../assets/images/icons/study-icon.png'
import Part from '../assets/images/icons/partners-icon.png'
import Contact from '../assets/images/icons/contact-icon.png'

function Footer(){
    return(
        <>
              <footer className="footer">
            <div className="container-primary">
                <div className="footer__inner">
                    <div className="logo">
                        <img src={Logo} alt="Логотип компании Digital Morphology"/>
                    </div>
                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <a className="navigation__link" href="#">
                                    О проекте
                                    <div className="navigation__link-icon">
                                        <img src={About}
                                            alt="О проекте Digital Moprhology"/>
                                    </div>
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="#">
                                    Новости
                                    <div className="navigation__link-icon">
                                        <img src={News}
                                            alt="Новости проекта Digital Moprhology"/>
                                    </div>
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="#">
                                    Учебный портал
                                    <div className="navigation__link-icon">
                                        <img src={Study}
                                            alt="Учебный портал проекта Digital Moprhology"/>
                                    </div>
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="#">
                                    Наши партнёры
                                    <div className="navigation__link-icon">
                                        <img src={Part}
                                            alt="Партнёры Digital Moprhology"/>
                                    </div>
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="#">
                                    Контакты
                                    <div className="navigation__link-icon">
                                        <img src={Contact}
                                            alt="Контакты сотрудников Digital Moprhology"/>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer