// import Prof from '../../assets/images/icons/profi-icon.jpg'
// import '../../assets/css/caseItems.css'
// import '../../assets/source/openDragon.css'
// import Arrow from "../../assets/images/icons/back-arrow-icon.png"
// import  User from "../../assets/images/icons/user-icon.jpg"
// function MyMounthOne(){
//     return(
//         <>
//          <div className="main-content">
//             <div className="container-primary">
//                 <div className="my-cases">
//                     <form className="search-bar">
//                         <input placeholder="Поиск" className="search-bar__input"/>
//                     </form>
//                     <h2 className="my-cases__title secondary-title">
//                         <a className="my-cases__subtitle" href="workPlaceOneMounth.html"> Рабочее место </a>
//                         Мои случаи
//                     </h2>
//                     <div className="my-cases__inner">
//                         <div className="my-cases__primary">
//                             <div className="profi">
//                                 <div className="profi__img">
//                                     <img src={Prof} alt="Сидоров Антон Петрович"/>
//                                     <button className="profi__btn" id="profi-btn"> Править данные </button>
//                                 </div>
//                                 <div className="profi__info">
//                                     <h2 className="profi__title" contentEditable="false">
//                                         Сидоров Антон Петрович
//                                     </h2>
//                                     <span className="profi__subtitle"> Специалист </span>
//                                 </div>
//                             </div>
//                             <h2 className="work-place__title"> Ваша подписка: </h2>
//                             <div className="subscription-block">
//                                 <div className="subscription-block__title">
//                                     1 месяц
//                                 </div>
//                                 <div className="subscription-block__price"> 2499 &#8381; </div>
//                             </div>
//                             <div className="subscription-block__counter">
//                                 Истекает через: <span className="subscription-block__number"> 15 дней </span>
//                             </div>
//                             <div className="chat-item">
//                                 <div className="chat-item__inner">
//                                     <a className="back-link chat-item__link" href="subscription.html">
//                                         <img src={Arrow}
//                                             alt="Назад к предыдущей странице"/>
//                                     </a>
//                                     <div className="chat-item__elements">
//                                         <div className="chat-item__element user-el">
//                                             <div className="user-el__icon">
//                                                 <img src="assets/images/icons/user-icon.jpg" alt="Пользователь "/>
//                                             </div>
//                                             <div className="user-el__info">
//                                                 Aenean eget accumsan dui, vel tincidunt orci. In dignissim lacus
//                                                 sit
//                                                 amet finibus finibus. Proin quis tincidunt quam, vel molestie
//                                                 erat.
//                                                 Nullam auctor congue arcu nec dignissim.
//                                                 <span className="user-el__time"> Вчера 13:30 </span>
//                                             </div>
//                                         </div>
//                                         <div className="chat-item__element profi-el">
//                                             <div className="profi-el__info">
//                                                 Aenean eget accumsan dui, vel tincidunt orci. In dignissim lacus
//                                                 sit
//                                                 amet finibus finibus. Proin quis tincidunt quam, vel molestie
//                                                 erat.
//                                                 Nullam auctor congue arcu nec dignissim. Aenean eget accumsan
//                                                 dui, vel
//                                                 tincidunt orci. In dignissim lacus sit
//                                                 amet finibus finibus. Proin quis tincidunt quam, vel molestie
//                                                 erat.
//                                                 Nullam auctor congue arcu nec dignissim.
//                                                 <span className="profi-el__time">
//                                                     Вчера 13:30
//                                                     <div className="viewed-icon">

//                                                     </div>
//                                                 </span>
//                                             </div>
//                                             <div className="profi-el__icon">
//                                                 <img src={Prof} alt="Пользователь "/>
//                                             </div>
//                                         </div>
//                                         <div className="user-el__load">
//                                             <div className="user-el__icon">
//                                                 <img src={User} alt="Пользователь "/>
//                                             </div>
//                                             <div className="user-el__info">
//                                                 ...
//                                                 <span className="user-el__time"> Вчера 13:30 </span>
//                                             </div>
//                                         </div>
//                                         <div className="profi-el__load">
//                                             <div className="profi-el__info">
//                                                 ...
//                                                 <span className="profi-el__time"> Вчера 13:30 </span>
//                                             </div>
//                                             <div className="profi-el__icon">
//                                                 <img src={Prof} alt="Пользователь "/>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <form className="type-message">
//                                         <textarea className="type-message__text"></textarea>
//                                         <button className="type-message__btn" type="submit">
                                         
