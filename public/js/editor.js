function addCustomStyle() {
    var styleTag = document.createElement("style");
    styleTag.innerHTML = "#cke_49 { display: none !important; }";
    document.head.appendChild(styleTag);
}

// We need to turn off the automatic editor creation first.
CKEDITOR.disableAutoInline = false;
CKEDITOR.replace('editor', {
    extraPlugins: 'sourcedialog',
    removePlugins: 'sourcearea',
    removeButtons: 'PasteFromWord'
});          

addCustomStyle();
// questionMarkSign.style.color="red !important";