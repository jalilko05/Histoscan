import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../url";


function AddCase(){
     const [text, setText] = useState('') 
     const [gender, setValue] = useState('' );

   
     const handleChange = (event) => {
        const value = event.target.value;
        setFormData((formData) => ({
          ...formData,
          patient_gender: value,
        }));
        setValue(value);
      };


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        case_number:"",
        organization_name:"",
        patient_fullname: "",
        localization: "",
        patient_gender: '',
        description: "",
    });
  
    function handleInputChange(event) {
        event.preventDefault()
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }


    function Send(event) {
        event.preventDefault();
        fetch(url  + `case/New`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        .then(function (response) {
                if (response.status === 422) {
                  setText('Заполните поля корректно')
                }
                else if (response.status === 401) {
                    alert('Вы не авторизованы')
                    navigate('/loginPage')
                  }
                else if(response.status >= 500) {
                  alert('Ошибка сервера')
                return;
                  }
                if (response.status === 201) {
                  navigate('/CaseOne');
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
      }
    return(
        <>
        <div className="main-content">
            <div className="container-primary">
                <div className="add-el"> 
                    <h2 className="add-el__title secondary-title">
                      
                        Добавить случай <span className="add-el__number"></span>
                    </h2>
                    <div className="add-el__inner">
                        <div className="add-el__primary">
                            <form className="add-el__form" id="add-form" onSubmit={Send}>
                                <div className="card">
                                    <div className="card__inner">   
                                        <label className="card__label"> Локализация </label>
                                        <input
                                        maxLength="200"
                                        value={formData.localization}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Абв"
                                        name="localization"
                                        className="card__input card-pass"/> 
                                        <label className="card__label">Номер случая</label>
                                        <input  maxLength="100"
                                        className="card__input card-pass" type="text" name="case_number" required value={formData.case_number} onChange={handleInputChange} />

                                        <label className="card__label">Название организации</label>
                                        <input      maxLength="200"
                                          className="card__input card-pass" type="text" name="organization_name" required value={formData.organization_name} onChange={handleInputChange} />
            
                                        <label className="card__label"> <span className="card__label-info">фио</span> пациента
                                        </label>
                                        <input
                                        maxLength="100"
                                        value={formData.patient_fullname}
                                        onChange={handleInputChange}
                                        required type="text"
                                        placeholder="Абв"
                                        name="patient_fullname"
                                        className="card__input card-pass"/>

                                      <div  className="cases__name cases__el" style={{margin: '30px 0'}}>
                                      <label className="card__label"> <span className="card__label-info">пол</span> пациента
                                        </label>

                                        <input checked={gender === 'М'}   onChange={handleChange} type="radio" id="contactChoice1"
                                          name="contact" value="М"/>
                                          <label style={{textDecoration: 'none', fontSize: '20px'}} htmlFor="contactChoice1">Мужской</label>

                                          <input  checked={gender === 'Ж'}  onChange={handleChange} type="radio" id="contactChoice2"
                                          name="contact" value="Ж"/>
                                          <label style={{textDecoration: 'none', fontSize: '20px'}} htmlFor="contactChoice2">Женский</label>        

                                        </div>          
                                      
                                 
                                    </div>
                                 
                                    <div className="material-comment">
                                        <label className="card__label"> Описание </label>
                                        <textarea maxLength="1000"  value={formData.description}
                                         onChange={handleInputChange} name="description" placeholder="Абв" className="add-el__comment"></textarea>
                                    </div>

                                    <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
                                     <p style={{fontSize: '20px', color: 'red', alignItems: 'center'}}>{text}</p>   
                                    </div>

                                    <button className="add-el__btn primary-btn">Отправить</button>
                                </div>
                            </form>
                         
                        </div>
                        
                        <div className="add-el__secondary">
                            <div className="add-case">
                                <a className="add-case__link" target="_blank" >
                                    Добавить <br/> случай
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

export default AddCase