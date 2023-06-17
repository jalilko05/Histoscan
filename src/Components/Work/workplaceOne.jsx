import '../assets/css/caseItems.css'
import '../assets/source/openDragon.css'
import Prof from '../assets/images/icons/profi-icon.jpg'
function WorkOne(){
    return(
        <>
                
        <div className="main-content">
            <div className="container-primary">
                <div className="work-place">
                    <form className="search-bar">
                        <input placeholder="Поиск" className="search-bar__input"/>
                    </form>
                    <h1 className="primary-title loginPrimary__title"> Рабочее место </h1>
                    <div className="work-place__inner">
                        <div className="work-place__primary">
                            <div className="work-place__user">
                                <div className="profi">
                                    <div className="profi__img">
                                        <img src={Prof} alt="Сидоров Антон Петрович"/>
                                        <button className="profi__btn" id="profi-btn"> Править данные </button>
                                    </div>
                                    <div className="profi__info">
                                        <h2 className="profi__title">
                                            Сидоров Антон Петрович
                                            <span className="profi__subtitle"> Специалист </span>
                                        </h2>
                                    </div>
                                </div>
                                <div className="controls-btns">
                                    <a className="primary-btn" target="_blank" href="myCasesOneMounth.html"> Мои случаи </a>
                                    <a className="primary-btn" target="_blank" href="addCase.html"> Новый случай </a>
                                </div>
                            </div>
                            
                            <div className="cases">
                            </div>
                            <div className="cases__item case__item-first" style={{position: "relative"}}>
                                <button className="user-case__edit" id="user-case-btn">
                                  DA
                                </button>
                                <h2 className="cases__title"> Случай №25 </h2>
                                <div className="cases__info">
                                    <div class="cases__data data-load cases__el">
                                        Name:
                                        <span className="cases__data-user cases__el-title"
                                            style={{border: "1px solid transparent", padding: "4px 8px"}}> </span>
                                    </div>
                                    <div className="cases__description data-description cases__el">
                                        description:
                                        <span className="cases__description-info cases__el-description"
                                            style={{border: "1px solid transparent", padding: "4px 8px"}}></span>
                                    </div>
                                    <button className="save-changes primary-btn">Сохранить изменеия</button>
                                </div>
                                <div className="dragon" id="openseadragon1" style={{width: "600px", height: "400px"}}>
                                </div>
                           
                            </div>
                        </div>
                        <div className="work-place__secondary">
                            <div className="add-case">
                                <a className="add-case__link" target="_blank" href="addCase.html">
                                    Добавить <br/> случай
                                </a>
                                <a className="add-case__link" href="#">
                                    Архив <br/> случаев
                                </a>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>

        <script src="../assets/source/openseadragon.min.js"></script>

     <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        </>
    )
}

export default WorkOne