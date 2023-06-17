import { useState } from "react"
import { Link } from "react-router-dom"



function Main(){
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
      setIsHovered(true);
    }
  
    function handleMouseLeave() {
      setIsHovered(false);
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
                            <Link className="entry__link second-link" to="/loginPage">
                                <h2 className="entry__link-title">
                                    Портал для личного пользования
                                </h2>
                                <div className="entry__link-icon">
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        </>
    )
}

export default Main