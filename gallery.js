window.addEventListener('load', renderGallery);
// document.addEventListener("DOMContentLoaded",  renderGallery, false);
 function renderGallery() {
    //Check File API support
    if (window.File && window.FileList && window.FileReader) {

        let filesInput = document.getElementById("files");
        let filesAll  = [];
        filesInput.addEventListener("change", function(event) {
            a = Array.from(event.target.files);
            console.log("event.target.files yra "+a.length);
            for (let i = 0; i < a.length; i++) {       
                //čia parašai protinga gaudymą, kad neleistų antrą kartą įkelti to pačio paveiksliuko if kažkas         
                filesAll.push(a[i]);
            }
           
            
            console.log(filesAll.length);

         
            const output = document.getElementById("result");
        
            for (let i = 0; i < filesAll.length; i++) {
          
                let file = files[i];

                if (filesAll[i].size < 1048576) {

                    if (filesAll[i].type.match('image')) {

                        const picReader = new FileReader();

                        picReader.addEventListener("load", function(event) {

                            const picFile = event.target;
                            const div = document.createElement("div");
                            div.className = "galleryDiv";
                            div.innerHTML = `<img class="uploadeGallery" src=" ${picFile.result} "
                              alt=" "/>
                              <input type="text" id="${filesAll[i].name}+alt" name="altImage">
                              <div class="deleteImd" id="${filesAll[i].name}" >Pasalinti<div/>`;

                            output.insertBefore(div, null);
                            const altText = document.getElementById(filesAll[i].name + '+alt');

                            const imgDeleteBtn = document.getElementById(filesAll[i].name);

                            imgDeleteBtn.onclick = function() {
                              
                                 filesAll.splice(i, 1);
                                console.log( filesAll);
                                div.innerHTML = `<div></div>`;
                               console.log(typeof files);
                            }

const uploadeImg = document.getElementById("submitImg");
uploadeImg.addEventListener('click', function() {
    let altTextExport = [];
    let altTextValue = altText.value;
 //   altTextExport.push(altTextValue);
   // sendImageData(file, i, altTextValue);
    filesInput.value = null;
    altText.value = "";
    // window.location.reload();
});
});
picReader.readAsDataURL(filesAll[i]);
} else {
const currentDiv = document.getElementById("message");
const newContent = document.createTextNode("Tai nera paveikslelio tipo formatas");
currentDiv.appendChild(newContent);
}
} else {
const currentDiv = document.getElementById("message");
const newContent = document.createTextNode("Paveikslelio dydis virsija 1MB, rekomneduojamas dydis yra iki 200kb");
currentDiv.appendChild(newContent);
}
}
// console.log(filesAll.length);
});
} else {
console.log("Your browser does not support File API");
}
}