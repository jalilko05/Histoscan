


let caseList = document.querySelector('.cases');
let caseListExample = document.querySelector('.cases__item');

let case_get_id = "";

fetch('http://localhost/api/material/GetSelfList', {
  method: 'GET'
}).then(function (res) {
  return res.json();
}).then(function (data) {

  console.log(data);
  let arrId = [];

  for (let f = 0; f <= data.length - 1; f++) {

    var dupNode = caseListExample.cloneNode(true);
    dupNode.classList.remove('case__item-first');
    arrId.push(data[f].id);
    caseList.append(dupNode);

  }

  console.log(arrId);

  let dragon = document.querySelectorAll('#openseadragon1');

  case_get_id = data[0].id;

  let title = document.querySelectorAll('.cases__el-title');
  let description = document.querySelectorAll('.cases__el-description');

  for (let i = 0; i < data.length; i++) {

    dragon[i].setAttribute('id', data[i].id)

    description[i].innerHTML = data[i].description;
    title[i].innerHTML = data[i].title;

    var viewer = OpenSeadragon({

      id: `${data[i].id}`,
      prefixUrl: "/assets/images/openseadragon/images/",
      navigatorSizeRatio: 0.25,
      wrapHorizontal: false,

      showRotationControl: true,
      showFlipControl: true,

      // nextButton: "next",
      // previousButton: "previous",

      showNavigator: true,

      sequenceMode: true,

      // collectionMode: true,
      // collectionRows: 1,
      // collectionTileSize: 1024,
      // collectionTileMargin: 256,

      tileSources: [
        {
          zoomPerScroll: 2,
          overlap: 10,
          height: 2967,
          width: 2220,
          tileSize: 256,
          minLevel: 1,
          getTileUrl: function (level, x, y) {
            return `http://localhost/api/case/slide/GetTile/${data[i].id}/` +
              level + "/" + x + "_" + y;
          }
        },
        {
          zoomPerScroll: 2,
          overlap: 10,
          height: 2967,
          width: 2220,
          tileSize: 256,
          minLevel: 1,
          getTileUrl: function (level, x, y) {
            return `http://localhost/api/case/slide/GetTile/${data[i].id}/` +
              level + "/" + x + "_" + y;
          }
        },
        {
          zoomPerScroll: 2,
          overlap: 10,
          height: 2967,
          width: 2220,
          tileSize: 256,
          minLevel: 1,
          getTileUrl: function (level, x, y) {
            return `http://localhost/api/case/slide/GetTile/${data[i].id}/` +
              level + "/" + x + "_" + y;
          }
        },
      ]
    });

  }

  let slidesDragon = document.querySelectorAll(`${data[i].id}`);

  slidesDragon.forEach(element => {
    element.focus();
  });

  // viewer.addHandler("page", function (data) {
  //   document.getElementById(`${data[i].id}`).innerHTML = (data.page + 1) + " of 5";
  // });

  // let nextBtn = document.querySelectorAll('.next-btn');
  // let dragons = document.querySelectorAll('.dragon');

  // for (let i = 0; i <= nextBtn.length; i++) {
  //   nextBtn[i].addEventListener('click', () => {
  //     console.log('hgh');
  //     console.log(dragons[i].id);
  //     dragons[i].id = arrId[i + 1];
  //     console.log(dragons[i].id);
  //   })
  // }

  localStorage.setItem('id_case', case_get_id);

  let caseInfo = document.querySelectorAll('.cases__info');
  let userCaseBtn = document.querySelectorAll('.user-case__edit');
  let saveBtn = document.querySelectorAll('.save-changes');

  for (let g = 0; g <= userCaseBtn.length; g++) {
    userCaseBtn[g].addEventListener('click', () => {

      let span = Array.from(caseInfo[g].getElementsByTagName("span"));

      span.forEach(element => {
        element.setAttribute('contentEditable', true);
        element.style.border = "1px solid grey";
      });

      for (let g = 0; g <= saveBtn.length; g++) {

        saveBtn[g].addEventListener('click', () => {

          let case_title = document.querySelectorAll('.cases__el-title');
          let case_description = document.querySelectorAll('.cases__el-description');

          var changeData = {
            title: case_title[g].innerHTML,
            description: case_description[g].innerHTML,
          };

          fetch(`http://localhost/api/material/Update?material_id=${arrId[g]}`, {
            method: 'PUT',
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(changeData)
          })
            .then(el => {
              console.log(el.ok);

              if (el.ok === true) {

                fetch('http://localhost/api/material/GetSelfList', {
                  method: 'GET'
                }).then(function (res) {
                  return res.json();
                }).then(function (data) {


                })
              }

            })

        });

      }

    });
  }

  window.addEventListener('click', e => {
    const target = e.target



    for (let g = 0; g <= caseInfo.length; g++) {

      if (!target.closest('.cases__info') && !target.closest('.user-case__edit')) {

        console.log('hihihi');
        let span = Array.from(caseInfo[g].getElementsByTagName("span"));

        span.forEach(element => {
          element.setAttribute('contentEditable', false);
          element.style.border = "1px solid transparent";
        });

      }

    }
  });

})


