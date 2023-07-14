import { useState, useEffect } from "react"
import { Link, useNavigate} from "react-router-dom"
import { url } from "../url";



function Main(){
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate()
    function handleMouseEnter() {
      setIsHovered(true);
    }
  
    function handleMouseLeave() {
      setIsHovered(false);
    }


    function GetInfo() {        
    fetch( url + "case/GetList")
    .then(response => {
      if (response.status === 401) {
        navigate('/loginPage')
      }
      else if(response.status >= 500) {
        alert('Ошибка сервера')
        return;
      }
      else(
        navigate('/CaseOne')
      )
      return response.json();
    })
      
      .catch((error) => console.error(error));
    }
    
    return(
        <>
        <div className="main-content">
            <div className="container-primary">
                <div className="entry">
                    <h1 className="primary-title entry__title"> Где продолжим? </h1>
                    <div className="entry__inner">
                        <div className={`entry__item first-item`}     onMouseEnter={handleMouseEnter}
                           onMouseLeave={handleMouseLeave}>  
                            <a className="entry__link first-link" href="#">
                                <h2 className="entry__link-title">
                                    Портал для лаборатории
                                </h2>
                                <div className="entry__link-icon">  

                                </div>
                            </a>
                        </div>
                        <div className={`entry__item second-item ${isHovered ? "entry-is-active" : ""}`}>
                            <a style={{cursor: 'pointer'}} className="entry__link second-link" onClick={GetInfo}>
                                <h2 className="entry__link-title">
                                    Портал для личного пользования
                                </h2>
                                <div className="entry__link-icon">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        </>
    )
}

export default Main