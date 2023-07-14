 import '../../../App.css'
// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect,useRef  } from "react";
// import OpenSeadragon from "openseadragon";
// import {  url } from '../../url';
// import { Link } from 'react-router-dom';
// import { payKey } from './store';


// function CaseImage(){ 
//   const navigate = useNavigate();
//     const { id } = useParams();
//     const viewerRef = useRef(null);
//     const [imageSize, setImageSize] = useState({ height: 10, width: 10 });
//     const [material,setMaterial] = useState([])
//     const [material2,setMaterial2] = useState([])
// ///////////////////////////////////////////


// ////////////////////////////////////////////////////////////////////////////////////////
//     useEffect(() => {
//       fetch(url + `case/GetCaseInfo/?case_id=${payKey.data}`)
//       .then(response => { return response.json();})
//         .then(data => {
//           if (data && data.data) { 
//             setMaterial(data.data.slides);
//           }
//         });     
//     }, []);



// /////////////////////////////////////////////////////////////////////////////////////////   

// useEffect(() => {
//   fetch(url + `case/GetCaseInfo/?case_id=${payKey.data}`)
//   .then(response => { return response.json();})
//     .then(data => {
//       if (data && data.data) { 
//         setMaterial(data.data.slides);
//       }
//     });     
// }, []);


// //////////////////////////////////////////////////////////////////////////////////////////

    
// //////////////////////////////////////////////////////////////////////////////////////////
//     useEffect(() => {
//       async function fetchImageSize() {
//         try {
//           const response = await fetch(url + `case/slide/GetDimensions?file_id=${id}`);
  
//           if (response.status === 401) {
//             alert('Вы не авторизованы')
//             navigate('/loginPage')
//           }
  
//           const result = await response.json();
//           setImageSize(result.data);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//       fetchImageSize();
//     }, [id, navigate]);
 
//   useEffect(() => {

//    const viewer = OpenSeadragon({
//         id: 'openseadragon-viewer',
//         prefixUrl: '',  
//         wrapHorizontal: false,
//         showNavigator: true,
//         sequenceMode: true,
//         showRotationControl: true,
//         showFlipControl: true,
//         maxZoomLevel: Infinity,
//         tileSources: {
//             getTileUrl: function (level, x, y) {
//                 return  url + "case/slide/GetTile/" + id + "/" +
//                     level + "/" + x + "_" + y;
//               },
//           zoomPerScroll: 2,
//           overlap: 10,
//           height: imageSize.height,
//           width: imageSize.width,
//           tileSize: 256,
//           minLevel: 8,
//         },
//         zoomInButton: 'zoom-in',
//         zoomOutButton: 'zoom-out',
//         homeButton: 'home',
//         fullPageButton: 'full-page',
//         nextButton: 'next',
//         previousButton: 'previous',
//       });
      

//       viewerRef.current = viewer;
    

//     return () => {
//       if (viewerRef.current) {
//         viewerRef.current.destroy();
//       }
//     };
//   }, [imageSize, id]);
  
//   //////////////////////////////////////////////////////////////////////////////////////////
//     return(
// <div style={{display:"flex"}}>

//   <div id="openseadragon-buttons" className="Panel">

//       <div className='zoom'>
//       <button id="zoom-in"><img src="https://img.icons8.com/small/32/null/zoom-in.png"/></button>
//       <button id="zoom-out"><img src="https://img.icons8.com/small/32/null/zoom-out.png"/></button>
//       </div>
   
   
  
//           <div className='rotate'>
//              <button onClick={() => {
//                if (viewerRef.current) {
//                  viewerRef.current.viewport.setRotation(viewerRef.current.viewport.getRotation() - 90)
//                }
//              }}><img src="https://img.icons8.com/small/32/null/rotate-left.png"/>
//              </button>
//              <button onClick={() => {
//                if (viewerRef.current) {
//                  viewerRef.current.viewport.setRotation(viewerRef.current.viewport.getRotation() + 90)
//                }
//              }}><img src="https://img.icons8.com/small/32/null/rotate-right.png"/>
//           </button>
//         </div>
//           <button id="full-page"><img src="https://img.icons8.com/small/32/null/resize-four-directions.png"/></button>
//           <button id="home">  <img src="https://img.icons8.com/small/32/null/left2.png"/></button>
//                <button >
//         <Link to={`/case/${payKey.data}`}>
//         <img src="https://img.icons8.com/small/32/null/home.png"/>
//         </Link>
//       </button> 
//       </div>
      
