function startUpload() {
  document.getElementById("progress-bar-container").style.display = "block";

  var fileInput = document.getElementById("file-upload");
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append("file-upload", file);

  var xhr = new XMLHttpRequest();
  xhr.upload.addEventListener("progress", uploadInProgress, false);
  xhr.addEventListener("load", uploadComplete, false);
  xhr.open("POST", "http://localhost:8080/upload.php");
  xhr.send(formData);
}

function uploadInProgress(event) {
  console.log(event);
  if (event.lengthComputable) {
    var percentComplete = Math.round((event.loaded / event.total) * 100);
    console.log( `${percentComplete} %`);
    document.getElementById("progress-bar").style.width = `${percentComplete}%`;
    document.getElementById("progress-bar-text").innerHTML = `${percentComplete}% uploaded`;
  } else {
    document.getElementById("progress-bar-text").innerHTML = 'Uploading...';
  }
}

function uploadComplete(event) {
  document.getElementById("progress-bar-text").innerHTML = '100% uploaded';
}

// Reset progress bar upon change of input on file
const changeUploadFile = () => {
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('progress-bar-container').style.display =  'none';
}