//                                         </button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="my-cases__secondary">
//                             <div className="cases__item case__item-first" style={{position: "relative"}}>
//                                 <h2 className="cases__title"> Случай №25 </h2>
//                                 <div className="cases__info">
//                                     <div className="cases__name cases__el">
//                                         фио:
//                                         <span className="cases__name-user" style={{border: "1px solid transparent", padding: "4px 8px"}}>Иванов Андрей Петрович</span>
//                                     </div>
//                                     <div className="cases__data data-get cases__el">
//                                         Дата забора материала:
//                                         <span className="cases__data-user" style={{border: "1px solid transparent", padding:" 4px 8px"}}>12.10.2022</span>
//                                     </div>
//                                     <div className="cases__localization data-localization cases__el">
//                                         Локализация:
//                                         <span className="cases__localization-info" style={{border: "1px solid transparent", padding: "4px 8px"}}></span>
//                                     </div>
//                                     <div className="cases__description data-description cases__el">
//                                         Описание:
//                                         <span className="cases__description-info" style={{border: "1px solid transparent", padding:"4px 8px"}}></span>
//                                     </div>
//                                     <button className="save-changes primary-btn">Сохранить изменеия</button>
//                                 </div>
                    
//                                 </div>
//                                 <button className="user-case__edit" id="user-case-btn">
                                   
//                                 </button>
//                             </div>
//                             <div className="cases">

//                         </div>
//                         <div className="add-case">
//                             <a className="add-case__link" target="_blank" href="addCase.html">
//                                 Добавить <br/> случай
//                             </a>
//                             <a className="add-case__link" href="#">
//                                 Архив <br/> случаев
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
      
    
//         </>
//     )
// }

// export default  MyMounthOne

import { useState, useEffect } from 'react';

function MyMounthOne() {
    const [caseData, setCaseData] = useState([]);
    const [caseIds, setCaseIds] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost/api/case/GetList')
        .then(response => response.json())
        .then(data => {
          setCaseData(data.data);
          setCaseIds(data.data.map(item => item.case_id));
        });
    }, []);
  
    const handleEdit = (index) => {
      const spans = Array.from(document.querySelectorAll(`.case-${index} span`));
      spans.forEach(span => {
        span.contentEditable = true;
        span.style.border = "1px solid grey";
      });
  
      window.addEventListener('click', (event) => {
        const isInside = event.target.closest(`.case-${index}`);
        if (!isInside) {
          spans.forEach(span => {
            span.contentEditable = false;
            span.style.border = "none";
          });
        }
      });
    }
  
    const handleSave = (index) => {
      const changeData = {
        patient_fullname: document.querySelector(`.case-${index} .cases__name-user`).innerHTML,
        localization: document.querySelector(`.case-${index} .cases__localization-info`).innerHTML,
        description: document.querySelector(`.case-${index} .cases__description-info`).innerHTML,
        material_taking_date: document.querySelector(`.case-${index} .cases__data-user`).innerHTML,
      };
      
      fetch(`http://localhost/api/case/Update?case_id=${caseIds[index]}`, {
        method: 'PUT',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(changeData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setCaseData(prevData => {
            const newData = [...prevData];
            newData[index] = data.data;
            return newData;
          });
        }
      });
    }
  
    return (
      <ul className="cases">
        {caseData && caseData.map((item, index) => (
          <li className={`cases__item case-${index}`} key={item.case_id}>
            <div className="cases__info">
              <span className="cases__name-user">{item.patient_fullname}</span>
              <span className="cases__data-user">{item.material_taking_date.replace(/T00:00:00/g, '')}</span>
              <span className="cases__localization-info">{item.localization}</span>
              <span className="cases__description-info">{item.description}</span>
            </div>
            <div className="cases__control">
              <button className="user-case__edit" onClick={() => handleEdit(index)}>Edit</button>
              <button className="save-changes" onClick={() => handleSave(index)}>Save changes</button>
              <button className="cases__control-link" case_id={item.case_id} onClick={() => localStorage.setItem("case_id", item.case_id)}>Link</button>
            </div>
          </li>
        ))}
      </ul>
    );
}

export default MyMounthOne;