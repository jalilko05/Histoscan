import React from "react";
import '../assets/css/style.min.css'
import Logo from '../assets/images/logo.png'
import About from '../assets/images/icons/about-project-icon.png'
import News from '../assets/images/icons/news-icon.png'
import Study from '../assets/images/icons/study-icon.png'
import Part from '../assets/images/icons/partners-icon.png'
import Contact from '../assets/images/icons/contact-icon.png'
import { NavLink, useNavigate } from "react-router-dom";
import { url } from "../url";
function Navbar(){

const navigate = useNavigate()


function Out(){
    fetch(`http://localhost/api/user/SignOut`)  
    navigate('/loginPage')
}







    return(
        <>
          <header className="header">
            <div className="container-primary">
                <div className="header__inner work-place">
                    <div className="logo">
                       <NavLink to={'/'}>
                       <img src={Logo} alt="Digital Morphology"/>
                       </NavLink>
                    </div>
                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <span className="navigation__link" href="#">
                                  <NavLink to={'/'}>
                                    Главная
                                  </NavLink>
                                    <div className="navigation__link-icon">
                                        <img src={About}
                                            alt="О проекте Digital Moprhology"/>
                                    </div>
                                </span>
                            </li>
                            <li className="navigation__item">
                                <NavLink to='/CaseOne'>
                                   <span className="navigation__link" href="#">
                                     Список случаев 
                                     <div className="navigation__link-icon">
                                        <img src={News}
                                            alt="Новости проекта Digital Moprhology"/>
                                     </div>
                                  </span>
                                </NavLink>
                            </li>
                            <li className="navigation__item">
                                <span className="navigation__link" href="#">
                                    Учебный портал
                                    <div className="navigation__link-icon">
                                        <img src={Study}
                                            alt="Учебный портал проекта Digital Moprhology"/>
                                    </div>
                                </span>
                            </li>
                            <li className="navigation__item">
                                <NavLink to={'/loginPage'}>
                                 <span className="navigation__link" href="#">
                                    Зайти в аккаунт
                                    <div className="navigation__link-icon">
                                        <img src={Part}
                                            alt="Партнёры Digital Moprhology"/>
                                    </div>
                                </span>
                                </NavLink>
                            </li>
                            <li className="navigation__item">
                                <span onClick={Out} className="navigation__link" style={{cursor: 'pointer'}}>
                                    Выйти
                                    <div className="navigation__link-icon">
                                        <img src={Contact}
                                            alt="Контакты сотрудников Digital Moprhology"/>
                                    </div>
                                </span>
                            </li>
                            <li className="navigation__item">
                                <a className="primary-btn" target="_blank" href="workPlaceOneMounth.html"> Рабочее место </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
         </header>

        </>
    )
}

export default Navbar