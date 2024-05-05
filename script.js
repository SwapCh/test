const container= document.querySelector(".image-container");

const prev=document.querySelector(".prev")
const next=document.querySelector(".next");
prev.style.display="None";
next.style.display="None";

const headerPic=document.querySelector(".brain");
const pics=["al.jpg", "optimus.jpg" ,"clint.jpg", "arnold.jpg", "amit.jpg", "clark.jpg"];
let x=0;


function changeImage() {
    headerPic.src = "pics/"+pics[x]; // Set the source to the current image filename
    x = (x + 1) % pics.length; // Increment x and loop back to 0 when it reaches the end of the array
}

setInterval(changeImage, 1000);

// Call the changeImage function initially to set the initial image

/*
prev.addEventListener("click", ()=>{
    x=x+45;
    updateGallery();
});

next.addEventListener("click", ()=>{
    x=x-45;
    updateGallery();
});*/

function updateGallery(){
    x=x+45;
    container.style.transform= `perspective(1000px) rotateY(${x}deg)`
}

setInterval(updateGallery,2000);

