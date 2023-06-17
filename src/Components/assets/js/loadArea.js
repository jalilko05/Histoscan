"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ************************ Drag and drop ***************** //
var dropArea = document.getElementById("drop-area");
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
  dropArea.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
});
['dragenter', 'dragover'].forEach(function (eventName) {
  dropArea.addEventListener(eventName, highlight, false);
});
['dragleave', 'drop'].forEach(function (eventName) {
  dropArea.addEventListener(eventName, unhighlight, false);
});
dropArea.addEventListener('drop', handleDrop, false);

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function highlight(e) {
  dropArea.classList.add('highlight');
}

function unhighlight(e) {
  dropArea.classList.remove('active');
}

function handleDrop(e) {
  var dt = e.dataTransfer;
  var files = dt.files;
  handleFiles(files);
} // let uploadProgress = []
// let progressBar = document.getElementById('progress-bar')
// function initializeProgress(numFiles) {
//     progressBar.value = 0
//     uploadProgress = []
//     for (let i = numFiles; i > 0; i--) {
//         uploadProgress.push(0)
//     }
// }
// function updateProgress(fileNumber, percent) {
//     uploadProgress[fileNumber] = percent
//     let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
//     progressBar.value = total
// }


function handleFiles(files) {
  files = _toConsumableArray(files); // initializeProgress(files.length)

  files.forEach(uploadFile);
  files.forEach(previewFile);
}

function previewFile(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = function () {
    var img = document.createElement('img');
    img.src = reader.result;
    document.getElementById('gallery').appendChild(img);
  };
}

function uploadFile(file) {
  var formData = new FormData();
  formData.append('upload_preset', 'ujpu6gyk');
  formData.append('file', file);
}