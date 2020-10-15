initAboutUsImageSlider();
initMegaMenu();
slideShowInit();

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


function initMegaMenu(){
    let navigationHolder = document.querySelector(".header_bar  .navigation");
    let dropDownLinks = document.querySelectorAll(".navigation .primary-menu .menu-item.drop-down");
    dropDownLinks.forEach((link)=>{
        link.addEventListener("click",(ev)=>{
            link.classList.toggle("show-drop");
        })
    })
    let hamb_btn = document.querySelector("#hamb_btn");
    hamb_btn.addEventListener("click",(btn)=>{
        navigationHolder.classList.toggle("show");
    })
}

function slideShowInit(){
    let counter = 2;
    document.getElementById("radio1").checked = true;
    setInterval(()=>{
        let radio = document.getElementById("radio"+counter);
        radio.checked = true;
        counter = (counter + 1) % 3;
    },5000)
}