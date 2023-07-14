import { useFetcher, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { url } from "../../url";
import {payKey} from './store'
import Slider from 'react-slick';


const CaseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [caseData, setCaseData] = useState(0);
  const [material, setMaterial] = useState([]);
  const [doc, setDoc] = useState([])
  const [email, setEmail] = useState(null)
  const [isPostSuccess, setIsPostSuccess] = useState(false);
/////////////////////////////////////////////////////////////////
  useEffect(()=>{
    payKey.setData(id);
  })
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
//Добавление materials 
  const [filename, setFileName] = useState("")
  const [file, setFile] = useState(null);
  const [description1, setDescription1] = useState("");
//////////////////////////////////////////////////////////////////////    
//Показ форм 
const [show, setShow] = useState(true)
const ChangeFirst = () =>{
  setShow(false)
}
//////////////////////////////////////////////////////////////////////    
//Вкладки
const [activeTab, setActiveTab] = useState('tab1');
const handleTabClick = (tabName) => {
  setActiveTab(tabName);
};
//////////////////////////////////////////////////////////////////////    
  useEffect(() => {
    fetch(url + `case/GetCaseInfo?case_id=${id}`)
    .then(response => {
      if (response.status === 401) {
        alert('Вы не авторизованы')
        navigate('/loginPage')
      }
      return response.json();
    })
      .then(data => {
        if (data && data.data) { 
          setMaterial(data.data.slides);
        }
      });     
  }, []);

  useEffect(() => {
    fetch(url + `case/GetCaseInfo?case_id=${id}`)
    .then(response => {
      if (response.status === 401) {
       
      }
      return response.json();
      })
     .then(data => {
       if (data && data.data) { 
         setDoc(data.data.documents);
      }
      });     
  }, []);


  useEffect(() => {
    fetch(url + `case/GetCaseInfo?case_id=${id}`)
    .then(response => {
      if (response.status === 401) {
        alert('Вы не авторизованы')
        navigate('/loginPage')
      }
      return response.json();
    })
      .then((data) => setCaseData(data.data));
  }, []);
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
const [patient_fullname, setName] = useState('');
const [localization, setLocal] = useState('')
const [description, setDescription] = useState('')
const [patient_gender, setSelectedValue] = useState('');
const [research, setResearch] = useState('')
const [text, setText] = useState('Файл не выбран')
const [text2, setText2] = useState('Документ не выбран')



const ChangeSubmit = (event) => {
  event.preventDefault();
  const data = {}; // создаем объект для отправки на сервер
  if (patient_fullname) data.patient_fullname = patient_fullname; // если значение имени определено, добавляем его в объект
  if (localization) data.localization = localization;
  if (description) data.description = description;
  if (patient_gender) data.patient_gender = patient_gender;

  if (Object.keys(data).length === 0) {
    alert('Пожалуйста, заполните хотя бы одно поле');
    return;
  }
  fetch(url + `case/Update?case_id=${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => {
      fetch(url + `case/GetCaseInfo/?case_id=${id}`)
      .then(response => {
        if (response.status === 401) {
          navigate('/loginPage')
        }
        return response.json();
      })
        .then((data) => setCaseData(data.data));
    })
    .catch(error => {
       console.error('Ошибка:', error)
    });

  setName('');
  setLocal('');
  setDescription('');
  setSelectedValue('')
  setShow(true);

};
//////////////////////////////////////////////////////////////////////
///user/GetList GET запрос
const [userList, setUserList] = useState([])

useEffect(()=>{
  fetch( url + 'user/GetList')
  .then((response) => response.json())
  .then(data => setUserList(data))
},[])

const filteredUsers = userList.filter(user => user.email !== email);

//////////////////////////////////////////////////////////////////////
///GetSelf

useEffect(() => {
  fetch( url + "user/GetSelf")
  .then(response => {
    if(response.status >= 500) {
      alert('Ошибка сервера')
      return;
    }
      return response.json();   
  })
    .then((data) => setEmail(data.data.email))                    
    .catch((error) => console.error(error));
}, []);


//////////////////////////////////////////////////////////////////////
///POST слайдов
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setText(event.target.value.slice(12))
  };
  const handleDescriptionChange = (event) => {
    setDescription1(event.target.value);
  };  
  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };
  const handleResearchCnahge = (event) =>{
  setResearch(event.target.value)
   }
  const [progress, setProgress] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", filename);
    formData.append("description", description1);
    formData.append("case_id", id);
    formData.append("research", research)
  
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url + "case/slide/Add");
  
    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setProgress(percentComplete.toFixed(2));
      }
    });
  
    xhr.onload = () => {
      if (xhr.status === 422) {
        alert("Данный формат не поддерживается или не является слайдом");
        setProgress(0);
        setDescription1("");
        setFileName("");
        setText("");
        setFile(null);
        setProgress(0);
        setResearch('')
      } 
      else if (xhr.status === 401) {
        alert("Вы не авторизованы");
        navigate("/loginPage");
       }
       else{
        setProgress(0);
        setDescription1("");
        setFileName("");
        setText("");
        setFile(null);
        setProgress(0);
        setResearch('')
        alert("Файл успешно добавлен");
        fetch(url + `case/GetCaseInfo/?case_id=${id}`)
        .then(response => {
          return response.json();
        })
          .then(data => {
            if (data && data.data) { 
              setMaterial(data.data.slides);
            }
          });  
       }
    };
  
    xhr.onerror = (error) => {
      console.error("Ошибка:", error);
      setProgress(0);
    };
  
    xhr.send(formData);
  };

/////////////////////////////////////////////////////////////////////
//POST документов
const [file2, setFile2] = useState(null)
const [filename2, setFileName2] = useState("")
const [description2, setDescription2] = useState("");

const handleFileChange2 = (event) => {
  ///Для изменения названия документа
  setText2(event.target.value.slice(12))
  setFile2(event.target.files[0]);
};
const handleDescriptionChange2 = (event) => {
  setDescription2(event.target.value);
};
const handleFileNameChange2 = (event) => {
  setFileName2(event.target.value);
};

const handleSubmit2= async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("file", file2);
  formData.append("title", filename2);
  formData.append("description", description2);
  formData.append("case_id", id);
 

  const xhr = new XMLHttpRequest();
  xhr.open("POST", url + "document/AddDocument");



  xhr.onload = () => {
    if (xhr.status === 422) {
      alert('Данный формат не поддерживается') 
      setDescription2("");
      setFileName2("");
      setText2("");
      setFile2(null);
    } 
    else if (xhr.status === 401) {
      alert("Вы не авторизованы");
      navigate("/loginPage");
     }
     else{
      setDescription2("");
      setFileName2("");
      setText2("");
      setFile2(null);
      alert("Документ успешно добавлен");
      fetch(url + `case/GetCaseInfo/?case_id=${id}`)
      .then(response => {
        return response.json();
      })
        .then(data => {
          if (data && data.data) { 
            setDoc(data.data.documents);
          }
        });  
     }
  };

  xhr.onerror = (error) => {
    console.error("Ошибка:", error);
  
  };

  xhr.send(formData);
};


///////////////////////////////////////////////////////////////////
/////Поделиться

const [selectedUsers, setSelectedUsers] = useState([]);

const handleCheckboxChange = (userId) => {
  if (selectedUsers.includes(userId)) {
    setSelectedUsers(selectedUsers.filter(id => id !== userId));
  } else {
    setSelectedUsers([...selectedUsers, userId]);
  }
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  if(selectedUsers.length == 0){
    alert('Выберите пользователя')
  } 
  else(
    fetch( url + `case/SetAccess?case_id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedUsers),
    })
    .then(function(res){
      alert('Доступ к случаю успешно изменен')
      setSelectedUsers([])
    })
  )
};
////////////////////////////////////////////////////////////////////
//Отправить в архив