// viewer

let body = document.querySelector('.body');

let slideViewer = document.getElementsByClassName('fullpage');
let bottomLayer = document.querySelector('.bottom-panel');

let overlay1 = document.getElementById('overlay1');

var target = document.querySelector('.body');

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {

    if (slideViewer) {

      console.log('exist');

      body.style.position = 'relative !important';
      bottomLayer.style.display = 'block !important';

    }

  });
});

var config = { attributes: true, childList: true, characterData: true };

observer.observe(target, config);

// If you like my work, please consider supporting it at https://www.patreon.com/iangilman

// Don't forget to grab the JavaScript dependencies from the Codepen settings panel.

// var duomo = {
//   Image: {
//     xmlns: "http://schemas.microsoft.com/deepzoom/2008",
//     Url: "/assets/images/openslide/",
//     Format: "svs",
//     Overlap: "10",
//     TileSize: "256",
//     Size: {
//       Width: "2220",
//       Height: "2967"
//     }
//   }
// };

// var tileSources = [];

// for (var i = 0; i < 5; i++) {
//   tileSources.push(duomo);
// }

// var imageIndex = 0;

// var viewer_1 = OpenSeadragon({
//   id: "seadragon-viewer",
//   prefixUrl: "/assets/images/openseadragon/images/",
//   collectionMode: true,
//   collectionRows: 1,
//   tileSources: tileSources
// });

// function goToIndex(index) {
//   imageIndex = index;
//   var tiledImage = viewer_1.world.getItemAt(imageIndex);
//   var bounds = tiledImage.getBounds();
//   viewer_1.viewport.fitBounds(bounds);
// }

// function next() {
//   goToIndex((imageIndex + 1) % viewer_1.world.getItemCount());
// }

// function previous() {
//   goToIndex(imageIndex ? imageIndex - 1 : viewer_1.world.getItemCount() - 1);
// }

// function printIndex() {
//   $('.output').text('Image ' + imageIndex);
// }

// function updateIndex() {
//   var viewportBounds = viewer_1.viewport.getBounds();
//   var count = viewer_1.world.getItemCount();
//   var i, tiledImage, imageBounds, intersection, area, imageArea, visibleFactor, centerDistance, best;
//   for (i = 0; i < count; i++) {
//     tiledImage = viewer_1.world.getItemAt(i);
//     imageBounds = tiledImage.getBounds();
//     intersection = viewportBounds.intersection(imageBounds);
//     if (intersection) {
//       area = intersection.width * intersection.height;
//       imageArea = imageBounds.width * imageBounds.height;
//       visibleFactor = area / imageArea;
//       centerDistance = imageBounds.getCenter().distanceTo(viewportBounds.getCenter());
//       if (!best || visibleFactor > best.visibleFactor || (visibleFactor === best.visibleFactor && centerDistance < best.centerDistance)) {
//         best = {
//           visibleFactor: visibleFactor,
//           centerDistance: centerDistance,
//           index: i
//         };
//       }
//     }
//   }

//   if (best && best.index !== imageIndex) {
//     imageIndex = best.index;
//     printIndex();
//   }
// }

// viewer_1.addHandler('zoom', updateIndex);
// viewer_1.addHandler('pan', updateIndex);

// $('.next-btn').on('click', next);
// $('.previous-btn').on('click', previous);

// viewer_1.addHandler('open', function () {
//   goToIndex(0);
// });