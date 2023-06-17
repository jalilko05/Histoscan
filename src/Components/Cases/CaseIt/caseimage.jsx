import '../../../App.css'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect,useRef  } from "react";
import OpenSeadragon from "openseadragon";
import {  url } from '../../url';
import { Link } from 'react-router-dom';
import { payKey } from './store';


function CaseImage(){ 
  const navigate = useNavigate();
    const { id } = useParams();
    const viewerRef = useRef(null);
    const [imageSize, setImageSize] = useState({ height: 10, width: 10 });
    const [material,setMaterial] = useState([])
    const [material2,setMaterial2] = useState([])
///////////////////////////////////////////

const [selectedArea, setSelectedArea] = useState(null);

const handleMouseDown = (event) => {
  const rect = event.target.getBoundingClientRect();
  const startX = event.clientX - rect.left;
  const startY = event.clientY - rect.top;

  setSelectedArea({ startX, startY, endX: startX, endY: startY });
};

const handleMouseUp = (event) => {
  const rect = event.target.getBoundingClientRect();
  const endX = event.clientX - rect.left;
  const endY = event.clientY - rect.top;

  setSelectedArea((prevArea) => ({
    ...prevArea,
    endX,
    endY,
  }));
};


//////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
      fetch(url + `case/GetCaseInfo/?case_id=${payKey.data}`)
      .then(response => { return response.json();})
        .then(data => {
          if (data && data.data) { 
            setMaterial(data.data.slides);
          }
        });     
    }, []);

  // const slideMaterials = material && material.filter((material) => material.type === "slides");

/////////////////////////////////////////////////////////////////////////////////////////   

useEffect(() => {
  fetch(url + `case/GetCaseInfo/?case_id=${payKey.data}`)
  .then(response => { return response.json();})
    .then(data => {
      if (data && data.data) { 
        setMaterial(data.data.slides);
      }
    });     
}, []);

// const slideMaterials2 = material && material.filter((material) => material.type === "label");

//////////////////////////////////////////////////////////////////////////////////////////

    
//////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
      async function fetchImageSize() {
        try {
          const response = await fetch(url + `case/slide/GetDimensions?file_id=${id}`);
  
          if (response.status === 401) {
            alert('Вы не авторизованы')
            navigate('/loginPage')
          }
  
          const result = await response.json();
          setImageSize(result.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchImageSize();
    }, [id, navigate]);
 
  useEffect(() => {

   const viewer = OpenSeadragon({
        id: 'openseadragon-viewer',
        prefixUrl: '',  
        wrapHorizontal: false,
        showNavigator: true,
        sequenceMode: true,
        showRotationControl: true,
        showFlipControl: true,
        maxZoomLevel: Infinity,
        tileSources: {
            getTileUrl: function (level, x, y) {
                return  url + "case/slide/GetTile/" + id + "/" +
                    level + "/" + x + "_" + y;
              },
          zoomPerScroll: 2,
          overlap: 10,
          height: imageSize.height,
          width: imageSize.width,
          tileSize: 256,
          minLevel: 8,
        },
        zoomInButton: 'zoom-in',
        zoomOutButton: 'zoom-out',
        homeButton: 'home',
        fullPageButton: 'full-page',
        nextButton: 'next',
        previousButton: 'previous',
      });
      

      viewerRef.current = viewer;
    

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
      }
    };
  }, [imageSize, id]);
  
  //////////////////////////////////////////////////////////////////////////////////////////
    return(
<div style={{display:"flex"}}>

  <div id="openseadragon-buttons" className="Panel">

      <div className='zoom'>
      <button id="zoom-in"><img src="https://img.icons8.com/small/32/null/zoom-in.png"/></button>
      <button id="zoom-out"><img src="https://img.icons8.com/small/32/null/zoom-out.png"/></button>
      </div>
   
   
  
          <div className='rotate'>
             <button onClick={() => {
               if (viewerRef.current) {
                 viewerRef.current.viewport.setRotation(viewerRef.current.viewport.getRotation() - 90)
               }
             }}><img src="https://img.icons8.com/small/32/null/rotate-left.png"/>
             </button>
             <button onClick={() => {
               if (viewerRef.current) {
                 viewerRef.current.viewport.setRotation(viewerRef.current.viewport.getRotation() + 90)
               }
             }}><img src="https://img.icons8.com/small/32/null/rotate-right.png"/>
          </button>
        </div>
          <button id="full-page"><img src="https://img.icons8.com/small/32/null/resize-four-directions.png"/></button>
          <button id="home">  <img src="https://img.icons8.com/small/32/null/left2.png"/></button>
               <button >
        <Link to={`/case/${payKey.data}`}>
        <img src="https://img.icons8.com/small/32/null/home.png"/>
        </Link>
      </button> 
      </div>
      
     <div 
     id="openseadragon-viewer" 
     className='openseadragon-container'
      style={{ height: "100vh", width: '100%'}}>
      </div>
    
     <div className='panelWrapper'>      
       <div className='Panel2'>
        {material &&
                material.map((value) => (
                  <li key={value.id}>
                    <Link to={`/image/${value.id}`}>
                      <img
                      src={ url +`${value.thumbnail}`}
                        alt="slide"
                      />
                    </Link>
                   <div>
                    <p className="cases__name cases__el"  style={{fontSize: '15px'}}>Название слайда: <span>{value.title}</span></p>
                   </div>
                  </li>
            ))}
      </div>
              </div> </div>
  )
}

export default CaseImage



