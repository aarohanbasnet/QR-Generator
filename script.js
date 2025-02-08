let imgBox = document.getElementById("imgBox");
let  qrImage = document.getElementById("qrImage");
let  qrText = document.getElementById("qrText");

function generateQR(){
    
if(qrText.value.length > 0){

    let qrURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
    
    //Set the image source only after it's fully loaded preventing from UI freeze while loading
    qrImage.onload = function(){
        imgBox.classList.add("show-img");
    };
    qrImage.src = qrURL;
}else{
    qrText.classList.add('error');
    console.log(qrText.classList);
    setTimeout(()=>{
        qrText.classList.remove('error');
    },600);
}
}