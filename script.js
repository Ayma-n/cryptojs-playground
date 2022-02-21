const uploadForm = document.getElementById("upload-file");

uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const filesObject = document.getElementById("file-id");
    const uploadedFile = filesObject.files[0];
    console.log(uploadedFile);
})