function SendArch(e){
  e.preventDefault();

  const dataToSend = {
    case_id: id,
  };

  fetch(url + `case/GoToArchive/?case_id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'aplication/json',
    },
    body: JSON.stringify(dataToSend)
  })
  .then(response => {
    if (response.ok) {
     alert('Случай успешно отправлен в архив!')
    } else {
      console.error('Ошибка при отправке данных на сервер');
    }
  })
  .catch(error => {
    console.error('Произошла ошибка', error);
  });
}
///////////////////////////////////////////////////////////////////
//Вкладки


const getTabContent = (tabName) => {
  switch (tabName) {
    case 'tab1':
      return(
        <div style={{border: '1px solid black', padding: '60px'}}>
                  <form className="case-load"  onSubmit={handleSubmit}>
                                    <div style={{width:'300px'}} className="case-load__file">
                                        <div style={{height: '200px', display: 'block'}} className="medicine__file">                   
                                           
                                            <div className="medicine__file-add">
                                                <label className="load-images__label add-file  ">
                                                    Добавить файл
                                                    <input disabled={caseData.status === 'в архиве'? true : false}  style={{height: '200px',cursor: 'pointer'}}  accept=".svs"
                                                   id="file"
                                                    className="load-images__input  file-input" multiple
                                                    type="file"
                                                    onChange={handleFileChange}
                                                     name="file" placeholder=""/>
                                                </label>
                                                
                                            </div>
                                         
                                        </div>
                                        <p>Файл: {text}</p>
                                        <p>{progress == 0 ? '' : 'Прогресс: ' + progress + '%' }</p>
                                        <button disabled={caseData.status === 'в архиве'? true : false} className="primary-btn btn-form-first" style={{marginTop: '40px', width: '200px'}}> Отправить </button>
                                    </div>
                                    <div className="case-load__text">
                                        <input disabled={caseData.status === 'в архиве'? true : false}
                                        className="case-load__title"
                                        maxLength="50"
                                        value={filename}
                                        required
                                        style={{height: '50px'}}
                                        onChange={handleFileNameChange}       
                                        placeholder="Введите название файла"></input>

                                        <textarea disabled={caseData.status === 'в архиве'? true : false}
                                        onChange={handleDescriptionChange}
                                        value={description1}
                                        maxLength="900"
                                        id="load-title"
                                        style={{height: '230px'}}
                                        name="description"
                                        className="case-load__description"
                                        placeholder="Введите описание файла">
                                        </textarea>
                                        <textarea   maxLength="90" disabled={caseData.status === 'в архиве'? true : false} onChange={handleResearchCnahge} value={research}      
                                        name="description"
                                        className="case-load__description"
                                        placeholder="Исследования">
                                        </textarea>
                              </div>
                   </form> 
           </div>
      );
    case 'tab2':
       return(
        <div style={{border: '1px solid black', padding: '60px'}}>
                  <form className="case-load"  onSubmit={handleSubmit2}>
                                    <div style={{width:'300px'}} className="case-load__file">
                                        <div style={{height: '200px', display: 'block'}} className="medicine__file">                   

                                            <div className="medicine__file-add">
                                                <label className="load-images__label add-file">
                                                    Добавить документ
                                                    <input  style={{height: '200px',cursor: 'pointer'}}  accept=".jpg, .pdf, .doc"  
                                                   id="file"
                                                    className="load-images__input  file-input" multiple
                                                    type="file"
                                                    onChange={handleFileChange2}
                                                    name="file"/>
                                                </label>
                                            </div>
                                        </div>
                                        <p>Документ: {text2}</p>
                                        <button  className="primary-btn btn-form-first" style={{marginTop: '40px', width: '200px'}}> Отправить </button>
                                    </div>
                                    <div className="case-load__text">
                                        <input
                                        className="case-load__title"
                                        maxLength="50"
                                        value={filename2}
                                        required
                                        style={{height: '50px'}}
                                        onChange={handleFileNameChange2}       
                                        placeholder="Введите название документа">   
                                        </input>
                                        <textarea
                                        onChange={handleDescriptionChange2}
                                        value={description2}
                                        maxLength="900"
                                        id="load-title"
                                        style={{height: '230px'}}
                                        name="description"
                                        className="case-load__description"
                                        placeholder="Введите описание документа">
                                        </textarea>     
                              </div>
                   </form> 
           </div>
      );
    case 'tab3': 
      return(
      <div style={{border: '1px solid black', padding: '20px'}}>
            <div  style={{width: '707px', height: '400px', flexDirection: 'column', overflow:'auto'}}>
              {filteredUsers && filteredUsers.map((value)=>{
                return(
                      <div key={value.id} style={{border: '1px solid black', display: 'flex', justifyContent: 'space-between', margin:'10px 0', padding: '10px', alignItems: 'center'}}>
                        <p style={{margin: '1px'}}> <span>{value.last_name}</span> <span>{value.first_name}</span> <span>{value.middle_name}</span> </p>
                        <input
                          style={{transform:'scale(2)', cursor: 'pointer'}}
                          type="checkbox"
                          value={value.id}
                          checked={selectedUsers.includes(value.id)}
                          onChange={() => handleCheckboxChange(value.id)}
                        />
                      </div>         
                )
              })}
            </div>
            <div style={{height: '10px', padding: '10px', display: 'flex', justifyContent: 'space-between', margin: '20px 0'}}>
              <button></button>
              <button onClick={handleFormSubmit} style={{width: '200px',height:'40px', border: 'none', color:'white', background:'#3c9bb8'}}>Поделиться</button>
             </div>
        </div>
      )
      case 'tab4':
       return(
        <div style={{ border: '1px solid black', padding: '20px'}} >
        <div  style={{width: '707px', height: '400px', flexDirection: 'column', overflow:'auto'}}>
          {/* {caseData.status === 'в работе' ? <p>У вас нет доступа</p> :  */}
          <button onClick={SendArch} style={{width: '300px',height:'40px', border: 'none', color:'white', background:'#3c9bb8'}}>Отправить случай в архив</button>
         </div>
        </div>
       )
    default:
      return null;
  }
};


//////////////////////////////////////////////////////////////////////

  return (
    <div className="main-content">
      <div className="container-primary">
        <div className="cont">
          <div className="caseDetail">
            <div className="caseH" style={{width: '700px'}}>              
              <p className="cases__name cases__el"> Случай: {caseData?.case_number} </p> 
              <p className="cases__name cases__el">Имя пациента:{show ? <span> 
                {caseData.patient_fullname}</span> :
               <input maxLength="100" type="text"  value={patient_fullname}
               onChange={event =>  setName(event.target.value)}/>}  
              </p>
              <p className="cases__name cases__el">Пол пациента: {show ? <span>  {caseData.patient_gender}</span> :   
               <span>
                <input checked={patient_gender === 'М'}   onChange={handleChange} type="radio" id="contactChoice1"
                name="contact" value="М"/>
               <label style={{textDecoration: 'none', fontSize: '15px'}} htmlFor="contactChoice1">Мужской</label>
               <input  checked={patient_gender === 'Ж'}  onChange={handleChange} type="radio" id="contactChoice1"
                name="contact" value="Ж"/>
               <label style={{textDecoration: 'none', fontSize: '15px'}} htmlFor="contactChoice1">Женский</label>
             </span> } 
             </p>

              <p className="cases__name cases__el">Направление: {show ? <span>{caseData.localization}</span> : 
              <input maxLength="200" type="text" value={localization}
              onChange={event =>  setLocal(event.target.value)} />}
              </p>
             
              <div style={{display: 'flex', flexDirection: 'column'}} className="cases__name cases__el"> <p>Описание:</p>{show ? 
              <div style={{ width: '700px',height: '200px', overflow: 'auto', fontSize: '15px'}}> 
                {caseData.description}
                </div> :
               <textarea maxLength="1000" style={{resize: 'none', height:'200px'}} type="text"  value={description}
               onChange={event =>  setDescription(event.target.value)}></textarea>}  
              </div>

              {/* <p className="cases__name cases__el">Дата сдачи материала:{show ? <span>{caseData.created_at}</span> : <input type="text"/>} </p> */}
            <div style={{display: 'flex', fontSize:'5px'}}>
            <p style={{textDecoration: 'none',  fontSize:'18px', cursor: 'pointer'}} onClick={ChangeFirst}>{show? 'Изменить' :''}</p> 
            {show ? '' : 
           <div style={{display: 'flex', fontSize:'5px'}}>
             
              <p   style={{textDecoration: 'none', fontSize:'18px', marginRight: '20px', cursor: 'pointer'}} onClick={() => setShow(true)}>Отменить</p>
               <p  style={{textDecoration: 'none', fontSize:'18px', cursor: 'pointer'}} onClick={ChangeSubmit}> Отправить</p>
            
           </div>
           } 
            </div>
            </div>

                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <div style={{display: 'flex'}}>
                        <div className="tab" style={{marginRight: '10px'}}>
                           <button 
                               className={`tab-btn ${activeTab === 'tab1' ? 'active' : ''}`}
                               onClick={() => handleTabClick('tab1')}>
                               Слайд
                             </button>
                           </div>
                           <div className="tab" style={{marginRight: '10px'}}>
                             <button disabled={caseData.status === 'в архиве'? true : false}
                               className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}
                               onClick={() => handleTabClick('tab2')}>
                               Документы
                             </button>
                           </div>
                           <div className="tab" style={{marginRight: '10px'}}>
                             <button disabled={caseData.status === 'в архиве'? true : false}
                               className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}
                               onClick={() => handleTabClick('tab3')}>
                               Поделиться
                             </button>
                           </div>
                           <div className="tab" style={{marginRight: '10px'}}>
                             <button disabled={caseData.status === 'в архиве'? true : false}
                               className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}
                               onClick={() => handleTabClick('tab4')}>
                               В Архив
                             </button>
                           </div>
                        </div>
                           <div className="tab-content">
                            {getTabContent(activeTab)}
                         </div>
                    </div>
           
      </div>

          <div>
            <h3 className="cases__name cases__el" style={{fontSize:'25px', fontWeight:'600s'}}>Слайды:</h3>
             <ul style={{display: 'flex', flexWrap: 'wrap'}}>
              {material &&
                material.map((value) => (
                  <li key={value.id} style={{
                  border: '1px solid black',   
                  display:'flex', 
                  width:'460px',
                  padding: '20px', 
                  flexDirection: 'column',
                  margin: '20px 50px 20px 0px'}}>
                  
                   <div style={{overflow:'auto', width: '430px', height: '350px', marginBottom:'20px'}}>
                    <Link to={`/image/${value.id}`}>
                      <img
                        src={ url + `${value.label}`}
                        alt="slide" style={{width: '400px', height: "350px", border: '1px solid black'}}
                      />
                     </Link>

                     <Link to={`/image/${value.id}`}>
                     <img src={url + `${value.thumbnail}`} alt="thumbnail" style={{width: '400px', height: "340px",border: '1px solid black'}}/>
                     </Link>
               
                   </div>
                   <div style={{overflow: 'hidden'}}> 
                     <p className="cases__name cases__el"> <span style={{fontSize: '25px', fontWeight:'600'}}> Название:</span> {value.description}</p>
                     <span className="cases__name cases__el" style={{fontSize:'25px', overflow: 'auto',fontWeight:'600' }}>Описание:</span>
                      <div style={{overflow: 'auto', height: '300px'}}>
                      <p className="cases__name cases__el"> <span>{value.description ? value.description : 'Пусто'}</span></p>
                     </div>
                   </div>
                  </li>
                ))}
            </ul>
           </div>   

          <div>
            <h3 className="cases__name cases__el" style={{fontSize:'20px', fontWeight:'600s'}}>Document:</h3>
            <ul style={{display: 'flex', flexWrap: 'wrap'}}>
              {doc &&
                doc.map((value) => (
                  <li className="desCont"  key={value.id} style={{ 
                  border: '1px solid black',   
                  display:'flex', 
                  width:'460px',
                  padding: '20px', 
                  flexDirection: 'column',
                  margin: '20px 50px 20px 0px'}}>
                         <a style={{width: '400px', height: '350px', border: '1px solid black', marginBottom:'20px', background: '#3c9bb8', color:'white', fontFamily:'verdana'}} href={url + `${value.url}`} className="Atag"><span>Посмотреть документ</span></a>
                      <div style={{overflow:'hidden'}}>
                         <p className="cases__name cases__el"> <span style={{fontSize: '25px'}}>Название:</span> <span style={{fontSize: '16px'}}>{value.title}</span></p>
                         <span  className="cases__name cases__el" style={{fontSize:'25px'}}>Описание:</span> 
                          <div style={{overflow: 'auto', height: '300px'}}>
                           <p className="cases__name cases__el"><span style={{fontSize: '16px'}}>{value.description ? value.description : `Пусто`}</span></p>
                          </div>
                      </div>
                  </li>
                ))}
            </ul>
         </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;



