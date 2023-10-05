const dataDiv = document.querySelectorAll(".ck-editor__editable")[0];
function setValueToTextArea(){
    const dataTextArea = document.getElementById("editor");
    dataTextArea.value = dataDiv.innerHTML;
}
dataDiv.addEventListener("onChang")
