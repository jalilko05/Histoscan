import Prof from "../../assets/images/icons/profi-icon.jpg"
import { useState, useEffect } from "react"
import { Link, useNavigate} from "react-router-dom"
import { url } from "../../url";



function CaseOne(){
  const navigate = useNavigate();
    const [info, setInfo] = useState({ data: []});
    const [userData, setCaseData] = useState(null);
   

    const [available, setAvailable] = useState([])
    const [archi, setArchi] = useState([])



    const [isPostSuccess, setIsPostSuccess] = useState(false);
 //////////////////////////////////////////////////////////////////////
 ///Получить Список чужих случаев

 
 useEffect(() => {
  fetch( url + "case/GetAvailableCasesList?skip=0&limit=30")
  .then(response => {
      return response.json();   
  })
    .then((data) => setAvailable(data))
    .catch((error) => console.error(error));
}, []);
///////////////////////////////////////////////////////////////////
////Получить Случаев из архива

useEffect(() => {
  fetch( url + "case/GetArchivedCasesList")
  .then(response => {
    if (response.status === 401) {
      alert('Вы не авторизованы')
      navigate('/loginPage')
    }
    return response.json();
  })
    .then((data => setArchi(data)))
    .catch((error) => console.error(error));
}, []);


 //////////////////////////////////////////////////////////////////////
 //Изменение materials
 
  const [showInput, setShowInput] = useState(false);
  const handleButtonClick = () => {
    setShowInput(true);
  }; 

  const Close = () =>{
    setShowInput(false)
  }
//////////////////////////////////////////////////////////////////////
///Вкладки
const [activeTab, setActiveTab] = useState('tab1');

const handleTabClick = (tabName) => {
  setActiveTab(tabName);
};


  //////////////////////////////////////////////////////////////////////
  //Изменение профиля
  const [first_name, setName] = useState('');
  const [last_name, setLastName] = useState('')
  const [middle_name, setMidName] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const ChangeSubmit = (event) => {
    event.preventDefault();
    const data = {}; 
    if (first_name) data.first_name = first_name; 
    if (email) data.email = email;
    if (phone) data.phone = phone;
    if (last_name) data.last_name = last_name;
    if (middle_name) data.middle_name = middle_name;
  
    if (Object.keys(data).length === 0) {
      alert('Пожалуйста, заполните хотя бы одно поле');
      return;
    }
  
    fetch(url + 'user/UpdateSelf', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => { 
        return fetch(url + `user/GetSelf`)
        .then(response => {
                return response.json();   
        })
          .then((data) => setCaseData(data.data));
      })
      .catch(error => {
        console.error('Ошибка:', error)
      });
  
    setName('');
    setEmail('');
    setPhone('');
    setLastName('');
    setMidName('');
    setShowInput(false);
  };

  useEffect(() => {
    fetch( url + "user/GetSelf")
    .then(response => {

        return response.json();   
    })
      .then((data) => setCaseData(data.data))
      .catch((error) => console.error(error));
  }, []);
 

  
  useEffect(() => {
    fetch( url + "case/GetList")
    .then(response => {
      if (response.status === 401) {
       
      }
      return response.json();
    })
      .then((data => setInfo(data)))
      .catch((error) => console.error(error));
}, []);

//////////////////////////////////////////////////////////////////////
const getTabContent = (tabName) => {
  switch (tabName) {
    case 'tab1':
      return <div> 
         {info.data && info.data.map((value) => {  
        return( 
            <div className="user-case__secondary" style={{margin: '0px 20px 20px 20px'}}  key={value.case_number}>
                 <div className="user-case__description">
                 <div className="cases__info" >
                 <div className="cases__name cases__el">
                        Случай :
                        <span  className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.case_id}</span>
                    </div>
                    <div className="cases__name cases__el">
                        фио:
                        <span className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.patient_fullname}</span>
                    </div>    
                    <div className="cases__localization data-localization cases__el">
                        Локализация:
                        <span className="cases__localization-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.localization}</span>
                    </div>
                    <div className="cases__description data-description cases__el">
                        Описание:
                        <span className="cases__description-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.description}</span>
                    </div>
                    <Link to={`/case/${value.case_id}`}> <button   className="save-changes primary-btn">Открыть</button></Link>
                </div>
                </div>          
             </div>
                           );       
           })}</div>;
    case 'tab2':
      return <div>
          {available.map((value)=>{
            return(
            <div className="user-case__secondary" style={{margin: '0px 20px 20px 20px'}}  key={value.id}>
              <div className="user-case__description">
              <div className="cases__info" >
              <div className="cases__name cases__el">
                     Случай №:
                     <span  className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.case_number}</span>
                 </div>
                 <div className="cases__name cases__el">
                     фио:
                     <span className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.patient_fullname}</span>
                 </div>    
                 <div className="cases__localization data-localization cases__el">
                     Локализация:
                     <span className="cases__localization-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.localization}</span>
                 </div>
                 <div className="cases__description data-description cases__el">
                     Описание:
                     <span className="cases__description-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.description}</span>
                 </div>
                 <Link to={`/case/${value.case_id}`}> <button   className="save-changes primary-btn">Открыть</button></Link>
             </div>
             </div>          
          </div>
            )
          })}
        
      </div>;
    case 'tab3':
      return <div>
        {archi.map((value)=>{
          return(
            <div className="user-case__secondary" style={{margin: '0px 20px 20px 20px'}}  key={value.case_number}>
            <div className="user-case__description">
            <div className="cases__info" >
            <div className="cases__name cases__el">
                   Случай №:
                   <span  className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.case_number}</span>
               </div>
               <div className="cases__name cases__el">
                   фио :
                   <span className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.patient_fullname}</span>
               </div>   
               <div className="cases__name cases__el">
                   Название организации :
                   <span className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.organization_name}</span>
               </div>   
               <div className="cases__name cases__el">
                   Локализация :
                   <span className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.localization}</span>
               </div>   
               <div className="cases__localization data-localization cases__el">
                   Имя создателя:
                   <span className="cases__localization-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.creator_full_name}</span>
               </div>
               <div className="cases__description data-description cases__el">
                   Описание:
                   <span className="cases__description-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.description}</span>
               </div>
               <Link to={`/case/${value.id}`}> <button   className="save-changes primary-btn">Открыть</button></Link>
           </div>
           </div>          
        </div>
          )
        })}
      </div>;
    case 'tab4':
      return(
        <div>
         <div> 
         {info.data && info.data.map((value) => {  
        return( 
            <div className="user-case__secondary" style={{margin: '0px 20px 20px 20px'}}  key={value.case_number}>
                 <div className="user-case__description">
                 <div className="cases__info" >
                 <div className="cases__name cases__el">
                        Случай :
                        <span  className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.case_id}</span>
                    </div>
                    <div className="cases__name cases__el">
                        фио:
                        <span className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.patient_fullname}</span>
                    </div>    
                    <div className="cases__localization data-localization cases__el">
                        Локализация:
                        <span className="cases__localization-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.localization}</span>
                    </div>
                    <div className="cases__description data-description cases__el">
                        Описание:
                        <span className="cases__description-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.description}</span>
                    </div>
                    <Link to={`/case/${value.case_id}`}> <button   className="save-changes primary-btn">Открыть</button></Link>
                </div>
                </div>          
             </div>
                    );   
           })}
           </div>
           <div>
          {available.map((value)=>{
            return(
            <div className="user-case__secondary" style={{margin: '0px 20px 20px 20px'}}  key={value.id}>
              <div className="user-case__description">
              <div className="cases__info" >
              <div className="cases__name cases__el">
                     Случай №:
                     <span  className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.case_number}</span>
                 </div>
                 <div className="cases__name cases__el">
                     фио:
                     <span className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.patient_fullname}</span>
                 </div>    
                 <div className="cases__localization data-localization cases__el">
                     Локализация:
                     <span className="cases__localization-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.localization}</span>
                 </div>
                 <div className="cases__description data-description cases__el">
                     Описание:
                     <span className="cases__description-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.description}</span>
                 </div>
                 <Link to={`/case/${value.case_id}`}> <button   className="save-changes primary-btn">Открыть</button></Link>
             </div>
             </div>          
          </div>
            )
          })}
      </div>
           <div>
        {archi.map((value)=>{
          return(
            <div className="user-case__secondary" style={{margin: '0px 20px 20px 20px'}}  key={value.case_number}>
            <div className="user-case__description">
            <div className="cases__info" >
            <div className="cases__name cases__el">
                   Случай №:
                   <span  className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.case_number}</span>
               </div>
               <div className="cases__name cases__el">
                   фио :
                   <span className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.patient_fullname}</span>
               </div>   
               <div className="cases__name cases__el">
                   Название организации :
                   <span className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.organization_name}</span>
               </div>   
               <div className="cases__name cases__el">
                   Локализация :
                   <span className="cases__name-user" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.localization}</span>
               </div>   
               <div className="cases__localization data-localization cases__el">
                   Имя создателя:
                   <span className="cases__localization-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.creator_full_name}</span>
               </div>
               <div className="cases__description data-description cases__el">
                   Описание:
                   <span className="cases__description-info" style={{border: '1px solid transparent', padding:'4px 8px'}}>{value.description}</span>
               </div>
               <Link to={`/case/${value.id}`}> <button   className="save-changes primary-btn">Открыть</button></Link>
           </div>
           </div>          
        </div>
          )
        })}
      </div>
        </div>
      );
    default:
      return null;
  }
};

   return(
      <>
        <div className="main-content">
            <div className="container-primary">
                <div className="user-case">
                 <div className="user-case__inner">
                    <div className="user-case__primary">
                            <div className="profi">
                                <div className="profi__img">
                                    <img src={Prof} alt="Сидоров Антон Петрович"/>
                                    <button className="profi__btn" id="profi-btn"> Править данные </button>
                                </div>
                                <div className="profi__info">
                                {userData && (
                                   <div>
                                     <p  className="cases__name cases__el">Имя: {userData.first_name}</p>
                                     <p  className="cases__name cases__el">Отчество: {userData.middle_name}</p>
                                     <p  className="cases__name cases__el">Фамилия: {userData.last_name}</p>
                                     <p  className="cases__name cases__el">Должность: {userData.position}</p>
                                     <p  className="cases__name cases__el">Email: {userData.email}</p>
                                     <p  className="cases__name cases__el">Телефон: {userData.phone}</p>
                                   </div>
                                  )}
                                  {showInput ?
                      <div className="changeInp">
                      <input
                        type="text"
                        placeholder="Имя"
                        value={first_name}
                        onChange={event =>  setName(event.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Отчество"
                        value={middle_name}
                        onChange={event => setMidName(event.target.value)}
                      />   
                      <input value={last_name}
                        onChange={event =>  setLastName(event.target.value)} placeholder="Фамилия" type="text" />
                      <input value={email}
                        onChange={event =>  setEmail(event.target.value)}  type="email" placeholder="Email" />
                      <input value={phone}
                        onChange={event =>  setPhone(event.target.value)} type="phone"  placeholder="Телефон" />
                    
                      <button onClick={ChangeSubmit}>Отправить</button> <button onClick={Close}>Отменить</button>
                    </div> :
                     <button onClick={handleButtonClick}>Изменить данные</button> 
                   } 
                                </div>
                            </div>            
                        </div>  
  
                    <div className="my-cases__secondary">
                    <div className="TabCont">
                         <div className="tab">
                           <button
                               className={`tab-btn ${activeTab === 'tab1' ? 'active' : ''}`}
                               onClick={() => handleTabClick('tab1')}>
                               Мои
                             </button>
                           </div>
                           <div className="tab">
                             <button
                               className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}
                               onClick={() => handleTabClick('tab2')}>
                               Чужие
                             </button>
                           </div>
                           <div className="tab">
                             <button
                               className={`tab-btn ${activeTab === 'tab3' ? 'active' : ''}`}
                               onClick={() => handleTabClick('tab3')} >
                             Архив
                             </button>
                           </div>
                           <div className="tab">
                             <button
                               className={`tab-btn ${activeTab === 'tab4' ? 'active' : ''}`}
                               onClick={() => handleTabClick('tab4')} >
                               Все
                             </button>
                           </div>
                    </div>
        
                      <div>
                          <div className="tab-content">
                            {getTabContent(activeTab)}
                         </div>
                      </div>
                           </div>
                          
                   
                        <div className="user-case__block">
                            <div className="add-case">
                                <Link  to='/addCase' className="add-case__link" >
                                    Добавить <br/> случай
                                </Link>
 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            </>
        )
}

export default CaseOne



