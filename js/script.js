initAboutUsImageSlider();



function initAboutUsImageSlider(){
    let active_image = document.querySelector("#active__image img");
    let image_selecter = document.getElementById("image__selecter");
    document.getElementsByTagName
    image_selecter.addEventListener("click",function(ev){
        if(ev.target.className === "image_link"){
            let imgsrc = ev.target.getElementsByTagName("img")[0].src;
            console.log(imgsrc);
            active_image.parentElement.classList.add("trans");
            setTimeout(()=>{
                active_image.src = imgsrc;
                active_image.parentElement.classList.remove("trans");      
            },200)
        }
    });
}