//      <div 
//      id="openseadragon-viewer" 
//      className='openseadragon-container'
//       style={{ height: "100vh", width: '100%'}}>
//       </div>
    
//      <div className='panelWrapper'>      
//        <div className='Panel2'>
//         {material &&
//                 material.map((value) => (
//                   <li key={value.id}>
//                     <Link to={`/image/${value.id}`}>
//                       <img
//                       src={ url +`${value.thumbnail}`}
//                         alt="slide"
//                       />
//                     </Link>
//                    <div>
//                     <p className="cases__name cases__el"  style={{fontSize: '15px'}}>Название слайда: <span>{value.title}</span></p>
//                    </div>
//                   </li>
//             ))}
//       </div>
//               </div> </div>
//   )
// }

// export default CaseImage



import React, { useState, useEffect, useRef } from "react";
import OpenSeadragon from "openseadragon";
import { useParams, useNavigate, Link } from "react-router-dom";
import { url } from "../../url";
import { payKey } from './store';

function CaseImage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const viewerRef = useRef(null);
  const [imageSize, setImageSize] = useState({ height: 10, width: 10 });
  const [material, setMaterial] = useState([]);


  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [areaResult, setAreaResult] = useState(null);
  const [center, setCenter] = useState(null);
  const [radius, setRadius] = useState(null);
  
  const handleSelectArea = () => {
    // Сохраняем исходное значение перемещения
    const mouseNavEnabled = viewerRef.current.isMouseNavEnabled();
  
    // Отключаем перемещение слайда
    viewerRef.current.setMouseNavEnabled(false);
  
    // Сохраняем исходные значения масштабирования
    const zoomPerClick = viewerRef.current.zoomPerClick;
    const zoomPerScroll = viewerRef.current.zoomPerScroll;
  
    // Отключаем функцию зума
    viewerRef.current.zoomPerClick = 0;
    viewerRef.current.zoomPerScroll = 0;
  
    viewerRef.current.addHandler("canvas-click", handleCanvasClick);
  
    // После завершения выделения области
    const restoreZoomAndPan = () => {
      // Восстанавливаем значения масштабирования
      viewerRef.current.zoomPerClick = zoomPerClick;
      viewerRef.current.zoomPerScroll = zoomPerScroll;
  
      // Восстанавливаем перемещение слайда
      viewerRef.current.setMouseNavEnabled(mouseNavEnabled);
    };
  
    // Устанавливаем обработчик на событие изменения положения области выделения
    viewerRef.current.addHandler("selection-change", () => {
      if (!viewerRef.current.isMouseNavEnabled()) {
        viewerRef.current.setMouseNavEnabled(true);
        restoreZoomAndPan();
        viewerRef.current.removeHandler("selection-change", restoreZoomAndPan);
      }
    });
  };

  const handleCanvasClick = (event) => {
    const viewer = viewerRef.current;
  
    // Получаем координаты клика
    const position = viewer.viewport.pointFromPixel(event.position);
  
    if (!center) {
      // Устанавливаем центр выделенной области
      setCenter(position);
    } else if (!radius) {
      // Устанавливаем радиус выделенной области
      const distanceX = Math.abs(position.x - center.x);
      const distanceY = Math.abs(position.y - center.y);
      const radius = Math.max(distanceX, distanceY);
      setRadius(radius);
    }
  };
  const calculateArea = () => {
    if (!startPoint || !endPoint) {
      return; // Если startPoint или endPoint отсутствуют, выходим из функции
    }
  
    const viewer = viewerRef.current;
  
    // Получаем коэффициент масштабирования
    const zoom = viewer.viewport.getZoom(true);
  
    // Вычисляем размеры выделенной области
    const startX = startPoint.x / zoom;
    const startY = startPoint.y / zoom;
    const endX = endPoint.x / zoom;
    const endY = endPoint.y / zoom;
    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);
  
    // Вычисляем площадь
    const area = width * height;
  
    // Установите результат в состояние
    setAreaResult(area);
  };


  console.log(areaResult)
  useEffect(() => {
    fetch(url + `case/GetCaseInfo/?case_id=${payKey.data}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setMaterial(data.data.slides);
        }
        
      });
  }, []);

  useEffect(() => {
    async function fetchImageSize() {
      try {
        const response = await fetch(
          url + `case/slide/GetDimensions?file_id=${id}`
        );

        if (response.status === 401) {
          alert("Вы не авторизованы");
          navigate("/loginPage");
        }
        else if(response.status >= 500) {
          alert('Ошибка сервера')
          return;
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
      id: "openseadragon-viewer",
      prefixUrl: "",
      wrapHorizontal: false,
      showNavigator: true,
      sequenceMode: true,
      showRotationControl: true,
      showFlipControl: true,
      maxZoomLevel: Infinity,
      tileSources: {
        getTileUrl: function (level, x, y) {
          return (
            url +
            "case/slide/GetTile/" +
            id +
            "/" +
            level +
            "/" +
            x +
            "_" +
            y
          );
        },
        zoomPerScroll: 2,
        overlap: 10,
        height: imageSize.height,
        width: imageSize.width,
        tileSize: 256,
        minLevel: 8,
      },
      zoomInButton: "zoom-in",
      zoomOutButton: "zoom-out",
      homeButton: "home",
      fullPageButton: "full-page",
      nextButton: "next",
      previousButton: "previous",
    });

   
    viewerRef.current = viewer;

    return () => {
      if (viewerRef.current) {
       
        viewerRef.current.destroy();
      }
    };
  }, [imageSize, id]);

  return (
    <div style={{ display: "flex" }}>
      <div id="openseadragon-buttons" className="Panel">
        <div className="zoom">
          <button id="zoom-in">
            <img src="https://img.icons8.com/small/32/null/zoom-in.png" />
          </button>
          <button id="zoom-out">
            <img src="https://img.icons8.com/small/32/null/zoom-out.png" />
          </button>
        </div>
        <div className="rotate">
          <button
            onClick={() => {
              if (viewerRef.current) {
                viewerRef.current.viewport.setRotation(
                  viewerRef.current.viewport.getRotation() - 90
                );
              }
            }}
          >
                 
            <img src="https://img.icons8.com/small/32/null/rotate-left.png" />
          </button>
      
          <button
            onClick={() => {
              if (viewerRef.current) {
                viewerRef.current.viewport.setRotation(
                  viewerRef.current.viewport.getRotation() + 90
                );
              }
            }}
          >
            <img src="https://img.icons8.com/small/32/null/rotate-right.png" />
          </button>
        </div>
        <button id="full-page">
          <img src="https://img.icons8.com/small/32/null/resize-four-directions.png" />
        </button>
        <button id="home">
          <img src="https://img.icons8.com/small/32/null/left2.png" />
        </button>
        <button>
          <Link to={`/case/${payKey.data}`}>
            <img src="https://img.icons8.com/small/32/null/home.png" />
          </Link>
        </button>
        <button onClick={handleSelectArea}>Выделить область</button>
      </div>

      <div
        id="openseadragon-viewer"
        className="openseadragon-container"
        ref={viewerRef}
        style={{ height: "100vh", width: "100%" }}
      ></div>
 
      <div className="panelWrapper">
        <div className="Panel2">
          {material &&
            material.map((value) => (
              <li key={value.id}>
                <Link to={`/image/${value.id}`}>
                  <img src={url + `${value.thumbnail}`} alt="slide" />
                </Link>
                <div>
                  <p
                    className="cases__name cases__el"
                    style={{ fontSize: "15px" }}
                  >
                    Название слайда: <span>ded deqed  dewqde edqw edq ed dewqde edqwed edqwdd</span>
                  </p>
                </div>
              </li>
            ))}
             <p>Площадь: {areaResult}</p>
        </div>
      </div>
    </div>
  );
}

export default CaseImage;